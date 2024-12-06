import { User, Role, Permission } from '@prisma/client'

export interface AuthUser extends Omit<User, 'password'> {
  roles: Array<{
    id: number;
    name: string;
    permissions: Array<string>;
  }>;
  roleNames: string[];
  permissionNames: string[];
}

export interface LoginResponse {
  token: string;
  user: AuthUser;
}

export interface LoginForm {
  email: string;
  password: string;
}
