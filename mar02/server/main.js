// load libraries
const morgan = require('morgan')
const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise')

// SQL
const SQL_SELECT_GENRES = 'select distinct(genre) from genres order by genre asc'

// set the port
const PORT = parseInt(process.env.PORT) || 3000

// configure the database
const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_PORT = parseInt(process.env.DB_PORT) || 3306
const DB_USER = process.env.DB_USER || 'pebbles'
const DB_PASSWORD = process.env.DB_PASSWORD || 'pebbles'
const DB_SCHEMA = process.env.DB_SCHEMA || 'leisure'

// create connection pool
const pool = mysql.createPool({
   host: DB_HOST, pool: DB_PORT,
   user: DB_USER, password: DB_PASSWORD,
   database: DB_SCHEMA,
   connectionLimit: 4
})

// create application
const app = express()

// configure middleware
app.use(morgan('combined'))
app.use(cors())

// Resources
// GET /api/genres
app.get('/genres', async (req, resp) => {

    // get a connection from the pool
    const conn = await pool.getConnection()

    // perform the query, query() returns an array of 2 elements
    // 0 - array of you data, 1 - metadata of the result
    try {
        const [result, _] = await conn.query(SQL_SELECT_GENRES)
        resp.status(200)
            .type('application/json')
            .json(result.map(v => v['genre']))
    } catch(e) {
        console.error('ERROR: ')
        console.dir(e)
        resp.status(500).type('application/json').json({ error: e })
    } finally {
        conn.release()
    }
})

// Start the application
const startApp = async(app, pool) => {
    const conn = await pool.getConnection()
    try {
        // ping
        await conn.ping()
        // release the connection back to the pool
        conn.release()
        // since we can ping, start application
        app.listen(PORT, () => {
            console.info(`Application started on port ${PORT} at ${new Date()}`)
        })
    } catch (e) {
        console.info('Error: ', error)
        process.exit(-1)
    }
}
startApp(app, pool)
