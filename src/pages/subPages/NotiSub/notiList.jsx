import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { posts } from '../../main/Sec6NotiList/data';
import "./notiList.css";

const NotiList = () => {
    const { key } = useParams(); // URL에서 key 파라미터를 가져옴
    const [category, setCategory] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [currentGroup, setCurrentGroup] = useState(1);

    useEffect(() => {
        // URL 파라미터에 따라 카테고리를 설정
        const categoryMap = {
            noti: '공지사항',
            star: '별빛야행',
            moon: '달빛기행'
        };
        const newCategory = categoryMap[key] || '공지사항';
        setCategory(newCategory); // key에 해당하는 카테고리를 설정
        setCurrentPage(1);  // 카테고리가 변경되면 페이지를 초기화
        setCurrentGroup(1); // 카테고리가 변경되면 그룹을 초기화
    }, [key]);

    // posts 배열을 카테고리에 따라 필터링
    const filteredPosts = posts.filter(post => post.category === category); // category 필터링 조건 확인

    // 페이지네이션을 위한 상태를 정의
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
        <div className="inner">
            <div className="flex" style={{ justifyContent: 'space-between', padding: '10px 0' }}>
                <div className='oneDepthBtnWrap'>
                    <Link to="/notiList/category/noti" className={`oneDepthBtn ${category === '공지사항' ? 'oneDepthBtnActive' : ''}`}>공지사항</Link>
                    <Link to="/notiList/category/star" className={`oneDepthBtn ${category === '별빛야행' ? 'oneDepthBtnActive' : ''}`}>별빛야행</Link>
                    <Link to="/notiList/category/moon" className={`oneDepthBtn ${category === '달빛기행' ? 'oneDepthBtnActive' : ''}`}>달빛기행</Link>
                </div>
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
                    {currentPosts.map((post) => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td className="textEllipsis"><Link to={`/notiList/post/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>{post.title}</Link></td>
                            <td>{post.author}</td>
                            <td>{post.time}</td>
                        </tr>
                    ))}
                    {currentPosts.length === 0 && (
                        <tr>
                            <td colSpan="4">게시물이 없습니다.</td>
                        </tr>
                    )}
                </tbody>
            </table>
            {/* 페이지네이션 */}
            <div className="flex" style={{ justifyContent: 'center', padding: '20px 0' }}>
                <button onClick={handlePreviousGroup} disabled={currentGroup === 1} className="mainBtnSilver">
                    &lt;
                </button>
                {pageNumbers.map(number => (
                    <button key={number} id={number} onClick={handleClick} className={`mainBtnSilver ${number === currentPage ? 'active' : ''}`}>
                        {number}
                    </button>
                ))}
                <button onClick={handleNextGroup} disabled={endPage === totalPageCount} className="mainBtnSilver">
                    &gt;
                </button>
				<Link to="/NotiList/create" className="mainBtnSalomie">글쓰기</Link>
            </div>
        </div>
    );
};

export default NotiList;