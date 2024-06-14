import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import CategoryTabs from './CategoryTabs';
import './PostDetail.css';

const PostDetail = ({ posts, onDelete }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const post = posts.find(post => post.id === Number(id));
    const currentIndex = posts.findIndex(post => post.id === Number(id));
    const previousPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
    const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

    if (!post) return <div>게시글을 찾을 수 없습니다.</div>;

    const handleEdit = () => {
        navigate(`/notiList/edit/${post.id}`);
    };

    const handleDelete = () => {
        if (window.confirm("정말로 이 게시물을 삭제하시겠습니까?")) {
            onDelete(post.id);
            alert("게시물이 삭제되었습니다.");
            navigate("/notiList/category/noti");
        }
    };

    return (
        <div className='inner'>
            <div className='subNotiTop'>
                <p className='subTopText'>공지사항</p>
            </div>
            <CategoryTabs />
            <div className='postDetailWrap'>
                <div className='postWrap flex'>
                    <p className='postCategory'>{post.category}</p>
                    <p className='postTitle'>&#91;{post.category}&#93; {post.title}</p>
                    <p className='postInfo'>글쓴이 : {post.author} &nbsp; <span>작성날짜 : {post.time}</span></p>
                </div>
                <div className='postContent'>
					<p style={{ whiteSpace: 'pre-line' }}>{post.content}</p>
                </div>
				<div className='postNavigation'>
                {previousPost && (
                    <Link to={`/notiList/post/${previousPost.id}`} className="">
                        <div>이전글 : &#91;{previousPost.category}&#93; {previousPost.title}</div>
                    </Link>
                )}
				
				
                {nextPost && (
                    <Link to={`/notiList/post/${nextPost.id}`} className="">
                        <div>다음글 : &#91;{nextPost.category}&#93; {nextPost.title}</div>
                    </Link>
                )}
				
            </div>
            <div className='postActions flex'>
                <Link to="/notiList/category/noti" className='subBtn'>목록보기</Link>
				<div className='flex subBtnWrap'>
                	<button className='subBtn' onClick={handleEdit}>수정하기</button>
                	<button className='subBtn' onClick={handleDelete}>삭제하기</button>
				</div>
            </div>
            </div>
        </div>
    );
};

export default PostDetail;
