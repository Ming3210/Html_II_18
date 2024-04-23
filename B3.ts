
var c :number = 0
var d : number = 0
function calculate(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
    const originalMethod = descriptor.value;

    descriptor.value = function (num1:number,num2: number) :string {
        if(c !== num1 || d !== num2){
            c = num1;
            d = num2;
            return `Calculating sum..." and then ${num1+num2}`
            
        }else {
            return `${num1+num2} (no "Calculating sum..." because the result is cached)`
        }
    }

}

class Sum {
    
    @calculate
    add(a: number, b: number): number {
        return a + b;
    }
}

let sum123 = new Sum()
console.log(sum123.add(1,3));
console.log(sum123.add(1,3));
