'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('../db')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM category'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM category WHERE CategoryID = ?'
        db.query(sql, [req.params.bookId], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let cateID = req.params.CategoryID;
        let sql = 'UPDATE category SET ? WHERE CategoryID = ?'
        db.query(sql, [data, cateID], (err, response) => {
            if (err) throw err
            res.json({ message: 'Update success!' })
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO category SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({ message: 'Insert success!' })
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM category WHERE CategoryID = ?'
        db.query(sql, [req.params.bookId], (err, response) => {
            if (err) throw err
            res.json({ message: 'Delete success!' })
        })
    },
    search: (req, res) => {
        let sql = "SELECT * FROM category WHERE CategoryDescription LIKE ?"
        db.query(sql, `%${[req.params.value]}%`, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },

}