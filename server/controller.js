


module.exports = {

    create: (req, res) => {
        const db = req.app.get('db')
        const {username, password, img} = req.body
        db.create_user([username, password, img]).then((newUser) => {
            res.status(200).send(newUser)
        }).catch(err => {
            console.log(err)
        })
    },

    login: (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        db.check_user([username]).then((user) => {
            res.status(200).send(user)
        }).catch(err => {
            console.log(err)
        })
    },

    getAll: (req, res) => {
        
        const db = req.app.get('db')
        db.get_all_posts().then((response) =>{
            res.status(200).send(response)
        }).catch(err => {
            console.log(err)
        })
    },

    getOne: (req,res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.get_post([id]).then((post) => {
            res.status(200).send(post)
        }).catch(err => {
            console.log(err)
        })
    },

    createPost: (req, res) => {
        const db = req.app.get('db')
        const {title, img, content, id} = req.body
        
        db.create_post([title, img, content, id]).then((response) => {
            res.status(200).send(response)
        }).catch(err => {
            console.log(err)
        })
    }
}