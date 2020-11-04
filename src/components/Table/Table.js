import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import './Table.css';

function TableFunc({ choseObject }) {

    const [data, setData] = useState([]);
    const loadData = async () => {
        try {
            const response = await fetch('/api/objects');
            const jsonResponse = await response.json();
            setData(jsonResponse);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => { loadData() },
        []);

    const sortTable = async (column, order) => {
        try {
            const response = await fetch(`/api/objects/${column}/${order}`);
            const jsonResponse = await response.json();
            setData(jsonResponse);
        } catch (error) {
            console.log(error);
        }
    };

    const [selectedColumn, setSelectedColumn] = useState(null);
    const [order, setOrder] = useState('');
    const [arrow, setArrow] = useState(null);
    const handleClick = (columnName) => {
        if (selectedColumn === columnName && order === 'ascending') {
            setOrder('descending');
            setArrow('▲');
            sortTable(columnName, 'descending');
        } else {
            setSelectedColumn(columnName);
            setOrder('ascending');
            setArrow('▼');
            sortTable(columnName, 'ascending');
        }
    }

    return (
        <Table striped bordered hover>
            <thead>
                <th
                    onClick={() => handleClick('event')}
                    className="dark"
                >
                    Событие {selectedColumn === 'event' ? arrow : null}
                </th>
                <th
                    onClick={() => handleClick('result')}
                    className="light"
                >
                    Результат {selectedColumn === 'result' ? arrow : null}
                </th>
                <th
                    onClick={() => handleClick('object')}
                    className="dark"
                >
                    Объект {selectedColumn === 'object' ? arrow : null}
                </th>
                <th
                    onClick={() => handleClick('privelegeOwner')}
                    className="light"
                >
                    Пользователь {selectedColumn === 'privelegeOwner' ? arrow : null}
                </th>
                <th
                    onClick={() => handleClick('description')}
                    className="dark"
                >
                    Описание события {selectedColumn === 'description' ? arrow : null}
                </th>
            </thead>
            <tbody>
                {data.map((object) =>
                    <tr onClick={() => choseObject(object)}>
                        <td>{object.event}</td>
                        <td>{object.result}</td>
                        <td>{object.object}</td>
                        <td>{object.privelegeOwner}</td>
                        <td>{object.description}</td>
                    </tr>
                )}
            </tbody>
        </Table>
    );
}

export default TableFunc;