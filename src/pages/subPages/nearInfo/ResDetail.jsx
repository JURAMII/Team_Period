import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'; // useNavigate 추가
import SupTop from '../../../components/common/supTop';
import Neardep from './neardep';

const ResDetail = ({posts ,onDelete}) => {
  // URL에서 id 파라미터를 가져옵니다
  const { id } = useParams();
  const navigate = useNavigate(); // 페이지 이동을 위한 navigate 함수

  // id를 사용하여 해당 이미지 데이터를 가져옵니다
  const post = posts.find(post => post.id === parseInt(id, 10));
  const currentIndex = posts.findIndex(post => post.id === parseInt(id, 10));
  const previousPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  // 이미지가 존재하지 않을 경우 메시지를 표시합니다
  if (!post) return <div>이미지를 찾을 수 없습니다.</div>;

  // 수정 버튼 클릭 시 실행되는 함수
  const handleEdit = () => {
    navigate(`/ResLi/edit/${post.id}`);
  };

  // 삭제 버튼 클릭 시 실행되는 함수
  const handleDelete = () => {
    if (window.confirm("정말로 이 게시물을 삭제하시겠습니까?")) {
      onDelete(post.id);
      alert("게시물이 삭제되었습니다.");
      navigate(`/ResLi/category/res`);
    }
  };

  const one = 2;
  
  return (
    <>
    <SupTop supTopImg={'subTourInfoTop'} supTopTit={'관광안내'}/>
    <Neardep one={one}/>
      <div className='postDetailWrap'>
        <div className='postWrap flex'>
          <p className='postCategory'>{post.category}</p>
          <p className='postTitle'>&#91;{post.category}&#93; {post.gallTit}</p>
          <p className='postInfo'>작성자: {post.category === '축제사진' ? post.author : post.user} - 작성시간: {post.time}</p>
        </div>
        <div className='postContent'>
          <img src={post.img} alt={`Detail ${id}`} />
          <p style={{ whiteSpace: 'pre-line' }}>{post.gallTxT}</p>
        </div>
        <div className='postNavigation'>
          {previousPost && (
            <Link to={`/ResLi/detail/${previousPost.id}`} className="">
              <div>이전글: &#91;{previousPost.category}&#93; {previousPost.gallTit}</div>
            </Link>
          )}
          {nextPost && (
            <Link to={`/ResLi/detail/${nextPost.id}`} className="">
              <div>다음글: &#91;{nextPost.category}&#93; {nextPost.gallTit}</div>
            </Link>
          )}
        </div>
        <div className='postActions flex'>
          <Link to={`/ResLi/category/res`} className='subBtn'>목록보기</Link>
          <div className='flex subBtnWrap'>
            <button className='subBtn' onClick={handleEdit}>수정하기</button>
            <button className='subBtn' onClick={handleDelete}>삭제하기</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResDetail;