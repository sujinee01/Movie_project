import React from 'react';
import './Login.css';

function Login() {
    return (
      <div>
        {/* loginbox */}
        <div className="loginbox">
          <h2>로그인</h2>
          <form action="#">
            <fieldset>
              <label for="loginid">아이디</label>
              <input type="text" id="uid" placeholder="아이디을 입력해 주세요" required />
              <label for="loginpw">비밀번호</label>
              <input type="password" id="pwd1" placeholder="비밀번호를 입력해 주세요" required />
              <ul>
                <li><a href="http://localhost:3001/Join">회원가입</a></li>
                <li><a href="#">아이디, 비밀번호 찾기</a></li>
              </ul>
              <button type="submit">로그인</button>
            </fieldset>
          </form>
        </div>
      
   
        {/*  footer */}
        <div id="footer">
          <div className="container">
            <h2 className="ir_su"></h2>
    
            <div className="footer">
              <ul>
                <li><a href="#">사이트 도움말</a></li>
                <li><a href="#">사이트 이용약관</a></li>
                <li><a href="#">사이트 운영규칙</a></li>
                <li><a href="#"><strong>개인정보취급방침</strong></a></li>
                <li><a href="#">책임의 한계와 법적고지</a></li>
                <li><a href="#">게시중단요청 서비스</a></li>
                <li><a href="#">고객센터</a></li>
              </ul>
              <address>Copyright&copy;movie All Right Reserved</address>
            </div>
          </div>
        </div>
      </div>
      ); 
}


export default Login;