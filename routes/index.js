module.exports = {
    getHomePage: (req, res) => {
        let query = "SELECT * FROM `Books`"; // query database to get all the players

        // Get all from test 
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.json({data:result});
        });
    },
};