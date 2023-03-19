
const router = require("express").Router();
let AddItem = require('../models/AddItem');




// router.route('/add').get((req,res)=>{
//     res.status(200)
// }
// )


//code for create function
router.route("/additem").post((request,response) =>
   
        {
           
            const ItemCode =request.body.ItemCode;
            const ItemType = request.body.ItemType;
            const ItemName = request.body.ItemName;
            const ItemPrice = Number(request.body.ItemPrice);
            const Availability = request.body.Availability;
            const ItemImage = request.body.ItemImage;

            const newAddItem = new AddItem(
                {
                    ItemCode,
                    ItemType,
                    ItemName,
                    ItemPrice,
                    Availability,
                    ItemImage
                }
            )

            newAddItem.save().then(()=>{
                response.json(" New Item is Added.")
            }).catch((err) => {
                console.log(err);
            })
           

           
        }
)

//search function
router.route("/search").get((req,res)=>{
    AddItem.find().then((additems)=>{
        res.json(additems)
    }).catch((err) => {
        console.log(err);
    })
})

//update function---itemid(wthat the id is going to be searched)
router.route("/updateitem/:ItemCode").put(async(req,res) =>{
    //assign auto given mongodb table id to variable userId
    let ItemCode = req.params.ItemCode;
    const{
        
        ItemType,
        ItemName,
        ItemPrice,
        Availability} = req.body;

        const updateitem ={
            ItemCode,
            ItemType,
            ItemName,
            ItemPrice,
            Availability
        }
        
        //check whether there is an item with given itemid
        const update = await AddItem.findOneAndUpdate({ ItemCode } ,updateitem)
        .then(()=>{
            res.status(200).send({status: "Item is Updated"})
        }).catch((err)=>{
            console.log(err);
            res.status(500).send({status:"Error with updating data"});
        })
       


})


//Delete an item
router.route("/deleteitem/:ItemCode").delete(async(req,res)=>{
    let ItemCode = req.params.ItemCode;

    await AddItem.findOneAndDelete({ ItemCode })
    .then (()=>{
        res.status(200).send({status: "Item is Deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with deleting data"});
    })

}) 




//get only one users detail
router.route("/get/:ItemCode").get(async(req, res) => {
    try {
    const { ItemCode } = req.params;
    const item = await AddItem.findOne({ ItemCode });
    if (!item) {
    return res.status(404).send({ status: "Item not found" });
    }
    res.status(200).send({ status: "Item Fetched", item });
    } catch (error) {
    console.log(error.message);
    res.status(500).send({ status: "Error with getting data", error: error.message });
    }
    });
module.exports = router; // meka dala nane :-(hehe  mnh one newei abeetha tama hehe kiuwe ekada etakota aula ow  hari athi neara video eke update delete kaali tibbe namn ma oka insert krna eken hithala ghuwe