

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
        console.log(req.body);
        const data = req.body;
        res.status(200).json({data});
    } catch (error) {
        res.status(500).json("internal server error")        
    }
}

const login = async (req, res) => {
    res
        .status(200)
        .send("This is login page using Controllers");
}


module.exports = {home, register, login};