import resto1 from '../../../assets/restaurant/resto (1).webp';
import resto2 from '../../../assets/restaurant/resto (2).webp';
import resto3 from '../../../assets/restaurant/resto (3).webp';
import resto4 from '../../../assets/restaurant/resto (4).webp';
import resto5 from '../../../assets/restaurant/resto (5).webp';
import resto6 from '../../../assets/restaurant/resto (6).webp';
import resto7 from '../../../assets/restaurant/resto (7).webp';
import resto8 from '../../../assets/restaurant/resto (8).webp';
import resto9 from '../../../assets/restaurant/resto (9).webp';
import resto10 from '../../../assets/restaurant/resto (10).webp';
import resto11 from '../../../assets/restaurant/resto (11).webp';
import resto12 from '../../../assets/restaurant/resto (12).webp';
import resto13 from '../../../assets/restaurant/resto (13).webp';
import resto14 from '../../../assets/restaurant/resto (14).webp';
import resto15 from '../../../assets/restaurant/resto (15).webp';
import resto16 from '../../../assets/restaurant/resto (16).webp';

const formatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}.${month}.${day}`;
};

export const resposts = [
    {id: 1,
     img : resto1,
     gallTit : "목포 자매집",
     gallTxT : "해남 출신의 네 자매가 운영하는 남도 음식 전문점. 해남에서 올라오는 자연산 재료를 사용한 남도식 반찬이 맛있다. 점심때는 짱뚱어탕이 유명하다.",
     author: "관리자",
     category: "맛집",
     time: formatDate(new Date()),
     key: 'rest'
    },
    {id : 2,
    img : resto2,
    gallTit : "예당",
    gallTxT : "정갈한 한정식을 맛보고 싶은 분들이 즐겨 찾는 전통 한정식집. 편안한 분위기와 정성어린 서비스는 귀한 사람과 소중한 추억을 만들기에 안성맞춤. 예당은 한정식을 통해 느껴지는 푸짐한 인심과 풀 내음으로 기억된다.",
    author: "관리자",
    category: "맛집",
    time: formatDate(new Date()),
    key: 'res'
   },
  {id : 3,
img : resto3,
  gallTit : "레트로오븐",
  gallTxT : "한적한 주택가에 있는 빵집으로, 빵 맛이 좋기로 유명한 곳이다. 많은 속 재료를 넣어 만들기보다는 치아바타나 올리브 빵 같이 빵 자체의 맛에 중점을 둔다. 부드러우면서 쫄깃하기도 해 식감이 뛰어나다. 오후가 되면 빵 대부분이 떨어지기 때문에 일찍 가거나 전화로 빵이 남았는지 문의한 후 가보는 것이 좋다.",
  author: "관리자",
  category: "맛집",
  time: formatDate(new Date()),
  key: 'res'
 },
 {id : 4,
img : resto4,
 gallTit : "시실리",
 gallTxT : "커피 맛이 훌륭하기로 인정받고 있는 핸드 드립 커피 전문점. 몬순, 디카페인 등 생두를 볼 수 있으며 원두는 판매도 가능하다. 식사류로는 파스타도 즐길 수 있으며 샐러드, 빵, 커피가 같이 나온다. 실내 분위기는 클래식하면서 편안하다",
 author: "관리자",
 category: "맛집",
 time: formatDate(new Date()),
 key: 'res'
},
{id : 5,
img : resto5,
gallTit : "손가네곰국수",
gallTxT : "한우 생불고기와 곰국수(사골 국물 칼국수)를 맛볼 수 있다. 이북식 왕만두도 인기 메뉴이다. 한옥 분위기에서 담백한 주요리와 정갈한 반찬을 맛볼 수 있어 찾는 사람들이 많다.",
author: "관리자",
category: "맛집",
time: formatDate(new Date()),
key: 'res'
},
{id : 6,
img : resto6,
gallTit : "쉐플로",
gallTxT : "서래마을에서 프렌치 퓨전으로 이름을 알린 키친 플로에서 새로 오픈한 프렌치 선술집. 프렌치 스타일의 음식과 더불어 일본 스타일의 음식도 만나볼 수 있다. 비교적 저렴한 분위기에서 가볍게 한잔하기에 좋은 곳이다.",
author: "관리자",
category: "맛집",
time: formatDate(new Date()),
key: 'res'
},
{id : 7,
  img : resto7,
gallTit : "부산양곱창",
gallTxT : "비교적 저렴하게 곱창을 즐길 수 있다. 숯불구이라는 점이 장점이다. 마늘 양념 된 신선하고 오동통한 곱창이 괜찮다. 마무리로 먹는 양김치볶음밥이 저렴하면서도 환상적인 맛을 자랑한다. 곱창과 대창까지 푸짐하게 들어간 곱창전골도 인기가 있다.",
author: "관리자",
category: "맛집",
time: formatDate(new Date()),
key: 'res'
},
{id : 8,
  img : resto8,
gallTit : "벽제갈비 타워팰리스점",
gallTxT : "세계 최고의 맛 아시안 월스트리트 저널 신문에서 아시아 5대 음식점으로 선정, 세계 27대 대도시 대표 음식점 50선에 뽑힌 적도 있다. 맛있는 육즙을 가진 벽제 갈비의 설화한우를 맛볼 수 있다.",
author: "관리자",
category: "맛집",
time: formatDate(new Date()),
key: 'res'
},
{id : 9,
  img : resto9,
gallTit : "홈수끼",
gallTxT : "태국의 수키와 일본의 샤부샤부를 혼합한 음식점이다. 코스 요리를 시키면 채소, 소고기 샤부샤부와 해물 죽을 즐길 수 있다. 샤부샤부를 먹은 후에는 칼국수와 죽을 끓여 먹는다. ",
author: "관리자",
category: "맛집",
time: formatDate(new Date()),
key: 'res'
},
{id : 10,
  img : resto10,
gallTit : "마복림 할머니 막내아들네",
gallTxT : "빨간 떡볶이의 원조 '신당동 떡볶이'를 만든 마복림 할머니의 며느리가 비법을 전수받아 운영하는 떡볶이 전문점이다. 신당동 떡볶이 타운 내에 위치하고 있다. 인기가 많아져 최근에는 택배 배송 서비스도 제공하고 있다.",
author: "관리자",
category: "맛집",
time: formatDate(new Date()),
key: 'res'
},
{id : 11,
  img : resto11,
gallTit : "일상",
gallTxT : "핸드 드립 커피전문점이다. 한쪽 벽면 가득한 국내외 책자들을 읽으면서 여유롭게 훌륭한 커피를 즐길 수 있는 곳이다. 커피에 대한 애정이 깊으신 사장님의 핸드 드립 커피 무료 특강도 있다.",
author: "관리자",
category: "맛집",
time: formatDate(new Date()),
key: 'res'
},
{id : 12,
  img : resto12,
gallTit : "슈치쿠",
gallTxT : "63빌딩 식당가를 레노베이션하면서 새로 오픈한 곳이다. 신선한 재료의 맛을 살린 스시와 사시미를 맛볼 수 있다. 58층에서 내려다보는 스시 카운터의 전망은 서울 최고라고도 할 수 있다.",
author: "관리자",
category: "맛집",
time: formatDate(new Date()),
key: 'res'
},
{id : 13,
  img : resto13,
gallTit : "마복림 할머니 막내아들네",
gallTxT : "빨간 떡볶이의 원조 '신당동 떡볶이'를 만든 마복림 할머니의 며느리가 비법을 전수받아 운영하는 떡볶이 전문점이다. 신당동 떡볶이 타운 내에 위치하고 있다. 인기가 많아져 최근에는 택배 배송 서비스도 제공하고 있다.",
author: "관리자",
category: "맛집",
time: formatDate(new Date()),
key: 'res'
},
{id : 14,
  img : resto14,
gallTit : "중국",
gallTxT : "자그마한 집이지만 짬뽕, 짜장면, 탕수육 등이 맛있는 집으로 소문났다.",
author: "관리자",
category: "맛집",
time: formatDate(new Date()),
key: 'res'
},
{id : 15,
  img : resto15,
gallTit : "트라토리아모로",
gallTxT : "그안의 셰프가 독립한 곳. 파스타 맛이 좋으며, 다양한 종류의 메인 요리도 준비되어 있다.",
author: "관리자",
category: "맛집",
time: formatDate(new Date()),
key: 'res'
},
{id : 16,
  img : resto16,
gallTit : "스시 카이신",
gallTxT : "일본 긴자에서 접할 수 있는 작고 아담한 스타일의 고급 스시 전문점이다. 식자재 구매부터 손질, 접객에 이르기까지 일본인 오너셰프 혼자서 전 과정을 준비, 진행하여 항상 일정한 수준과 맛을 유지할 수 있도록 소규모로 카운터 총 6석의 카운터 석만을 운영한다. 1인부터 식사 가능하며, 소규모이므로 가능한 사전 예약을 추천한다. ",
author: "관리자",
category: "맛집",
time: formatDate(new Date()),
key: 'res'
}]
