import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import '../../../components/SubNoti/PostDetail.css';
import SupTop from '../../../components/common/supTop';

const ResDetail = ({ posts, onDelete }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const post = posts.find(post => post.id === Number(id));
    const currentIndex = posts.findIndex(post => post.id === Number(id));
    const previousPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
    const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

    if (!post) return <div>게시글을 찾을 수 없습니다.</div>;

    const handleEdit = () => {
        navigate(`/ResInfo/edit/${post.id}`);
    };

    const handleDelete = () => {
        if (window.confirm("정말로 이 게시물을 삭제하시겠습니까?")) {
            onDelete(post.id);
            alert("게시물이 삭제되었습니다.");
            navigate("/ResInfo/category/res");
        }
    };

    return (
        <div className='inner'>
             <SupTop supTopImg={'subTourInfoTop'} supTopTit={'관광안내'}/>
            <div className='postDetailWrap'>
                <div className='postWrap flex'>
                    <p className='postCategory'>{post.category}</p>
                    <p className='postTitle'>&#91;{post.category}&#93; {post.title}</p>
                    <p className='postInfo'>작성자 : {post.author} - 작성시간 : {post.time}</p>
                </div>
                <div className='postContent'>
                    <p>{post.content}</p>
                </div>
				<div className='postNavigation'>
                {previousPost && (
                    <Link to={`/ResInfo/post/${previousPost.id}`} className="">
                        <div>이전글 : &#91;{previousPost.category}&#93; {previousPost.title}</div>
                    </Link>
                )}
				
				
                {nextPost && (
                    <Link to={`/ResInfo/post/${nextPost.id}`} className="">
                        <div>다음글 : &#91;{nextPost.category}&#93; {nextPost.title}</div>
                    </Link>
                )}
				
            </div>
            <div className='postActions flex'>
                <Link to="/ResInfo/category/res" className='subBtn'>목록보기</Link>
				<div className='flex subBtnWrap'>
                	<button className='subBtn' onClick={handleEdit}>수정하기</button>
                	<button className='subBtn' onClick={handleDelete}>삭제하기</button>
				</div>
            </div>
            </div>
        </div>
    );
};

export default ResDetail;
