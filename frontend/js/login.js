// Grab button and create event listener
const login = document.getElementById("login");

login.addEventListener("click", (e) => {
  e.preventDefault();
  const username_email = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username_email === "" || password === "") {
    console.log("All fields must be filled");
  } else {
    const loginUser = {
      username_email: username_email,
      password: password,
    };
    userLogin(loginUser);
  }
});

// FETCH USER FOR COMPARISON
const userLogin = async (loginUser) => {
  const url = "http://127.0.0.1:5000/api/login";
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginUser),
    });
    if (res.ok) {
      setTimeout(() => {
        window.location.href = "../pages/home.html";
      }, 2000);
    }
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
