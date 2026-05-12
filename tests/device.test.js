const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../src/app');
afterAll(async () => {
  await mongoose.connection.close();
});
describe('Auth API', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({ name: 'Jest User', email: 'jest@test.com', password: '123456' });
    expect([201, 400]).toContain(res.statusCode);
  });

  it('should login successfully', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'test@test.com', password: '123456' });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });
});

describe('Device API', () => {
  let token;

  beforeAll(async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'test@test.com', password: '123456' });
    token = res.body.token;
  });

  it('should create a device', async () => {
    const res = await request(app)
      .post('/api/devices')
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'Test Device', type: 'sensor-node', location: 'Lab' });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('_id');
  });

  it('should get all devices', async () => {
    const res = await request(app)
      .get('/api/devices')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('devices');
  });

  it('should reject request without token', async () => {
    const res = await request(app).get('/api/devices');
    expect(res.statusCode).toBe(401);
  });
});