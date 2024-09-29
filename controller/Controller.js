const URL=require('../model/Schema');
const handleforminput=(req,res)=>{
    const inputdata=req.body;
 URL.create({
    Item_type:inputdata.item_type,
    Color:inputdata.color,
    Size:inputdata.size,
    Condition:inputdata.condition,
    Prefer_method:inputdata.preferred
 })
 console.log("backend is working fine");
 res.end("working input fine");
}
// const handeldelete=(req,res)=>{
//    const deletedata=URL.find({_id});
//    console.log(deletedata);
// }

module.exports={handleforminput};