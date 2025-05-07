document.getElementById('formRegistro').addEventListener('submit', function (e) {
    e.preventDefault();
    validarFormulario();
  });
  
  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  const senha = document.getElementById('senha');
  
  nome.addEventListener('input', validarNome);
  email.addEventListener('input', validarEmail);
  senha.addEventListener('input', validarSenha);
  
  function validarNome() {
    const erroNome = document.getElementById('erroNome');
    if (nome.value.trim().length < 3) {
      erroNome.textContent = "O nome deve ter pelo menos 3 caracteres.";
      nome.classList.add('invalido');
    } else {
      erroNome.textContent = "";
      nome.classList.remove('invalido');
    }
  }
  
  function validarEmail() {
    const erroEmail = document.getElementById('erroEmail');
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email.value)) {
      erroEmail.textContent = "Digite um e-mail válido.";
      email.classList.add('invalido');
    } else {
      erroEmail.textContent = "";
      email.classList.remove('invalido');
    }
  }
  
  function validarSenha() {
    const erroSenha = document.getElementById('erroSenha');
    const valor = senha.value;
  
    if (valor.length < 6 || !/\d/.test(valor) || !/[A-Z]/.test(valor)) {
      erroSenha.textContent = "A senha deve ter ao menos 6 caracteres, 1 número e 1 letra maiúscula.";
      senha.classList.add('invalido');
    } else {
      erroSenha.textContent = "";
      senha.classList.remove('invalido');
    }
  }
  
  function validarFormulario() {
    validarNome();
    validarEmail();
    validarSenha();
  
    if (!document.querySelector('.invalido')) {
      alert('Registro bem-sucedido!');
      document.getElementById('formRegistro').reset();
    }
  }