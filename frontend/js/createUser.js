



// BUTTON ON CLICK EVENT LISTNER
const signup = document.getElementById('signup');
const signupForm = document.getElementById("signup-form")

signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
}
)

signup.addEventListener('click', (e)=>{
    e.preventDefault();
    const fullName = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const bio = document.getElementById('bio').value;

    if(fullName === '' || email === '' || username==='' || password=== '' || bio === ''){
        console.log("cant be empty")
    }else{
        const user = {
            fullName: fullName,
            email: email,
            username: username,
            password: password,
            bio: bio
        }
        createUser(user)
    }

})

// CREATE USER
const createUser = async(user) =>{
    const url = 'http://127.0.0.1:5000/api/signup'
        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            window.location.href='../pages/home.html'
        } catch (error) {
            console.log(error)
        } 
    }