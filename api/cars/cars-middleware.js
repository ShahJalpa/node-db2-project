const db = require("../../data/db-config");
const Cars = require("./cars-model");

const vinValidator = require("vin-validator");

const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const cardId = await Cars.getById(req.params.id);
    if(!cardId){
      res.status(404).json({message: `car with id ${req.params.id} is not found`})
    }else{
      req.cardId = cardId
      next();
    }
  }catch (error){
    next(error)
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const {vin, make, model, milage} = req.body

  if(!vin){
    res.status(400).json({message: "vin is missing"})
  }else if(!make){
    res.status(400).json({message: "make is missing"})
  }else if(!model){
    res.status(400).json({message: "model is missing"})
  }else if(!milage){
    res.status(400).json({message: "milage is missing"})
  }else{
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  const validVinNum = vinValidator.validate(req.body.vin);
  if(!validVinNum){
    res.status(400).json({message: `vin ${req.body.vin} is not valid`})
  }else{
    next();
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  
    const vinUnique = await db("cars").where("vin", req.body.vin.trim())
    
    if(vinUnique.length !=0){
      res.status(400).json({message: `vin ${req.body.vin} is already exists`})
    }else{
      next();
    }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}