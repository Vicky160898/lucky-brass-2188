const express = require("express");
const app = express.Router();
const TelevisionSchema = require("../models/Admin/userSchema");

app.get("/serial", async (req, res) => {
  try {
    const data = await TelevisionSchema.find({ category: "serial" });
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(e.message);
  }
});
app.get("/serial/:id",async (req,res)=>{
  const {id}=req.params
  try {
    const data = await TelevisionSchema.findById(id);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send(e.message);
  }

})

app.get("/marathi", async (req, res) => {
  try {
    const data = await TelevisionSchema.find({ category: "marathi" });
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(e.message);
  }
});
app.get("/marathi/:id",async (req,res)=>{
  const {id}=req.params
  try {
    const data = await TelevisionSchema.findById(id);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send(e.message);
  }

})

app.get("/movies/:id",async (req,res)=>{
  const {id}=req.params
  try {
    const data = await TelevisionSchema.findById(id);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send(e.message);
  }

})

app.get("/movies", async (req, res) => {
  try {
    const data = await TelevisionSchema.find({ category: "movies" });
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(e.message);
  }
});

app.get("/web-series", async (req, res) => {
  try {
    const data = await TelevisionSchema.find({ category: "web-series" });
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(e.message);
  }
});

app.get("/web-series/:id",async (req,res)=>{
  const {id}=req.params
  try {
    const data = await TelevisionSchema.findById(id);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send(e.message);
  }

})

app.get("/Popular-Movies", async (req, res) => {
  try {
    const data = await TelevisionSchema.find({ category: "popular-movies" });
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(e.message);
  }
});
app.get("/Popular-Movies/:id",async (req,res)=>{
  const {id}=req.params
  try {
    const data = await TelevisionSchema.findById(id);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send(e.message);
  }

})
module.exports = app;
