// Declaration regarding sign up
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const uname = document.getElementById("uname");
    const email = document.getElementById("email");
    const pwd = document.getElementById("pwd");
    const cpwd = document.getElementById("cpwd");
    const clearSignUpFormBtn = document.getElementById("clearSignUpForm");


    const checkboxRememberSignIn = document.getElementById(
			"checkboxRememberSignIn"
		);
    const unameSignIn = document.getElementById("unameSignIn");
    const pwdSignIn = document.getElementById("pwdSignIn");

    if (
        localStorage.getItem("UsernameSignIn_GoalTracker") !== "" &&
        localStorage.getItem("UsernameSignIn_GoalTracker") != null
    ) {
        unameSignIn.value = localStorage.getItem("UsernameSignIn_GoalTracker");
        checkboxRememberSignIn.checked = true;
    } else {
        checkboxRememberSignIn.checked = false;
    }
	
// Loading Previously saved sign up form input values
    if (
        localStorage.getItem("SignUpFname") !== "" &&
        localStorage.getItem("SignUpFname") !== null
    ) {
        fname.value = localStorage.getItem("SignUpFname");
    }

    if (
        localStorage.getItem("SignUpLname") !== "" &&
        localStorage.getItem("SignUpLname") !== null
    ) {
        lname.value = localStorage.getItem("SignUpLname");
    }

    if (
        localStorage.getItem("SignUpUname") !== "" &&
        localStorage.getItem("SignUpUname") !== null
    ) {
        uname.value = localStorage.getItem("SignUpUname");
    }

    if (
        localStorage.getItem("SignUpEmail") !== "" &&
        localStorage.getItem("SignUpEmail") !== null
    ) {
        email.value = localStorage.getItem("SignUpEmail");
    }


// On input event called on all the fields of sign up form
    fname.oninput = () => {
        localStorage.setItem("SignUpFname", fname.value);
    };

    lname.oninput = () => {
        localStorage.setItem("SignUpLname", lname.value);
    };

    uname.oninput = () => {
        localStorage.setItem("SignUpUname", uname.value);
    };

    email.oninput = () => {
        localStorage.setItem("SignUpEmail", email.value);
    };

    pwd.oninput = () => {};

    cpwd.oninput = () => {};

	clearSignUpFormBtn.onclick = () => {
		localStorage.removeItem("SignUpFname");
		localStorage.removeItem("SignUpLname");
		localStorage.removeItem("SignUpUname");
		localStorage.removeItem("SignUpEmail");
        fname.value = ""
        lname.value = ""
        uname.value = ""
        email.value = ""
	};

// Remember username from sign in
    checkboxRememberSignIn.onchange = () => {
        if(checkboxRememberSignIn.checked){
            localStorage.setItem("UsernameSignIn_GoalTracker", unameSignIn.value);
        } else {
            localStorage.removeItem("UsernameSignIn_GoalTracker");
        }
    }