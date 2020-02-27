const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionControler = require('./controllers/SessionControler');
const SpotControler = require('./controllers/SpotControler');
const DashboardControler =  require('./controllers/DashboardControler');
const BookingControler = require('./controllers/BookingControler');

//Pegador o responsavel pelas todas as rotas
//E jogando na nosssa routes

const routes = express.Router();
const upload = multer(uploadConfig)

routes.post('/sessions', SessionControler.store);


routes.get('/spots', SpotControler.index);
routes.post('/spots', upload.single('thumbnail'), SpotControler.store);
routes.get('/dashboard', DashboardControler.show);

routes.post('/spots/:spot_id/bookings', BookingControler.store);


module.exports = routes;