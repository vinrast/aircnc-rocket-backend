const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');
const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/', (req,res)=>{
    return res.json({res:'hello world'});
});

routes.post('/sessions', SessionController.store);


routes.get('/show', DashboardController.show);
routes.post('/spots/:spot_id/booking', BookingController.store);
routes.get('/spots', SpotController.index);
routes.post('/create', upload.single('thumbnail'), SpotController.store);


module.exports = routes