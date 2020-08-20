var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var hello = function (name) {
    return "hello " + name;
};
hello('123');
var isDone = false;
var age = 7 || 7;
var message = "hello " + age;
var u = undefined; // undefined 和 null是所有类型的子类型
var n = null || undefined;
var notsure = 4; // any类型
notsure = 'notsure';
notsure = true;
var numberOrString; //联合类型 
var arrOfNumbers = [1, 2];
var user = ['chenyurong', 0]; //元组  限制数据类型的数组
var obj = {
    id: 1234,
    name: 'cyr'
};
//函数
function add(x, y, z) {
    return x + y;
}
var result = add(2, 3, 9);
//函数类型 
var add2 = add;
var str = 'str';
//str = 123 //类型推论
//类
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.run = function () {
        return this.name + " is running";
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this, name) || this;
        console.log(_this.name);
        return _this;
    }
    Cat.prototype.run = function () {
        return 'maomao' + _super.prototype.run.call(this);
    };
    return Cat;
}(Animal));
var maomao = new Cat('haha');
console.log(maomao.run());
