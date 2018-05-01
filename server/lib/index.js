'use strict';

var _path = require('path');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _filestore = require('./filestore');

var _filestore2 = _interopRequireDefault(_filestore);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

var _routing = require('./middleware/routing.mw');

var _routing2 = _interopRequireDefault(_routing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLIENT_PATH = (0, _path.join)(__dirname, '../../client');

var app = (0, _express2.default)();

app.use((0, _morgan2.default)('dev'));
app.use((0, _cors2.default)());
app.use(_express2.default.static(CLIENT_PATH));
app.use(_express2.default.json());
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

app.use('/api', _index2.default);

app.use(_routing2.default);

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});