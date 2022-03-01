// for in문

// 객체의 각 엘리먼트에 접근할 수 있는 반복문.

// var obj={
//     "속성1":1,
//     "속성2":2,
//     "속성3":3
// }
// Object.keys(obj);

for( var propertyName in obj ){
    console.log( "\t", propertyName, ": ", obj[propertyName] );
}

// for in문을 이용해서 obj의 속성중, number 타입의 값을 모두 더해서 sum에 저장하기
var obj = {
    name: "object",
    age: 10,
    weight: 5
}
var sum = 0;
for (var num in obj){
    if( typeof(obj[num]) == "number" ){
        sum = sum + obj[num];
    }
}

console.log("sum :", sum);