import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { resposts } from './ResDb';
import SupTop from '../../../components/common/supTop';
import "../../../components/SubNoti/CreatePost.css"

const formatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}.${month}.${day}`;
};

const ResPost = () => {
    const [gallTit, setGallTit] = useState('');
    const [gallTxT, setGallTxT] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('맛집소개');
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate();

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
        if (!selectedImage) {
            alert('이미지를 선택해주세요.');
            return;
        }
        const categoryKeyMap = {
            '맛집소개': 'res',
        };
        const newPost = {
            id: resposts.length + 1,
            gallTit,
            gallTxT,
            author,
            category,
            img: URL.createObjectURL(selectedImage),
            time: formatDate(new Date()),
            key: categoryKeyMap[category]  // key 값을 category에 따라 설정
        };

        resposts.unshift(newPost); // 새로운 게시글을 맨 앞에 추가
        navigate(`/ResLi/category/${newPost.key}`);
    };

    const handleCancel = () => {
        navigate('/ResLi/category/res');
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedImage(e.target.files[0]);
        }
    };

    return (
		<div className="inner">
		 <SupTop supTopImg={'subTourInfoTop'} supTopTit={'맛집소개'}/>
        <div className='subDefaultContent'>
			    <div className='createCategory'>
                    <div className='createPadding'>
						<label>항목선택</label>
					</div>
                    <select className='categorySelectNoMedia' value={category} onChange={(e) => setCategory(e.target.value)} required>
                        <option value="맛집소개">맛집소개</option>
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
						className='categorySelectTitle'
                        type="text"
                        value={gallTit}
                        onChange={(e) => setGallTit(e.target.value)}
                        required
                        maxLength={25}
                    />
                </div>
                <div className='createLine'>
                        <div className='createPadding'>
                            <label>이미지</label>
                        </div>
                        <input
                            className='categorySelectTitle'
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            required
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

export default ResPost;