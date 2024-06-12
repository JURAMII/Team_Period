import React from 'react';
import { Link } from 'react-router-dom';
// import "./CategoryTabs.css"; // 스타일을 위한 CSS 파일

const CategoryTabs = ({ activeCategory, categoryMap }) => {
    const category = categoryMap[activeCategory] || '본인 카테고리 초기값';
	// categoryMap경우 본인이 사용할 페이지에서 호출할 때 예제로
	/*
	    const categoryMap = {
        noti: '공지사항',
        star: '별빛야행',
        moon: '달빛기행'
    };
	이런식으로 호출후에 

	 <CategoryTabs 
                activeCategory={activeCategory}
                categoryMap={categoryMap}
				/>
				이런식으로 담아서 전달해 주면 컴퍼넌트 안에서 사용이 가능해진다.
	*/

    return (
        <div className="flex">
            <div className='oneDepthBtnWrap'>
                {Object.keys(categoryMap).map((본인이분류하고자하는키) => (
                    <Link 
                        key={본인이분류하고자하는키}
                        to={`/notiList/category/${category}`}
                        className={`oneDepthBtn ${activeCategory === 본인이분류하고자하는키 ? 'oneDepthBtnActive' : ''}`}
                    >
                        {categoryMap[본인이분류하고자하는키]}
						{/* 커스텀 카테고리 */}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryTabs;