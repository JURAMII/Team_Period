import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import CategoryTabs from './CategoryTabs'; //1뎁스 스위치 컴퍼넌트
import Pagination from './Pagination'; // 페이지넌트 컴퍼넌트
import "./notiList.css";
import SearchBar from './SearchBar'; //서치바 컴퍼넌트

const NotiList = ({ posts, setPosts }) => {
    const { key } = useParams(); // URL에서 key 파라미터를 가져옴
    const [currentPage, setCurrentPage] = useState(1);
    const [currentGroup, setCurrentGroup] = useState(1);
    const [pageGroupSize, setPageGroupSize] = useState(5);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchField, setSearchField] = useState('title');
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
        setFilteredPosts(posts.filter(post => post.key === key));
    }, [key, posts]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setPageGroupSize(4);
            } else {
                setPageGroupSize(5);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleSearch = () => {
        const searchFilteredPosts = posts.filter(post => post.key === key).filter(post => {
            if (searchField === 'title') {
                return post.title.toLowerCase().includes(searchTerm.toLowerCase());
            } else if (searchField === 'content') {
                return post.content.toLowerCase().includes(searchTerm.toLowerCase());
            } else if (searchField === 'author') {
                return post.author.toLowerCase().includes(searchTerm.toLowerCase());
            }
            return true;
        });
        setFilteredPosts(searchFilteredPosts);
        setCurrentPage(1); // 검색 후 페이지를 첫 페이지로 설정
        setCurrentGroup(1); // 검색 후 그룹을 첫 그룹으로 설정
    };

    const handleDeletePost = (postId) => {
        const updatedPosts = posts.filter(post => post.id !== postId);
        setPosts(updatedPosts);
        setFilteredPosts(updatedPosts.filter(post => post.key === key));
    };

    // 페이지네이션을 위한 상태를 정의
    const postsPerPage = 10; // 한 페이지에 노출될 게시물 수

    // 현재 페이지에 해당하는 게시물의 인덱스를 계산
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    // 페이지 번호를 클릭했을 때 실행되는 핸들러
    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
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

    return (
        <div className="inner">
            <div className='subNotiTop'>
                <p className='subTopText'>공지사항</p>
            </div>
            <CategoryTabs /> {/* CategoryTabs 컴포넌트를 사용 */}
            {/* 게시물 리스트 */}
            <table className='subDefaultContent'>
                <thead>
                    <tr className='notiTableTop'>
                        <th className='tableNumber' style={{ width: '10%' }}>번호</th>
                        <th>제목</th>
                        <th className='tableAuthor' style={{ width: '11%' }}>글쓴이</th>
                        <th style={{ width: '10%' }}>작성시간</th>
                    </tr>
                </thead>
                <tbody>
                    {/* 필터링된 게시물을 현재 페이지에 맞게 출력 */}
                    {currentPosts.map((post) => (
                        <tr className='notiTable' key={post.id}>
                            <td className='tableNumberPost' style={{ width: '10%' }}>{post.id}</td>
                            <td><Link to={`/notiList/post/${post.id}`} className="textEllipsis">{post.title}</Link></td>
                            <td className='tableAuthorPost' style={{ width: '11%' }}>{post.author}</td>
                            <td style={{ width: '10%' }}>{post.time}</td>
                        </tr>
                    ))}
                    {currentPosts.length === 0 && (
                        <tr>
                            <td colSpan="4">검색 결과가 없습니다.</td>
                        </tr>
                    )}
                </tbody>
            </table>
            {/* 페이지네이션 */}
            <Pagination 
                currentPage={currentPage}
                totalPageCount={totalPageCount}
                currentGroup={currentGroup}
                pageGroupSize={pageGroupSize}
                onPageChange={handleClick}
                onPreviousGroup={handlePreviousGroup}
                onNextGroup={handleNextGroup}
            />
            <div className='pageBtnWrap writeBtn'>
                <Link to="/NotiList/create" className="subBtn notiWrite">글쓰기</Link>
            </div>
            <SearchBar 
                searchField={searchField}
                setSearchField={setSearchField}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                onSearch={handleSearch}
            />
        </div>
    );
};

export default NotiList;
