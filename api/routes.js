'use strict';

const controller = require('./controller')

module.exports = function (app) {
    app.route('/about')
        .get(controller.about)

    /**
     * eggs
     */
    app.route('/versions/')
        .get(controller.versions)

    app.route('/versions/:version/:arch')
        .get(controller.versions)

    app.route('/versions/:version/')
        .get(controller.versions)

    app.route('/add/:version/:arch/:changelog')
        .get(controller.add)

    /**
     * krill
     */
    app.route('/krill/versions/')
        .get(krillController.versions)

    app.route('/krill/versions/:version/:arch')
        .get(krillController.versions)

    app.route('/krill/versions/:version/')
        .get(krillController.versions)

    app.route('/krill/add/:version/:arch/:changelog')
        .get(krillController.add)

}
