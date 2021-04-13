// DO YOUR MAGIC
const express = require("express");
const router = express.Router();

const {checkCarId, checkCarPayload, 
    checkVinNumberValid, checkVinNumberUnique} = require("./cars-middleware")
const Cars = require("./cars-model");

//get all Cars
router.get("/", (req, res, next) => {
    Cars.getAll()
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(err => {
            next(err);
        });
})

//get car by id
router.get("/:id", checkCarId, (req, res, next) => {
    res.status(200).json(req.carId);
})

module.exports = router