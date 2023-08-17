import { request } from "supertest";
import server from '../server.js';

describe('POST /weather', () => {
  it('client has to send "cityName" as mandatory property', async() => {
    const city = {cityName: 'Amsterdam'};
    let res = await request(server).post('/weather').send(city)
    expect(res.statusCode).toEqual('200')
  })
})