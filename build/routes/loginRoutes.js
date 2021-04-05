"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return; // func is not returning anything but execution must stop
    }
    res.status(403);
    res.send("Not permitted");
}
var router = express_1.Router();
exports.router = router;
router.get("/login", function (req, res) {
    res.sendFile("login.html", { root: __dirname });
});
router.post("/login", function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === "test@one" && password === "mpilo") {
        req.session = { loggedIn: true };
        res.redirect("/");
    }
    else {
    }
});
router.get("/", function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n        <div>\n        <div>You are logged in</div>\n        <a href=\"/logout\">Logout</a>\n        </div>\n        ");
    }
    else {
        res.send("\n    <div>\n    <div>You Not are logged in</div>\n    <a href=\"/login\">Login</a>\n    </div>\n    ");
    }
});
router.get("/logout", function (req, res) {
    req.session = undefined;
    res.redirect("/");
});
router.get("/protected", requireAuth, function (req, res) {
    res.send("Welcome to protected route logged in user");
});
