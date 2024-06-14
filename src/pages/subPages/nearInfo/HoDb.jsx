import hotel1 from '../../../assets/hotel/hotel (1).webp';
import hotel2 from '../../../assets/hotel/hotel (2).webp';
import hotel3 from '../../../assets/hotel/hotel (3).webp';
import hotel4 from '../../../assets/hotel/hotel (4).webp';
import hotel5 from '../../../assets/hotel/hotel (5).webp';
import hotel6 from '../../../assets/hotel/hotel (6).webp';
import hotel7 from '../../../assets/hotel/hotel (7).webp';
import hotel8 from '../../../assets/hotel/hotel (8).webp';
import hotel9 from '../../../assets/hotel/hotel (9).webp';
import hotel10 from '../../../assets/hotel/hotel (10).webp';
import hotel11 from '../../../assets/hotel/hotel (11).webp';
import hotel12 from '../../../assets/hotel/hotel (12).webp';

const formatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}.${month}.${day}`;
};

export const hoposts = [
    {id: 1,
     img : hotel1,
     gallTit : "노스텔지아",
     gallTxT : "주요관광지 및 대학병원 30분 이내 이동 가능",
     author: "관리자",
     category: "hotel",
     time: formatDate(new Date()),
     key: 'hotel'
    },
    {id : 2,
    img : hotel2,
    gallTit : "한옥 스테이 미경",
    gallTxT : "한양도성 낙산구간 100m 거리에 위치한 2층 독채 한옥입니다.",
    author: "관리자",
    category: "hotel",
    time: formatDate(new Date()),
    key: 'hotel'
   },
  {id : 3,
img : hotel3,
  gallTit : "잠실, 쉼",
  gallTxT : "교통 편리하고 아늑하고 깨끗한 숙소입니다.",
  author: "관리자",
  category: "hotel",
  time: formatDate(new Date()),
  key: 'hotel'
 },
 {id : 4,
img : hotel4,
 gallTit : "연희동 J스테이",
 gallTxT : "서울/홍대와 연남을 경험하기에 적합한 숙소로 최대 8명이 숙박할 수 있는 이웃집처럼 편하고 아늑한 공간입니다.",
 author: "관리자",
 category: "hotel",
 time: formatDate(new Date()),
 key: 'hotel'
},
{id : 5,
img : hotel5,
gallTit : "스테이한남",
gallTxT : "한남동 중심부에 위치해 가족,연인이 머물기에 적합한 곳입니다.",
author: "관리자",
category: "hotel",
time: formatDate(new Date()),
key: 'hotel'
},
{id : 6,
img : hotel6,
gallTit : "스테이 청량",
gallTxT : "깔끔하고 모던한 숙소입니다.",
author: "관리자",
category: "hotel",
time: formatDate(new Date()),
key: 'hotel'
},
{id : 7,
  img : hotel7,
gallTit : "소소담 스테이",
gallTxT : "소소담스테이는 소중한 분들과의 추억을 쌓고 편안한 휴식을 취할 수 있도록 정성을 담아서 준비한 공간입니다.",
author: "관리자",
category: "hotel",
time: formatDate(new Date()),
key: 'hotel'
},
{id : 8,
  img : hotel8,
gallTit : "석촌별채",
gallTxT : "도심 속에서 경험하는 한국적 레트로 숙소로 석촌호수를 품은 잠실 맛집과 인프라, 편리한 교통의 공간입니다.",
author: "관리자",
category: "hotel",
time: formatDate(new Date()),
key: 'hotel'
},
{id : 9,
  img : hotel9,
gallTit : "도시둥지",
gallTxT : "태국의 수키와 일본의 샤부샤부를 혼합한 음식점이다. 코스 요리를 시키면 채소, 소고기 샤부샤부와 해물 죽을 즐길 수 있다. 샤부샤부를 먹은 후에는 칼국수와 죽을 끓여 먹는다. ",
author: "관리자",
category: "hotel",
time: formatDate(new Date()),
key: 'hotel'
},
{id : 10,
  img : hotel10,
gallTit : "낙원하우스",
gallTxT : "2023년 8월 전체 리모델링되어 깨끗하고 아늑한 숙소",
author: "관리자",
category: "hotel",
time: formatDate(new Date()),
key: 'hotel'
},
{id : 11,
  img : hotel11,
gallTit : "공덕 스테이 마실",
gallTxT : "숙소는 '이웃집에 놀러가다' 라는 뜻을 지닌 순 우리말입니다.",
author: "관리자",
category: "hotel",
time: formatDate(new Date()),
key: 'hotel'
},
{id : 12,
  img : hotel12,
gallTit : "조이스테이",
gallTxT : "★ 장기 숙박,외국인, 가족, 단체 문의 환영(특별가할인)",
author: "관리자",
category: "hotel",
time: formatDate(new Date()),
key: 'hotel'
}]
