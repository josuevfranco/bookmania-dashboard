const express = require('express')
const routes = express.Router()


routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('SELECT COUNT(id) total FROM books', (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})


routes.get('/users', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('SELECT COUNT(id) usuarios FROM users', (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

routes.get('/last', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('SELECT name FROM users ORDER BY id DESC LIMIT 1', (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})


routes.get('/producto', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('SELECT title FROM books ORDER BY id DESC LIMIT 1', (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})


module.exports = routes