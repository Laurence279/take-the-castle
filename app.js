/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable es5/no-template-literals */
/* eslint-disable brace-style */
/* eslint-disable es5/no-block-scoping */

const express = require('express');
const app = express();
let port = process.env.PORT;
if (port == null || port === "") {
    port = 3001;
}
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.sendFile("index.html");
});

app.listen(port, function () {
    console.log("Server open on port " + port);
});
