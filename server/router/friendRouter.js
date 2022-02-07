const express = require("express");
const router = express.Router();
const { Friend } = require("../model/Friend");
const mongoose = require("mongoose");

router.get("/all", async (req, res) => {
  const friends = await Friend.find();
  res.send(friends);
});

router.get("/friend/:id", async (req, res) => {
  const id = req.params.id
  const friend = await Friend.findById(id);
  res.send(friend);
});

router.post("/add", async (req, res) => {
  const { firstName, lastName, phone, email, bestFriend } = req.body;
  const friend = await Friend.create({
    firstName,
    lastName,
    phone,
    email,
    bestFriend,
  });
  res.status(200).send({ message: "Friend added" });
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { firstName, lastName, phone, email, bestFriend } = req.body;
  const friend = await Friend.findById(id);
  friend.firstName = firstName;
  friend.lastName = lastName;
  friend.phone = phone;
  friend.email = email;
  friend.bestFriend = bestFriend;
  await friend.save()
  res.status(200).send({ message: "Friend updated" });
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await Friend.findByIdAndDelete(id);
  res.status(200).send({ message: "Friend deleted" });
});

module.exports = router;
