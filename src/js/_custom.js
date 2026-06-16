// Navbar Menu

let navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) => {

  let dropdown = item.querySelector("ul");

  if (dropdown) {

    let hideTimeout;

    item.addEventListener("mouseenter", () => {

      clearTimeout(hideTimeout);

      dropdown.classList.remove("d-none");

      setTimeout(() => {
        dropdown.classList.add("show-menu");
      }, 10);

    });

    item.addEventListener("mouseleave", () => {

      hideTimeout = setTimeout(() => {

        dropdown.classList.remove("show-menu");

        setTimeout(() => {
          dropdown.classList.add("d-none");
        }, 300);

      }, 100);

    });

    dropdown.addEventListener("mouseenter", () => {
      clearTimeout(hideTimeout);
    });

  }

});


// Fixed Header

window.addEventListener("scroll", function () {

   let navbar = document.querySelector(".custom-nav");
   let navItems = document.querySelector("#nav-items");

   if(window.scrollY > 200){

      navbar.classList.add("fixed-nav");
      if(!document.querySelector(".nav-logo")){

         let img = document.createElement("img");

         img.src = "./assets/logos/fiama-logo.webp";
         img.classList.add("nav-logo");

         navItems.prepend(img);
      }
   }
   else{
      navbar.classList.remove("fixed-nav");

      let logo = document.querySelector(".nav-logo");

      if(logo){
         logo.remove();
      }
   }
});


// Shop View Change Button

let buttons = document.querySelectorAll(".view-btn");
        buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            buttons.forEach((b) => {
            b.classList.remove("active");
            });
            btn.classList.add("active");
    });
});


// GRID AND LIST 

const allProducts = document.querySelectorAll(".shop-grid-products");
const listProducts = document.querySelectorAll(".shop-list-products");

const gridBtn = document.getElementById("shopGridBtn");
const listBtn = document.getElementById("shopListBtn");

if(gridBtn && gridBtn.classList.contains("active")){

  listProducts.forEach((item)=>{
    item.style.display = "none";
  });
}

// GRID VIEW
if (gridBtn) {
  gridBtn.addEventListener("click", () => {
    allProducts.forEach((item) => {
      item.style.display = "block";
    });

    listProducts.forEach((item) => {
      item.style.display = "none";
    });
  });
}

// LIST VIEW
if (gridBtn) {
listBtn.addEventListener("click", () => {
  allProducts.forEach((item) => {
    item.style.display = "none";
  });

  // Hide extra products
  listProducts.forEach((item) => {
    item.style.display = "block";
  });

});
}

// Quantity Counter

document.addEventListener("DOMContentLoaded", () => {

const qtyInputs = document.querySelectorAll(".cartItemQty");
const plusBtns = document.querySelectorAll(".cartPlus");
const minusBtns = document.querySelectorAll(".cartMinus");

    plusBtns.forEach((plus, index) => {
      plus.addEventListener("click", () => {
        qtyInputs[index].value = Number(qtyInputs[index].value) + 1;
      });
    });

    minusBtns.forEach((minus, index) => {
      minus.addEventListener("click", () => {
        if (Number(qtyInputs[index].value) > 1) {
          qtyInputs[index].value = Number(qtyInputs[index].value) - 1;
        }
      });
    });

});


// Review Form 

const reviewForm = document.getElementById("reviewForm")
let nameEl = document.getElementById("name");
let emailEl = document.getElementById("mail");
let commentEl = document.getElementById('comment');
let websiteEl = document.getElementById('website');
let checkBoxEl = document.getElementById("checkDefault");

const handleSubmit = (e)=>{    
    e.preventDefault();

    let cleanName = nameEl?.value?.trim()
    let cleanEmail = emailEl?.value?.trim()
    let cleanComment = commentEl?.value?.trim();
    let cleanwebsite = websiteEl?.value?.trim();

    const isNameValid = validateNameField();
    const isEmailValid = validateEmailField();
    const isCommentValid = validateCommentField();
    const isWebsiteValid = validateWebsiteField();
    const isCheckBoxValid = validateCheckBoxField();

    if(
    isNameValid &&
    isEmailValid &&
    isCommentValid && 
    isWebsiteValid &&
    isCheckBoxValid
    ){
        alert("Form Submitted Successfully");
    }

}  

if(reviewForm){
    reviewForm.addEventListener('submit', handleSubmit);
}


function validateName(str){
    let namePattern = /^(?=.{3,}$)[A-Za-z]+(?:[.\s][A-Za-z]+)*$/;
    return namePattern.test(str)
}

function validateEmail(str){
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailPattern.test(str)
}

//  Error Element 
function createErrorEl(message){
    const errEl = document.createElement("span")
    errEl.classList.add("error")
    errEl.textContent = message;
    return errEl
}

// Validation
function validateNameField(){
    let cleanName = nameEl.value.trim();
    if(!validateName(cleanName)){
        nameEl.parentElement.querySelector('.error')?.remove();
        let errEl = createErrorEl("Please Enter a valid name. Name must be atleast 3 character long");
        nameEl.parentElement.appendChild(errEl);
        return false;
    }else{
        nameEl.parentElement.querySelector('.error') ?.remove();
        return true;
    }
}


function validateEmailField(){

    let cleanEmail =emailEl.value.trim();

    if(!validateEmail(cleanEmail)){
        emailEl.parentElement.querySelector('.error')?.remove();
        let errEl =createErrorEl("Please enter a valid email address (example: abc@gmail.com)");
        emailEl.parentElement.appendChild(errEl);
        return false;
    }else{
        emailEl.parentElement.querySelector('.error') ?.remove();
        return true;
    }
}


function validateCommentField(){
    let cleanComment = commentEl.value.trim();
    if(!cleanComment || cleanComment.length < 20){
        document.querySelector(".comment-error")?.remove();
        let errEl = createErrorEl("Comment must be at least 20 characters long");
        errEl.classList.add("comment-error");
        document.querySelector(".comment-box").appendChild(errEl);
        return false;
    }else{
        document.querySelector(".comment-error")?.remove();
        return true;
    }
}

function validateWebsiteField(){
    let cleanwebsite = websiteEl.value.trim();
    if(!cleanwebsite || cleanwebsite.length < 15){
        document.querySelector(".website-error")?.remove();
        let errEl = createErrorEl("Website must be at least 15 characters long");
        errEl.classList.add("website-error");
        document.querySelector(".website-box").appendChild(errEl);
        return false;
    }else{
        document.querySelector(".website-error")?.remove();
        return true;
    }
}

function validateCheckBoxField(){
    if(!checkBoxEl.checked){
        document.querySelector(".checkbox-error")?.remove();
        let errEl = createErrorEl("Please accept the agreement");
        errEl.classList.add("checkbox-error");
        checkBoxEl.parentElement.appendChild(errEl);
        return false;
    }else{
        document.querySelector(".checkbox-error")?.remove();
        return true;
    }
}

if(nameEl){
    nameEl.addEventListener("change", validateNameField);
}
if(emailEl){
    emailEl.addEventListener("change", validateEmailField);
}
if(commentEl){
    commentEl.addEventListener("change", validateCommentField);
}
if(websiteEl){
    websiteEl.addEventListener("change", validateWebsiteField);
}
if(reviewForm){
    reviewForm.addEventListener("submit", validateCheckBoxField);
}


// Review and Discription Btn

let buttonsProductsDetails = document.querySelectorAll(".view-btn-review-discription");
buttonsProductsDetails.forEach((btn) => {
    btn.addEventListener("click", () => {
        buttonsProductsDetails.forEach((b) => {
            b.classList.remove("active-btn");
          });
        btn.classList.add("active-btn");
    });
});


const reviewBtn = document.getElementById("reviewBtn");
const discriptionBtn = document.getElementById("discriptionBtn");
const reviewItem = document.getElementById("review-item");
const discriptionItem = document.getElementById("discription-item");

// Reviews Button Click

if(reviewBtn && reviewItem && discriptionItem){
    reviewBtn.addEventListener("click", () => {
        reviewItem.classList.remove("d-none");
        discriptionItem.classList.add("d-none");
    });
}

// Description Button Click

if(discriptionBtn && reviewItem && discriptionItem){
    discriptionBtn.addEventListener("click", () => {
        discriptionItem.classList.remove("d-none");
        reviewItem.classList.add("d-none");
    });
}



// CheckOut Section Login Btn

const loginToggleBtn = document.getElementById("loginToggleBtn");
const loginDropdown = document.getElementById("loginDropdown");

if (loginToggleBtn && loginDropdown) {
    loginToggleBtn.addEventListener("click", () => {
        loginDropdown.classList.toggle("d-none");
    });
}

// CheckOut Section Apply Coupon Btn

const loginCouponToggleBtn = document.getElementById("loginCouponToggleBtn");
const loginCouponDropdown = document.getElementById("loginCouponDropdown");

if (loginCouponToggleBtn && loginCouponDropdown) {
    loginCouponToggleBtn.addEventListener("click", () => {
        loginCouponDropdown.classList.toggle("d-none");
    });
}



// Form Billing Details

const billingForm = document.getElementById("billingForm");
const firstNameEl = document.getElementById("firstName");
const lastNameEl = document.getElementById("lastName");
const billingMailEl = document.getElementById("billingMail");
const billingPhoneEl = document.getElementById("billingPhone");
const billingCountryEl = document.getElementById("billingCountry");
const streetAddressEl = document.getElementById("streetAddress");
const cityNameEl = document.getElementById("cityName");
const stateNameEl = document.getElementById("stateName");
const zipCodeEl = document.getElementById("zipCode");


// Submit
if(billingForm){
    billingForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        const isFirstNameValid = validateFirstName();
        const isLastNameValid = validateLastName();
        const isEmailValid = validateBillingMailField();
        const isPhoneValid = validateBillingPhoneField();
        const isCountryValid = validateBillingCountry();
        const isStreetValid = validateStreetAddress();
        const isCityValid = validateCityName();
        const isStateValid = validateStateName();
        const isZipValid = validateZipCode();

                if(
            isFirstNameValid &&
            isLastNameValid &&
            isEmailValid &&
            isPhoneValid &&
            isCountryValid &&
            isStreetValid &&
            isCityValid &&
            isStateValid &&
            isZipValid 
        ){
            alert("Billing Form Submitted Successfully");
        }
    });
}

// Error Element Create
function createBillingError(message){
    const errEl = document.createElement("span");
    errEl.classList.add("error");
    errEl.textContent = message;
    return errEl;

}
// Name Validation
function validateBillingName(str){
    let pattern = /^(?=.{3,}$)[A-Za-z]+(?:[.\s][A-Za-z]+)*$/;
    return pattern.test(str);
}

// Email Validation
function validateBillingEmail(str){
    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    return pattern.test(str);
}

// Phone Validation
function validateBillingPhone(str){
    let pattern = /^[0-9]{10}$/;
    return pattern.test(str);
}

// First Name
function validateFirstName(){
    let cleanValue = firstNameEl.value.trim();
    if(!validateBillingName(cleanValue)){
        firstNameEl.parentElement.querySelector(".error")?.remove();
        let errEl = createBillingError("Please enter valid first name");
        firstNameEl.parentElement.appendChild(errEl);
        return false;
    }else{
        firstNameEl.parentElement.querySelector(".error")?.remove();
        return true;
    }
}

// Last Name
function validateLastName(){
    let cleanValue = lastNameEl.value.trim();
    if(!validateBillingName(cleanValue)){
        lastNameEl.parentElement.querySelector(".error")?.remove();
        let errEl = createBillingError("Please enter valid last name");
        lastNameEl.parentElement.appendChild(errEl);
        return false;
    }else{
        lastNameEl.parentElement.querySelector(".error")?.remove();
        return true;
    }
}

// Email
function validateBillingMailField(){
    let cleanValue = billingMailEl.value.trim();
    if(!validateBillingEmail(cleanValue)){
        billingMailEl.parentElement.querySelector(".error")?.remove();
        let errEl = createBillingError("Please enter valid email");
        billingMailEl.parentElement.appendChild(errEl);
        return false;
    }else{
        billingMailEl.parentElement.querySelector(".error")?.remove();
        return true;
    }
}

// Phone
function validateBillingPhoneField(){
    let cleanValue = billingPhoneEl.value.trim();
    if(!validateBillingPhone(cleanValue)){
        billingPhoneEl.parentElement.querySelector(".error")?.remove();
        let errEl = createBillingError("Phone number must be 10 digits");
        billingPhoneEl.parentElement.appendChild(errEl);
        return false;
    }else{
        billingPhoneEl.parentElement.querySelector(".error")?.remove();
        return true;
    }
}

// Country Validation

function validateBillingCountry() {
    let countryBox = billingCountryEl.closest(".country-box");
    // purana error remove
    countryBox.querySelector(".error")?.remove();
    // agar country select nahi hai
    if (billingCountryEl.value === "") {
        let errEl = createBillingError("Please select country");
        countryBox.appendChild(errEl);
        return false;
    }
    return true;
}

// Street Address Validation

function validateStreetAddress(){
    let cleanValue = streetAddressEl.value.trim();
    if(!cleanValue || cleanValue.length < 10){
        streetAddressEl.parentElement.querySelector(".error")?.remove();
        let errEl = createBillingError("Address must be at least 10 characters long");
        streetAddressEl.parentElement.appendChild(errEl);
        return false;
    }else{
        streetAddressEl.parentElement
        .querySelector(".error")
        ?.remove();
        return true;
    }
}




// City Validation

function validateCityName(){
    let cleanValue = cityNameEl.value.trim();
    if(!cleanValue || cleanValue.length < 3){
        cityNameEl.parentElement.querySelector(".error")?.remove();
        let errEl = createBillingError("Please enter valid city name");
        cityNameEl.parentElement.appendChild(errEl);
        return false;

    }else{
        cityNameEl.parentElement
        .querySelector(".error")
        ?.remove();

        return true;
    }
}

// State Validation

function validateStateName(){

    let cleanValue = stateNameEl.value.trim();

    if(!cleanValue || cleanValue.length < 3){

        stateNameEl.parentElement
        .querySelector(".error")
        ?.remove();

        let errEl = createBillingError("Please enter valid state");

        stateNameEl.parentElement.appendChild(errEl);

        return false;

    }else{
        stateNameEl.parentElement
        .querySelector(".error")
        ?.remove();
        return true;
    }
}


// Zip Validation

function validateZipCode(){
    let cleanValue = zipCodeEl.value.trim();
    let zipPattern = /^[0-9]{5,6}$/;
    if(!zipPattern.test(cleanValue)){

        zipCodeEl.parentElement
        .querySelector(".error")
        ?.remove();
        let errEl = createBillingError("Zip code must be 5 or 6 digits");
        zipCodeEl.parentElement.appendChild(errEl);
        return false;

    }else{
        zipCodeEl.parentElement
        .querySelector(".error")
        ?.remove();

        return true;
    }
}

// Live Validation
firstNameEl?.addEventListener("change", validateFirstName);
lastNameEl?.addEventListener("change", validateLastName);
billingMailEl?.addEventListener("change", validateBillingMailField);
billingPhoneEl?.addEventListener("change", validateBillingPhoneField);
streetAddressEl?.addEventListener("change", validateStreetAddress);
cityNameEl?.addEventListener("change", validateCityName);
stateNameEl?.addEventListener("change", validateStateName);
zipCodeEl?.addEventListener("change", validateZipCode);
billingCountryEl?.addEventListener("change", validateBillingCountry);



// Login Form Validation


const loginFormMain = document.getElementById("loginFormMain");
const mMailEl = document.getElementById("mMail");
const mPasswordEl = document.getElementById("Mpassword");

// Error Create
function createLoginError(message){
    const errEl = document.createElement("span");
    errEl.classList.add("error");
    errEl.textContent = message;
    return errEl;
}

// Email Validation Pattern
function validateLoginEmail(str){
    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    return pattern.test(str);
    
}

// Password Validation Pattern
function validateLoginPassword(str){
    let passwordPattern =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[^\s]{8,}$/;
    return passwordPattern.test(str)
}

// Email Field Validation
function validateLoginEmailField(){
    let cleanValue = mMailEl.value.trim();
    mMailEl.parentElement.querySelector(".error")?.remove();
    if(!validateLoginEmail(cleanValue)){
        let errEl = createLoginError("Please enter valid email");
        mMailEl.parentElement.appendChild(errEl);
        return false;
    }
    return true;
}

// Password Field Validation
function validateLoginPasswordField(){
    let cleanValue = mPasswordEl.value.trim();
    mPasswordEl.parentElement.querySelector(".error")?.remove();
    if(!validateLoginPassword(cleanValue)){
        let errEl = createLoginError("Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.");
        mPasswordEl.parentElement.appendChild(errEl);
        return false;
    }
    return true;
}

// Submit Validation
if(loginFormMain){
    loginFormMain.addEventListener("submit", (e)=>{
        e.preventDefault();
        const isEmailValid = validateLoginEmailField();
        const isPasswordValid = validateLoginPasswordField();
        if(isEmailValid && isPasswordValid){
            alert("Login Successfully");
        }
    });
}

// Live Validation
mMailEl?.addEventListener("change", validateLoginEmailField);

mPasswordEl?.addEventListener("change", validateLoginPasswordField);




// REGISTER FORM

const registerForm = document.getElementById("registerForm");
const registerFirstNameEl = document.getElementById("registerFirstName");
const registerLastNameEl = document.getElementById("registerLastName");
const registerEmailEl = document.getElementById("registerEmail");
const registerPasswordEl = document.getElementById("registerPassword");
const registerConfirmPasswordEl = document.getElementById("registerConfirmPassword");
const registerTermsCheckEl = document.getElementById("registerTermsCheck");
const registerPrivacyCheckEl = document.getElementById("registerPrivacyCheck");

// CREATE ERROR ELEMENT
function createRegisterError(message){
    const errEl = document.createElement("span");
    errEl.classList.add("error");
    errEl.textContent = message;
    return errEl;
}


// NAME VALIDATION
function validateRegisterName(str){
    let pattern = /^(?=.{3,}$)[A-Za-z]+(?:\s[A-Za-z]+)*$/;
    return pattern.test(str);
}


// EMAIL VALIDATION
function validateRegisterEmail(str){
    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    return pattern.test(str);
}


// PASSWORD VALIDATION
function validateRegisterPassword(str){
    let passwordPattern =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[^\s]{8,}$/;
    return passwordPattern.test(str)
}


// FIRST NAME VALIDATION
function validateRegisterFirstName(){
    let cleanValue = registerFirstNameEl.value.trim();
    let parentBox = registerFirstNameEl.closest(".first-name-register-box");
    if(!validateRegisterName(cleanValue)){
        parentBox.querySelector(".error")?.remove();
        let errEl = createRegisterError("First name must be at least 3 characters");
        parentBox.appendChild(errEl);
        return false;
    }else{
        parentBox.querySelector(".error")?.remove();
        return true;
    }

}


// LAST NAME VALIDATION
function validateRegisterLastName(){
    let cleanValue = registerLastNameEl.value.trim();
    let parentBox = registerLastNameEl.closest(".last-name-register-box");
    if(!validateRegisterName(cleanValue)){
        parentBox.querySelector(".error")?.remove();
        let errEl = createRegisterError("Last name must be at least 3 characters");
        parentBox.appendChild(errEl);
        return false;
    }else{
        parentBox.querySelector(".error")?.remove();
        return true;
    }

}

// EMAIL VALIDATION FIELD
function validateRegisterEmailField(){
    let cleanValue = registerEmailEl.value.trim();
    let parentBox = registerEmailEl.closest(".email-register-box");
    if(!validateRegisterEmail(cleanValue)){
        parentBox.querySelector(".error")?.remove();
        let errEl = createRegisterError("Please enter valid email address");
        parentBox.appendChild(errEl);
        return false;

    }else{
        parentBox.querySelector(".error")?.remove();
        return true;
    }
}

// PASSWORD FIELD VALIDATION
function validateRegisterPasswordField(){
    let cleanValue = registerPasswordEl.value.trim();
    let parentBox = registerPasswordEl.closest(".password-register-box");
    if(!validateRegisterPassword(cleanValue)){
        parentBox.querySelector(".error")?.remove();
        let errEl = createRegisterError("Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.");
        parentBox.appendChild(errEl);
        return false;
    }else{
        parentBox.querySelector(".error")?.remove();
        return true;
    }

}

// CONFIRM PASSWORD VALIDATION
function validateRegisterConfirmPassword(){
    let passwordValue = registerPasswordEl.value.trim();
    let confirmValue = registerConfirmPasswordEl.value.trim();
    let parentBox = registerConfirmPasswordEl.closest(".confirm-password-register-box");
    if(confirmValue !== passwordValue || confirmValue === ""){
        parentBox.querySelector(".error")?.remove();
        let errEl = createRegisterError("Passwords do not match");
        parentBox.appendChild(errEl);
        return false;

    }else{

        parentBox.querySelector(".error")?.remove();
        return true;
    }
}

// TERMS CHECKBOX VALIDATION
function validateRegisterTerms(){
    let parentBox = registerTermsCheckEl.closest(".terms-box");
    if(!registerTermsCheckEl.checked){
        parentBox.querySelector(".error")?.remove();
        let errEl = createRegisterError("Please accept Terms & Conditions");
        parentBox.appendChild(errEl);
        return false;
    }else{
        parentBox.querySelector(".error")?.remove();
        return true;
    }

}


// PRIVACY CHECKBOX VALIDATION
function validateRegisterPrivacy(){
    let parentBox = registerPrivacyCheckEl.closest(".privacy-box");
    if(!registerPrivacyCheckEl.checked){
        parentBox.querySelector(".error")?.remove();
        let errEl = createRegisterError("Please accept Privacy Policy");
        parentBox.appendChild(errEl);
        return false;
    }else{
        parentBox.querySelector(".error")?.remove();
        return true;
    }
}


// FORM SUBMIT
if(registerForm){
    registerForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        const isFirstNameValid = validateRegisterFirstName();
        const isLastNameValid = validateRegisterLastName();
        const isEmailValid = validateRegisterEmailField();
        const isPasswordValid = validateRegisterPasswordField();
        const isConfirmPasswordValid = validateRegisterConfirmPassword();
        const isTermsValid = validateRegisterTerms();
        const isPrivacyValid = validateRegisterPrivacy();
        if(
            isFirstNameValid &&
            isLastNameValid &&
            isEmailValid &&
            isPasswordValid &&
            isConfirmPasswordValid &&
            isTermsValid &&
            isPrivacyValid
        ){
            alert("Account Created Successfully");
            registerForm.reset();
        }
    });
}

// LIVE VALIDATION
registerFirstNameEl?.addEventListener("change", validateRegisterFirstName);
registerLastNameEl?.addEventListener("change", validateRegisterLastName);
registerEmailEl?.addEventListener("change", validateRegisterEmailField);
registerPasswordEl?.addEventListener("change", validateRegisterPasswordField);
registerConfirmPasswordEl?.addEventListener("change", validateRegisterConfirmPassword);
registerTermsCheckEl?.addEventListener("change", validateRegisterTerms);
registerPrivacyCheckEl?.addEventListener("change", validateRegisterPrivacy);


// Cart Offcanvas

const cartCanvasRemoveBtn = document.querySelector(".off-canvas-remove-btn-cart");
const cartCanvas = document.querySelector(".cart-offcanvas");
const cartOverlay = document.querySelector(".cart-overlay");

const cartCanvasShowBtn = document.querySelectorAll(".cart-toggler-btn");

// OPEN
cartCanvasShowBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        cartCanvas.classList.remove("hide-cart-offcanvas");
        cartCanvas.classList.add("show-cart-offcanvas");
        cartOverlay.classList.add("show-overlay-cart");
    });
});

// CLOSE BUTTON
cartCanvasRemoveBtn.addEventListener("click", () => {
    cartCanvas.classList.remove("show-cart-offcanvas");
    cartCanvas.classList.add("hide-cart-offcanvas");
    cartOverlay.classList.remove("show-overlay-cart");
});

// OUTSIDE CLICK
cartOverlay.addEventListener("click", () => {
    cartCanvas.classList.remove("show-cart-offcanvas");
    cartCanvas.classList.add("hide-cart-offcanvas");
    cartOverlay.classList.remove("show-overlay-cart");
});

// Wishlist Offcanvas

const wishlistCanvasRemoveBtn = document.querySelector(".off-canvas-remove-btn-wishlist");
const wishlistCanvas = document.querySelector(".wishlist-offcanvas");
const wishlistOverlay = document.querySelector(".wishlist-overlay");

const wishlistCanvasShowBtn = document.querySelectorAll(".wishlist-toggler-btn");

// OPEN
wishlistCanvasShowBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        wishlistCanvas.classList.remove("hide-wishlist-offcanvas");
        wishlistCanvas.classList.add("show-wishlist-offcanvas");
        wishlistOverlay.classList.add("show-overlay-wishlist");
    });
});

// CLOSE BUTTON
wishlistCanvasRemoveBtn.addEventListener("click", () => {
    wishlistCanvas.classList.remove("show-wishlist-offcanvas");
    wishlistCanvas.classList.add("hide-wishlist-offcanvas");
    wishlistOverlay.classList.remove("show-overlay-wishlist");
});

// OUTSIDE CLICK
wishlistOverlay.addEventListener("click", () => {
    wishlistCanvas.classList.remove("show-wishlist-offcanvas");
    wishlistCanvas.classList.add("hide-wishlist-offcanvas");
    wishlistOverlay.classList.remove("show-overlay-wishlist");
});
