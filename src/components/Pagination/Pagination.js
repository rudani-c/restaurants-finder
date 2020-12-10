import './pagination.css';

import React from 'react';

export const Pagination = ({ dataPerPage, totaldata, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totaldata / dataPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <div className="pagination">
                <a onClick={() => paginate(1)}>&laquo;</a>
                {pageNumbers.map((number, index) => {
                    const applyStyle = [];
                    if (index === currentPage - 1) applyStyle.push('active')
                    return (
                        <a className={applyStyle.join(" ")} key={number} onClick={() => paginate(number)} >
                            {number}
                        </a>
                    )
                })}
                <a onClick={() => paginate(pageNumbers.length)}>&raquo;</a>
            </div>
        </nav>
    );
};