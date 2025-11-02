import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      role: string;
    } & Session['user'];
  }
  interface User {
    role?: string;
  }
  interface JWT {
    id?: string;
    role?: string;
  }
}
