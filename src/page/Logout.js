import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store";

function Logout(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    function logoutProcess() {
    // 1. form 태그 username, password 가져오기

    // 2. 유효성 검증

    // 3. 통신
      
    // 4. store 상태변경
    dispatch(logout())

    // 5. 화면 이동
    navigate("/logoutComplete");
  }

  return (
    <div>
      <button onClick={logoutProcess}>로그아웃</button>
    </div>
  );
}

export default Logout;