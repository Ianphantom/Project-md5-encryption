const {
  getEncryption,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/md5',
    handler: getEncryption,
  },
];
module.exports = routes;
