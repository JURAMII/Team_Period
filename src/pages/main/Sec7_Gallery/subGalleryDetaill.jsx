// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { starLightImages, moonLightImages } from '../../../image';

// const DetailPage = () => {
//     // URL에서 id 파라미터를 가져옵니다
//     const { id } = useParams();
  
//     // 모든 이미지 배열을 하나로 합칩니다
//     const allImages = [...starLightImages, ...moonLightImages];
    
//     // id를 사용하여 해당 이미지 소스를 가져옵니다
//     const image = allImages[id];
  
//     return (
//       <div>
//         <h1>상세 페이지</h1>
//         {/* 이미지가 존재할 경우 이미지를 표시하고, 그렇지 않으면 '이미지를 찾을 수 없습니다' 메시지를 표시합니다 */}
//         {image? (
//           <>
//             <img src={image.src} alt={`Detail ${id}`} />
//             <p>이미지 {id}에 대한 상세 정보</p>
//           </>
//         ) : (
//           <p>이미지를 찾을 수 없습니다.</p>
//         )}
//       </div>
//     );
//   };
  
//   export default DetailPage;

import React from 'react';
import { useParams } from 'react-router-dom';
import { galleryImages } from '../../../image';

const DetailPage = () => {
  // URL에서 id 파라미터를 가져옵니다
  const { id } = useParams();

  // id를 사용하여 해당 이미지 데이터를 가져옵니다
  const image = galleryImages.find(image => image.id === parseInt(id, 10));

  return (
    <div>
      <h1>상세 페이지</h1>
      {/* 이미지가 존재할 경우 이미지를 표시하고, 그렇지 않으면 '이미지를 찾을 수 없습니다' 메시지를 표시합니다 */}
      {image ? (
        <>
          <img src={image.src} alt={`Detail ${id}`} />
          <h2>{image.title}</h2>
          <p>{image.content}</p>
          <p>{image.category === '축제사진' ? `작성자: ${image.author}` : `작성자: ${image.user}`}</p>
          <p>작성일: {image.time}</p>
        </>
      ) : (
        <p>이미지를 찾을 수 없습니다.</p>
      )}
    </div>
  );
};

export default DetailPage;


