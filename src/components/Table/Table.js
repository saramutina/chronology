import Table from 'react-bootstrap/Table';
import './Table.css';

function TableFunc() {

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
                <tr>
                    <td>Загрузка нового файла</td>
                    <td>Доступ запрещен</td>
                    <td>Объектный объект</td>
                    <td>Пользователь Апполинарий Петрович</td>
                    <td>Загружен новый файл</td>
                </tr>
                <tr>
                    <td>Загрузка нового файла</td>
                    <td>Доступ запрещен</td>
                    <td>Объектный объект</td>
                    <td>Пользователь Апполинарий Петрович</td>
                    <td>Загружен новый файл</td>
                </tr>
                <tr>
                    <td>Загрузка нового файла</td>
                    <td>Доступ запрещен</td>
                    <td>Объектный объект</td>
                    <td>Пользователь Апполинарий Петрович</td>
                    <td>Загружен новый файл</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default TableFunc;