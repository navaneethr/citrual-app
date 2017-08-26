//requiring all the modules needed
var express = require('express'); //express provides you services to handle REST Services
var app = express();
var mongoose = require('mongoose'); //Lets you create and use db schema and models
var bodyParser = require('body-parser'); // to parse the body from the front end post requests, din't use it though
var ObjectId = require('mongodb').ObjectID; //used to match the ObjectID of MongoDb
var Customer = require('./models/customerModel'); //requiring created Customer Model

//connecting to mLab, online DB
mongoose.connect('mongodb://admin:admin@ds017726.mlab.com:17726/custdb'); // connecting to online mLab DB
mongoose.Promise = global.Promise; //overriding mongoose promise to global promise

app.use(express.static(__dirname+"/public")); //tells the server to look into the public folder for serving static files
app.use(bodyParser.json()); //haven't used body parser

/* when the server receives a GET request,
it goes and finds all the values from db and sends the data back,
sending it back in the form of JSON*/

app.get('/customers', function (req, res) {
    Customer.find({})
        .then(function (data) {
            res.json(data);
        })
        .catch(function (err) {
            console.log('The Error is '+err);
        });
});

/*when the server gets a put request to update order state,
the server gets the id and updated status to update the db,
we use req param to get the id and status.
update where _id === ObjectId(id); ObjectID() coverts id into a mLab Db recognizable form.
orderState in the Db is updated with new status, updateOne method is used to update one row*/

app.put('/customers/:id/:status', function (req, res) {
    var id = req.params.id;
    var status = req.params.status;
    var query = {_id : ObjectId(id)};
    var newStatus = {orderState : status}
    Customer.updateOne(query, newStatus, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
    })
});

//We are listening to the server on 4001 port and we connect to https://127.0.0.1:4001 to use this application
app.listen(process.env.PORT || 4001, function () {
    console.log('Server Running on port 4001');
});