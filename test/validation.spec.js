describe('registerEmail', () => {
 
  //Validando correo con caracteres mayúsculas y minúsculas
  it( 'debería retornar true para kellyROSALES@gmail.com', () => {
    assert.equal(window.registerEmail('kellyROSALES@gmail.com'), true); 
  });
  //Validando correo con digitos del 0-9
  it( 'debería retornar true para kelly123@gmail', () => {
    assert.equal(window.registerEmail('kelly123@gmail'), true); 
  });

});

describe('registerPassword', () =>{

  // validando un rango "-" de caracteres de la "a" a la "z" en mayúsculas "A-Z" y minúsculas "a-z" y con sus acentos.
  it( 'debería retornar true para laboratoriaLABORATORIA', () => {
    assert.equal(window.registerPassword('laboratoriaLABORATORIA'), true); 
  });
  //  validando rango de digitos del "0-9", y caracteres especiales "!@#\$%\^&\*\?_~\/".
  it( 'debería retornar true para laboratoria123?', () => {
    assert.equal(window.registerPassword('laboratoria123?'), true); 
  });
});

describe('loginEmail', () =>{

    //Validando correo con caracteres mayúsculas y minúsculas
    it( 'debería retornar true para kellyROSALES@gmail.com', () => {
      assert.equal(window.loginEmail('kellyROSALES@gmail.com'), true); 
    });
    //Validando correo con digitos del 0-9
    it( 'debería retornar true para kelly123@gmail.com', () => {
      assert.equal(window.loginEmail('kelly123@gmail.com'), true); 
    });

});

describe('loginPassword', () =>{

    // validando que no haya un rango vacío
    it( 'debería retornar true para labor atoria', () => {
      assert.equal(window.loginPassword('labor atoria'), true); 
    });
    //  maximo 15 caracteres, minimo 15 caracteres
    it( 'debería retornar true para laboratoria', () => {
      assert.equal(window.loginPassword('laboratoria'), true); 
    });
    //al menos una mayuscula y una minuscula
    it( 'debería retornar true para laboratoriaLAB', () => {
      assert.equal(window.loginPassword('laboratoriaLAB'), true); 
    });

});

// Validar un password:
//Minimo 8 caracteres
// Maximo 15
// Al menos una letra mayúscula
// Al menos una letra minucula
// Al menos un dígito
// No espacios en blanco
// Al menos 1 caracter especial

// Validar un email:
// Acepto un rango de caracteres de "A-Z" en mayúsculas y minúsculas,
// rango de digitos del "0-9, y caracteres permitidos en las direcciones de correo. 
// Todo esto en un mínimo de 2 y no especifico el máximo "{2,}". Seguido por un "@", y
// seguido por el mismo patron de concordancia, para el nombre del dominio.
// Todo esto seguido por un "."(punto). Terminado por rango de caracteres de "A-Z" en mayúsculas y minúsculas, 
// mínimo de 2 y máximo 4 "{2,4}"
