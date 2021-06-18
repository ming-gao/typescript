let a;
a = 10;
// a='hello world';   类型不同，不能赋值
let b = true; //声明完变量直接赋值
function sum(a, b) {
    return a + b;
}
console.log(sum(123, 456)); //参数必须为Number类型
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(123,'456'))  结果为123456
