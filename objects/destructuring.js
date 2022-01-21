const person = {
    name: 'Lily',
    age: 23,
    job: 'DJ',
    car: {
        brand: 'Dodge',
        model: 'Viper'
    }
}

const showInfo = () => {
    const {name: firstName, age, job} = person

    console.log(`${firstName} pracuje jako ${job} i ma ${age} lata.`);
}

showInfo()

//-------------------------

const showInfo2 = ({car: {brand, model}}) => {
    console.log(`Jej samochód to ${brand} ${model}.`);
}

showInfo2(person)