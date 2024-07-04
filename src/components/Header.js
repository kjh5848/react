import React from 'react';
import styled from 'styled-components';


const MyLi = styled.li`
    color: green;
    font-size: 30px;
    list-style: none;
`;

function Header() {
    
    return (
        <div>
      <div>
        <ul>
          <MyLi>홈</MyLi>
          <MyLi>글쓰기</MyLi>
          <MyLi>로그아웃</MyLi>
        </ul>
      </div>
    </div>
    );
}

export default Header;
//이걸 해야 다른곳에서 임포트를 할 수 있다.
