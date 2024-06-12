import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../../pages/main/Sec6NotiList/data';
import CategoryTabs from './CategoryTabs';

const PostDetail = () => {
    const { id } = useParams();
    const post = posts.find(post => post.id === Number(id));

    if (!post) return <div>게시글을 찾을 수 없습니다.</div>;

    return (
		<div className='inner'>
			<div className='subTop subNotiTop'>
               	<p className='subTopText'>공지사항</p>
           	</div>
			<CategoryTabs />
        	<div className='subDefaultContent'>
    	        <h2>{post.category}</h2>
				<h2>{post.title}</h2>
           		<p style={{ color: 'gray' }}>{post.author} - {post.time}</p>
       		</div>
			<div>
				<p>{post.content}</p>
			</div>
		</div>

    );
};

export default PostDetail;
