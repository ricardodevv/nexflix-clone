import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  jwt: {
    encryption: true,
  },
  secret: process.env.secret,
  callbacks: {
    async jwt(token, account) {
      if (account?.accesToken) {
        token.accesToken = account.accesToken;
      }
      return token;
    },
    redirect: async (url, baseUrl) => {
      console.log(url);
      if (url === "/login") {
        return Promise.resolve("/");
      }
      return Promise.resolve("/");
    },
  },
});
