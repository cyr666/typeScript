const hello = (name: string) => {
    return `hello ${name}`
}
hello('123')

let isDone: boolean = false;
let age: number = 7 || 0b111
let message: string = `hello ${age}`;

let u: undefined = undefined;  // undefined 和 null是所有类型的子类型

let n: number = null || undefined;

let notsure: any = 4; // any类型
notsure = 'notsure';
notsure = true;

let numberOrString : number | string //联合类型 


let arrOfNumbers: number[] = [1,2];

let user: [string,number] = ['chenyurong',0] //元组  限制数据类型的数组

// interface 接口
interface IPerson {
    readonly id?: number; //只读属性
    name: string;
    age?: number; //可选属性
}

let obj: IPerson = {
    id: 1234,
    name: 'cyr',
}

//函数
function add(x: number, y: number, z?: number): number{ //可选参数只能放在最后 z: number = 10
    return x + y
}

let result = add(2,3,9)

//函数类型 
const add2:(x: number, y: number, z?: number)=>number = add;
let str = 'str';
//str = 123 //类型推论

//类
class Animal {
    name: string;
    constructor(name: string){
        this.name = name;
    }
    run() {
        return `${this.name} is running`
    }
}


class Cat extends Animal {
    constructor (name ){
       super(name)
       console.log(this.name)
    }
    run(){
        console.log(this.name)
       return 'maomao'+super.run()  
    }
}

const maomao = new Cat('haha')
console.log(maomao.run())

//类和接口
interface Battery {
    fun1();
    fun2();
}

class Cell implements Battery {
    fun1(){

    }
    fun2(){

    }
}

//枚举 enum
let en = {
    Up:10,
    Left:['1'],
}
enum Direction {
    Up=10,
    Left,
}
//范型
function echo<T>(arg:T):T{
    return arg
}