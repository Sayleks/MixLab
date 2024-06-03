var usersArray = JSON.parse(localStorage.getItem("usersData"));

function addUser(user){
    usersArray.push(user)
    localStorage.setItem("usersData", JSON.stringify(usersArray))
}

function login(user){
    localStorage.setItem('role', user.role)
    localStorage.setItem('userId', 
        usersArray.findIndex((x) => x.email == user.email && x.password == user.password)
    )
    localStorage.setItem("cart", JSON.stringify([]))
}

function getUser(){
    console.log(usersArray)
    return usersArray[localStorage.getItem('userId')];
}

function logout(){
    localStorage.setItem('role', 'none')
    localStorage.setItem('userId', -1)
    localStorage.setItem("cart", JSON.stringify([]))
}