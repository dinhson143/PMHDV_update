'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('../db')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM orders'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM orders WHERE orderID = ?'
        db.query(sql, [req.params.orderID], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let orderID = req.params.orderID;
        let sql = 'UPDATE orders SET ? WHERE orderID = ?'
        db.query(sql, [data, orderID], (err, response) => {
            if (err) throw err
            res.json({ message: 'Update success!' })
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO orders SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({ message: 'Insert success!' })
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM orders WHERE orderID = ?'
        db.query(sql, [req.params.orderID], (err, response) => {
            if (err) throw err
            res.json({ message: 'Delete success!' })
        })
    },
    search: (req, res) => {
        let sql = "SELECT * FROM orders WHERE customerID LIKE ?"
        db.query(sql, `%${[req.params.value]}%`, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
}