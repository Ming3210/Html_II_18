function valid(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    descriptor.value = function(...args: any[]):number{
        if (args.length === 2 && typeof args[0] === 'number' && typeof args[1] === 'number') {
            return args[0]+args[1];
        } else {
            throw new Error("Invalid parameters");
        }
    }
    
}

class Validate{
    @valid
    add(a:number,b:number):any{
        return a + b;
    }
}

let validate = new Validate();
console.log(validate.add(1,6));
