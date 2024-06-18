import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../../components/SubNoti/CreatePost.css";

const formatDate = (image) => {
    const year = image.getFullYear();
    const month = image.getMonth() + 1;
    const day = image.getDate();
    return `${year}.${month}.${day}`;
};

const Create2GalleryPost = ({ images, setImages }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [user, setUser] = useState('');
    const [category, setCategory] = useState('별빛야행');
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate();

    const handleSubmit2 = (event) => {
        event.preventDefault();
        if (title.length > 25) {
            alert('제목의 최대 글자수는 25자입니다.');
            return;
        }
        if (content.length > 1500) {
            alert('내용의 최대 글자수는 1500자입니다.');
            return;
        }
        if (user.length > 5) {
            alert('글쓴이의 최대 글자수는 5자입니다.');
            return;
        }
        if (!selectedImage) {
            alert('이미지를 선택해주세요.');
            return;
        }
        const categoryKeyMap = {
            '별빛야행': 'starLigth',
            '달빛기행': 'moonLight'
        };
        const newPost = {
            id: images.length + 2,
            title,
            content,
            user,
            category2: '축제후기', // category를 축제후기로 설정
            src: URL.createObjectURL(selectedImage),
            time: formatDate(new Date()),
            key: categoryKeyMap[category]
        };
        setImages([newPost, ...images]); // 새로운 게시글을 맨 앞에 추가
        navigate(`/gallery/category2/${newPost.key}`);

        console.log(categoryKeyMap)
        console.log(categoryKeyMap[category])
        console.log(newPost)
        console.log(newPost.key)
    };

    const handleCancel = () => {
        navigate(-1); // 이전 페이지로 이동
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedImage(e.target.files[0]);
        }
    };

    return (
        <div className="inner">
            <div className='subNotiTop'>
                <p className='subTopText'>갤러리</p>
            </div>
            <div className='subDefaultContent'>
                <div className='createCategory'>
                    <div className='createPadding'>
                        <label>축제선택</label>
                    </div>
                    <select className='categorySelectNoMedia' value={category} onChange={(e) => setCategory(e.target.value)} required>
                        <option value="별빛야행">별빛야행</option>
                        <option value="달빛기행">달빛기행</option>
                    </select>
                </div>
                <form onSubmit={handleSubmit2}>
                    <div className='createLine'>
                        <div className='createPadding'>
                            <label>이름</label>
                        </div>
                        <input
                            className='categorySelect'
                            type="text"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
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

export default Create2GalleryPost;

