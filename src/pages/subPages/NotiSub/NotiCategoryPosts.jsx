import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../../main/Sec6NotiList/data';

const NotiCategoryPosts = () => {
    const { key } = useParams();
	console.log('URL key:', key); // key 값 출력
    const filteredPosts = posts.filter(post => post.key === key);
	console.log('Filtered Posts:', filteredPosts);

    if (!filteredPosts.length) {
        return (
            <div style={{ textAlign: 'center', padding: '50px' }}>
                <h1>카테고리에 해당하는 게시글이 없습니다.</h1>
                <Link to="/Team_Period/">메인 페이지로 이동</Link>
            </div>
        );
    }

    return (
        <div style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
                <div>
                    <Link to="/Team_Period/notiList/category/noti" style={{ textDecoration: 'none', padding: '10px', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', margin: '0 5px' }}>공지사항</Link>
                    <Link to="/Team_Period/notiList/category/star" style={{ textDecoration: 'none', padding: '10px', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', margin: '0 5px' }}>별빛야행</Link>
                    <Link to="/Team_Period/notiList/category/moon" style={{ textDecoration: 'none', padding: '10px', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', margin: '0 5px' }}>달빛기행</Link>
                </div>
                <Link to="/Team_Period/NotiList/create" style={{ textDecoration: 'none', padding: '10px', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px' }}>글쓰기</Link>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ width: '5%' }}>번호</th>
                        <th style={{ width: '50%' }}>제목</th>
                        <th style={{ width: '15%' }}>글쓴이</th>
                        <th style={{ width: '20%' }}>작성시간</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPosts.map((post) => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td><Link to={`/Team_Period/notiList/post/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>{post.title}</Link></td>
                            <td>{post.author}</td>
                            <td>{post.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default NotiCategoryPosts;
