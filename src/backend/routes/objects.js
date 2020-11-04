const objectRoutes = (app, fs) => {
  const ITEMS_PER_PAGE = 10;
  const dataPath = './data/generatedData.json';

  app.get('/api/objects/:page', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
          if (err) {
              throw err;
          }
          const page = req.params.page;

          const fullData = JSON.parse(data);

          const fullDataSize = fullData.length;
          const onePageData = fullData.slice(ITEMS_PER_PAGE * (page - 1), ITEMS_PER_PAGE * page);
          res.send({
            data: onePageData,
            fullDataSize,
            itemsPerPage: ITEMS_PER_PAGE
          });
      });
  });

  app.get('/api/objects/:sortBy/:order/:page', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
          if (err) {
              throw err;
          }
          const column = req.params.sortBy;
          const order = req.params.order;
          const page = req.params.page;

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

          const fullSortedData = objects.sort(compareFunc);
          
          const fullSortedDataSize = fullSortedData.length;
          const onePageSortedData = fullSortedData.slice(ITEMS_PER_PAGE * (page - 1), ITEMS_PER_PAGE * page);
          
          res.send({
            data: onePageSortedData,
            fullDataSize: fullSortedDataSize,
            itemsPerPage: ITEMS_PER_PAGE
          });
      });
  });
};

module.exports = objectRoutes;