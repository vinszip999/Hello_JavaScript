// switch문

// 조건에 따라 프로그램의 흐름을 분기하여 특정 코드가 실행되도록 함

// <break>
// break구문을 만나면, switch-case 문의 마지막 중괄호(}) 밖으로 빠져나옴.
// break를 사용하지 않으면, switch문에서 빠져나오지 않고 다음 case에 해당하는 코드까지 실행됨.


console.log("Menu");
console.log("1. 아이스 아메리카노");
console.log("2. 카페라떼");
console.log("3. 카푸치노");
console.log("4. 아이스티");

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
}