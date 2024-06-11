import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../../pages/main/Sec6NotiList/data';

const PostDetail = () => {
    const { id } = useParams();
    const post = posts.find(post => post.id === Number(id));

    if (!post) return <div>게시글을 찾을 수 없습니다.</div>;

    return (
		<div>
	        <div style={{ width: '100%', maxWidth: '1440px', margin: '0 auto', padding: '20px' }}>
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
