"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  beforeUpdate(event) {
    console.log("this is not fun dont you see this console log message");
    if ("hello" == "hello") {
      return error;
    }
  },
};
