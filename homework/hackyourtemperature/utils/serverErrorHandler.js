import colors from "colors";

export const serverErrorHandler = (error) => {
  const errorCode = error.code ? error.code : "server error";
  const errorNumber = error.errno ? error.errno : 500;
  const errorAddress = error.address ? error.address : "Server";

  console.error(
    colors.brightRed(
      `Server Error: Code: ${errorCode}, Number: ${errorNumber}, Address: ${errorAddress}`
    )
  );

  if (errorNumber === 500 && errorCode === "server error") {
    console.log(colors.brightRed("Message: " + error.message));
  }
};
