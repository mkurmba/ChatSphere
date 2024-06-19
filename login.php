<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Realtime Chat App</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"/>
</head>
<body>
    <div class ="wrapper">
        <section class="form login">
            <header>ChatSphere</header>
            <form action='#'>
                <div class="error-text">This is an error message!</div>            
                <div class="field input">
                    <label>Email Address</label>
                    <input type="text" placeholder="Enter your email">
                </div>
                <div class="field input">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password">
                    <i class ="fas fa-eye"></i>
                </div>
                <div class="field button">
                    <input type="submit" value="Continue to Chat">
                </div>
            </form>
            <div class="link">Not yet signed up? <a href="#">Sign Up</a> </div>
        </section>
    </div>

    <script src="Javascript/pass-show-hide.js"></script>
</body>
</html>