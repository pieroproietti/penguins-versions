'use strict'

var properties = require('../package.json')

var Datastore = require('nedb')
var versions = new Datastore({ filename: 'versions.db', autoload: true })
var krillVersions = new Datastore({ filename: 'krillVersions.db', autoload: true })

var controllers = {

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    about: function (req, res) {
        var aboutInfo = {
            name: properties.name,
            version: properties.version
        }
        res.json(aboutInfo)
    },

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

        versions.insert(record, function (err, doc) {
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
    versions: function (req, res) {
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

        versions.find(criteria, function (err, docs) {
            if (err)
                res.send(err)
            res.json(docs);
        })
    },


    /**
     * KRILL
     * 
     */
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
     krillAdd: function (req, res) {
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
    versions: function (req, res) {
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

module.exports = controllers
