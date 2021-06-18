//使用字面量进行类型声明
let _a:10;
_a=10;
// a=12 Type '12' is not assignable to type '10'.

// |连接多个类型（联合类型）
let gender:'male' | 'female';
gender="male";

let _type: boolean | string;
_type=true;
_type='hello';

//表示任意类型，相当于关闭了TS的类型检测机制,将其赋值给有固定类型的变量，将会改变变量的类型
let _any:any; //显式声明
let _any2;  //隐式声明
_any=true;
_any=12;
_any='1233';

let _unknown:unknown  //未知类型，自身可以是任何变量类型，但是不能赋值给其他指定类型的变量，是一个类型安全的any
_unknown='hello'

// 类型断言，可以告知解析器变量的类型
/*
    as 类型
    <类型>
 */
let _string:string=_unknown as string
_string=<string>_unknown

// void 用来表示空，没有返回值的函数
function f():void {
    return;
}

//never 表示永远没有返回结果
function f1():never {
    throw new Error("程序出错")
}

let _object:object  //表示一个object对象
let obj:{a:number,b?:string} //{}里指定可以包含哪些属性，？表示可选

// [propName:string]:any  ：any表示任意类型的属性
let c:{name:string,[propName:string]:any,}
c={name:'123',a:1,b:3}

//设置函数结构类型的声明
let fun:(a:number,b:number)=>number
fun=function (a:23,b:34) {
    return a+b
}


// 设置array类型
let _arrayN:number[]
let _arrayS:string[]
_arrayN=[1,2,3]
_arrayS=['1','2']


//元组：固定长度的数组
let h:[string,string,number]
h=['12','22',2]


//枚举：enum

enum Gender {
    male,
    female
}
let i:{name:string,gender:Gender}
i={name:'12',gender:Gender.male}


//类型的别名
type myType=1|2|3|4;
let j:myType
j=1;j=2;

let doc=document.getElementById('id1')
// doc.addEventListener('click',()=>{
//     alert('123')
// })  //报错
doc?.addEventListener('click',()=>{
    console.log(123)
})
