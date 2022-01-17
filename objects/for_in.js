const user = {
    name: 'Konrad',
    age: 32,
    sex: 'male',
    'hair-color': 'blonde'
}

for(const data in user) {
    console.log(data + ': ' + user[data]);
}