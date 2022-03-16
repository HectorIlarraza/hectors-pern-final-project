// import {useRef, useState, useEffect, useContext } from 'react';
// import AuthContext from '../context/AuthProvider';
// import axios from 'axios';

// const API = process.env.REACT_APP_API_URL;

// const ProductLogin = () => {
//     const { setAuth } = useContext(AuthContext);
//     const userRef = useRef();
//     const errRef = useRef();

//     const [user, setUser] = useState("");
//     const [pwd, setPwd] = useState("");
//     const [errMsg, setErrMsg] = useState("");
//     const [success, setSuccess] = useState(false);

//     useEffect(() => {
//         userRef.current.focus();
//     }, []);

//     useEffect(() => {
//         setErrMsg("");
//     }, [user, pwd]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try{
//             const response = await axios.post(API, JSON.stringify({user, pwd}), 
//                 {
//                     headers: { 'Content-Type': 'application/json'},
//                     withCredentials: true
//                 }
//             );
//             console.log(JSON.stringify(response?.data));
//             const accessToken = response?.data?.accessToken;
//             const roles = response?.data?.roles;
//             setAuth({ user, pwd, roles, accessToken });
//             setUser("");
//             setPwd("");
//             setSuccess(true);
//         }catch(err){
//             if(!err?.response){
//                 setErrMsg("No Server Response");
//             }else if(err.response?.status === 400){
//                 setErrMsg("Missing UserName or Password");
//             }else if(err.response?.status === 401){
//                 setErrMsg("Unauthorized");
//             }else{
//                 setErrMsg("Login Failed");
//             }
//             errRef.current.focus();
//         }
//     }

//   return (
//         <>
//             {success ? (
//                 <div className='center'>
//                     <h1>You are logged in!</h1>
//                     <br />
//                     <p>
//                         <a href="#">Go to Home</a>
//                     </p>
//                 </div>
//             ) : (
//                 <div className='center'>
//                     <p ref={errRef} className={errMsg ? "errmsg" : 
//                         "offscreen"} aria-live="assertive">{errMsg}
//                     </p>
//                     <h1>Login</h1>
//                     <form method="post" onSubmit={handleSubmit}>
//                         <div className='txt_field'>
//                             <input 
//                                 type="text" 
//                                 id="username"
//                                 ref={userRef}
//                                 autoComplete="off"
//                                 onChange={(e) => setUser(e.target.value)} 
//                                 value={user}
//                                 required
//                             />
//                             <span></span>
//                             <label>Username:</label>
//                         </div>
//                         <div className='txt_field'>
//                             <input 
//                                 type="password" 
//                                 id="password"
//                                 onChange={(e) => setPwd(e.target.value)} 
//                                 value={pwd}
//                                 required
//                                 />
//                             <span></span>
//                             <label>Password:</label>
//                         </div>
//                         <div className='pass'>Forgot Password?</div>
//                         <input type="submit" value="Login"/>
//                         <div className="signup_link">
//                             Need an Account? <a href="#">Sign Up</a>
//                         </div>
//                     </form>
//                 </div>
//             )}
//         </>
//     )
// }

// export default ProductLogin;