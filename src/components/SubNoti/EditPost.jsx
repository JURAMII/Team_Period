import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./CreatePost.css";

const formatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}.${month}.${day}`;
};

const EditPost = ({ posts, setPosts }) => {
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
            navigate('/notiList/category/noti');
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
            '공지사항': 'noti',
            '별빛야행': 'star',
            '달빛기행': 'moon'
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
        navigate(`/notiList/post/${post.id}`);
    };

    const handleCancel = () => {
        navigate(`/notiList/post/${post.id}`);
    };

    return (
        <div className="inner">
            <div className='subNotiTop'>
                <p className='subTopText'>공지사항</p>
            </div>
            <div className='subDefaultContent'>
                <div className='createCategory'>
                    <div className='createPadding'>
                        <label>축제선택</label>
                    </div>
                    <select className='categorySelectNoMedia' value={category} onChange={(e) => setCategory(e.target.value)} required>
                        <option value="공지사항">공지사항</option>
                        <option value="별빛야행">별빛야행</option>
                        <option value="달빛기행">달빛기행</option>
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

export default EditPost;
