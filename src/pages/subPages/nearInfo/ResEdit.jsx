import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "../../../components/SubNoti/CreatePost.css";
import SupTop from '../../../components/common/supTop';

const formatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}.${month}.${day}`;
};

const ResEditPost = ({ posts, setPosts }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const post = posts.find(post => post.id === Number(id));

    const [gallTit, setGallTit] = useState('');
    const [gallTxT, setGallTxT] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('맛집소개');

    useEffect(() => {
        if (post) {
            setGallTit(post.gallTit);
            setGallTxT(post.gallTxT);
            setAuthor(post.author);
            setCategory(post.category);
        } else {
            navigate('/ResLi');
        }
    }, [post, navigate]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (gallTit.length > 25) {
            alert('제목의 최대 글자수는 25자입니다.');
            return;
        }
        if (gallTxT.length > 1500) {
            alert('내용의 최대 글자수는 1500자입니다.');
            return;
        }
        if (author.length > 5) {
            alert('글쓴이의 최대 글자수는 5자입니다.');
            return;
        }
        const categoryKeyMap = {
            '맛집안내': 'res',
        };
        const updatedPost = {
            ...post,
            gallTit,
            gallTxT,
            author,
            category,
            time: formatDate(new Date()),
            key: categoryKeyMap[category]
        };
        const updatedPosts = posts.map(p => p.id === Number(id) ? updatedPost : p);
        setPosts(updatedPosts);
        navigate(`/ResLi/Detail/${post.id}`);
    };

    const handleCancel = () => {
        navigate(`/ResLi/Detail/${post.id}`);
    };

    return (
        <div className="inner">
           <SupTop supTopImg={'subTourInfoTop'} supTopTit={'관광안내'}/>
            <div className='subDefaultContent'>
                <div className='createCategory'>
                    <div className='createPadding'>
                        <label>축제선택</label>
                    </div>
                    <select className='categorySelectNoMedia' value={category} onChange={(e) => setCategory(e.target.value)} required>
                        <option value="맛집안내">맛집안내</option>
                    </select>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='createLine'>
                        <div className='createPadding'>
                            <label>이름</label>
                        </div>
                        <input
                            className='categorySelect'
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            required
                            maxLength={5}
                        />
                    </div>
                    <div className='createLine'>
                        <div className='createPadding'>
                            <label>제목</label>
                        </div>
                        <input
                            className='categorySelectTitle'
                            type="text"
                            value={gallTit}
                            onChange={(e) => setGallTit(e.target.value)}
                            required
                            maxLength={25}
                        />
                    </div>
                    <div>
                        <textarea
                            className='textBox'
                            value={gallTxT}
                            onChange={(e) => setGallTxT(e.target.value)}
                            required
                            maxLength={1500}
                        />
					<div>
						<p className='sFont silverText'>★1500자 이하로 작성부탁드립니다.</p>
					</div>
                    </div>
					<div className='flex subBtnWrap'>
                    	<button className='subBtn' type="button" onClick={handleCancel}>취소</button>
                    	<button className='subBtn' type="submit">저장</button>
					</div>
                </form>
            </div>
        </div>
    );
};

export default ResEditPost;
