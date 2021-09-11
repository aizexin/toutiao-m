import Vue from 'vue'

if (process.env.NODE_ENV === 'production') {
    const Sentry = require('@sentry/browser')
    const Integrations = require('@sentry/integrations')

    Sentry.init({
        dsn: 'https://34abf2d89d6e40e2ac3bad5fba752daf@sentry.itheima.net/55',
        integrations: [new Integrations.Vue({ Vue, attachProps: true })]
    })
}

Vue.config.productionTip = false
