import React from 'react';

const SearchBar = ({ searchField, setSearchField, searchTerm, setSearchTerm, onSearch }) => {
    return (
        <div className="flex searchWrap">
            <select className='subSearchName' onChange={(e) => setSearchField(e.target.value)} value={searchField}>
                <option value="gallTit">제목</option>
                <option value="gallTxT">내용</option>
            </select>
            <input
                className='subSearch'
                type="text"
                placeholder="검색어를 입력하세요"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={onSearch} className="subSearchBtn">
                {/* 돋보기 아이콘은 common.css에 설정되어있음 */}
            </button>
        </div>
    );
};

export default SearchBar;