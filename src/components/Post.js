import React, { useState,useEffect } from 'react';

function Post(props) {
    console.log("post")
    const [page, setPage] = useState(0)
    
    function nextPage(){
        setPage(page)
    }

    const [post, setPost] = useState({
        userId: undefined,
        id: undefined,
        title: "",
        body: "",
      });
    

    async function downdoad(){
       let response = await fetch("https://jsonplaceholder.typicode.com/posts/3");
       let responseBody = await response.json();
       console.log("responseBody", response)

       setPost(responseBody)
    }
    
//위 다운로드 함수를 직접호출하면 계속 다운로드를 하기 때문에 userEffect()를 사용한다.


    useEffect(()=>{
        downdoad()
    },[  page  ]); //최초에 실행되는 함수

    return (
        <div>
        userId: {post.userId}, id: {post.id}, title: {post.title} <br />
        body: {post.body}
        <button >다음페이지</button>
      </div>
  );
}

export default Post;