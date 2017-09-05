/**
 * Download functionality.
 */

// Dependencies
const fetch = require('node-fetch');
const _ = require('lodash');

// Exports
module.exports = async (url, options) => {
  options = _.defaultsDeep(options, {
    type: 'stream',
    fetch: {}
  });

  await new Promise((resolve, reject) => {
    fetch(url, options.fetch)
      .catch(reject)
      .then((response) => {
        return !options.type || options.type === 'stream' ? response.body :
          response[options.type] ? response[options.type] : response;
      }).then(resolve);
  });
};
