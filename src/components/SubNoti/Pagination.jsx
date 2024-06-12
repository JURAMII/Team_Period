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

// 본인페이지로 가져가서 사용할 경우 반드시 본인이 사용할 Data의 Key값이나 속성값을 지정해줘야하며
// 이하에 있는 모든 코드는 내가 적용하고자 하는 곳에 가져가서 사용할 것을 권장한다.
    
/*주석 시작 주석 제거하고 사용할 것	
	// 페이지네이션을 위한 상태를 정의
    const postsPerPage = 10; // 한 페이지에 노출될 게시물 수

    // 현재 페이지에 해당하는 게시물의 인덱스를 계산
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    // 페이지 번호를 클릭했을 때 실행되는 핸들러
    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // 이전 페이지 그룹으로 이동하는 핸들러
    const handlePreviousGroup = () => {
        if (currentGroup > 1) {
            setCurrentGroup(currentGroup - 1);
            setCurrentPage((currentGroup - 2) * pageGroupSize + 1);
        }
    };

    // 다음 페이지 그룹으로 이동하는 핸들러
    const handleNextGroup = () => {
        if (currentGroup * pageGroupSize < Math.ceil(filteredPosts.length / postsPerPage)) {
            setCurrentGroup(currentGroup + 1);
            setCurrentPage(currentGroup * pageGroupSize + 1);
        }
    };

    // 총 페이지 수를 계산
    const totalPageCount = Math.ceil(filteredPosts.length / postsPerPage);
주석 끝 주석 제거하고 사용할 것*/

// 리턴에서 사용할 컴퍼넌트 넣는방법

/*
Pagination 임포트
import Pagination from './Pagination(경로 변경해서 쓸 것)';

<Pagination 
currentPage={currentPage}
totalPageCount={totalPageCount}
currentGroup={currentGroup}
pageGroupSize={pageGroupSize}
onPageChange={handleClick}
onPreviousGroup={handlePreviousGroup}
onNextGroup={handleNextGroup}
/>
*/

export default Pagination;
