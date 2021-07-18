const routes = require('next-routes')();

routes
  .add('/campaigns/new', '/campaigns/new')
  .add('/campaigns/:address(0x[a-zA-Z0-9]{40,40})', '/campaigns/show')
  .add('/campaigns/:address/requests', '/campaigns/requests/index')
  .add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
