function test (){
    console.log(this);
    console.log(this.name);
}

const car1 = {
    name: 'Audi'
}
const car2 = {
    name: 'Dogde'
}
const car3 = {
    name: 'Nissan'
}

test.bind(car1)()