//静的型付け
var x: number = 10;
// xは数値型になる
/*
number
string
boolean
any
*/

var i: number;
var i: number = 10;
var i = 10;// i: number

var y;// x: any
y = 10;
y = "hello";

var results: number[];
results = [10,5,4];

//列挙型
// Signal
enum Signal{
    Red = 0,
    Blue = 1,
    Yellow = 2
}

enum Signal{
    Green = 5
}
var result: Signal
// if (result === Signal.Yellow){...}
// if (result === Signal['Yellow']){...}
console.log(Signal[2])
console.log(Signal.Green)