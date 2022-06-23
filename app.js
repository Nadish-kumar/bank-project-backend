var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors")
var mongoose = require("mongoose")


var usersRouter = require('./routes/users');
var accountrouter = require("./routes/account")
var depositrouter  = require("./routes/deposit")
var withdrawalrouter = require("./routes/withdrawal")
var transferrouter = require("./routes/transfer")

var app = express();
const CONNECTION = "mongodb+srv://nadish:nadish@cluster0.llgb9.mongodb.net/?retryWrites=true&w=majority"

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors())
mongoose.connect(CONNECTION)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/users', usersRouter);
app.use("/account",accountrouter)
app.use("/deposit" , depositrouter)
app.use("/with" , withdrawalrouter)
app.use("/transfer" , transferrouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
