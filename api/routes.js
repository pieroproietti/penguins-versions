'use strict';

import { about, versions, add } from './controller';
// import { versions as _versions, add as _add } from './krillController';

export default function (app) {
    app.route('/about')
        .get(about)

    /**
     * eggs
     */
    app.route('/versions/')
        .get(versions)

    app.route('/versions/:version/:arch')
        .get(versions)

    app.route('/versions/:version/')
        .get(versions)

    app.route('/add/:version/:arch/:changelog')
        .get(add)

    /**
     * krill
    app.route('/krill/versions/')
        .get(_versions)

    app.route('/krill/versions/:version/:arch')
        .get(_versions)

    app.route('/krill/versions/:version/')
        .get(_versions)

    app.route('/krill/add/:version/:arch/:changelog')
        .get(_add)
     */
}
