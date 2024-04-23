function timingDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.value = function (...args: any[]) {
        const startTime = performance.now();
        console.log(startTime);
        const endTime = performance.now();
        console.log(endTime);
        descriptor.value.apply(this, args);
        const executionTime = endTime - startTime;
        console.log(`Execution time: ${executionTime} ms`);
        return descriptor.value.apply(this, args);
        ;
    };
}

class CountTime {
    @timingDecorator
    add(a: number, b: number): number {
        return a + b;
    }
}
let result = new CountTime();

console.log(`Result: ${result.add(3,4)}`);