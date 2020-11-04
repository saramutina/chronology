import Pagination from 'react-bootstrap/Pagination';

function PaginationFunc({ dataSize, selectPage, selectedPage, itemsPerPage }) {

    let buttons = [];
    const pagesCount = Math.ceil(dataSize / itemsPerPage);

    const handleClick = (pageNum) => {
        selectPage(pageNum);
    };

    for (let i = 1; i <= pagesCount; i++) {
        buttons.push(
            <Pagination.Item key={i} active={i === selectedPage} onClick={() => handleClick(i)}>
                {i}
            </Pagination.Item>
        );
    }

    return (
        <Pagination>
            {buttons}
        </Pagination>
    )
};

export default PaginationFunc;