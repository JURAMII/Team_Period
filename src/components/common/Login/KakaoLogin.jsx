import icon2 from "../../../assets/icons8-account-72.png";

const KakaoLogin = ()=>
{
    const Rest_api_key='7fa0610f6442011e7212da9227bd4c8e' //REST API KEY
    const redirect_uri = 'http://localhost:5173/Team_Period/' //Redirect URI
    
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }

    return(
    <>
    <button onClick={handleLogin}>
        <img src={icon2} alt="로그인 아이콘" />
    </button>
    </>
    )
}
export default KakaoLogin
