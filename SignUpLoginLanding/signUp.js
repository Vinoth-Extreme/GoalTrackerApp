const rightCol = document.getElementById("rightCol")

const LandingContainer = document.getElementById("Landing")
const LoginContainer = document.getElementById("Login")
const SignUpContainer = document.getElementById("signUp")

const SignInBtnLanding = document.getElementById("SignInBtn")
const SignUpBtnLanding = document.getElementById("SignUpBtn")
const BackToLandingBtn = document.getElementById("BackToLandingBtn")
const BackToLandingBtn2 = document.getElementById("BackToLandingBtn2")

const OneToStepTwoBtn = document.getElementById("OneToStepTwoBtn")
const TwoToStepOneBtn = document.getElementById("TwoToStepOneBtn")
const TwoToStepThreeBtn = document.getElementById("TwoToStepThreeBtn")
const ThreeToStepTwoBtn = document.getElementById("ThreeToStepTwoBtn")

const step1InSignUp = document.getElementById("step1")
const step2InSignUp = document.getElementById("step2")
const step3InSignUp = document.getElementById("step3")

const loadingContainer = document.getElementById("loadingContainer");
const LoginSubmitBtn = document.getElementById("LoginSubmitBtn");

const fnameInputField = document.getElementById("fname");
const lnameInputField = document.getElementById("lname");
const unameInputField = document.getElementById("uname");
const emailInputField = document.getElementById("email");


const step2Title = document.getElementById("step2Title");
const ErrorPrompt = document.getElementById("ErrorPrompt");

step2Title.onclick = () => {
    ErrorPrompt.style.opacity = "1"
}

if (fnameInputField.value.length > 0 && lnameInputField.value.length > 0) {
	OneToStepTwoBtn.removeAttribute("disabled");
} else {
	OneToStepTwoBtn.setAttribute("disabled", true);
}

if (unameInputField.value.length > 0 && emailInputField.value.length > 0) {
	TwoToStepThreeBtn.removeAttribute("disabled");
} else {
	TwoToStepThreeBtn.setAttribute("disabled", true);
}

fnameInputField.addEventListener('input', () => {
    if(fnameInputField.value.length > 0 && lnameInputField.value.length){
        OneToStepTwoBtn.removeAttribute('disabled')
    } else {        
        OneToStepTwoBtn.setAttribute('disabled', true)
    }
})

lnameInputField.addEventListener('input', () => {
    if(fnameInputField.value.length > 0 && lnameInputField.value.length){
        OneToStepTwoBtn.removeAttribute('disabled')
    } else {        
        OneToStepTwoBtn.setAttribute('disabled', true)
    }
})

unameInputField.addEventListener('input', () => {
    if(unameInputField.value.length > 0 && emailInputField.value.length){
        TwoToStepThreeBtn.removeAttribute('disabled')
    } else {        
        TwoToStepThreeBtn.setAttribute('disabled', true)
    }
})

emailInputField.addEventListener('input', () => {
    if(unameInputField.value.length > 0 && emailInputField.value.length){
        TwoToStepThreeBtn.removeAttribute("disabled");
    } else {        
        TwoToStepThreeBtn.setAttribute("disabled", true);
    }
})


SignInBtnLanding.onclick = () => {
    LandingContainer.style.left = "-100%"
    LoginContainer.style.left = "25%"
}

BackToLandingBtn.onclick = () => {    
    LandingContainer.style.left = "25%"
    LoginContainer.style.left = "100%"
}

SignUpBtnLanding.onclick = () => {
    LandingContainer.style.left = "-100%"
    SignUpContainer.style.left = "25%"
}

BackToLandingBtn2.onclick = () => {    
    LandingContainer.style.left = "25%"
    SignUpContainer.style.left = "100%"
}

OneToStepTwoBtn.onclick = () => {
    step1InSignUp.style.left = "-200%"
    step2InSignUp.style.left = "0%"
}

TwoToStepOneBtn.onclick = () => {
    step2InSignUp.style.left = "200%"
    step1InSignUp.style.left = "0%"
}

TwoToStepThreeBtn.onclick = () => {
    step2InSignUp.style.left = "-200%"
    step3InSignUp.style.left = "0%"
}

ThreeToStepTwoBtn.onclick = () => {
    step2InSignUp.style.left = "0%"
    step3InSignUp.style.left = "200%"
}

LoginSubmitBtn.onclick = () => {
    loadingContainer.style.left = "0px";
    LoginSubmitBtn.innerHTML = `<i class="fa fa-spinner fa-spin" style="color: #fff;"></i>`
    setTimeout(() => {
        loadingContainer.style.left = "-200%";
		LoginSubmitBtn.innerHTML = `Login`;
    }, 3000)
}