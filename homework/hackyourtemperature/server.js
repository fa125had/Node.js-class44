import express from "express";

const server = new express();
const PORT = process.env.PORT || 3000;

server.get('/', (req, res) => {
  res.send(`hello from backend to frontend!`)
})

// Start the server
const serverListener = server.listen(PORT, () => {
  const serverUrl = serverListener.address();
  const serverAddress =
    serverUrl.address === "::" ? "localhost" : serverUrl.address;

  console.log(`Server is listening on: http://${serverAddress}:${PORT}\n${new Date()}`)
});
