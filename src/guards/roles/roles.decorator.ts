import { SetMetadata } from "@nestjs/common";
//setMetadata is used to define custom metadata for the roles
//ROLES_KEY is a constant that will be used to identify the roles metadata
//Roles is a decorator function that takes an array of roles and sets the metadata
// it can be used to protect routes based on user roles
//it is used in conjunction with guards to check if the user has the required roles to access a route
//this is a common pattern in NestJS for role-based access control
//this is custom decorator to define roles for route handlers
//it allows you to specify roles that are required to access a particular route
//this decorator can be used in conjunction with guards to enforce role-based access control


export const ROLES_KEY = 'roles';
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);