import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import './Table.css';
import Object from '../Object/Object';

function TableFunc() {

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

    return (
        <Table striped bordered hover>
            <thead>
                <th>Событие</th>
                <th>Результат</th>
                <th>Объект</th>
                <th>Пользователь</th>
                <th>Описание события</th>
            </thead>
            <tbody>
                {data.map((object) =>
                    <tr>
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