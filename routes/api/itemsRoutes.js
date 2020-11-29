const express = require("express");
const item = require("../../models/item");
const Router =  express.Router();


const itemController = require("./../../controller/itemController");
//Get api/items

Router.route('/')
.get(itemController.getAllItems)
.post(itemController.createItem);

Router.route("/:id")
.delete(itemController.deleteItem);



module.exports = Router;