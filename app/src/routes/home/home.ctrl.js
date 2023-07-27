"use strict";

const home = (req, res) => {
    res.render("home/index");
};
const home2 = (req, res) => {
    res.render("home/home");
};

module.exports = {
    home,home2,
};