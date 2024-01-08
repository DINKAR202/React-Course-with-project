

const home = async (req, res) => {
    try {
        res
        .status(200)
        .send(
            "Welcome to Home page Using Controllers This is priti here"
        );
    } catch (error) {
        console.log(error)
    }
}

// Register logic

const register = async (req, res) => {
    try {
        res
            .status(200)
            .send("Welcome to Register page Using Controllers");
    } catch (error) {
        res.status(400).send({msg:"page not found"})        
    }
}

const login = async (req, res) => {
    res
        .status(200)
        .send("This is login page using Controllers");
}


module.exports = {home, register, login};