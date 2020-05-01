const NotificationsService = module.exports;

const log4js = require('../utils/logger');
const Notifications = require('../utils/notifications');
const NotificationsRepositorie = require('../repositories/notificationsRepositorie');

const defaultLogger = log4js.getLogger('UsersServices');
const Emailsend = require('../utils/email');

NotificationsService.recoverPassword = async (email, body, options) => {
  const { logger = defaultLogger } = options;
  logger.info(`Start UsersService.recoverPassword: params ${JSON.stringify(email)}`);
  console.log({ body });
  const resp = await Emailsend(email, body.password);
  console.log({ resp });

  return resp;
};

NotificationsService.sendNotifications = async (body, options = {}) => {
  const { deviceToken, nameUser, lastnameUser } = body;
  const {logger = defaultLogger } =  options;
  logger.info(`Stars NotificationsService.sendNotification: params ${JSON.stringify(body)}`);

  const resp = await Notifications.sendNotifications(deviceToken, nameUser, lastnameUser);

  return resp;
}

NotificationsService.registerTokendevice = async (body, options = {}) => {
  const {logger = defaultLogger } = options;

  logger.info(` Stars NotificationsService.registerTokendevice with body: ${JSON.stringify(body)}`);

  const resp = await NotificationsRepositorie.registerTokendevice(body);

  return resp;
}

NotificationsService.updateTokendevice = async (body, id, options = {}) => {
  const { logger =  defaultLogger } = options;

  logger.info(`Stars NotificationsService.registerYTokendevice with params: ${JSON.stringify(id)}`);

  const resp = await NotificationsRepositorie.updateTokendevice(id, body);

  return resp;
}


NotificationsService.getToken = async ( id, options = {}) => {
  const { logger =  defaultLogger } = options;

  logger.info(`Stars NotificationsService.getToken with params: ${JSON.stringify(id)}`);

  const resp = await NotificationsRepositorie.getToken(id);

  return resp;
}

NotificationsService.getDevices = async ( options = {}) => {
  const { logger =  defaultLogger } = options;

  logger.info(`Stars NotificationsService.getDevices `);

  const resp = await NotificationsRepositorie.getDevices();

  return resp;
}

