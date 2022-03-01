// Number : 숫자를 나타내는 자료형

var a = 100; // 정수 표현
var b = 3.14; // 실수 표현
var c = 1e-3; // 지수표기법 사용 가능 (0.001)
// javascript는 64bit를 활용하여 숫자 표현. 
// -2의 63승~2의 63승-1 / 대략 10의 19승 정도의 해당하는 값

var height=prompt("키를 입력해주세요.");
console.log(height, typeof(height)); // 변수타입 : string
// prompt는 사용자로부터 입력받은 문자열을 결과값으로 돌려주기 때문에 string이다.

// parseInt : 문자열을 숫자로 변환
// parseFloat : 문자열을 실수로 변환
var height_int = parseInt(height);
console.log(height_int, typeof(height_int)); // number

var height_float = parseFloat(height);
console.log(height_float, typeof(height_float)); // number

// "180.3" 입력 시
//   height_int : 180 / 자료형 : Number

// "180.3입니다." 입력 시
//   height_float : 180.3 / 자료형 : Number

// "제 키는 180입니다." 입력 시
//   height_int : NaN, height_float : NaN / 자료형 : Number  *NaN : Not a Number*

// parseInt와 parseFloat의 경우에는 문자열의 시작부터 인식할 수 있는 숫자를 인식하기 때문에 
// 시작 점이 문자열로 시작한 경우 정상적으로 동작하지 않음. 

// 정상적이지 않는 숫자나 표현할 수 없는 범위의 수를 표시하는 NaN, Infinity
