import React, { useEffect } from "react";
const { kakao } = window;

export default function Map2() {
  useEffect(() => {
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(37.5794309, 126.9910426), // 지도의 중심좌표
        level: 4, // 지도의 확대 레벨
        mapTypeId : kakao.maps.MapTypeId.ROADMAP // 지도종류
    }; 

// 지도를 생성한다 
var map = new kakao.maps.Map(mapContainer, mapOption); 

// 지도에 마커를 생성하고 표시한다
var marker = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.5794309, 126.9910426), // 마커의 좌표
    draggable : true, // 마커를 드래그 가능하도록 설정한다
    map: map // 마커를 표시할 지도 객체
});
});

  return (
    <div
      id="map" className="map"
      style={{
        width: "1071px",
        height: "445px",
      }}
    ></div>
  );
}