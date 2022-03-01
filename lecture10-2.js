// 연산자 우선순위

// 1. Logical Operator : NOT (!)
// 2. Arithmetic Operator : *, /, %, +, -
// 3. Relational Operator : >, <, <=, >=, ==, !=
// 4. Logical Operator : AudioNode(&&)
// 5. Logical Operator : OR(||)

2 * 3 > 4 + 5 && 6 / 3 == 2 || !false

height >= 180 && gender == "male" || height >= 165 && gender == "female"
(height >= 180 && gender == "male") || (height >= 165 && gender == "female")

// 괄호
// 우선순위를 명시하기 위해 괄호를 사용. 
// 괄호안의 계산식이 먼저 계산됨.
// - 부가적 효과
//   - 코드의 가독성 향상
//   - 연산자 우선순위 실수 방지
