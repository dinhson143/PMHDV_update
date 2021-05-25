'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('../db')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM book'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM book WHERE bookID = ?'
        db.query(sql, [req.params.bookId], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let bookId = req.params.bookId;
        let sql = 'UPDATE book SET ? WHERE bookID = ?'

        db.query(sql, [data, bookId], (err, response) => {
            if (err) throw err
            res.json({ message: 'Update success!' })
        })
    },

    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO book SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({ message: 'Insert success!' })
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM book WHERE bookID = ?'
        db.query(sql, [req.params.bookId], (err, response) => {
            if (err) throw err
            res.json({ message: 'Delete success!' })
        })
    },
    search: (req, res) => {
        let sql = "SELECT * FROM book WHERE Title LIKE ?"
        db.query(sql, `%${[req.params.value]}%`, (err, response) => {
            if (err) throw err
            res.json(response)
        })
        
    },

}