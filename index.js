// Add your code here
function submitData(name, email){
    
    let user = {}
    user.name = name
    user.email = email

    let response = fetch('http://localhost:3000/users', {
        
        method: "POST",
        headers: {
            "content-type": "application/json",
            "accept" : "application/json",
        },
        body: JSON.stringify(user)
            
    })
    .then(res => res.json())
    .then(user => document.body.innerHTML = user.id)
    .catch(error => {
        let message = 'Unauthorized Access'
        let p = document.createElement("p")
        p.innerHTML = message
        document.body.appendChild(p)
        return Promise.reject()
    })

    return response
    
}


submitData("Steve", "steve@steve.com")