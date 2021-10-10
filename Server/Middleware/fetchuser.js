const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

const fetchUser = (req, res, next) => {

    const Token = req.header('auth-token');

    if (!Token) {
        res.status(401).send({ error: "please authenticate using a valid token" })
    }

    try {
        const data = jwt.verify(Token,JWT_SECRET);

        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "please authenticate using a valid token" })
    }
}

module.exports = fetchUser;