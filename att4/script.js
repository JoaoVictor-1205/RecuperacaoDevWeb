const form = document.getElementById('formComentario');
const comentarios = document.getElementById('comentarios');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const usuario = document.getElementById('usuario').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (usuario && mensagem) {
    adicionarComentario(usuario, mensagem);
    form.reset();
  }
});

function adicionarComentario(usuario, mensagem) {
  const div = document.createElement('div');
  const usuarioAtual = "João"; // simulação do usuário atual

  div.classList.add('comentario');
  div.classList.add(usuario === usuarioAtual ? 'ativo' : 'outro');
  div.innerHTML = `<strong>${usuario}</strong><br>${mensagem}`;
  comentarios.appendChild(div);
}
