import Video1 from '/videos/mainVideo.mp4';

const MainVideo = () =>{
    return(
    <section style={{width : '100%'}}>
          <video loop autoPlay muted="muted" width='100%' height='100%' id='vid'>
            <source src={Video1} type="video/mp4"/>
          </video>
    </section>
    )
}

export default MainVideo;