// Exercise 5: Simple Object Return

function buildUser(fullName, yearsOld) {
    let user = {
        fullName: fullName,
        yearsOld: yearsOld
    };
    return user;
}

let userInfo = buildUser("Hassan", 21);
console.log("Exercise 5 Result:", userInfo);
