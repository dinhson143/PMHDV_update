'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('../db')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM orderdetail WHERE orderID = ?'
        db.query(sql, [req.params.orderID],(err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM orderdetail WHERE orderID = ? AND bookID = ?'
        db.query(sql, [req.params.orderID, req.params.bookID], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let orderID = req.params.orderID;
        let bookID = req.params.bookID;
        let sql = 'UPDATE orderdetail SET ? WHERE orderID = ? AND bookID = ?'
        db.query(sql, [data, orderID, bookID], (err, response) => {
            if (err) throw err
            res.json({ message: 'Update success!' })
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO orderdetail SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({ message: 'Insert success!' })
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM orderdetail WHERE orderID = ? AND bookID = ?'
        db.query(sql, [req.params.orderID, req.params.bookID], (err, response) => {
            if (err) throw err
            res.json({ message: 'Delete success!' })
        })
    },
    search: (req, res) => {
        let sql = "SELECT * FROM orderdetail WHERE bookID LIKE ?"
        db.query(sql, `%${[req.params.value]}%`, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    getByOrderID: (req, res) => {
        let sql = 'SELECT * FROM orderdetail WHERE orderID = ?'
        db.query(sql, [req.params.orderID], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
}