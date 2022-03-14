module.exports = {
  reactStrictMode: true,
  env:{
    mongoDB_uri:"mongodb+srv://P2PExchangeAdmin:chGE0zr86MvYagdv@cryptoexchange.wcws5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  },
  image:{
    domains: ['/public/image'],
  },
  domainName:"https://neoflow.vercel.app/",
  api: {
    bodyParser: {
        sizeLimit: '4mb' 
    }
  },
}
