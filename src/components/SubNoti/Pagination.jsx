import React from 'react';

// Pagination 컴포넌트: 페이지네이션 UI를 렌더링하고 페이지 이동을 처리합니다.
const Pagination = ({ currentPage, totalPageCount, currentGroup, pageGroupSize, onPageChange, onPreviousGroup, onNextGroup }) => {
    // 현재 그룹의 첫 번째 페이지와 마지막 페이지를 계산합니다.
    const startPage = (currentGroup - 1) * pageGroupSize + 1;
    const endPage = Math.min(startPage + pageGroupSize - 1, totalPageCount);

    // 현재 그룹에 속하는 페이지 번호들을 배열로 저장합니다.
    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex pageBtnWrap">
            <div className='flex buttonDown'>
                {/* 이전 페이지 그룹으로 이동하는 버튼 */}
                <button onClick={onPreviousGroup} disabled={currentGroup === 1}>
                    &lt;
                </button>
                {/* 각 페이지 번호를 렌더링합니다. 현재 페이지는 'active' 클래스를 추가합니다. */}
                {pageNumbers.map(number => (
                    <button
                        key={number}
                        id={number}
                        onClick={() => onPageChange(number)}
                        className={currentPage === number ? 'active' : ''}
                    >
                        {number}
                    </button>
                ))}
                {/* 다음 페이지 그룹으로 이동하는 버튼 */}
                <button onClick={onNextGroup} disabled={endPage === totalPageCount}>
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Pagination;