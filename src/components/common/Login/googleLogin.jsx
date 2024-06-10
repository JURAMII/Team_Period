// import { GoogleLogin } from "@react-oauth/google";
// // import { GoogleOAuthProvider } from "@react-oauth/google";

// const GoogleLoginButton = () => {
//   const clientId =
//     "300552730883-jiclu9ee2p9f2quvk6rqn1vq1u4gqkca.apps.googleusercontent.com";

//   const onSuccess = (res) => {
//     console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
//   }
//   const onFailure = (res) => {
//     console.log("LOGIN FAILED! res: ", res);
//   }

//   return (
//     <>
//       {/* <GoogleOAuthProvider clientId={clientId}>
//         <GoogleLogin
//           onSuccess={(res) => {
//             console.log(res);
//           }}
//           onFailure={(err) => { 
//             console.log(err);
//           }}
//         />
//         {/* <GoogleLogin
//           onSuccess={(credentialResponse) => {
//             console.log(credentialResponse);
//           }}
//           onError={() => {
//             console.log("Login Failed");
//           }}
//           useOneTap
//         />
//       </GoogleOAuthProvider> */}
//       <div id="signInButton">
//         <GoogleLogin
//             clientId={clientId}
//             buttonText="Login"
//             onSuccess={onSuccess}
//             onFailure={onFailure}
//             cookiePolicy={"single_host_origin"}
//             isSingnedIn={true}
//         />
//       </div>
//     </>
//   );
// };

// export default GoogleLoginButton;

import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const GoogleLoginButton = () => {
  const googleSocialLogin = useGoogleLogin({
    scope: "email profile",
    onSuccess: async ({ code }) => {
      axios
        .post("http://localhost:4000/auth/google/callback", { code })
        .then(({ data }) => {
          console.log(data);
        });
    },
    onError: (errorResponse) => {
      console.error(errorResponse);
    },
    flow: "auth-code",
  });

  return (
    <>
      <div>
        <button onClick={googleSocialLogin}>Google Button</button>
      </div>
    </>
  );
};

export default GoogleLoginButton;

// import {GoogleLogin} from "@react-oauth/google";

// const GoogleLoginButton = () => {

//     return (
//         <div>
//           <GoogleLogin
//             onSuccess={(credentialResponse) => {
//               console.log(credentialResponse);
//             }}
//             onError={() => {
//               console.error("Failed Login..");
//             }}
//             useOneTap
//           />
//         </div>
//       );
// };

// export default GoogleLoginButton
