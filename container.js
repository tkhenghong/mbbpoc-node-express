const awilix = require('awilix');
const i18n = require('./i18n.config.js');

const Application = require('./application.js');
const Server = require('./server.js');
const LocaleService = require('./services/localeService.js');

const container = awilix.createContainer();

container
    .register({
      app: awilix.asClass(Application, {lifetime: awilix.Lifetime.SINGLETON}),
      server: awilix.asClass(Server, {lifetime: awilix.Lifetime.SINGLETON}),
    })
    .register({
      localeService: awilix.asClass(LocaleService,
          {lifetime: awilix.Lifetime.SINGLETON}),
    })
    .register({
      i18nProvider: awilix.asValue(i18n),
    });

module.exports = container;
