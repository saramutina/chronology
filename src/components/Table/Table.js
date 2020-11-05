import Table from 'react-bootstrap/Table';
import './Table.css';

function TableFunc({ data, selectedObject, choseObject, selectedColumn, setSelectedColumn, order, setOrder, arrow, setArrow, sortTable }) {

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

    const menuBurger = <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <rect width="10" height="2" fill="#696969" />
        <rect y="4" width="10" height="2" fill="#696969" />
        <rect y="8" width="10" height="2" fill="#696969" />
    </svg>

    return (
        <div className="background" >
            <Table hover>
                <thead>
                    <th
                        onClick={() => handleClick('event')}
                        className="dark"
                    >
                        Событие {selectedColumn === 'event' ? arrow : null}
                        {menuBurger}
                    </th>
                    <th
                        onClick={() => handleClick('result')}
                        className="light"
                    >
                        Результат {selectedColumn === 'result' ? arrow : null}
                        {menuBurger}
                    </th>
                    <th
                        onClick={() => handleClick('object')}
                        className="dark"
                    >
                        Объект {selectedColumn === 'object' ? arrow : null}
                        {menuBurger}
                    </th>
                    <th
                        onClick={() => handleClick('privelegeOwner')}
                        className="light"
                    >
                        Пользователь {selectedColumn === 'privelegeOwner' ? arrow : null}
                        {menuBurger}
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
                        <tr onClick={() => choseObject(object)} key={object.id} className={selectedObject && selectedObject.id === object.id ? 'selected' : ''} >
                            <td>{object.event}</td>
                            <td>{object.result}</td>
                            <td>{object.object}</td>
                            <td>{object.privelegeOwner}</td>
                            <td>{object.description}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
}

export default TableFunc;