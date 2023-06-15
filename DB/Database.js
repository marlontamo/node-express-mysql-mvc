const mysql = require('mysql2/promise')
const dotenv = require('dotenv')
dotenv.config()
// const express =require('express')
// const router = express.Router()

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'notes_app'
})
exports.getNotes= async() =>{
    const[rows] = await pool.query('Select * from notes')
    return rows
},
exports.getSingleNote = async(id) =>{
    const [rows] = await pool.query(`SELECT * FROM notes WHERE id = ?`, [id])
  return rows[0]
    
},
exports.createNote = async(title,contents) =>{
    const [result] = await pool.query(`INSERT INTO notes (title, contents)VALUES (?, ?)`, [title, contents])
  const id = result.insertId
  return getNote(id)
}