// method, this

// this는 예약어이다.
// 메서드를 호출할 때 this의 값은 인스턴스화 된 객체(해당 메서드를 호출한 객체)를 참조한다.

function f(){
    console.log(this);
    console.log("f is called");
}

function setName(name){
    this.name = name;
}

var o = {name: "object", method: f, setName: setName};
var o2 = {name: "", setName: setName};

o.setName("object1");
o2.setName("object2");

console.log(o, o2);
