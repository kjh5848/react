import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store";

function Login(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
    
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  function loginProcess(e) {
    e.preventDefault(); // submit 하지마!!

    // 1. form 태그 username, password 가져오기
    let username = user.username;
    let password = user.password;

    // 2. 유효성 검증
    console.log(username);
    console.log(password);

    // 3. 통신

    //post로 정보를 서버로 전송
    let requstBody = JSON.stringify(user)
    console.log(requstBody)

    // 4. store 상태변경
    localStorage.setItem("jwt", "slkdfjaksjfljaliehggiagjkadga")
    dispatch(login());
    //자바스크립트는 쿠키에 접근할 수 없다. 

    // 5. 화면 이동
    navigate("/loginComplete");
  }

  function move() {
    navigate("/loginComplete");
  }

  function changeValue(e) {
    //console.log("event", e);
    //console.log("value", e.target.value);
    //console.log("name", e.target.name);

    // computed property name => 변수를 키값으로 바인딩할 수 있따.
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

    //console.log("username", user.username);
    //console.log("password", user.password);
  } // 상태 변경을 하면 메서드가 종료되어야 반영된다.

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="username"
          onChange={changeValue}
          name="username"
        />
        <input
          type="password"
          placeholder="password"
          onChange={changeValue}
          name="password"
        />
        <button type="submit" onClick={loginProcess}>
          로그인
        </button>
      </form>
      <button onClick={move}>로그인안하고 넘어가기</button>
    </div>
  );
}

export default Login;