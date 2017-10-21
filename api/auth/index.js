module.exports = function(req, res, next) {
    if (req.headers.token === "meu token")
        return next();
    return res.status(401).send('não autorizado');
};