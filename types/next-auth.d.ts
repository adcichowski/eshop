import "next-auth";
declare module "next-auth" {
  interface User {
    readonly id: string;
    readonly email: string;
  }
  interface Session {
    readonly user: User;
  }
}
