import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import TwitterProvider from "next-auth/providers/twitter"
import GitHubProvider from "next-auth/providers/github"

export default NextAuth({
    // Configure one or more authentication providers
    providers: [

    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID, 
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    FacebookProvider({    
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET  
    }),
    TwitterProvider({    
        clientId: process.env.TWITTER_ID,    
        clientSecret: process.env.TWITTER_SECRET  
    }),
    GitHubProvider({    
        clientId: process.env.GITHUB_CLIENT_ID,    
        clientSecret: process.env.GITHUB_CLIENT_SECRET  
    })
]
})