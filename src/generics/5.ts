export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

type RoleCheck = Record<UserRole, string>

const RoleDescription: RoleCheck = {
  admin: 'Admin User',
  editor: 'Editor User',
  guest: 'Guest User',
}
