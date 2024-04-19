// Cars:

function make_car(manufacturer : string, model : string, ...options : [string, any][]): object {
    let car = {manufacturer, model};
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(make_car("Toyota", "Corolla", ["Color", "red"], ["year", 2020]));
console.log(make_car("Ford","Fiesta", ["Color", "Blue"], ["sunroof", true]));