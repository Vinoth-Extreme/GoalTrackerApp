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