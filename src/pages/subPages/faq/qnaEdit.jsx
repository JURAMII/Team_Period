import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "../../../components/SubNoti/CreatePost.css";
import SupTop from '../../../components/common/supTop';
import FaqDep from './faqDep';
import './qnaCreate.css'

const formatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}.${month}.${day}`;
};

const QnaEditPost = ({ posts, setPosts }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const post = posts.find(post => post.id === Number(id));

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('공지사항');

    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setContent(post.content);
            setAuthor(post.author);
            setCategory(post.category);
        } else {
            navigate('/QnaList/category/qna');
        }
    }, [post, navigate]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (title.length > 25) {
            alert('제목의 최대 글자수는 25자입니다.');
            return;
        }
        if (content.length > 1500) {
            alert('내용의 최대 글자수는 1500자입니다.');
            return;
        }
        if (author.length > 5) {
            alert('글쓴이의 최대 글자수는 5자입니다.');
            return;
        }
        const categoryKeyMap = {
            '묻고 답하기': 'qna',
        };
        const updatedPost = {
            ...post,
            title,
            content,
            author,
            category,
            time: formatDate(new Date()),
            key: categoryKeyMap[category]
        };
        const updatedPosts = posts.map(p => p.id === Number(id) ? updatedPost : p);
        setPosts(updatedPosts);
        navigate(`/QnaList/post/${post.id}`);
    };

    const handleCancel = () => {
        navigate(`/QnaList/post/${post.id}`);
    };

    return (
        <div className="inner">
           <SupTop supTopImg={'subSupportTop'} supTopTit={'고객지원'}/>
           <FaqDep one={2}/>
            <div className='qnaCreateWrap'>
                <div className='createCategory none'>
                    <div className='createPadding'>
                        <label>축제선택</label>
                    </div>
                    <select className='categorySelectNoMedia' value={category} onChange={(e) => setCategory(e.target.value)} required>
                        <option value="묻고 답하기">묻고 답하기</option>
                    </select>
                </div>
                <form onSubmit={handleSubmit} className='borderTop2'>
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
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            maxLength={25}
                        />
                    </div>
                    <div>
                        <textarea
                            className='textBox'
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                            maxLength={1500}
                        />
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

export default QnaEditPost;
