'use strict';

const controller = require('./controller')

module.exports = function (app) {
    app.route('/about')
        .get(controller.about)

        app.route('/versions/')
        .get(controller.versions)

        app.route('/versions/:version/:arch')
        .get(controller.versions)

        app.route('/versions/:version/')
       .get(controller.versions)

    app.route('/add/:version/:arch/:changelog')
        .get(controller.add)
}
