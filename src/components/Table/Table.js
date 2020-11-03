import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import './Table.css';

function TableFunc({choseObject}) {

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
                <th className="dark">Событие</th>
                <th className="light">Результат</th>
                <th className="dark">Объект</th>
                <th className="light">Пользователь</th>
                <th className="dark">Описание события</th>
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