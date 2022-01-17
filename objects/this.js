const user = {
    name: 'Konrad',
    showName () {
        console.log(this.name); // <-- this zamiast user
    }
}

user.showName()