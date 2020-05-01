const { Router } = require('express');
const notificController = require('../app/controllers/notificationsController');


const router = Router();

router.post('/notification/:email', notificController.recoverPassword);
router.post('/send', notificController.sendNotifications);
router.post('/registerTokenDevice', notificController.registerTokendevice);
router.put('/updateToken/:idUser', notificController.updateTokendevice);
router.get('/getToken/:idUser', notificController.getToken);
router.get('/getDevices', notificController.getDevices);

module.exports = router;
