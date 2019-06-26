import "./forms/part.scss";

const template = require("./forms/part.pug");

// let locals = { users: ["user1", "user2", "user3", "user4", "user5", "user5"] };

document.querySelector("main").innerHTML = template();
