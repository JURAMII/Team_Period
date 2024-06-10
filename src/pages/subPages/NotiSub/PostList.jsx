import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { posts } from '../data';

const PostList = () => {
    const { key } = useParams(); // URL에서 key 파라미터를 가져옴
    const [category, setCategory] = useState('');

    // useEffect 훅을 사용하여 key 값이 변경될 때마다 카테고리를 설정
    useEffect(() => {
        // URL 파라미터에 따라 카테고리를 설정
        const categoryMap = {
            noti: '공지사항',
            star: '별빛야행',
            moon: '달빛기행'
        };
        setCategory(categoryMap[key] || '공지사항'); // key에 해당하는 카테고리를 설정
        setCurrentPage(1);  // 카테고리가 변경되면 페이지를 초기화
        setCurrentGroup(1); // 카테고리가 변경되면 그룹을 초기화
    }, [key]);

    // posts 배열을 카테고리에 따라 필터링
    const filteredPosts = posts.filter(post => post.category === category);

    // 페이지네이션을 위한 상태를 정의
    const [currentPage, setCurrentPage] = useState(1);
    const [currentGroup, setCurrentGroup] = useState(1);
    const postsPerPage = 10; // 한 페이지에 노출될 게시물 수
    const pageGroupSize = 5; // 한 그룹에 표시될 페이지 수

    // 현재 페이지에 해당하는 게시물의 인덱스를 계산
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    // 페이지 번호를 클릭했을 때 실행되는 핸들러
    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    // 이전 페이지 그룹으로 이동하는 핸들러
    const handlePreviousGroup = () => {
        if (currentGroup > 1) {
            setCurrentGroup(currentGroup - 1);
            setCurrentPage((currentGroup - 2) * pageGroupSize + 1);
        }
    };

    // 다음 페이지 그룹으로 이동하는 핸들러
    const handleNextGroup = () => {
        if (currentGroup * pageGroupSize < Math.ceil(filteredPosts.length / postsPerPage)) {
            setCurrentGroup(currentGroup + 1);
            setCurrentPage(currentGroup * pageGroupSize + 1);
        }
    };

    // 총 페이지 수를 계산
    const totalPageCount = Math.ceil(filteredPosts.length / postsPerPage);
    // 현재 그룹의 첫 번째 페이지와 마지막 페이지를 계산
    const startPage = (currentGroup - 1) * pageGroupSize + 1;
    const endPage = Math.min(startPage + pageGroupSize - 1, totalPageCount);
    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i); 
    }

    return (
        <div style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
                <div>
                    {/* 카테고리 버튼 */}
                    <button onClick={() => setCategory('공지사항')} style={{ padding: '10px', backgroundColor: category === '공지사항' ? '#007bff' : '#ccc', color: '#fff', borderRadius: '5px', margin: '0 5px' }}>공지사항</button>
                    <button onClick={() => setCategory('별빛야행')} style={{ padding: '10px', backgroundColor: category === '별빛야행' ? '#007bff' : '#ccc', color: '#fff', borderRadius: '5px', margin: '0 5px' }}>별빛야행</button>
                    <button onClick={() => setCategory('달빛기행')} style={{ padding: '10px', backgroundColor: category === '달빛기행' ? '#007bff' : '#ccc', color: '#fff', borderRadius: '5px', margin: '0 5px' }}>달빛기행</button>
                </div>
                <Link to="/create" style={{ textDecoration: 'none', padding: '10px', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px' }}>글쓰기</Link>
            </div>
            {/* 게시물 리스트 */}
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
                    {/* 필터링된 게시물을 현재 페이지에 맞게 출력 */}
                    {currentPosts.length > 0 ? (
                        currentPosts.map((post) => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td><Link to={`/notiList/post/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>{post.title}</Link></td>
                                <td>{post.author}</td>
                                <td>{post.time}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">게시물이 없습니다.</td>
                        </tr>
                    )}
                </tbody>
            </table>
            {/* 페이지네이션 */}
            <div style={{ display: 'flex', justifyContent: 'center', padding: '20px 0' }}>
                <button onClick={handlePreviousGroup} disabled={currentGroup === 1} style={{ margin: '0 5px', padding: '5px 10px' }}>
                    &lt;
                </button>
                {pageNumbers.map(number => (
                    <button key={number} id={number} onClick={handleClick} style={{ margin: '0 5px', padding: '5px 10px', backgroundColor: number === currentPage ? '#007bff' : '#ccc', color: '#fff' }}>
                        {number}
                    </button>
                ))}
                <button onClick={handleNextGroup} disabled={endPage === totalPageCount} style={{ margin: '0 5px', padding: '5px 10px' }}>
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default PostList;