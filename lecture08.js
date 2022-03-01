// undefined와 null

// *undefined*
// 시스템에서 어떤 변수나 속성이 정의되지 않은 경우를 표현하기 위해 사용
// 선언만 하고 초기화가 되지 않는 변수의 타입이나 값
// 객체의 정의되지 않은 속성의 타입이나 값

// *null*
// 개발자가 명시적으로 아무것도 없는 비어있는 상태를 나타낼 때 사용
// typeof의 결과는 object이며 값은 null


var uninitialized_var;

var obj = {
    x:1, 
    y:2
};

uninitialized_var; // undefined
typeof(uninitialized_var); // "undefined"

obj.x // 1
obj.y // 2
obj.z // undefined (정의하지 않은 속성 접근)
typeof(obj.z) // "undefined"

var null_var; // undefined
null_var = null; // null
null_var; // null
typeof(null_var); // "Object" (null이라는 빈 객체 저장)

// *undefined는 정의하지 않은 변수나 속성에 접근할 때 자주 만나게 되니 잘 기억해두기*


// *주요내용 복습*
// undefined 값을 가진 변수 a와, null 값을 가진 변수 b를 선언해보기
var a;
var b = null;

console.log("a의 자료형 :", typeof(a), "입니다.");
console.log("b의 자료형 :", typeof(b), "이고, 값은", b, "입니다.");