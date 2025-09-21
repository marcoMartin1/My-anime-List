
import NextAuth from "next-auth";
import githubAuth from "next-auth/providers/github"

const authoption = {
    //provider ya kek telkom dkk  anggep handler ini hp dan punya slot ke provider. pake array karena takut providernya banyak misal google , github , linkedin , dll
providers: [
    githubAuth({
        clientId : process.env.GITHUB_CLIENT,
        clientSecret: process.env.GITHUB_SECRET
    })
],
secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authoption)

export {handler as GET, handler as    POST}

//kita pengen ngekoneksiin hp kita (handler) punya kartu (provider apa saja )