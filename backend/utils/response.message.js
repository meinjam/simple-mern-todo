const responseMessage = (success = true, message = '', data) => {
  let a = { success: success, message: message };

  if (data) {
    a['data'] = data;
  }

  return a;
};

module.exports = {
  responseMessage,
};
