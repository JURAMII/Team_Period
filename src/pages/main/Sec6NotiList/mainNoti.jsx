import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './mainNoti.css';
import { posts } from './data';

const MainNoti = () => {
    const [selectedCategory, setSelectedCategory] = useState('공지사항');
    const [categoryKey, setCategoryKey] = useState('noti');
    
    const filteredPosts = posts.filter(post => post.category === selectedCategory).slice(0, 5);

    const handleCategoryClick = (category, key) => {
        setSelectedCategory(category);
        setCategoryKey(key);
    };

    return (
        <section className="defaultContent flex notiWrap inner">
            <article className="notiLeft">
                <div className="tagWrap">
                    <span className="tagFont">#별빛야행</span>
                    <span className="tagFont">#달빛기행</span>
                </div>
                <div className="notiOverText">
                    <p>별빛야행과 달빛기행</p>
                    <b>축제의 특별한 소식을</b>
                    <p>확인하세요.</p>
                </div>
            </article>
            <aside className="notiRight">
                <ul className="flex mainNotiName">
                    <li onClick={() => handleCategoryClick('공지사항', 'noti')}>공지사항</li>
                    <li onClick={() => handleCategoryClick('별빛야행', 'star')}>별빛야행</li>
                    <li onClick={() => handleCategoryClick('달빛기행', 'moon')}>달빛기행</li>
                </ul>
                <ul className="mainNotiList">
                    {filteredPosts.map((post) => (
                        <li key={post.id} className="flex notiList" data-key={post.key}>
                            <ul className="flex notiSide">
                                <li className="notiNumber">{post.id}</li>
                                <li className="notiDate">{post.time}</li>
                            </ul>
                            <span className="NotiTitle textEllipsis">
                                <Link to={`/Team_Period/notiList/post/${post.id}`}>
                                    [{post.category}] {post.title}
                                </Link>
                            </span>
                        </li>
                    ))}
                </ul>
                <div className="moveSubNotiWrap flex">
                    <Link to={`/Team_Period/notiList/category/${categoryKey}`}>
                        <input className="moveSubNoti mainBtnSilver" type="button" value="전체보기" />
                    </Link>
                </div>
            </aside>
        </section>
    );
};

export default MainNoti;