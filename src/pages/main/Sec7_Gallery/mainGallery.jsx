const MainGallery = ()=>{
    return(
        <section>
            <div className="galleryTit">
                <h1>갤러리</h1>
                <p>지금 바로 축제 사진을 확인해보세요!</p>
            </div>
            <div className="galleryBtn">
                <button>축제소개</button>
                <button>축제후기</button>
            </div>
            <div className="galleryslide">
                <div>
                    <ul className="gSlideWrap">
                        <li>
                            <a>
                                <img src="" alt="" />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="" alt="" />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="" alt="" />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="" alt="" />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="gSlideWrap">
                        <li>
                            <a>
                                <img src="" alt="" />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="" alt="" />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="" alt="" />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="" alt="" />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default MainGallery;