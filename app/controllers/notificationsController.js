const notificationsController = module.exports;
const log4js = require('../utils/logger');
const logUtils = require('../utils/LogUtils');
const { BaseError } = require('../utils/ErrorHandlerMiddleware');
const NotificactionsService = require('../service/emailService');



notificationsController.recoverPassword = async (req, res, next) => {
  const logName = 'Send email user: ';
  const logger = logUtils.getLoggerWithId(log4js, logName);
  const { email } = req.params;
  const { body } = req;

  logger.info(`Start notificationsController.recoverPassword: params ${JSON.stringify(email)}`);

  return NotificactionsService.recoverPassword(email, body, { logger, logName })
    .then(response => res.send({ response }))
};


notificationsController.sendNotifications = (req, res, next) => {
  const logName = 'send notification user';
  const logger = logUtils.getLoggerWithId(log4js, logName);
  const { body } = req;

  logger.info(`stars notificationsController.sendNOtificacions : paramas ${JSON.stringify(body)}`);

  return NotificactionsService.sendNotifications(body, { logger, logName })
  .then((response) => res.send(response))
  .catch((error) => next(new BaseError(error.message)));
};


notificationsController.registerTokendevice = async ( req, res , next) => {
  const logName = 'resgisterTokenDevice';
  const logger = logUtils.getLoggerWithId(log4js, logName);
  const { body } = req;
  console.log(body);
  logger.info(`stars notificationcontroller.registerTokenDevice: params ${JSON.stringify(body)}`);

  return  NotificactionsService.registerTokendevice( body, { logger, logName })
  .then((response) => res.send(response))
  .catch((error) => next( new BaseError(error.message)));
};

notificationsController.updateTokendevice = (req, res, next) => {
  const logName = 'updateTokendevice';
  const logger = logUtils.getLoggerWithId(log4js, logName);
  const { body } = req;
  const idUser = req.params.idUser;

  logger.info(`stars notificationcontroller.updateTokendevice: paramas ${JSON.stringify(idUser)}`);

  return NotificactionsService.updateTokendevice(body, idUser , {logger, logName })
  .then((response) => res.send(response))
  .catch((error) => next(new BaseError(error.message)));
};


notificationsController.getToken = (req, res, next) => {
  const logName = 'getTokenUser';
  const logger = logUtils.getLoggerWithId(log4js, logName);
  const id = req.params.idUser;
  logger.info(`stars notificationsController.getToken : paramas ${JSON.stringify(id)}`);

  return NotificactionsService.getToken(id, { logger, logName })
  .then((response) => res.send(response))
  .catch((error) => next(new BaseError(error.message)));
};

notificationsController.getDevices = (req, res, next) => {
  const logName = 'getDevices';
  const logger = logUtils.getLoggerWithId(log4js, logName);
  logger.info(`stars notificationsController.getDevices`);

  return NotificactionsService.getDevices({ logger, logName })
  .then((response) => res.send(response))
  .catch((error) => next(new BaseError(error.message)));
};