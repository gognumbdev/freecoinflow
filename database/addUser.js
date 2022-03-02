const dbConnect = require("./dbConnect")
const {UserModel} = require("./dbModel/User")

const createUser = async () => {
    // Connect to our MongoDB Database
    dbConnect()
    
    try{
        await UserModel.create([
            {
                username: 'Gognumbdev',
                publicAddress:"0x5593572e312C4F8Fc2fe924907624B39D1d6B65c",
                promptpayID:"0956727039",
                image:'https://lh3.googleusercontent.com/ogw/ADea4I40OTFSVDYMHohSaobJahOpB0r8krQoeaKE-SIq=s32-c-mo',
                description:"You can pay me THB by Mobile banking application which can process on Thailand."
            },
            {
                username: 'iinstagramm',
                publicAddress:"0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
                promptpayID:"0982682982",
                image:'https://lh3.https://cdn.britannica.com/65/162465-050-9CDA9BC9/Alps-Switzerland.jpg.com/ogw/ADea4I40OTFSVDYMHohSaobJahOpB0r8krQoeaKE-SIq=s32-c-mo',
                description:"You can pay me THB by Mobile banking application which can process on Thailand."
            },
    
        ])
        console.log("Create User Success !");
    }catch (error) {
        console.log(error);
    }
}

createUser();




