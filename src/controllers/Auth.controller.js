
const bcrypt = require('bcrypt');

const verifyToken = (endIdFailed) => {
    return (req, res, next) => {
        try {
            isAuthorised = true;

            if (endIdFailed) {
                (isAuthorised) ? next() : res.status(401).json({ msg: 'Token Invalid' });
            } else {
                req.app.locals.isAuthorised = isAuthorised;
                next();
            }

        } catch (err) {
            console.log(err);
            res.status(500).send('Servier Error')
        }
    }

}

module.exports = { verifyToken }
