
let todos = [
    {
        id : 1,
        title: "bangun pagi",
        isDone: true
    },
    {
        id : 2,
        title: "sholat subuh",
        isDone: false
    },
    {
        id : 3,
        title: "lari pagi",
        isDone: false
    }
]


//get Todos
exports.getTodos = async (req, res) => {
    try {
        res.send({
            status: "success",
            data: todos.length > 0 ? todos : {message : "no data"}
        }) 
    } catch (error) {
        console.log(error)
        res.send({
            status: "Failed",
            message: "server error"
        })
    }
}

//get todo by id
exports.getTodo = async (req, res) => {
    try {
        const {id} = req.params
        const data = todos.find((item) => item.id == id)
        !data ? (
            res.send({
                status: "failed",
                message: "no data"
            })
        ):(
            res.send({
                status: "success",
                data
            })
        )
    } catch (error) {
        console.log(error)
        res.send({
            status: "Failed",
            message: "server error"
        })
    }
}

//add todo
exports.addTodo = async (req, res) => {
    try {
        todos.push(req.body)

        res.send({
            status: "success",
            data: req.body
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: "failed",
            message: "server error"
        })
    }
}

//update todo
exports.updateTodo = async (req, res) => {
    try {
        const {id} = req.params
        let change = false
        todos = todos.map(todo => {
            if (todo.id == id) {
                change = true
                return req.body
            }else{
                return todo
            }
        })

        if (change == true) {
            res.send({
                status: "success",
                message: `change data success`
            })  
        }else{
            res.send({
                status: "failed",
                message: `no data change`
            }) 
        }

    } catch (error) {
        console.log(error)
        res.send({
            status : "failed",
            message: "server error"
        })
    }
}

//delete todo

exports.deleteTodo = async (req, res) => {
    try {
        const {id} = req.params
        let change = false

        todos = todos.filter(todo => {
            todo.id == id? change = true: change = false

            return todo.id != id
        })

        !change? (
            res.send({
                status: "failed",
                message: "no data change"
            })
        ):(
            res.send({
                status: "success",
                message: "data has change"
            })
        )
    } catch (error) {
        console.log(error)
        res.send({
            status : "failed",
            message: "server error"
        })
    }
}