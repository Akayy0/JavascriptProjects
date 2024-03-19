const getHelloWorld = (req, res) => {
    res.json({ message: 'hello world!' })
};

module.exports = {
    getHelloWorld,
};