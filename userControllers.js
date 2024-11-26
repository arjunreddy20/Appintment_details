const db = require("../utility/db");

exports.addUser = (req,res) => {
    const {name,email,phone} = req.body;
    const query = 'INSERT INTO user (name,email,phone) VALUES (?,?,?)';

    db.query(query,[name,email,phone],(err,result) => {
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
}

exports.getUsers = (req,res) => {
    const query = 'SELECT * FROM user';
    db.query(query,(err,results) => {
        if(err){
            console.log(err);
        }
        else{
            res.json(results);
        }
    })
}

exports.deleteUser = (req,res) => {
    const {id} = req.params;
    const query = 'DELETE FROM user WHERE id = ?';

    db.query(query,[id],(err) => {
        if(err){
            console.log(err);
        }else{
            res.send('User deleted');
        }
    })
}

exports.updateUser = (req,res) => {
    const {id} = req.params;
    const {name,email,phone} = req.body;
    
    const query = 'UPDATE user SET name = ?, email = ?, phone = ? WHERE id =?';
    db.query(query,[name,email,phone,id],(err) => {
        if(err){
            console.log(err)
        }

    })
}