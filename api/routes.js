'use strict';

import { about, versions, add} from './controller';

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

}
