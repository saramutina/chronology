import './App.css';
import { useState } from 'react';
import TableFunc from '../Table/Table';
import ObjectFunc from '../Object/Object';

function App() {
  const [selectedObject, setSelectedObject] = useState(null);

  return (
    <div className="app">
      <div className="yellow box" id="top-rectangle"></div>
      <div className="flex-container">
        <TableFunc choseObject={setSelectedObject} />
        <ObjectFunc object={selectedObject} />
      </div>
    </div>
  );
}

export default App;
