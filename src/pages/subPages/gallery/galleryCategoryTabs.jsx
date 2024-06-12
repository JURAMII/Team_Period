import React from 'react';
import { Link, useParams } from 'react-router-dom';

const galleryCategoryTabs = () => {
    const { key } = useParams();
    const galleryCategoryMap = {
        starLigth: '별빛야행',
        moonLight: '달빛기행'
    };
    const category = galleryCategoryMap[key] || '별빛야행';

    return (
        <div className="flex">
            <div className='oneDepthBtnWrap'>
                <Link to="/Gallery/category/starLigth" className={`oneDepthBtn ${category === '별빛야행' ? 'oneDepthBtnActive' : ''}`}>축제후기</Link>
                <Link to="/Gallery/category/moonLight" className={`oneDepthBtn ${category === '달빛기행' ? 'oneDepthBtnActive' : ''}`}>축제사진</Link>
            </div>
        </div>
    );
};

export default galleryCategoryTabs;