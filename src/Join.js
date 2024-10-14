import React from 'react';
import './Join.css';


function Join() {
    return (
      <div>
        <div id="container">
          <h1>회원 가입</h1>
            <form>
              <fieldset>
                <ul>
                  <li>
                    <label for="uid">아이디</label>
                    <input type="text" id="uid" autofocus required/> 
                  </li>
                  <li>
                    <label for="pwd1">비밀번호</label>
                    <input type="password" id="pwd1" required/> 
                  </li>        
                  <li>
                    <label for="pwd2">비밀번호 확인</label>
                    <input type="password" id="pwd2" required/> 
                  </li>
                  <li>
                    <label for="umail">이메일</label>
                    <input type="email" id="umail" required/> 
                  </li>
                  <li>
                    <label for="uname">이름</label>
                    <input type="name" id="name" required/> 
                  </li>
                  <li>
                    <label for="utel">전화번호</label>
                    <input type="tel" id="tel" maxlength="13" placeholder="'-'없이 입력하세요." required/>
                  </li>
                </ul>
                <div id="buttons">
                    <input type="button" value="가입하기" onclick="create_id();"></input>
                    <input type="button" value="취소" onclick="back();" ></input>
                </div>
              </fieldset>
            </form>

            {/*  footer  */}
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
    </div>    
    );
}



export default Join;