module.exports={
    async register(req, res){
        let { username, password } = req.body;
        let db = req.app.get('db');
        let foundUser = await db.find_user([username]);        
        if (foundUser[0]) return res.status(200).send('Username already in use')
        //insert bycrypt functionality here
        let [createdUser] = await db.new_user([username, password])  
        // req.session.user = {user: createdUser.user_name};
        res.status(200).send({status: 'loggedIn'});
    },

    async login(req, res) {
        let { username, password } = req.body;
        let db = req.app.get('db');
        let foundUser = await db.find_user([username]);        
        if (foundUser[0]) {
            if(foundUser[0].password === password) {res.status(200).send({status: 'loggedIn'})}
            else{res.status(401).send('Incorrect Password')}
        }
        else { res.status(401).send('Username not found')}

    },

}