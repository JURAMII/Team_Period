const formatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}.${month}.${day}`;
};

export const posts1 = [
    
    { id: 11, title: '묻고 답하기 - 게시글 11', content: '묻고 답하기 - 게시글 11 내용', author: '회원', category: '묻고 답하기', time: formatDate(new Date()), key: 'qna' },
    { id: 10, title: '묻고 답하기 - 게시글 10', content: '묻고 답하기 - 게시글 10 내용', author: '회원', category: '묻고 답하기', time: formatDate(new Date()), key: 'qna' },
    { id: 9, title: '묻고 답하기 - 게시글 9', content: '묻고 답하기 - 게시글 9 내용', author: '회원', category: '묻고 답하기', time: formatDate(new Date()), key: 'qna' },
    { id: 8, title: '묻고 답하기 - 게시글 8', content: '묻고 답하기 - 게시글 8 내용', author: '회원', category: '묻고 답하기', time: formatDate(new Date()), key: 'qna' },
    { id: 7, title: '묻고 답하기 - 게시글 7', content: '묻고 답하기 - 게시글 7 내용', author: '회원', category: '묻고 답하기', time: formatDate(new Date()), key: 'qna' },
    { id: 6, title: '묻고 답하기 - 게시글 6', content: '묻고 답하기 - 게시글 6 내용', author: '회원', category: '묻고 답하기', time: formatDate(new Date()), key: 'qna' },
    { id: 5, title: '묻고 답하기 - 게시글 5', content: '묻고 답하기 - 게시글 5 내용', author: '회원', category: '묻고 답하기', time: formatDate(new Date()), key: 'qna' },
    { id: 4, title: '묻고 답하기 - 게시글 4', content: '묻고 답하기 - 게시글 4 내용', author: '회원', category: '묻고 답하기', time: formatDate(new Date()), key: 'qna' },
    { id: 3, title: '묻고 답하기 - 게시글 3', content: '묻고 답하기 - 게시글 3 내용', author: '회원', category: '묻고 답하기', time: formatDate(new Date()), key: 'qna' },
    { id: 2, title: '묻고 답하기 - 게시글 2', content: '묻고 답하기 - 게시글 2 내용', author: '회원', category: '묻고 답하기', time: formatDate(new Date()), key: 'qna' },
    { id: 1, title: '묻고 답하기 - 게시글 1', content: '묻고 답하기 - 게시글 1 내용', author: '회원', category: '묻고 답하기', time: formatDate(new Date()), key: 'qna' },
];