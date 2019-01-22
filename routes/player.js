const fs = require('fs');

module.exports = {
    
    // Get book with specific id
    books: (req, res) => {
        let id = req.params.id;
        let query = "SELECT * FROM `Books` WHERE id = '" + id + "' ";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.json( {data:result});
        });
    },
    //Get book with specific name
    get: (req, res) =>{
        let name = req.query.name;
        let query = "SELECT * FROM `Books` WHERE name = '" +name+ "' ";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.json( {data:result});
            console.log(name);
        });
    },



    // Get all from test table

    test: (req, res) => {
        let query = "SELECT * FROM `test`";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.json( {data:result});
        });

    },

    // Insert into test table

    insert: (req, res) => {
        let prva = req.body.prva;
        let druga = req.body.druga;
        //let query = "INSERT INTO test (prva, druga) VALUES ('Michelle', 'Blue Village ')";
        let query = "INSERT INTO test (prva, druga) VALUES ('"+prva+"' , '"+druga+ "')";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/test');
        });
    },

    //Update test table

    update: (req, res) => {
        let prva=req.body.prva;
        let prva1=req.query.prva;
        let query = "UPDATE test SET prva = '"+prva+"' WHERE prva = '"+prva1+"' ";
        db.query(query, (err,result) =>{
            if(err){
                return res.status(500).send(err);
            }
            res.redirect('/test');
        });
    },

    //Delete from test table 

    dele: (req, res) => {
        let prva = req.query.prva; 
        let query = "DELETE FROM test WHERE prva = '"+prva+"' ";
        db.query(query, (err, result) =>{
            if (err){
                return res.status(500).send(err);
            }
            res.redirect('/test');
        });
    }



    
};
