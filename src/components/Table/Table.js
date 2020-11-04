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
    const handleClick = (columnName) => {
        if (selectedColumn === columnName && order === 'ascending') {
            setOrder('descending');
            sortTable(columnName, 'descending');
        } else {
            setSelectedColumn(columnName);
            setOrder('ascending');
            sortTable(columnName, 'ascending');
        }
    }

    useEffect(() => { loadData() },
        []);

    return (
        <Table striped bordered hover>
            <thead>
                <th
                    onClick={() => handleClick('event')}
                    className="dark"
                >Событие</th>
                <th
                    onClick={() => handleClick('result')}
                    className="light"
                >Результат</th>
                <th
                    onClick={() => handleClick('object')}
                    className="dark"
                >Объект</th>
                <th
                    onClick={() => handleClick('privelegeOwner')}
                    className="light"
                >Пользователь</th>
                <th
                    onClick={() => handleClick('description')}
                    className="dark"
                >Описание события</th>
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