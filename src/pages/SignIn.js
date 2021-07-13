import React from "react";

function SignIn({ location, history }) {
  return (
    <>
      <main role="main">
        <section class="login">
          <article className="img_container"></article>
          <article className="login_form_container">
            <div className="login_form">
              <h1>
                <img src="/images/logo.png" alt="instagram" className="logo" />
              </h1>
              <div class="login_method">
                <div class="login_input">
                  <form>
                    <input
                      name="id"
                      type="text"
                      placeholder="전화번호, 사용자 이름 또는 이메일"
                    />
                    <br />
                    <input
                      name="password"
                      type="password"
                      placeholder="비밀번호"
                    />
                    <br />
                    <button type="submit">로그인</button>
                  </form>
                </div>
                <div className="login_horizon">
                  <div className="br"></div>
                  <div className="or">또는</div>
                  <div className="br"></div>
                </div>
                <div className="login_facebook">
                  <button>
                    <span class="facebook_icon"><img src="/images/facebook_icon.png" alt="facebook"/></span>
                    <span class="facebook_text">facebook으로 로그인하기</span>
                  </button>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
      <footer>
        <div class="container">
          <div class="article-link">
            <div class="article-each ">
              <a link="#">소개</a>
            </div>
            <div class="article-each">
              <a link="#">블로그</a>
            </div>
            <div class="article-each">
              <a link="#">채용 정보</a>
            </div>
            <div class="article-each">
              <a link="#">도움말</a>
            </div>
            <div class="article-each">
              <a link="#">API</a>
            </div>
            <div class="article-each">
              <a link="#">개인정보처리방침</a>
            </div>
            <div class="article-each">
              <a link="#">약관</a>
            </div>
            <div class="article-each">
              <a link="#">인기 계정</a>
            </div>
            <div class="article-each">
              <a link="#">해시태그</a>
            </div>
            <div class="article-each">
              <a link="#">위치</a>
            </div>
          </div>
          <div class="article-lan-co"></div>
        </div>
      </footer>
    </>
  );
}
export default SignIn;
