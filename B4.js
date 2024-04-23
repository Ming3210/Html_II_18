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
function valid(target, propertyKey, descriptor) {
    descriptor.value = function (...args) {
        if (args.length === 2 && typeof args[0] === 'number' && typeof args[1] === 'number') {
            return args[0] + args[1];
        }
        else {
            throw new Error("Invalid parameters");
        }
    };
}
class Validate {
    add(a, b) {
        return a + b;
    }
}
__decorate([
    valid,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Object)
], Validate.prototype, "add", null);
let validate = new Validate();
console.log(validate.add(1, 6));
