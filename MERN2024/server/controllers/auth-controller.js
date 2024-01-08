

const home = async (req, res) => {
    try {
        res
        .status(200)
        .send(
            "Welcome to Home page Using Router This is priti here"
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
            .send("Welcome to Register page Using Router");
    } catch (error) {
        res.status(400).send({msg:"page not found"})        
    }
}


module.exports = {home, register};