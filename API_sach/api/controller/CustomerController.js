'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('../db')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM customer'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM customer WHERE CustomerID = ?'
        db.query(sql, [req.params.customerID], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let customerID = req.params.customerID;
        let sql = 'UPDATE customer SET ? WHERE CustomerID = ?'
        db.query(sql, [data, customerID], (err, response) => {
            if (err) throw err
            res.json({ message: 'Update success!' })
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO customer SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({ message: 'Insert success!' })
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM customer WHERE CustomerID = ?'
        db.query(sql, [req.params.customerID], (err, response) => {
            if (err) throw err
            res.json({ message: 'Delete success!' })
        })
    },
    search: (req, res) => {
        let sql = "SELECT * FROM customer WHERE Name LIKE ?"
        db.query(sql, `%${[req.params.value]}%`, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
}