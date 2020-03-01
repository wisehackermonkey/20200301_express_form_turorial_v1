'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _handler = require('./routes/handler');

var _handler2 = _interopRequireDefault(_handler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = 3000; // express_form_turorial_v1
//  fallowing a book called web development with node & express by ethan brown
//by wisemonkey
// 20200301

//this is the main server

var app = (0, _express2.default)();

app.use(_express2.default.static("web"));
app.use(_bodyParser2.default.json());

var signup = function signup(req, res) {
    console.count("form");
    console.log('form request: ' + req.body.username);
    res.send({ result: "success" });
};
app.post('/api/signup', signup);

//-------------------------------------------------
console.log("Demo Express forms server has started");

app.listen(PORT, function () {
    console.log('Server is running: http://localhost:' + PORT);
});
//# sourceMappingURL=app.js.map