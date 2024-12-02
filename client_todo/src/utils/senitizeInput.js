const escapeMongoOperator = (input) => {
    if (typeof input !== "string") return input;
    return input.replace(/\$/g, "\\$").replace(/\./g, "\\.");
  };
  
module.exports = { escapeMongoOperator };