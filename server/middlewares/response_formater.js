const successResponse = (req, res, next) => {
    const originalSend = res.send;
  
    res.send = function (body) {
      if (body?.message && body?.success !== undefined && body?.data !== undefined) {
        return originalSend.call(this, body);
      }
      const formattedResponse = {
        message: "Success",
        success: true,
        data: body,
      };
      return originalSend.call(this, formattedResponse);
    };
  
    next();
  };

module.exports = successResponse