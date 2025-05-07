const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove classes ativas
    tabs.forEach(t => t.classList.remove('ativo'));
    contents.forEach(c => c.classList.remove('ativo'));

    // Ativa aba e conteúdo selecionado
    tab.classList.add('ativo');
    const contentId = tab.getAttribute('data-tab');
    document.querySelector(`.tab-content[data-content="${contentId}"]`).classList.add('ativo');
  });
});
