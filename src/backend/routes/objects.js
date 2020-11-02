const objectRoutes = (app, fs) => {
    const dataPath = './data/objects.json';

    app.get('/api/objects', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });
};

module.exports = objectRoutes;