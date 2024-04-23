function log(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    descriptor.value = function<T>(a:T, b:T):unknown {
        return "a:"+ a + " b:" + b + " function: " + propertyKey
    }
}

class Log{
    
    @log
    logging(a: number,b: number){
        return a
    }
}

let sum11 = new Log
console.log(sum11.logging(3,4));