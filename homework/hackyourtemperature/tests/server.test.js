import supertest from "supertest";
import { server, serverListener } from "../server.js";

describe("GET /", () => {
  const request = supertest(server);
  it("should return a specific message", async () => {
    const res = await request.get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("hello from backend to frontend!");
  });
});

describe("POST /weather", () => {
  const request = supertest(server);
  it('client has to send "cityName" as mandatory property', async () => {
    const city = { cityName: "Amsterdam" };
    let res = await request.post("/weather").send(city);
    expect(res.statusCode).toEqual(200);
  });

  it("should return error if mandatory property did not sent by client", async () => {
    const city = { city: "Amsterdam" };
    let res = await request.post("/weather").send(city);
    expect(res.statusCode).toEqual(400);
  });

  it("should return error if city name is not available", async () => {
    const city = { cityName: "AAmsterdam" };
    let res = await request.post("/weather").send(city);
    expect(JSON.parse(res.text).status).toEqual(404);
  });

  afterAll((done) => {
    serverListener.close(done);
  });
});
