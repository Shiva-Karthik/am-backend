const express = require("express");
const Resident = require("../models/resident.model");

const router = express.Router();

router.post("/post", async (req, res) => {
  try {
    const residents = await Resident.create(req.body);
    return res.status(200).send(residents);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});
router.get('/list', async (req, res) => {
  try {
    const residentData = await Resident.find().populate([{path : "flatId"}]).lean().exec();
    return res.status(200).send(residentData);
  }
  catch(err) {
    return res.status(400).send(err.message);
    
  }
})
router.get("/:id", async (req, res) => {
  try {
    const flatID = req.params.id;
    const resident = await Resident.find({flatId : flatID}).select({flatId : 0}).lean().exec();
    return res.status(200).send(resident);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});
router.patch('/:id', async (req, res) => {
  try {
    const resident = await Resident.findByIdAndUpdate(req.params.id, req.body, {new : true}).lean().exec();
    return res.status(200).send(resident);
  }
  catch(err) {
    return res.status(400).send(err.message)
  }
})
module.exports = router;