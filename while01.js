// while문

// 조건이 만족하는 동안 블럭 안의 코드를 반복적으로 실행

// continue, break
// - continue : 남은 반복실행될 코드를 모두 skip
// - break : 반복문에서 즉시 탈출

console.log("Menu");
console.log("1. 아이스 아메리카노");
console.log("2. 카페라떼");
console.log("3. 카푸치노");
console.log("4. 아이스티");

var count = 0;

while(count < 3){
    var choice = parseInt(prompt("메뉴를 선택하세요"));

    console.log(choice + "번 메뉴를 선택하셨습니다.");
    
    switch(choice){
        case 1:
            console.log("아이스 아메리카노는 1500원 입니다.");
            break;
        case 2:
            console.log("카페라떼는 2000원 입니다.");
            break;
        case 3:
            console.log("카푸치노는 2500원 입니다.");
            break;
        case 4:
            console.log("아이스티는 1300원 입니다.");
            break;
        default:
            console.log("주문하신 메뉴는 없는 메뉴입니다.\n메뉴판에 있는 메뉴로 다시 주문해주세요:)");
            break;
    }
    count++;
}

console.log("오늘도 저희 커피숍을 찾아주셔서 감사합니다:)\n안녕히 가십시오.")

