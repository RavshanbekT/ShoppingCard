//item model
const Item = require("./../models/item");

exports.getAllItems = async(req,res)=>{
   const newItem = await Item.find().sort({date:-1});

  try {
    res.status(200).json({
        status:"success",
        item:newItem
    });
  } catch (error) {
    res.status(200).json({
        status:"fail",
        item:error
    });
  }
};

exports.createItem = async(req,res)=>{
    const newItem = await Item.create({
        name:req.body.name
    });

   try {
     res.status(200).json({
         status:"success",
         item:newItem
     });
   } catch (error) {
     res.status(200).json({
         status:"fail",
         item:error
     });
   }
 };

 exports.deleteItem = async(req,res)=>{
 const newItem  = await Item.findById(req.params.id);

 newItem.remove();

 try {
   res.status(200).json({
       status:"success",
   });
 } catch (error) {
   res.status(200).json({
       status:"fail",
       item:error
   });
 }
};
