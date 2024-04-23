"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var c = 0;
var d = 0;
function calculate(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (num1, num2) {
        if (c !== num1 || d !== num2) {
            c = num1;
            d = num2;
            return `Calculating sum..." and then ${num1 + num2}`;
        }
        else {
            return `${num1 + num2} (no "Calculating sum..." because the result is cached)`;
        }
    };
}
class Sum {
    add(a, b) {
        return a + b;
    }
}
__decorate([
    calculate,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Sum.prototype, "add", null);
let sum123 = new Sum();
console.log(sum123.add(1, 3));
console.log(sum123.add(1, 3));
