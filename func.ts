//?はオプション
function add(a: number ,b?: number): number{
    if (b){
        return a + b;
    }else{
        return a + a
    }
}
// = 10は初期値　bが何もない場合には10
function add2(a: number ,b: number = 10): number{
    return a + b
}
console.log(add(5,3));
console.log(add2(5,3))
console.log(add2(5))
/*
返り値がない場合は:voidと書けば良い
*/

var add3 = function(a: number,b: number): number{
    return a + b
}
console.log(add3(5,3))

var add4 = (a: number,b: number): number => {
    return a + b;
}

var add5 = (a: number, b: number): number => a + b

function set(a: number,b: number): number;
function set(a: string, b: string): string;

function set(a: any, b: any): any{
    if (typeof a === "string" && typeof b === "string"){
        return a +" "+b;
    }
    return a + b; 
}
console.log(set(1,1))
console.log(set("hello","world"))