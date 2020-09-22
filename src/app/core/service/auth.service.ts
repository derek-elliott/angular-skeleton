import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { User, Role } from '@app/schema/user';
import { Observable, of } from 'rxjs';
import {first, map, switchMap} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  userData: Observable<User>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, public router: Router) {
    this.userData = afAuth.authState.pipe(
        switchMap(user => {
          if (user) {
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          } else {
            return of(null);
          }
        })
    )
  }

  async loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user)
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    console.log(user);
    const data = {
      uid: user.uid,
      email: user.email
    }
    return userRef.set(data, {merge: true});
  }

  getAuthUser(): Promise<any> {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  getUserData(uid: string): Observable<any> {
    return this.afs.doc(`users/${uid}`).valueChanges()
  }

  async logout() {
    await this.afAuth.signOut();
    this.router.navigate(['/']);
  }
}
