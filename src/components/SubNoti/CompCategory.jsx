import React from 'react';
import { Link } from 'react-router-dom';
// import "./CategoryTabs.css"; // 스타일을 위한 CSS 파일

const CategoryTabs = ({ activeCategory, categoryMap }) => {
    const category = categoryMap[activeCategory] || '공지사항';

    return (
        <div className="flex">
            <div className='oneDepthBtnWrap'>
                {Object.keys(categoryMap).map((key) => (
                    <Link 
                        key={key}
                        to={`/notiList/category/${key}`}
                        className={`oneDepthBtn ${activeCategory === key ? 'oneDepthBtnActive' : ''}`}
                    >
                        {categoryMap[key]}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryTabs;