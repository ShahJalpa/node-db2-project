const db = require("../../data/db-config")
const getAll = () => {
  // DO YOUR MAGIC
  return db("cars");
}

const getById = (id) => {
  // DO YOUR MAGIC
  return db("cars").where("id", id).first();
}

const create = async car => {
  // DO YOUR MAGIC
  const newCar = await db("cars").insert(car)
  return getById(newCar);
}

module.exports = {getAll, getById, create}