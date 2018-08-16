//SignUp variables (registrarse)
// const nameSignUp = document.getElementById('name-signup');
const userSignUP = document.getElementById('user-signup');
const emailSignUp = document.getElementById('email-signup');
const passwordSignUp = document.getElementById('password-signup');
const passwordValidation = document.getElementById('password-validation');
const registerButton = document.getElementById('register');

//SignIn variables (logueare)
const googleButton = document.getElementById('google-button');
const facebookButton = document.getElementById('facebook-button');
const emailSignIn = document.getElementById('email-signin');
const passwordSignIn = document.getElementById('password-signin');
const signInButton = document.getElementById('sign-in-button');


//Function to call the other HTML where's the main page of the app
const htmlCall = () => {
  window.location.assign('../src/components/mainpage.html');
};

//EMAIL register
registerButton.addEventListener('click', () => {

  if(registerEmail(emailSignUp.value) === false){
    $("#register-email-validate").html('<p style="color:#E02222">Corrige tu email</p>');
  }
  else if(registerPassword(passwordSignUp.value) === false){
    $("#register-password-validate").html('<p  style="color:#E02222">Corrige tu contraseña</p>');
  }

  const cb = (error, result) => {
    if (error) {
      // console.log(error.code, error.message);
    } else {
      let user = result.user;
      writeUserData(user.uid, user.displayName, user.email, user.photoURL, htmlCall);
    }
  };

  signUp(emailSignUp.value, passwordSignUp.value, cb);

});

//EMAIL LogIn button 
signInButton.addEventListener('click', () => {

    if(loginEmail(emailSignIn.value) === false){
      $("#email-validate").html('<p style="color:#E02222">Corrige tu email</p>');
    }
    if(loginPassword(passwordSignIn.value) === false){
      $("#password-validate").html('<p  style="color:#E02222">Corrige tu contraseña</p>');
    }

  const cb = (error, result) => {
    if (error) {
      // console.log(error.code, error.message);
    } else {
      result;
      htmlCall();
    }
  }
  signIn(emailSignIn.value, passwordSignIn.value, cb);

});

//GOOGLE LogIn button 
googleButton.addEventListener('click', () => {
  let provider;
  const cb = (error, result) => {
    if (error) {

    } else {
      let user = result.user;
      writeUserData(user.uid, user.displayName, user.email, user.photoURL, htmlCall);
    }
  }
  signInGoogle(provider, cb);
});

//FACEBOOK LogIn button
facebookButton.addEventListener('click', () => {
  let provider;
  const cb = (error, result) => {
    if (error) {

    } else {
      let user = result.user;
      writeUserData(user.uid, user.displayName, user.email, user.photoURL, htmlCall);
    }
  }

  signInFacebook(provider, cb);

});

const registerLink = document.getElementById('register-link');
const registerSection = document.getElementById('register-section');

registerLink.addEventListener('click', () => {
  registerSection.style.display = 'block';
  loginSection.style.display = 'none';
});

const loginLink = document.getElementById('login-link');
const loginSection = document.getElementById('login-section');

loginLink.addEventListener('click', () => {
  loginSection.style.display = 'block';
  registerSection.style.display = 'none';
});


//validando registro
// if (nameSignUp === "" || emailSignUp === "" || passwordSignUp === "" || passwordValidation === "") {
//   alert("Este campo es obligatorio de llenar");
//   return false;
// }
// else (nameSignUp.length > 30 || passwordSignUp > 50 || passwordValidation > 50){
//   alert("Este campo es muy largo");
//   return false;
// }


  // let correo = emailSignIn.value;
  // let contador = 0;
  // let contador2 = 0;

  // //validación de email por campos
  // for (i = 1; i < correo.length; i++) {
  //   if (correo.charAt(i - 1) === "@") {
  //     contador = contador + 1;
  //   }
  //   if (contador === 1) {
  //     if (correo.charAt(i - 1) === ".") {
  //       contador2 = contador2 + 1;
  //     }
  //   }
  // }

  // if (contador === 1 && contador2 === 2 || contador === 1) {
  // }
  // else {
  //   alert('correo no valido, por favor verifica errores')
  // }

    // if(validadorNombre(name.value) === false) {
    //   alert('nombre incorrecto');
    // } else if (validadorEmail(email.value) === false) {
    //   alert('email incorrecta');
    // } else if (validadorPassword(password.value) === false) {
    //   alert('tiene que tener como minimo 6 caracteres y letras')
    // } else {
    //   registerVal(email.value, password.value);
    //   alert('Has sido registrado exitosamente')
    // };

    //   let correo = emailSignUp.value;
//   let contraseña = passwordSignUp.value;
//   let contador = 0;
//   let contador2 = 0;
  
// //validación de email por campos
//   for (i = 1; i < correo.length; i++) {
//     if (correo.charAt(i - 1) === "@") {
//       contador = contador + 1;
//     }
//     if (contador === 1) {
//       if (correo.charAt(i - 1) === ".") {
//         contador2 = contador2 + 1;
//       }
//     }
//   }

//   if (contador === 1 && contador2 === 2 || contador === 1) {
//   }
//   else {
//     alert('correo no valido, el correo debe tener el formato  ejemplo@hotmail.com')
//   }

//   if(contraseña.length<6){
//     alert('introduzca más de 6 caracteres en la contraseña')
//   }
  
  //validacion con expresión regular
  // registerEmail = (emailSignUp) => {
  //   emailSignUp.value
  // }
  // registerPassword = (passwordSignUp) => {
  //   passwordSignUp.value
  // }
