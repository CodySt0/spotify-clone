import { v2 as cloudinary } from "cloudinary";
import songModel from "../models/songModel.js";
import { json } from "express";

const addSong = async (req, res) => {
  //   I am having an issue uploading a song with information
  //     try {
  //       const name = req.body.name;
  //       const desc = req.body.desc;
  //       const album = req.body.album;
  //       const audioFile = req.files.audio[0];
  //       const imageFile = req.files.image[0];
  //       const audioUpload = await cloudinary.uploader.upload(audioFile.path, {
  //         resource_type: "video",
  //       });
  //       const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
  //         resource_type: "image",
  //       });
  //       console.log(name, desc, album, audioUpload, imageUpload);
  //     } catch (error) {}
};

const removeSong = async (req, res) => {
  try {
    await songModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Song removed" });
  } catch (error) {
    res.json({ success: false });
  }
};

// const listSong = async (req, res) => {};

export { addSong, removeSong };
