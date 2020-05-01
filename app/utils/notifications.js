const servernotifications = require('node-gcm');

const notifications = module.exports;

notifications.sendNotifications = function (deviceToken, nameUser, lastnameUser) {

  const sender = servernotifications.Sender('AIzaSyDkyb8uZ6WGrqpydJuslvTNeUcu_I08M6w');
  console.log(sender);
  const message = servernotifications.Message({
    notification: {
      title:` ${nameUser}  ${lastnameUser} a Comprado tu producto `,
      body: 'Vamos! es hora de cerrar una venta',
    },
    data: {
      usuario: nameUser,
    },
  });

  const regTokens = [];
  // eslint-disable-next-line max-len
  regTokens.push(deviceToken);
  sender.send(message, { registrationTokens: regTokens }, (error, response) => {
    if (error) console.error(error);
    else console.log(response);
  });
};
