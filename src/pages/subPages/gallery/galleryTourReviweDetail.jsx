import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import GalleryCategoryTabs from '../../subPages/gallery/galleryCategoryTabs'; // 카테고리 탭 컴포넌트 import

const DetailPageReview = ({ images, onDelete }) => {
  const { id } = useParams();
  const navigate = useNavigate(); // 페이지 이동을 위한 navigate 함수

  // id를 사용하여 해당 이미지 데이터를 가져옵니다
  const image = images.find(image => image.id === parseInt(id, 10));
  const currentIndex = images.findIndex(image => image.id === parseInt(id, 10));
  const previousImage = currentIndex > 0 ? images[currentIndex - 1] : null;
  const nextImage = currentIndex < images.length - 1 ? images[currentIndex + 1] : null;

  // 이미지가 존재하지 않을 경우 메시지를 표시합니다
  if (!image) return <div>이미지를 찾을 수 없습니다.</div>;

  // 수정 버튼 클릭 시 실행되는 함수
  const handleEdit = () => {
    navigate(`/gallery/category2/edit/${image.id}`);
  };

  // 삭제 버튼 클릭 시 실행되는 함수
  const handleDelete = () => {
    if (window.confirm("정말로 이 게시물을 삭제하시겠습니까?")) {
      onDelete(image.id); // 상위 컴포넌트에서 전달된 onDelete 함수 호출
      alert("게시물이 삭제되었습니다.");
      navigate(`/gallery/category2/${image.key}`); // 갤러리 서브 페이지로 이동
    }
  };

  return (
    <div className='inner'>
      <div className='subGalleryTop'>
        <p className='subTopText'>갤러리</p>
      </div>
      <GalleryCategoryTabs /> {/* 카테고리 탭 컴포넌트를 사용 */}
      <div className='postDetailWrap'>
        <div className='postWrap flex'>
          <p className='postCategory'>{image.category2}</p>
          <p className='postTitle'>&#91;{image.category2}&#93; {image.title}</p>
          <p className='postInfo'>작성자: {image.user}  &nbsp;작성시간: {image.time}</p>
        </div>
        <div className='postContent'>
          <img src={image.src} alt={`Detail ${id}`} />
          <p>{image.content}</p>
        </div>
        <div className='postNavigation'>
          {previousImage && (
            <Link to={`/gallery/detail2/${previousImage.id}`} className="">
              <div>이전글: &#91;{previousImage.category2}&#93; {previousImage.title}</div>
            </Link>
          )}
          {nextImage && (
            <Link to={`/gallery/detail2/${nextImage.id}`} className="">
              <div>다음글: &#91;{nextImage.category2}&#93; {nextImage.title}</div>
            </Link>
          )}
        </div>
        <div className='postActions flex'>
          <Link to={`/gallery/category2/${image.key}`} className='subBtn'>목록보기</Link>
          <div className='flex subBtnWrap'>
            <button className='subBtn' onClick={handleEdit}>수정하기</button>
            <button className='subBtn' onClick={handleDelete}>삭제하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPageReview;

