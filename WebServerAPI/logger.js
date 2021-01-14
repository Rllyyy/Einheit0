const { response } = require("express");
const moment = require("moment");

const logger = (req, res, next) => {
    console.log(`${moment().format("hh:mm:ss")} : ${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`);
    next();
}

const old = (req, res, next) => {
    console.log("The user has requested an old file");
    next();
}

module.exports = {logger, old};