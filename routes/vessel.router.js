const express = require('express');
const router = express.Router();

// Vessel Model
const Vessel = require('../Model/vessel');

// GET all Vessel
router.get('/', async (req, res) => {
  const vessel = await Vessel.find();
  console.log(vessel);
  res.json(vessel);
});

// GET Vessel
router.get('/:id', async (req, res) => {
  const vessel = await Vessel.findById(req.params.id);
  res.json(vessel);
});

//New Vessel
router.post('/', async (req, res) => {
  const { title, description } = req.body;
  const vessel = new Vessel({ title, description });
  await vessel.save();
  res.json({ status: 'Vessel saved' });
});

// UPDATE a Vessel
router.put('/:id', async (req, res) => {
  const { title, description } = req.body;
  const newVessel = { title, description };
  await Vessel.findByIdAndUpdate(req.params.id, newvessel);
  res.json({ status: 'Vessel Updated' });
});

router.delete('/:id', async (req, res) => {
  await Vessel.findByIdAndRemove(req.params.id);
  res.json({ status: 'Vessel Deleted' });
});

module.exports = router;