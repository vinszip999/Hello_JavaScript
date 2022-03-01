// for문

// 초기구문, 업데이트 구문, 반복조건 을 한 구문에 합친 반복문.

// for문에서 continue문을 만나면 update 구문으로 이동
// while문에서 continue문을 만나면 반복실행 코드의 끝으로 이동한 다음, 바로 조건식 검사

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(var i=0; i<array.length; i++){ // 조건식
    // 반복 실행될 코드
    console.log(array[i]);
}


// for문을 이용하여 배열 cost의 값을 모두 더해 total_cost 변수에 저장하기

var cost = [ 85, 42, 37, 10, 22, 8, 15 ];
var total_cost = 0;
// 여기에 코드를 작성하세요.
for (var i=0; i<=cost.length-1; i++){
    total_cost += cost[i];
}
console.log(total_cost);