import colors from "colors";

export const serverErrorHandler = (error) => {
  const errorCode = error.code ? error.code : "server error";
  const errorNumber = error.errno ? error.errno : 500;
  const errorAddress = error.address ? error.address : "Server";
  const errorMessage = error.message ? error.message : "Something went wrong!";

  console.error(
    colors.brightRed(
      `Server Error: ${errorMessage}\n Code: ${errorCode}, Number: ${errorNumber}, Address: ${errorAddress}`
    )
  );
};
