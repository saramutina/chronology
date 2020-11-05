import './App.css';
import { useState, useEffect } from 'react';
import TableFunc from '../Table/Table';
import ObjectFunc from '../Object/Object';
import PaginationFunc from '../Pagination/Pagination';

function App() {

  const [data, setData] = useState([]);
  const [dataSize, setDataSize] = useState(null);
  const [selectedPage, setSelectedPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const loadData = async () => {
    try {
      const response = await fetch(`/api/objects/${selectedPage}`);
      const jsonResponse = await response.json();
      setData(jsonResponse.data);
      setDataSize(jsonResponse.fullDataSize);
      setItemsPerPage(jsonResponse.itemsPerPage);
    } catch (error) {
      console.log(error);
    }
  };

  const [selectedColumn, setSelectedColumn] = useState(null);
  const [order, setOrder] = useState('');
  const [arrow, setArrow] = useState(null);

  const sortTable = async () => {
    try {
      const response = await fetch(`/api/objects/${selectedColumn}/${order}/${selectedPage}`);
      const jsonResponse = await response.json();
      setData(jsonResponse.data);
      setDataSize(jsonResponse.fullDataSize);
      setItemsPerPage(jsonResponse.itemsPerPage);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectedColumn) {
      sortTable();
    } else {
      loadData();
    }
  }, [selectedPage, selectedColumn, order]);

  const [selectedObject, setSelectedObject] = useState(null);

  const menuBurger = <svg className="top-burger" width="10" height="10" viewBox="0 0 10 10" fill="none">
        <rect width="10" height="2" fill="#696969" />
        <rect y="4" width="10" height="2" fill="#696969" />
        <rect y="8" width="10" height="2" fill="#696969" />
    </svg>

  return (
    <div className="app">
      <div className="yellow box" id="top-rectangle">{menuBurger}</div>
      <div className="flex-container">
        <TableFunc
          data={data}
          selectedObject={selectedObject}
          choseObject={setSelectedObject}
          selectedColumn={selectedColumn}
          setSelectedColumn={setSelectedColumn}
          order={order}
          setOrder={setOrder}
          arrow={arrow}
          setArrow={setArrow}
          sortTable={sortTable}
        />
        <ObjectFunc
          object={selectedObject}
        />
      </div>
      <PaginationFunc
        dataSize={dataSize}
        selectPage={setSelectedPage}
        selectedPage={selectedPage}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
}

export default App;
