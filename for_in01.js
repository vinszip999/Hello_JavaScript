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