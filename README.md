# node-express-mysql-mvc
simple rest API using MVC pattern with node, express,mysql
# Create ,Read,Update and Delete using Node.js, Express.js,and Mysql
- clone the repo
- run npm install
- create a .env for connecting to the database
    -- MYSQL_HOST=
    -- MYSQL_USER=
    -- MYSQL_PASSWORD=
    -- MYSQL_DATABASE=notes_app
-create Database to phpmyadmin notes_app and import the notesdb.sql located inside the DATABASE directory
- npm run dev
# endpoints
- get all notes
  - localhost:5000/notes
- get single note
  - localhost:5000/notes/{note Id}
- create a note
  - localhost:5000/notes
- update a note
  - localhost:5000/notes/{id}/update


