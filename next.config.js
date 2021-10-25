module.exports = {
    images: {
        domains: ['links.papareact.com', 
        'fakestoreapi.com'
        ] //sets the domain which images come from
    },
    //dont put secret keys or private keys here in nextjs.
    env:{
        stripe_public_key : process.env.STRIPE_PUBLIC_KEY
    }
    
}