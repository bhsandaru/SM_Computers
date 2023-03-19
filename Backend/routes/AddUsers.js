const router = require("express").Router();
let AddUser = require('../models/AddUser');






//code for create function
router.route("/adduser").post((request,response) =>
   
        {
           
            const UserName =request.body.UserName;
            const UserPassword = request.body.UserPassword;
            

            const newAddUser = new AddUser(
                {
                    UserName,
                    UserPassword
                }
            )

            newAddUser.save().then(()=>{
                response.json(" New User is Added.")
            }).catch((err) => {
                console.log(err);
            })
           

           
        }
)

//search function
router.route("/searchuser").get((req,res)=>{
    AddUser.find().then((addusers)=>{
        res.json(addusers)
    }).catch((err) => {
        console.log(err);
    })
})

//update function---itemid(wthat the id is going to be searched)
router.route("/updateuser/:UserName").put(async(req,res) =>{
    //assign auto given mongodb table id to variable userId
    let UserName = req.params.UserName;
    const{UserPassword} = req.body;

        const updateuser ={
            UserName,
            UserPassword
        }
        
        //check whether there is an item with given itemid
        const update = await AddUser.findOneAndUpdate({ UserName } ,updateuser)
        .then(()=>{
            res.status(200).send({status: "UserPassword is Updated"})
        }).catch((err)=>{
            console.log(err);
            res.status(500).send({status:"Error with updating userdata"});
        })
       


})


//Delete an item
router.route("/deleteuser/:UserName").delete(async(req,res)=>{
    let UserName = req.params.UserName;

    await AddUser.findOneAndDelete({ UserName })
    .then (()=>{
        res.status(200).send({status: "User is Deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with deleting userdata"});
    })

}) 




//get only one users detail
router.route("/getuser/:UserName").get(async(req,res) => {
    let UserName = req.params.UserName;
    const item = await AddUser.findOne({ UserName})
    .then((item)=>{
        res.status(200).send({status: "User Fetched", item})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with get data", error : err.message});
    })
}
)


//login
router.route("/login").post(async (req,res)=>{


    console.log(req.body);
    
    const UserName = req.body.UserName;
    const UserPassword = req.body.UserPassword;


    

    const result = await AddUser.findOne({UserName:UserName,UserPassword:UserPassword});
    if (result) {
        res.status(200).json("success");
    } else {
        res.status(400).json("invalid");
        
    }
})

module.exports = router; // meka dala nane :-(hehe  mnh one newei abeetha tama hehe kiuwe ekada etakota aula ow  hari athi neara video eke update delete kaali tibbe namn ma oka insert krna eken hithala ghuwe