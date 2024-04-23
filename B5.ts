function merge(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    descriptor.value = function(...args: any[]){
        return Object.assign(args[0],args[1],args[2]);
    }
}

class Merge{
    @merge
    merging(a:object,b:object){
       
    }
}

let merge123 = new Merge()
console.log(merge123.merging({a:3,b:5},{a:7,c:"3"}));
