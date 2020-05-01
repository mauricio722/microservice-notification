const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
const repositorie = require('../app/repositories/notificationsRepositorie');
const Helper = require('./helper');

const API = '/api/notification-ms';
const email = "pp3584368@gmail.com";
const emailerror = "puiu@gmail.com";

chai.use(chaiHttp);

describe('notification', () => {


  it('validation email test', async () => chai
    .request(app)
    .post(`${API}/notification/${email}`).send({
        password: "123",
    })    
    .then(async (res) => {
      const { status } = res;
      assert.equal(status,200);
    }));

});

it('email empty test', async () => chai
    .request(app)
    .post(`${API}/`).send({
        password: "123",
    })    
    .then(assert.fail).catch((error) => {
        assert(error,500);
    }));

it('email error test', async () => chai
    .request(app)
    .post(`${API}/${emailerror}`).send({
        password: "123",
    })    
    .then(assert.fail).catch((error) => {
        assert(error,401);
    }));

    before(() => Helper.migrate());
    beforeEach(async () => {
      await Helper.clear();
    });
    
it('sendNotification validation correct', async () => {
    const product = {
        deviceToken: 'cUCtI8Z5-dc:APA91bGury8-QtQzzS5xMLVJkVTFCxAgcICATpEoy3tN5ixbyXX7VLm_FrZEDqJQJObInh5GA2XKC37MJwWOgWbIaloGjTRtdo_82O7VZPdtDAGtP5TviVuG1zqXQNPlE3pZiK3KwD87',
        nameUser: 'jaime',
        lastnameUser: 'hernandez'
    };

    return chai
    .request(app)
    .post(`${API}/send`)
    .send({ product })
    .then((resp) => {
        const  { status } = resp;
        assert.equal(status, 200);
    })
});

afterEach(() => Helper.clear());
it('sendNotification validation error', async () => {
    const product = {
       
    };

    return chai
    .request(app)
    .post(`${API}/send`)
    .send({ product })
    .then(assert.fail)
    .catch((error) => {
        assert.equal(error.status, undefined)
    })
});
afterEach(() => Helper.clear());
it('registerTokendevice validation correct', async () => {
    return chai
    .request(app)
    .post(`${API}/registerTokenDevice`)
    .send( {
        deviceToken: 'cUCtI8Z5-dc:APA91bGury8-QtQzzS5xMLVJkVTFCxAgcICATpEoy3tN5ixbyXX7VLm_FrZEDqJQJObInh5GA2XKC37MJwWOgWbIaloGjTRtdo_82O7VZPdtDAGtP5TviVuG1zqXQNPlE3pZiK3KwD87',
        idusuario: 1
    } )
    .then((resp) => {
        const  { status } = resp;
        assert.equal(status, 200);
    })
});
afterEach(() => Helper.clear());
it('registerTokendevice validation error', async () => {
    const product = {
       
    };

    return chai
    .request(app)
    .post(`${API}/registerTokenDevice/`)
    .send( product )
    .then(assert.fail)
    .catch((error) => {
        assert.equal(error.status, 500)
    })
});
afterEach(() => Helper.clear());
it('get token validation error', async () => {
    const product = 2;

    return chai
    .request(app)
    .get(`${API}/getToken/${product}`)
    .then((resp) => {
        const { status } = resp;
        assert.equal(status, 200)
    });
});
afterEach(() => Helper.clear());

it('get devices validation correct', async () => {

    const devices = {
        deviceToken: 'cUCtI8Z5-dc:APA91bGury8-QtQzzS5xMLVJkVTFCxAgcICATpEoy3tN5ixbyXX7VLm_FrZEDqJQJObInh5GA2XKC37MJwWOgWbIaloGjTRtdo_82O7VZPdtDAGtP5TviVuG1zqXQNPlE3pZiK3KwD87',
        idusuario: 1
    };

    const [devicess] = await repositorie.registerTokendevice(devices);

    return  chai
    .request(app)
    .get(`${API}/getDevices`)
    .then((resp) => {
        const { status } = resp;
        assert.equal(status, 200)
    });
});
