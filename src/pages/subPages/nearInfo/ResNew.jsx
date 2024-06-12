import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { posts1 } from './qnaData';
import "../../../components/SubNoti/CreatePost.css"
import SupTop from '../../../components/common/supTop';
import FaqDep from './faqDep';

const formatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}.${month}.${day}`;
};

const ResPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('맛집안내');
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
            '맛집안내': 'res',
        };
        const newPost = {
            id: posts1.length + 1,
            title,
            content,
            author,
            category,
            time: formatDate(new Date()),
            key: categoryKeyMap[category]  // key 값을 category에 따라 설정
        };
        posts1.unshift(newPost); // 새로운 게시글을 맨 앞에 추가
        navigate(`/ResInfo/category/${newPost.key}`);
    };

    const handleCancel = () => {
        navigate('/ResInfo/category/res');
    };

    return (
		<div className="inner">
		 <SupTop supTopImg={'subSupportTop'} supTopTit={'맛집안내'}/>
         <FaqDep one={2}/>
        <div className='subDefaultContent'>
			    <div className='createCategory'>
                    <div className='createPadding'>
						<label>항목선택</label>
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
						// 반드시 들어가야 다음으로 진행
                        maxLength={5}
						// 글자수제한
                    />
                </div>
                <div className='createLine'>
					<div className='createPadding'>
                    	<label>제목</label>
					</div>
                    <input
						className='categorySelect'
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

export default ResPost;