//使用字面量进行类型声明
var _a;
_a = 10;
// a=12 Type '12' is not assignable to type '10'.
// |连接多个类型（联合类型）
var gender;
gender = "male";
var _type;
_type = true;
_type = 'hello';
//表示任意类型，相当于关闭了TS的类型检测机制,将其赋值给有固定类型的变量，将会改变变量的类型
var _any; //显式声明
var _any2; //隐式声明
_any = true;
_any = 12;
_any = '1233';
var _unknown; //未知类型，自身可以是任何变量类型，但是不能赋值给其他指定类型的变量，是一个类型安全的any
_unknown = 'hello';
// 类型断言，可以告知解析器变量的类型
/*
    as 类型
    <类型>
 */
var _string = _unknown;
_string = _unknown;
// void 用来表示空，没有返回值的函数
function f() {
    return;
}
//never 表示永远没有返回结果
function f1() {
    throw new Error("程序出错");
}
var _object; //表示一个object对象
var obj; //{}里指定可以包含哪些属性，？表示可选
// [propName:string]:any  ：any表示任意类型的属性
var c;
c = { name: '123', a: 1, b: 3 };
//设置函数结构类型的声明
var fun;
fun = function (a, b) {
    return a + b;
};
// 设置array类型
var _arrayN;
var _arrayS;
_arrayN = [1, 2, 3];
_arrayS = ['1', '2'];
//元组：固定长度的数组
var h;
h = ['12', '22', 2];
//枚举：enum
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
var i;
i = { name: '12', gender: Gender.male };
var j;
j = 1;
j = 2;
var doc = document.getElementById('id1');
// doc.addEventListener('click',()=>{
//     alert('123')
// })  //报错
doc === null || doc === void 0 ? void 0 : doc.addEventListener('click', function () {
    console.log(123);
});
