const express = require ("express");
let mysql = require("mysql2");
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({extended:true})),

app.get('/', (req,res) => {
    res.send("hello world");
})

app.listen(PORT, () => {
    console.log('server is running on port${PORT}');
})

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Akusukses15!',
    database: 'biodata',
    port: 3306
})

db.connect((err)=> {
    if(err){
        console.error('error connecting to database:' + err.stack);
        return;
    }
    console.log('connection successfully');
})

app.get('/api/users', (req, res) => {
    db.query('SELECT * FROM users',(err, results) => { 
        if (err) {
            console.error('error executing query: '+ err.stack);
            res.status(500).send('error fetching users');
            return;
        }
        res.json(results);
    })
 })