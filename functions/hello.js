exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: "cottongit0",
      age: 85,
      email: "cottongit0@gmail.com",
    }),
  };
};
