import Table from 'react-bootstrap/Table';
import './Table.css';

function TableFunc({ data, choseObject, selectedColumn, setSelectedColumn, order, setOrder, arrow, setArrow, sortTable}) {
    
    const handleClick = (columnName) => {
        if (selectedColumn === columnName && order === 'ascending') {
            setOrder('descending');
            setArrow('▲');
        } else {
            setSelectedColumn(columnName);
            setOrder('ascending');
            setArrow('▼');
        }
    };

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