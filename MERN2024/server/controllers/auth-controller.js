

const home = async (req, res) => {
    try {
        res
        .status(200)
        .send("Welcome to Home page Using Router This is priti here"
        );
    } catch (error) {
        console.log(error)
    }
}


module.exports = {home};