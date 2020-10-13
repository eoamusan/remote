import People from 'variables/mockApiData'

export const peopleService = {
    fetch,
    fetchSinglePerson,
    add,
    edit
};

function fetch() {
    let storedPeople = JSON.parse(localStorage.getItem('remote-people-store'));

    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (storedPeople) {
                resolve(storedPeople);
            } else {
                localStorage.setItem(`remote-people-store`, JSON.stringify(People));
                resolve(People);
            }
        }, 2000);
    });

    return promise;
}

function fetchSinglePerson(id) {
    let storedPeople = JSON.parse(localStorage.getItem('remote-people-store'));

    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            let PeopleData = storedPeople || People;

            if(PeopleData.findIndex(person => person.id === parseInt(id)) !== -1) {
                resolve(PeopleData.find(person => person.id === parseInt(id)))
            } else {
                reject({
                    message: "Person not found"
                })
            }
        }, 2000);
    });

    return promise;
}

function add(person) {
    let storedPeople = JSON.parse(localStorage.getItem('remote-people-store'));

    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            let PeopleData = storedPeople || People;
            PeopleData.unshift({
                id: PeopleData.length + 1,
                ...person
            });

            localStorage.setItem(`remote-people-store`, JSON.stringify(PeopleData));

            resolve({
                data: PeopleData,
                message: "Person successfully added"
            });
        }, 2000);
    });

    return promise;
}

function edit(person) {
    let storedPeople = JSON.parse(localStorage.getItem('remote-people-store'));

    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            let PeopleData = storedPeople || People;

            if(PeopleData.findIndex(p => p.id === person.id) !== -1) {
                PeopleData[PeopleData.findIndex(p => p.id === person.id)] = person;
                localStorage.setItem(`remote-people-store`, JSON.stringify(PeopleData));

                resolve({
                    data: PeopleData,
                    message: "Person's details updated"
                })
            } else {
                reject({
                    message: "Person not found"
                })
            }
        }, 2000);
    });

    return promise;
}