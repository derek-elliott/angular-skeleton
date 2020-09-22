export interface User {
  uid: number;
  email: string;
  role?: Role;
}

export enum Role {
  User = 'User',
  Admin = 'Admin'
}
