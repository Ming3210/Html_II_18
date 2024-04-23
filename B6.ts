function check(target: any,propertyKey: string,descriptor: PropertyDescriptor){
    descriptor.value = function(...args: any[]){
       return typeof args[0]
    }
}

class Something{
    @check
    sum<T>(a: T){
        return typeof a
    }
}

let st = new Something();
console.log(st.sum("a"));
