import starLightTour1 from './assets/starLightTour/starLightTour (1).webp';
import starLightTour2 from './assets/starLightTour/starLightTour (2).webp';
import starLightTour3 from './assets/starLightTour/starLightTour (3).webp';
import starLightTour4 from './assets/starLightTour/starLightTour (4).webp';
import starLightTour5 from './assets/starLightTour/starLightTour (5).webp';
import starLightTour6 from './assets/starLightTour/starLightTour (6).webp';
import starLightTour7 from './assets/starLightTour/starLightTour (7).webp';
import starLightTour8 from './assets/starLightTour/starLightTour (8).webp';
import starLightTour9 from './assets/starLightTour/starLightTour (9).webp';
import starLightTour10 from './assets/starLightTour/starLightTour (10).webp';
import starLightTour11 from './assets/starLightTour/starLightTour (11).webp';
import starLightTour12 from './assets/starLightTour/starLightTour (12).webp';
import starLightTour13 from './assets/starLightTour/starLightTour (13).webp';
import starLightTour14 from './assets/starLightTour/starLightTour (14).webp';
import starLightTour15 from './assets/starLightTour/starLightTour (15).webp';

import moonLightTour1 from './assets/moonlightTour/moonLightTour (1).webp';
import moonLightTour2 from './assets/moonlightTour/moonLightTour (2).webp';
import moonLightTour3 from './assets/moonlightTour/moonLightTour (3).webp';
import moonLightTour4 from './assets/moonlightTour/moonLightTour (4).webp';
import moonLightTour5 from './assets/moonlightTour/moonLightTour (5).webp';
import moonLightTour6 from './assets/moonlightTour/moonLightTour (6).webp';
import moonLightTour7 from './assets/moonlightTour/moonLightTour (7).webp';
import moonLightTour8 from './assets/moonlightTour/moonLightTour (8).webp';
import moonLightTour9 from './assets/moonlightTour/moonLightTour (9).webp';
import moonLightTour10 from './assets/moonlightTour/moonLightTour (10).webp';
import moonLightTour11 from './assets/moonlightTour/moonLightTour (11).webp';
import moonLightTour12 from './assets/moonlightTour/moonLightTour (12).webp';
import moonLightTour13 from './assets/moonlightTour/moonLightTour (13).webp';
import moonLightTour14 from './assets/moonlightTour/moonLightTour (14).webp';
import moonLightTour15 from './assets/moonlightTour/moonLightTour (15).webp';

import AllMenuStar from './assets/starnight.webp';
import AllMenuMoon from './assets/moonlight.webp';

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}.${month}.${day}`;
};


const starLightImages = [
  { src: starLightTour1, id: 15, title: '별빛야행 - 갤러리 게시글 15', content: '별빛야행 - 갤러리 게시글 15 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'starLigth' },
  { src: starLightTour2, id: 14, title: '별빛야행 - 갤러리 게시글 15', content: '별빛야행 - 갤러리 게시글 15 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'starLigth' },
  { src: starLightTour3, id: 13, title: '별빛야행 - 갤러리 게시글 15', content: '별빛야행 - 갤러리 게시글 15 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'starLigth' },
  { src: starLightTour4, id: 12, title: '별빛야행 - 갤러리 게시글 15', content: '별빛야행 - 갤러리 게시글 15 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'starLigth' },
  { src: starLightTour5, id: 11, title: '별빛야행 - 갤러리 게시글 15', content: '별빛야행 - 갤러리 게시글 15 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'starLigth' },
  { src: starLightTour6, id: 10, title: '별빛야행 - 갤러리 게시글 15', content: '별빛야행 - 갤러리 게시글 15 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'starLigth' },
  { src: starLightTour7, id: 9, title: '별빛야행 - 갤러리 게시글 15', content: '별빛야행 - 갤러리 게시글 15 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'starLigth' },
  { src: starLightTour8, id: 8, title: '별빛야행 - 갤러리 게시글 15', content: '별빛야행 - 갤러리 게시글 15 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'starLigth' },
  { src: starLightTour9, id: 7, title: '별빛야행 - 갤러리 게시글 15', content: '별빛야행 - 갤러리 게시글 15 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'starLigth' },
  { src: starLightTour10, id: 6, title: '별빛야행 - 갤러리 게시글 15', content: '별빛야행 - 갤러리 게시글 15 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'starLigth' },
  { src: starLightTour11, id: 5, title: '별빛야행 - 갤러리 게시글 15', content: '별빛야행 - 갤러리 게시글 15 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'starLigth' },
  { src: starLightTour12, id: 4, title: '별빛야행 - 갤러리 게시글 15', content: '별빛야행 - 갤러리 게시글 15 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'starLigth' },
  { src: starLightTour13, id: 3, title: '별빛야행 - 갤러리 게시글 15', content: '별빛야행 - 갤러리 게시글 15 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'starLigth' },
  { src: starLightTour14, id: 2, title: '별빛야행 - 갤러리 게시글 15', content: '별빛야행 - 갤러리 게시글 15 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'starLigth' },
  { src: starLightTour15, id: 1, title: '별빛야행 - 갤러리 게시글 15', content: '별빛야행 - 갤러리 게시글 15 내용', author: '관리자', category: '별빛야행', time: formatDate(new Date()), key: 'starLigth' }
];

const moonLightImages = [
  { src: moonLightTour1, id: 15, title: '달빛기행 - 갤러리 게시글 15', content: '달빛기행 - 갤러리 게시글 15 내용 ', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moonLight' },
  { src: moonLightTour2, id: 14, title: '달빛기행 - 갤러리 게시글 15', content: '달빛기행 - 갤러리 게시글 15 내용 ', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moonLight' },
  { src: moonLightTour3, id: 13, title: '달빛기행 - 갤러리 게시글 15', content: '달빛기행 - 갤러리 게시글 15 내용 ', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moonLight' },
  { src: moonLightTour4, id: 12, title: '달빛기행 - 갤러리 게시글 15', content: '달빛기행 - 갤러리 게시글 15 내용 ', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moonLight' },
  { src: moonLightTour5, id: 11, title: '달빛기행 - 갤러리 게시글 15', content: '달빛기행 - 갤러리 게시글 15 내용 ', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moonLight' },
  { src: moonLightTour6, id: 10, title: '달빛기행 - 갤러리 게시글 15', content: '달빛기행 - 갤러리 게시글 15 내용 ', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moonLight' },
  { src: moonLightTour7, id: 9, title: '달빛기행 - 갤러리 게시글 15', content: '달빛기행 - 갤러리 게시글 15 내용 ', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moonLight' },
  { src: moonLightTour8, id: 8, title: '달빛기행 - 갤러리 게시글 15', content: '달빛기행 - 갤러리 게시글 15 내용 ', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moonLight' },
  { src: moonLightTour9, id: 7, title: '달빛기행 - 갤러리 게시글 15', content: '달빛기행 - 갤러리 게시글 15 내용 ', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moonLight' },
  { src: moonLightTour10, id: 6, title: '달빛기행 - 갤러리 게시글 15', content: '달빛기행 - 갤러리 게시글 15 내용 ', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moonLight' },
  { src: moonLightTour11, id: 5, title: '달빛기행 - 갤러리 게시글 15', content: '달빛기행 - 갤러리 게시글 15 내용 ', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moonLight' },
  { src: moonLightTour12, id: 4, title: '달빛기행 - 갤러리 게시글 15', content: '달빛기행 - 갤러리 게시글 15 내용 ', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moonLight' },
  { src: moonLightTour13, id: 3, title: '달빛기행 - 갤러리 게시글 15', content: '달빛기행 - 갤러리 게시글 15 내용 ', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moonLight' },
  { src: moonLightTour14, id: 2, title: '달빛기행 - 갤러리 게시글 15', content: '달빛기행 - 갤러리 게시글 15 내용 ', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'moonLight' },
  { src: moonLightTour15, id: 1, title: '달빛기행 - 갤러리 게시글 15', content: '달빛기행 - 갤러리 게시글 15 내용 ', author: '관리자', category: '달빛기행', time: formatDate(new Date()), key: 'mooLightn' }
];

const AllMenu = [
  { src: AllMenuStar, },
  { src: AllMenuMoon, key: 'moonLight'}
]

export { starLightImages, moonLightImages, AllMenu };