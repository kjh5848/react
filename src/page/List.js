import React from "react";
import { useSearchParams } from "react-router-dom";

function List() {
    console.log()
    const [searchParams, setSearchParams] = useSearchParams();
    let username = searchParams.get("username")
    let password = searchParams.get("password")
    //   let page = searchParams.get("page");

    // 두번째 방법
    //const navigate = useNavigate();

    function next() {
        // 쿼리스트링 값이 변경되면서 화면 새로 불러짐
        // setSearchParams({ page: Number(page) + 1 });
        setSearchParams({username : {username} , password : {password}})

        //let newPage = Number(page) + 1;
        //navigate("/list?page=" + newPage);
    }

  console.log("화면 새로 불러짐");
  return (
    <div>
      {/* <h1>List page : {page}</h1> */}
      <h1>List username : {username}</h1>
      <h1>List password : {password}</h1>
      <button onClick={next}>다음페이지</button>
    </div>
  );
}

export default List;