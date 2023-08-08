import { format } from "date-fns";
import { serverErrorHandler } from "./serverErrorHandler.js";
import colors from "colors";

export const initServer = (serverListener) => {
  try {
    // Grab the server address info object
    const serverUrl = serverListener.address();
    // Grab the server URL
    const serverAddress =
      serverUrl.address === "::" ? "localhost" : serverUrl.address;
    // Grab the server port
    const serverPort = serverUrl.port;
    // Log the URL:PORT and current date
    console.log(
      colors.brightYellow(
        `Server is listening on: http://${serverAddress}:${serverPort} -- ${format(
          new Date(),
          "yyyy/MM/dd hh:mm:ss"
        )}`
      )
    );
  } catch (error) {
    serverErrorHandler(error);
  }
};
