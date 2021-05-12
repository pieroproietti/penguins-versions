'use strict'

var properties = require('../package.json')

var Datastore = require('nedb')
var krillVersions = new Datastore({ filename: 'krill.db', autoload: true })

var krillControllers = {

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    add: function (req, res) {
        let version = req.params.version
        let arch = req.params.arch
        let changelog = req.params.changelog
        const record = { version, arch, changelog }

        krillVersions.insert(record, function (err, doc) {
            if (err)
                res.send(err)
            res.json(record)
        });
    },

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    krillVersions: function (req, res) {
        let version = req.params.version
        let arch = req.params.arch

        if (version === undefined) {
            version = 'all'
        }

        if (arch === undefined) {
            arch = 'all'
        }

        let criteria = {}
        if (version === 'all' && arch === 'all') {
            criteria = {}
        } else if (version !== 'all' && arch === 'all') {
            criteria = { version: version }
        } else if (version !== 'all' && arch !== 'all') {
            criteria = { version: version, arch: arch }
        } else if (version === 'all' && arch !== 'all') {
            criteria = { arch: arch }
        }

        krillVersions.find(criteria, function (err, docs) {
            if (err)
                res.send(err)
            res.json(docs);
        })
    },
}

module.exports = krillControllers
