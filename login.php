<!DOCTYPE html>
<html>

<head>
    <title>QuickMingle - Find Your Perfect Match</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" type="js/javascript" href="js.js">
</head>

<body>
    <header>
        <img src="/QuickMingle/img/QM1.svg" alt="SVG Image">

        <nav>
            <ul>

                <p>Sign up to get started:</p>
                <button onclick="window.location.href='signup.html'">
                    <h1>SignUp</h1>
                </button>
            </ul>
        </nav>
    </header>
    <main>
        <h2>Welcome to QuickMingle</h2>
        <p>Find your perfect match and start a new adventure!</p>

        <div class="container">
            <form id="login-form">
                <h2>Login</h2>
                <!-- HTML form in sign-up page -->
                <form action="/login" method="post">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required>
                    <button class="b1" type="submit" onclick="login()">Login</button>
                </form>
        </div>
        <script src="js.js"></script>
        <style>
            img {
                width: 100px;
                height: 100px;
            }
        </style>


    </main>
    <footer>
        <p>&copy; QuickMingle 2023</p>
    </footer>

</body>

</html>