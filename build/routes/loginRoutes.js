"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
router.get("/login", function (req, res) {
    res.sendFile("login.html", { root: __dirname });
});
router.post("/login", function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    res.send(email + password);
});
