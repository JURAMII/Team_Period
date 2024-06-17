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

import resto1 from './assets/restaurant/resto (1).webp';
import resto2 from './assets/restaurant/resto (2).webp';
import resto3 from './assets/restaurant/resto (3).webp';
import resto4 from './assets/restaurant/resto (4).webp';
import resto5 from './assets/restaurant/resto (5).webp';
import resto6 from './assets/restaurant/resto (6).webp';
import resto7 from './assets/restaurant/resto (7).webp';
import resto8 from './assets/restaurant/resto (8).webp';
import resto9 from './assets/restaurant/resto (9).webp';
import resto10 from './assets/restaurant/resto (10).webp';
import resto11 from './assets/restaurant/resto (11).webp';
import resto12 from './assets/restaurant/resto (12).webp';
import resto13 from './assets/restaurant/resto (13).webp';
import resto14 from './assets/restaurant/resto (14).webp';
import resto15 from './assets/restaurant/resto (15).webp';
import resto16 from './assets/restaurant/resto (16).webp';

import starLightTour16 from './assets/starnight.webp';
import moonLightTour16 from './assets/moonlight.webp';

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}.${month}.${day}`;
};


let galleryImages = [
  { src: starLightTour1, id: 32, title: '갤러리 게시글 1', content: '별빛야행 - 갤러리 게시글 1 내용', author: '관리자', user: '이용자', category: '축제사진', category2: '축제후기', time: formatDate(new Date()), key: 'starLigth' },
  { src: starLightTour2, id: 31, title: '갤러리 게시글 2', content: '별빛야행 - 갤러리 게시글 2 내용', author: '관리자', user: '이용자', category: '축제사진', category2: '축제후기', time: formatDate(new Date()), key: 'starLigth' },
  { src: starLightTour3, id: 30, title: '갤러리 게시글 3', content: '별빛야행 - 갤러리 게시글 3 내용', author: '관리자', user: '이용자', category: '축제사진', category2: '축제후기', time: formatDate(new Date()), key: 'starLigth' },
  { src: starLightTour4, id: 29, title: '갤러리 게시글 4', content: '별빛야행 - 갤러리 게시글 4 내용', author: '관리자', user: '이용자', category: '축제사진', category2: '축제후기', time: formatDate(new Date()), key: 'starLigth' },
  { src: starLightTour5, id: 28, title: '갤러리 게시글 5', content: '별빛야행 - 갤러리 게시글 5 내용', author: '관리자', user: '이용자', category: '축제사진', category2: '축제후기', time: formatDate(new Date()), key: 'starLigth' },
  { src: starLightTour6, id: 27, title: '갤러리 게시글 6', content: '별빛야행 - 갤러리 게시글 6 내용', author: '관리자', user: '이용자', category: '축제사진', category2: '축제후기', time: formatDate(new Date()), key: 'starLigth' },
  { src: starLightTour7, id: 26, title: '갤러리 게시글 7', content: '별빛야행 - 갤러리 게시글 7 내용', author: '관리자', user: '이용자', category: '축제사진', category2: '축제후기', time: formatDate(new Date()), key: 'starLigth' },
  { src: starLightTour8, id: 25, title: '갤러리 게시글 8', content: '별빛야행 - 갤러리 게시글 8 내용', author: '관리자', user: '이용자', category: '축제사진', category2: '축제후기', time: formatDate(new Date()), key: 'starLigth' },
  { src: starLightTour9, id: 24, title: '갤러리 게시글 9', content: '별빛야행 - 갤러리 게시글 9 내용', author: '관리자', user: '이용자', category: '축제사진', category2: '축제후기', time: formatDate(new Date()), key: 'starLigth' },
  { src: starLightTour10, id: 23, title: '갤러리 게시글 10', content: '별빛야행 - 갤러리 게시글 10 내용', author: '관리자', user: '이용자', category: '축제사진', category2: '축제후기', time: formatDate(new Date()), key: 'starLigth' },
  { src: starLightTour11, id: 22, title: '갤러리 게시글 11', content: '별빛야행 - 갤러리 게시글 11 내용', author: '관리자', user: '이용자', category: '축제사진', category2: '축제후기', time: formatDate(new Date()), key: 'starLigth' },
  { src: starLightTour12, id: 21, title: '갤러리 게시글 12', content: '별빛야행 - 갤러리 게시글 12 내용', author: '관리자', user: '이용자', category: '축제사진', category2: '축제후기', time: formatDate(new Date()), key: 'starLigth' },
  { src: starLightTour13, id: 20, title: '갤러리 게시글 13', content: '별빛야행 - 갤러리 게시글 13 내용', author: '관리자', user: '이용자', category: '축제사진', category2: '축제후기', time: formatDate(new Date()), key: 'starLigth' },
  { src: starLightTour14, id: 19, title: '갤러리 게시글 14', content: '별빛야행 - 갤러리 게시글 14 내용', author: '관리자', user: '이용자', category: '축제사진', category2: '축제후기', time: formatDate(new Date()), key: 'starLigth' },
  { src: starLightTour15, id: 18, title: '갤러리 게시글 15', content: '별빛야행 - 갤러리 게시글 15 내용', author: '관리자', user: '이용자', category: '축제사진', category2: '축제후기', time: formatDate(new Date()), key: 'starLigth' },
  { src: starLightTour16, id: 17, title: '갤러리 게시글 16', content: '별빛야행 - 갤러리 게시글 16 내용', author: '관리자', user: '이용자', category: '축제사진', category2: '축제후기', time: formatDate(new Date()), key: 'starLigth' },
  { src: moonLightTour1, id: 16, title: '갤러리 게시글 1', content: '달빛기행 - 갤러리 게시글 1 내용', author: '관리자', user: '이용자', category: '축제사진', category2: '축제후기', time: formatDate(new Date()), key: 'moonLight' },
  { src: moonLightTour2, id: 15, title: '갤러리 게시글 2', content: '달빛기행 - 갤러리 게시글 2 내용', author: '관리자', user: '이용자', category: '축제사진', category2: '축제후기', time: formatDate(new Date()), key: 'moonLight' },
  { src: moonLightTour3, id: 14, title: '갤러리 게시글 3', content: '달빛기행 - 갤러리 게시글 3 내용', author: '관리자', user: '이용자', category: '축제사진', category2: '축제후기', time: formatDate(new Date()), key: 'moonLight' },
  { src: moonLightTour4, id: 13, title: '갤러리 게시글 4', content: '달빛기행 - 갤러리 게시글 4 내용', author: '관리자', user: '이용자', category: '축제사진', category2: '축제후기', time: formatDate(new Date()), key: 'moonLight' },
  { src: moonLightTour5, id: 12, title: '갤러리 게시글 5', content: '달빛기행 - 갤러리 게시글 5 내용', author: '관리자', user: '이용자', category: '축제사진', category2: '축제후기', time: formatDate(new Date()), key: 'moonLight' },
  { src: moonLightTour6, id: 11, title: '갤러리 게시글 6', content: '달빛기행 - 갤러리 게시글 6 내용', author: '관리자', user: '이용자', category: '축제사진', category2: '축제후기', time: formatDate(new Date()), key: 'moonLight' },
  { src: moonLightTour7, id: 10, title: '갤러리 게시글 7', content: '달빛기행 - 갤러리 게시글 7 내용', author: '관리자', user: '이용자', category: '축제사진', category2: '축제후기', time: formatDate(new Date()), key: 'moonLight' },
  { src: moonLightTour8, id: 9, title: '갤러리 게시글 8', content: '달빛기행 - 갤러리 게시글 8 내용', author: '관리자', user: '이용자', category: '축제사진', category2: '축제후기', time: formatDate(new Date()), key: 'moonLight' },
  { src: moonLightTour9, id: 8, title: '갤러리 게시글 9', content: '달빛기행 - 갤러리 게시글 9 내용', author: '관리자', user: '이용자', category: '축제사진', category2: '축제후기', time: formatDate(new Date()), key: 'moonLight' },
  { src: moonLightTour10, id: 7, title: '갤러리 게시글 10', content: '달빛기행 - 갤러리 게시글 10 내용', author: '관리자', user: '이용자', category: '축제사진', category2: '축제후기', time: formatDate(new Date()), key: 'moonLight' },
  { src: moonLightTour11, id: 6, title: '갤러리 게시글 11', content: '달빛기행 - 갤러리 게시글 11 내용', author: '관리자', user: '이용자', category: '축제사진', category2: '축제후기', time: formatDate(new Date()), key: 'moonLight' },
  { src: moonLightTour12, id: 5, title: '갤러리 게시글 12', content: '달빛기행 - 갤러리 게시글 12 내용', author: '관리자', user: '이용자', category: '축제사진', category2: '축제후기', time: formatDate(new Date()), key: 'moonLight' },
  { src: moonLightTour13, id: 4, title: '갤러리 게시글 13', content: '달빛기행 - 갤러리 게시글 13 내용', author: '관리자', user: '이용자', category: '축제사진', category2: '축제후기', time: formatDate(new Date()), key: 'moonLight' },
  { src: moonLightTour14, id: 3, title: '갤러리 게시글 14', content: '달빛기행 - 갤러리 게시글 14 내용', author: '관리자', user: '이용자', category: '축제사진', category2: '축제후기', time: formatDate(new Date()), key: 'moonLight' },
  { src: moonLightTour15, id: 2, title: '갤러리 게시글 15', content: '달빛기행 - 갤러리 게시글 15 내용', author: '관리자', user: '이용자', category: '축제사진', category2: '축제후기', time: formatDate(new Date()), key: 'moonLight' },
  { src: moonLightTour16, id: 1, title: '갤러리 게시글 16', content: '달빛기행 - 갤러리 게시글 16 내용', author: '관리자', user: '이용자', category: '축제사진', category2: '축제후기', time: formatDate(new Date()), key: 'moonLight' }
];

let resImg = [
  {src: resto1, id: 1},
  {src: resto2, id: 2},
  {src: resto3, id: 3},
  {src: resto4, id: 4},
  {src: resto5, id: 5},
  {src: resto6, id: 6},
  {src: resto7, id: 7},
  {src: resto8, id: 8},
  {src: resto9, id: 9},
  {src: resto10, id: 10},
  {src: resto11, id: 11},
  {src: resto12, id: 12},
  {src: resto13, id: 13},
  {src: resto14, id: 14},
  {src: resto15, id: 15},
  {src: resto16, id: 16}
]
export { galleryImages,resImg };