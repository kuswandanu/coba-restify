var restify = require('restify');

var server = restify.createServer();

server.get('/', function (req, res, next) {
    res.send(`server created at ${process.env.IP}:${process.env.PORT}`)
    return next();
});

server.listen(process.env.PORT || 8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});
