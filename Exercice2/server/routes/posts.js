const express = require('express');
const mysqlConnection = require("../connection");
const router = express.Router();

//préparation des requêtes
const query_get_posts = "select * from post";
const query_get_post = "select * from post where id = ?";
const query_get_comments = "select * from post inner join comment on post.id = comment.post_id and comment.post_id = ? ";
const query_add_posts = "INSERT INTO post (title,description) values (?,?)";

//obtenir les posts qui sont stockés dans la base de données 
router.get("/posts", (req, res) => {
    try{
        mysqlConnection.query(query_get_posts,[], (err, rows, fields)=>{
            if(!err){
                res.send(rows);
            }
            else {
                res.status(500).send(err);
            }
        })
    } catch {
        res.status(500).send({message: "Erreur"});
    }
});


//ajouter un post 
router.post("/post", (req, res) => {
    try{
        mysqlConnection.query(query_add_posts,[req.body.title,req.body.description], (err, rows, fields)=>{
            if(!err){
                res.send(rows);
            }
            else {
                res.status(500).send(err);
            }
        })
    } catch {
        res.status(500).send({message: "Erreur"});
    }
});

//obtenir les posts qui sont stocké dans la base
router.get("/posts/:id", (req, res) => {
    try{
        mysqlConnection.query(query_get_post,[req.params.id], (err, rows, fields)=>{
            if(!err){
                res.send(rows);
            }
            else {
                res.status(500).send(err);
            }
        })
    } catch {
        res.status(500).send({message: "Erreur"});
    }
});

//obtenir les posts qui sont stocké dans la base
router.get("/posts/:id/comments", (req, res) => {
    try{
        mysqlConnection.query(query_get_comments,[req.params.id], (err, rows, fields)=>{
            if(!err){
                res.send(rows);
            }
            else {
                res.status(500).send(err);
            }
        })
    } catch {
        res.status(500).send({message: "Erreur"});
    }
});

module.exports = router;