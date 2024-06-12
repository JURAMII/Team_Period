import React, { useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './mainNoti.css';
import { posts } from './ResDb';

const MainNoti = () => {
    const [selectedCategory, setSelectedCategory] = useState('공지사항');
    const [categoryKey, setCategoryKey] = useState('noti');

    const filteredPosts = useMemo(() =>
        posts.filter(post => post.category === selectedCategory).slice(0, 5),
        [selectedCategory]
    );

    const handleCategoryClick = useCallback((category, key) => {
        setSelectedCategory(category);
        setCategoryKey(key);
    }, []);

    return (
        <section className="defaultContent flex">
             <div className='gall subDefaultContent'>
            {datas.map((data)=><figure key={data.id}>
                <img src={data.img} alt={data.gallTit} />
                <figcaption className='gall_txt'>
                <b>{data.gallTit}</b>
                <p>{data.gallTxT}</p>                    
                </figcaption>
            </figure>)}
    </div>   
        </section>
    );
};

export default MainNoti;