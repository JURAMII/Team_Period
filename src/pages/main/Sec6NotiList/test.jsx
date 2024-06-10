import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "./test.css"

const Tab = ({ title, onSelect }) => (
  <div className="tab" onClick={onSelect}>
    {title}
  </div>
);

const Board = ({ boardType }) => (
  <div className="board">
    {/* 게시판 내용을 여기에 렌더링 */}
    <div className="board-header">
      <div className="board-info">
        {/* 게시판 번호, 날짜 */}
        <span>#1</span>
        <span>2024-06-05</span>
      </div>
      <div className="board-title">[{boardType}] 제목</div>
    </div>
  </div>
);

const Test = () => {
  const [activeTab, setActiveTab] = useState('공지사항');

  return (
    <Router>
      <div className="tabs">
        <Tab title="공지사항" onSelect={() => setActiveTab('공지사항')} />
        <Tab title="별빛야행" onSelect={() => setActiveTab('별빛야행')} />
        <Tab title="달빛기행" onSelect={() => setActiveTab('달빛기행')} />
      </div>
      <Board boardType={activeTab} />
      <Route path="/subpage/:id" component={SubPage} />
    </Router>
  );
};

const SubPage = ({ match }) => (
  <div>SubPage ID: {match.params.id}</div>
);

export default Test;