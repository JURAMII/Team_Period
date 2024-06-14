import React from 'react';
import { Link, useParams } from 'react-router-dom';
// import './CategoryTabs.css'; // 스타일을 위한 CSS 파일

const CategoryTabs = () => {
    const { key } = useParams();
    const categoryMap = {
        noti: '공지사항',
        star: '별빛야행',
        moon: '달빛기행'
    };
    const category = categoryMap[key] || '';

    return (
        <div className="flex">
            <div className='oneDepthBtnWrap'>
                <Link to="/notiList/category/noti" className={`oneDepthBtn ${category === '공지사항' ? 'oneDepthBtnActive' : ''}`}>공지사항</Link>
                <Link to="/notiList/category/star" className={`oneDepthBtn ${category === '별빛야행' ? 'oneDepthBtnActive' : ''}`}>별빛야행</Link>
                <Link to="/notiList/category/moon" className={`oneDepthBtn ${category === '달빛기행' ? 'oneDepthBtnActive' : ''}`}>달빛기행</Link>
            </div>
        </div>
    );
};

export default CategoryTabs;
