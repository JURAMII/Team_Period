import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import "../../../components/SubNoti/CreatePost.css";

const formatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}.${month}.${day}`;
};

const GalleryEditPage = ({ images, setImages }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const image = images.find(image => image.id === Number(id));

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('별빛야행');
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (image) {
            setTitle(image.title);
            setContent(image.content);
            setAuthor(image.author);
            setCategory(image.key === 'starLigth' ? '별빛야행' : '달빛기행');
        } else {
            navigate('/Gallery');
        }
    }, [image, navigate]);

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
        if (!selectedImage && !image.src) {
            alert('이미지를 선택해주세요.');
            return;
        }

        const categoryKeyMap = {
            '별빛야행': 'starLigth',
            '달빛기행': 'moonLight'
        };

        const isReview = location.pathname.includes('category2');
        const updatedImage = {
            ...image,
            title,
            content,
            author,
            category: isReview ? '축제후기' : '축제사진',
            src: selectedImage ? URL.createObjectURL(selectedImage) : image.src,
            time: formatDate(new Date()),
            key: categoryKeyMap[category]
        };

        const updatedImages = images.map(img => img.id === Number(id) ? updatedImage : img);
        setImages(updatedImages);

        if (isReview) {
            navigate(`/Gallery/category2/${updatedImage.key}`);
        } else {
            navigate(`/Gallery/category/${updatedImage.key}`);
        }
    };

    const handleCancel = () => {
        const isReview = location.pathname.includes('category2');
        if (isReview) {
            navigate(`/gallery/detail2/${image.id}`);
        } else {
            navigate(`/gallery/detail/${image.id}`);
        }
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
                    <div className='createLine'>
                        <div className='createPadding'>
                            <label>이미지</label>
                        </div>
                        <input
                            className='categorySelectTitle'
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
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

export default GalleryEditPage;
