const ctx = document.getElementById('meuGrafico').getContext('2d');

const grafico = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [],
    datasets: [{
      label: 'Valores',
      data: [],
      backgroundColor: '#007bff'
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

function adicionarDado() {
  const label = document.getElementById('label').value.trim();
  const valor = document.getElementById('valor').value.trim();

  if (label && valor !== '') {
    grafico.data.labels.push(label);
    grafico.data.datasets[0].data.push(parseFloat(valor));
    grafico.update();

    document.getElementById('label').value = '';
    document.getElementById('valor').value = '';
  } else {
    alert('Preencha os dois campos!');
  }
}
