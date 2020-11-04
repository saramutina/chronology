const objectRoutes = (app, fs) => {
  const dataPath = './data/generatedData.json';

  app.get('/api/objects', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
          if (err) {
              throw err;
          }

          res.send(JSON.parse(data));
      });
  });

  app.get('/api/objects/:sortBy/:order', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
          if (err) {
              throw err;
          }
          const column = req.params.sortBy;
          const order = req.params.order;
          const objects = JSON.parse(data);
          const compareFunc = (a, b) => {
              if (order === 'ascending') {
                if (a[column] < b[column]) {
                  return -1;
                }
                if (a[column] > b[column]) {
                  return 1;
                }
                return 0;
              }
              if (order === 'descending') {
                if (a[column] < b[column]) {
                  return 1;
                }
                if (a[column] > b[column]) {
                  return -1;
                }
                return 0;
              }
            };
          const sortedObjects = objects.sort(compareFunc);
          
          res.send(sortedObjects);
      });
  });
};

module.exports = objectRoutes;