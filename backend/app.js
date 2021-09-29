const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');
const Event = require('./models/event');
const User =require('./models/user');



const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// access to folder images
app.use('/images', express.static(path.join('backend/images')));


//Connexion BD
mongoose.connect('mongodb://localhost:27017/eventDB', { useNewUrlParser: true, useUnifiedTopology: true });


// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});


///********************** */ Config Multer ****************************
// Définition des extensions selon le type de media  
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}
const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        //Affecter  la destination
        cb(null, 'backend/images')
    },
    //file name
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '.' + extension;
        //Affecter file name
        cb(null, imgName);
    }
});







// *******************************************CRUD EVENT ********************************************************
// Traitement de add Event
app.post('/api/addEvent', multer({ storage: storage }).single('img'),(req, res) => {
    console.log('here in add event');
    let event = {};
    let url = req.protocol + '://' + req.get('host');
    console.log('here URL', url);
    event = new Event({
        name: req.body.name,
        date: req.body.date,
        description: req.body.description,
        img: url + '/images/' + req.file.filename

    });
    console.log('addded event', event);

    event.save();

    res.status(200).json({
        message: "added Event"

    });

});

// Traitement de get All events 
app.get('/api/allEvents', (req, res) => {
    console.log('Hello in BE to get all events');

    Event.find((err, docs) => {
        if (err) {
            console.log('Error in DB');
        }
        else {
            res.status(200).json({
                events: docs
            });
        }
    });



});

// Traitement de get event by id
app.get('/api/allEvents/:id', (req, res) => {
    console.log('Hello in BE to get event by id');
    let id;
    let event = {};
   
    id = req.params.id;
    console.log('id', id);

    Event.findOne({ _id: id }).then(
        (doc) => {
            console.log('Finded event', doc);
            res.status(200).json({
                event: doc

            });

        }
    )



});


// traitement edit event
app.put('/api/editEvent/:id', (req, res) => {
    console.log('here in edit event', req.body.id);
    let event = {
        _id: req.body._id,
        name: req.body.name,
        date: req.body.date,
        description: req.body.description,

    };

    Event.updateOne({ _id: req.body._id }, event).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: "edited successfuly"
                });
            }

        }
    )


});


// traitement delete event
app.delete('/api/deleteEvent/:id', (req, res) => {
    console.log('here in delete event');
    const id = req.params.id;
    console.log('id', id);
    Event.deleteOne({ _id: id }).then((result) => {
        console.log('Result after delete', result);
        if (result) {
            res.status(200).json({
                message: "Deleted successfuly"
            });
        }
    });

});

// ****************************************** CRUD USER ********************************************************


// Traitement de Signup
app.post('/api/signup',(req, res) => {
    console.log('here in signup');
    let user = {};
    bcrypt.hash(req.body.password, 10).then(cryptedPwd => {
    user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: cryptedPwd,
        tel: req.body.tel,
        role: "user"
    });
    console.log('added user', user);

    user.save();

    res.status(200).json({
        message: "added User"

    });

})

});

// Traitement de add admin
app.post('/api/addAdmin',(req, res) => {
    console.log('here in add admin');
    let user = {};
    bcrypt.hash(req.body.password, 10).then(cryptedPwd => {
    user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: cryptedPwd,
        tel: req.body.tel,
        role: "admin"
    });
    console.log('added admin', user);

    user.save();

    res.status(200).json({
        message: "added admin"

    });

})

});



//login
app.post('/api/login', (req, res) => {
    console.log('here in login', req.body.email);

    User.findOne({ email: req.body.email }).then(
        (resultEmail) => {
            console.log('resultEmail', resultEmail);
            if (!resultEmail) {
                res.status(200).json({
                    findedUser: "0"
                });
            }

            return bcrypt.compare(req.body.password, resultEmail.password);
        })
        .then((resultPwd) => {
            console.log('resultPwd', resultPwd);
            if (!resultPwd) {
                res.status(200).json({
                    findedUser: "1"
                });
            } else {

                User.find({email: req.body.email}).then(
                            (result)=>{
                             
                                    console.log('result',result);
                                    res.status(200).json({
                                        findedUser:result
                                    })
                                
                            }
                        )


            }
        });

});


// Traitement de Get Events By Name

app.post('/api/getEventsByName', (req, res) => {
    console.log('Hello in BE to get events by name');

    console.log('here search value', req.body.search);
    let searchedVal = req.body.search;


    Event.find({
        $or: [
            { name: { $regex: `.*${searchedVal}` } }]
    }).then(
        (docs) => {
            if (docs) {
                res.status(200).json({
                    events: docs
                });
            }
        });
});


//exportation de l'application
module.exports = app;