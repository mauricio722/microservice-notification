const notificationsRepositorie = module.exports;
const DB = require('../utils/DB');

notificationsRepositorie.registerTokendevice = (body) => DB('device').insert(body)
.returning('*');

notificationsRepositorie.updateTokendevice = (id, body) =>DB('device')
.where({ idusuario: id }).update(body).returning('*');

notificationsRepositorie.getToken = (id) => DB('device')
.select('*').where({idusuario: id}).returning('*');

notificationsRepositorie.getDevices = () => DB('device')
.select('*').from('device');