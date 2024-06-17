import { useEffect, useState } from 'react';
import icon2 from "../../../assets/icons8-account-72.png";

const KakaoLogin = ({ setUserInfo, onLogout }) => {
    const Rest_api_key = '7fa0610f6442011e7212da9227bd4c8e'; // REST API KEY
    const redirect_uri = 'https://juramii.github.io/Team_Period/'; // Redirect URI

    const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태
    const [userProfile, setUserProfile] = useState(null); // 사용자 프로필 정보

    useEffect(() => {
        const code = new URL(window.location.href).searchParams.get("code");

        if (code) {
            // 인가 코드를 이용해 토큰 요청
            fetch(`https://kauth.kakao.com/oauth/token`, {
                method: 'POST',
                headers: { 'Content-type': 'application/x-www-form-urlencoded;charset=utf-8' },
                body: `grant_type=authorization_code&client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&code=${code}`
            })
                .then(response => response.json())
                .then(data => {
                    if (data.access_token) {
                        // 토큰을 localStorage에 저장
                        localStorage.setItem('kakao_token', data.access_token);

                        // 토큰을 통해 사용자 정보 요청
                        fetch('https://kapi.kakao.com/v2/user/me', {
                            method: 'GET',
                            headers: {
                                'Authorization': `Bearer ${data.access_token}`,
                                'Content-Type': 'application/json'
                            }
                        })
                            .then(res => res.json())
                            .then(response => {
                                setIsLoggedIn(true);
                                setUserProfile(response.kakao_account.profile);
                                setUserInfo({
                                    nickname: response.kakao_account.profile.nickname,
                                    profile_image: response.kakao_account.profile.profile_image_url
                                });

                                // URL에서 인가 코드 제거
                                window.history.pushState({}, document.title, window.location.pathname);
                            })
                            .catch(error => {
                                console.error('사용자 정보 요청 실패', error);
                            });
                    } else {
                        console.error('토큰 요청 실패', data);
                    }
                })
                .catch(error => {
                    console.error('토큰 요청 에러', error);
                });
        }
    }, []);

    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

    const handleLogin = () => {
        window.location.href = kakaoURL; // 카카오 로그인 페이지로 이동
    };

    return (
        <>
            {isLoggedIn && userProfile ? (
                // 로그인 상태일 때는 사용자 프로필을 보여줌
                <div>
                    <img src={userProfile.profile_image_url} alt="프로필 이미지" onClick={onLogout} />
                    <span>{userProfile.nickname}</span>
                </div>
            ) : (
                // 로그아웃 상태일 때는 로그인 버튼을 보여줌
                <div onClick={handleLogin} className='loginWrap'>
                    <img src={icon2} alt="로그인 이미지" />
                </div>
            )}
        </>
    );
};

export default KakaoLogin;

