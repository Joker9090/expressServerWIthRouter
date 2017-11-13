import express from "express";
import controllers from "./../controllers/main.js";

function router(req,res,next) {
  controllers.userController.helloWorld(res,next);
  // console.log(req,res)
}

module.exports = router;
