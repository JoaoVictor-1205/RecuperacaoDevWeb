const itens = document.querySelectorAll('#listaTarefas li');
let dragItem = null;

itens.forEach(item => {
  item.addEventListener('dragstart', () => {
    dragItem = item;
    item.classList.add('dragging');
  });

  item.addEventListener('dragend', () => {
    dragItem = null;
    item.classList.remove('dragging');
  });

  item.addEventListener('dragover', (e) => {
    e.preventDefault();
    item.classList.add('over');
  });

  item.addEventListener('dragleave', () => {
    item.classList.remove('over');
  });

  item.addEventListener('drop', () => {
    if (dragItem !== item) {
      const lista = document.getElementById('listaTarefas');
      const dragIndex = Array.from(lista.children).indexOf(dragItem);
      const dropIndex = Array.from(lista.children).indexOf(item);

      if (dragIndex < dropIndex) {
        lista.insertBefore(dragItem, item.nextSibling);
      } else {
        lista.insertBefore(dragItem, item);
      }
    }
    item.classList.remove('over');
  });
});
