const { Module } = require('adapt-authoring-core');
/**
* Module which mocks the adapt_authoring API
* @extends {Module}
*/
class MockApi extends Module {
  /**
  * @param {App} app App instance
  * @param {Function} resolve Function to call on fulfilment
  * @param {Function} reject Function to call on rejection
  */
  preload(app, resolve, reject) {
    this.initRoutes(app.getModule('server').createRouter('/'), {
      post: [
        '/api/login',
        '/api/logout'
      ],
      get: [
        '/config/config.json',
        '/lang/en',
        '/api/authcheck',
        '/api/componenttype',
        '/api/extensiontype',
        '/api/menutype',
        '/api/themetype',
        '/api/content/schema',
        '/api/autocomplete/tag',
        '/api/my/course',
        '/api/shared/course',
        '/api/user/me',
        '/api/asset/query',
        '/api/content/course/undefined',
        '/api/content/config/undefined',
        '/api/content/contentobject',
        '/api/theme/preview/undefined/undefined'
      ]
    });
    resolve();
  }

  initRoutes(router, routes) {
    Object.entries(routes).forEach(([method, routes]) => {
      routes.forEach(r => router[method](r, (req, res, next) => res.json({})));
    });
  }
}

module.exports = MockApi;
