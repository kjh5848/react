let a = [1,2,3]; //변수
const b = [4,5,6]; //상수

//컨스트는 런타임 직전에 다 뜬다 1급객체다.

//1. 추가하기
let a1 = [...a,4];

console.log("이전",a);
console.log("이후",a1);

// 2.추가하기(특이한 것 - update)
let user = {name:"홍길동",age:20};
console.log(user);

// 3.삭제하기
let b1 = b.filter((item)=>item !== 5);

console.log(b1);

// 4.검색하기
let userList =[
    {name:"홍길동",age:20},
    {name:"홍길동",age:21},
    {name:"홍길동",age:22},
]

let search = userList.filter((item)=>item.age === 21);
console.log(search);


//5.가공
let postList = [
    {id:1,title:"안녕하세요",content:"반갑습니다"},
    {id:2,title:"안녕하세요",content:"반갑습니다"},
    {id:3,title:"안녕하세요",content:"반갑습니다"},
]

let post = postList.map((item)=>({...item,title:"안녕하세요"}));
console.log(post);
