const getEncryption = (request, h) => {
  const {
    input,
  } = request.payload;
  let md5 = require("blueimp-md5");
  query = input;
  if (input.length > 0) {
    const response = h.response({
      status: 'success',
      message: 'Encyption Success',
      data: {
        data: md5(query),
      },
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: 'error',
    message: 'Failed to Encrypt',
  });
  response.code(500);
  return response;
};

module.exports = {
  getEncryption,
};
