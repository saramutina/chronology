const objectRoutes = require('./objects');

const appRouter = (app, fs) => {
    app.get('/', (req, res) => {
        res.send('Welcome to the development api-server');
    });

    objectRoutes(app, fs);
};

module.exports = appRouter;