const abrirBtn = document.getElementById('abrirModal');
const fecharBtn = document.getElementById('fecharModal');
const modal = document.getElementById('modal');
const form = document.getElementById('formLogin');
const erro = document.getElementById('mensagemErro');

abrirBtn.addEventListener('click', () => {
  modal.classList.add('ativo');
});

fecharBtn.addEventListener('click', () => {
  modal.classList.remove('ativo');
});

window.addEventListener('click', e => {
  if (e.target === modal) modal.classList.remove('ativo');
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const usuario = document.getElementById('usuario').value.trim();
  const senha = document.getElementById('senha').value.trim();

  if (usuario === '' || senha === '') {
    erro.textContent = 'Preencha todos os campos!';
  } else {
    erro.textContent = '';
    alert('Login efetuado com sucesso!');
    modal.classList.remove('ativo');
    form.reset();
  }
});
