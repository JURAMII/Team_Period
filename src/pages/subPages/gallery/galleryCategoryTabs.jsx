import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

const GalleryCategoryTabs = () => {
    const location = useLocation();

    // 카테고리와 URL 경로를 기반으로 버튼 활성화 상태를 결정합니다.
    const [isCategoryActive, setIsCategoryActive] = useState(false);
    const [isCategory2Active, setIsCategory2Active] = useState(false);

    // URL 경로에 따라 초기 상태 설정
    useEffect(() => {
        if (location.pathname.includes('/category2')) {
            setIsCategory2Active(true);
            setIsCategoryActive(false);
        } else if (location.pathname.includes('/category')) {
            setIsCategoryActive(true);
            setIsCategory2Active(false);
        }
    }, [location.pathname]);

    // 카테고리 버튼 클릭 시 활성화 상태를 업데이트하는 함수
    const handleCategoryClick = () => {
        setIsCategoryActive(true);
        setIsCategory2Active(false);
    };

    // 카테고리2 버튼 클릭 시 활성화 상태를 업데이트하는 함수
    const handleCategory2Click = () => {
        setIsCategoryActive(false);
        setIsCategory2Active(true);
    };

    return (
        <div className="flex">
            <div className='oneDepthBtnWrap'>
                {/* '축제사진' 링크: 기본적으로 starLigth로 이동하고, 현재 URL이 /category일 때 활성화 */}
                <Link 
                    to="/Gallery/category/starLigth" 
                    className={`oneDepthBtn ${isCategoryActive ? 'oneDepthBtnActive' : ''}`}
                    onClick={handleCategoryClick}
                >
                    축제사진
                </Link>
                {/* '축제후기' 링크: 기본적으로 starLigth로 이동하고, 현재 URL이 /category2일 때 활성화 */}
                <Link 
                    to="/Gallery/category2/starLigth" 
                    className={`oneDepthBtn ${isCategory2Active ? 'oneDepthBtnActive' : ''}`}
                    onClick={handleCategory2Click}
                >
                    축제후기
                </Link>
            </div>
        </div>
    );
};

export default GalleryCategoryTabs;




