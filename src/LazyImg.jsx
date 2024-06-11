import React, { useState, useEffect, useRef } from "react";

function LazyImage({ src, alt, className, width = "auto", height = "auto" }) {
  const [isLoading, setLoading] = useState(false);

  const imgRef = useRef(null);
  const observer = useRef();

  const intersectionObserver = (entries, io) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target);
        setLoading(true);
      }
    });
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(intersectionObserver);
    imgRef.current && observer.current.observe(imgRef.current);
  }, []);

  return (
    <div className="w-full">
      <img width={width} height={height} ref={imgRef} src={isLoading ? src : null} alt={alt} className={className} />
    </div>
  );
}

export default LazyImage;



// import React, { useState, useEffect } from "react";

// function LazyImage({ src, alt, className, width = "auto", height = "auto" }) {
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     // 컴포넌트가 마운트될 때 isLoading 상태를 true로 설정하여 이미지를 로드합니다.
//     setLoading(true);
//   }, []);

//   return (
//     <div className="w-full">
//       <img
//         width={width}
//         height={height}
//         src={isLoading ? src : null}
//         alt={alt}
//         className={className}
//       />
//     </div>
//   );
// }

// export default LazyImage;
