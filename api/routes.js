'use strict';

import { about, versions, add } from './controller';
import { krillVersions, krillAdd } from './krill_controller';

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
     */
    app.route('/krill/versions/')
        .get(krillVersions)

    app.route('/krill/versions/:version/:arch')
        .get(krillVersions)

    app.route('/krill/versions/:version/')
        .get(krillVersions)

    app.route('/krill/add/:version/:arch/:changelog')
        .get(krillAdd)
}
