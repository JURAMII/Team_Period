import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { posts } from '../../main/Sec6NotiList/data';

const formatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}.${month}.${day}`;
};

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('공지사항');
    const navigate = useNavigate();

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
        const newPost = {
            id: posts.length + 1,
            title,
            content,
            author,
            category,
            time: formatDate(new Date()),
            key: categoryKeyMap[category]  // key 값을 category에 따라 설정
        };
        posts.unshift(newPost); // 새로운 게시글을 맨 앞에 추가
        navigate(`/notiList/category/${newPost.key}`);
    };

    const handleCancel = () => {
        navigate('/notiList/category/noti');
    };

    return (
        <div style={{ width: '100%', maxWidth: '1440px', margin: '0 auto', padding: '20px' }}>
            <h2>글쓰기</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>제목</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        maxLength={25}
                    />
                </div>
                <div>
                    <label>내용</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        maxLength={1500}
                    />
                </div>
                <div>
                    <label>글쓴이</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                        maxLength={5}
                    />
                </div>
                <div>
                    <label>카테고리</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                        <option value="공지사항">공지사항</option>
                        <option value="별빛야행">별빛야행</option>
                        <option value="달빛기행">달빛기행</option>
                    </select>
                </div>
                <button type="button" onClick={handleCancel}>취소</button>
                <button type="submit">저장</button>
            </form>
        </div>
    );
};

export default CreatePost;