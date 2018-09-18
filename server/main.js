const express = require('express');
const path = require('path');

const morgan = require('morgan'); // HTTP REQUEST LOGGER
const bodyParser = require('body-parser'); // PARSE HTML BODY

const mongoose = require('mongoose');
const session = require('express-session');

const config = require('./config/config');

const app = express();
const port = process.env.PORT || 3000;
// const port = "https://kissian.github.io/dev_startup/" || 3000;
const devPort = 8080;

console.log(process.env.PORT);

const db = mongoose.connection;
app.use(morgan('dev'));


/* use session */
app.use(session({
  secret: 'CodeLab1$1$234',
  resave: false,
  saveUninitialized: true
}));

app.use('/', express.static(path.join(__dirname, './../build')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* setup routers & static directory */
require('./routes')(app);


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './../build/index.html'));
});

db.on('error', console.error);
db.once('open', () => { console.log('Connected to mongodb server'); });
mongoose.connect(config.db_dev);
mongoose.Promise = global.Promise;


/* handle error */
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log('🍙 넌 씨발 존나 완벽해 이제 밥먹어도될듯?', port);
});

if(process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');
    const config = require('../webpack.dev.config');
    const compiler = webpack(config);
    const devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(
        devPort, () => {
            console.log('webpack-dev-server is listening on port', devPort);
        }
    );
}