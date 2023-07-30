"use strict";

const home = (req, res) => {
    res.render("home/index");
};
const home2 = (req, res) => {
    res.render("home/index2");
};

module.exports = {
    home,home2,
};