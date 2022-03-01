// Object : number, string, boolean의 단순 자료형보다 더 복잡한 자료를 표현할 때 사용

{
    // 객체를 정의
};

var empty_obj = {};
typeof(empty_obj); // Object

// 객체는 속성(Property)의 집합으로 이루어진다.

var man = {name:"홍길동", age:20, height:180};

// Property(속성) 정의하기 
// 속성이름 : 값, 속성이름 : 값
// {name1:value1, name2:value2, ...};


// 객체 속성 접근 및 변경

// 1. 객체이름.속성이름
//   -> man.name
// 2. 객체이름["속성이름"]
//   -> man["name"]

man.name // "홍길동"
man["name"] // "홍길동"

man.name="이몽룡"; // "이몽룡"
man["age"] = 15; // 15

// *주요내용 복습*
// book의 title을 이용해서 책의 제목 출력해보기
var book = {"title":"어린왕자"};
console.log("제목:", book["title"]); // 객체이름["속성이름"]
