import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Pagination from '../../../components/SubNoti/Pagination'; // 페이지넌트 컴퍼넌트
import SearchBar from './SearchBar'; //서치바 컴퍼넌트
import SupTop from '../../../components/common/supTop';
import Neardep from './neardep';
import '../../../components/onedep.css'
import '../../../components/twodep.css'
import './GallList.css'
const ResList = ({ posts, setPosts }) => {
    const { key } = useParams(); // URL에서 key 파라미터를 가져옴
    const [currentPage, setCurrentPage] = useState(1);
    const [currentGroup, setCurrentGroup] = useState(1);
    const [pageGroupSize, setPageGroupSize] = useState(5);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchField, setSearchField] = useState('gallTit');
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
            if (searchField === 'gallTit') {
                return post.gallTit.toLowerCase().includes(searchTerm.toLowerCase());
            } else if (searchField === 'gallTxT') {
                return post.gallTxT.toLowerCase().includes(searchTerm.toLowerCase());
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
    const postsPerPage = 12; // 한 페이지에 노출될 게시물 수

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

    const [twoDep, setTwoDep] = useState(1);

function clickTwo(index){
    setTwoDep(index);
}  
const one = 2;

    return (
        <>
        <SupTop supTopImg={'subTourInfoTop'} supTopTit={'관광안내'}/>
        <Neardep one={one}/>
        {/* 투뎁스 */}
        <ul className="twoDep flex">
        <li className={twoDep === 1 ? "twoDeptit tcheck" : "twoDeptit"} onClick={()=>clickTwo(1)}><Link to='/ResLi/category/res'>맛집소개</Link></li>
        <li className={twoDep === 2 ? "twoDeptit tcheck" : "twoDeptit"} onClick={()=>clickTwo(2)}><Link to='/HoLi/category/hotel'>호텔소개</Link></li>
        </ul>
        <section className='subDefaultContent'>
                <div className='gall'>
                    {currentPosts.map((post)=><figure key={post.id}>
                        <Link to={`/ResLi/Detail/${post.id}`}>
                <img src={post.img} alt={post.gallTit} />
                <figcaption className='gall_txt'>
                <b>{post.gallTit}</b>
                <p>{post.gallTxT}</p>                    
                </figcaption>
                </Link>
            </figure>)}
                    {currentPosts.length === 0 && (
                        <tr>
                            <td colSpan="4">게시물이 없습니다.</td>
                        </tr>
                    )}

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
                <Link to="/ResLi/create" className="subBtn notiWrite">글쓰기</Link>
            </div>
            

        </div>
        <SearchBar 
                searchField={searchField}
                setSearchField={setSearchField}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                onSearch={handleSearch}
            />
        </section>
        </>
    );
};

export default ResList;
