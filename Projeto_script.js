{
// Obtém o elemento do formulário por ID
const form = document.getElementById("todo-form");

// Obtém o elemento de entrada de texto por ID
const input = document.getElementById("todo-input");

// Obtém o elemento da coluna "A fazer" por ID
const todoLane = document.getElementById("todo-lane");

// Adiciona um ouvinte de evento para o evento de envio do formulário
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Previne o comportamento padrão de envio do formulário

  const value = input.value; // Obtém o valor do campo de entrada de texto

  if (!value) return; // Se o valor estiver vazio, retorna sem fazer nada

  // Cria um novo elemento de parágrafo para representar a nova tarefa
  const newTask = document.createElement("p");

  // Adiciona a classe "task" ao novo elemento
  newTask.classList.add("task");

  // Define o atributo "draggable" como "true" para tornar o elemento arrastável
  newTask.setAttribute("draggable", "true");

  // Define o texto do novo elemento como o valor obtido do campo de entrada de texto
  newTask.innerText = value;

  // Adiciona um ouvinte de evento para o evento de início de arrasto do elemento
  newTask.addEventListener("dragstart", () => {
    newTask.classList.add("is-dragging"); // Adiciona a classe "is-dragging" para indicar que o elemento está sendo arrastado
  });

  // Adiciona um ouvinte de evento para o evento de fim de arrasto do elemento
  newTask.addEventListener("dragend", () => {
    newTask.classList.remove("is-dragging"); // Remove a classe "is-dragging" para indicar que o elemento não está mais sendo arrastado
  });

  // Adiciona o novo elemento à coluna "A fazer"
  todoLane.appendChild(newTask);

  input.value = ""; // Limpa o campo de entrada de texto
});
}

{
// Obtém todos os elementos com a classe ".task" e os armazena em uma NodeList
const draggables = document.querySelectorAll(".task");

// Obtém todos os elementos com a classe ".swim-lane" e os armazena em uma NodeList
const droppables = document.querySelectorAll(".swim-lane");

// Adiciona ouvintes de eventos para os elementos arrastáveis
draggables.forEach((task) => {
  // Adiciona um ouvinte de evento para o evento de início de arrasto do elemento
  task.addEventListener("dragstart", () => {
    task.classList.add("is-dragging"); // Adiciona a classe "is-dragging" para indicar que o elemento está sendo arrastado
  });

  // Adiciona um ouvinte de evento para o evento de fim de arrasto do elemento
  task.addEventListener("dragend", () => {
    task.classList.remove("is-dragging"); // Remove a classe "is-dragging" para indicar que o elemento não está mais sendo arrastado
  });
});

// Adiciona ouvintes de eventos para as áreas de soltar
droppables.forEach((zone) => {
  // Adiciona um ouvinte de evento para o evento de passagem do cursor sobre a área de soltar
  zone.addEventListener("dragover", (e) => {
    e.preventDefault(); // Previne o comportamento padrão de arrastar e soltar

    const bottomTask = insertAboveTask(zone, e.clientY); // Obtém a tarefa abaixo do cursor do mouse
    const curTask = document.querySelector(".is-dragging"); // Obtém a tarefa atual sendo arrastada

    if (!bottomTask) {
      zone.appendChild(curTask); // Se não houver tarefa abaixo, adiciona a tarefa arrastada como último filho da área de soltar
    } else {
      zone.insertBefore(curTask, bottomTask); // Se houver tarefa abaixo, insere a tarefa arrastada acima da tarefa abaixo
    }
  });
});

// Função que encontra a tarefa acima do cursor do mouse na área de soltar
const insertAboveTask = (zone, mouseY) => {
  const els = zone.querySelectorAll(".task:not(.is-dragging)"); // Obtém todas as tarefas na área de soltar, exceto a tarefa sendo arrastada

  let closestTask = null;
  let closestOffset = Number.NEGATIVE_INFINITY;

  // Percorre todas as tarefas na área de soltar
  els.forEach((task) => {
    const { top } = task.getBoundingClientRect(); // Obtém a posição superior da tarefa em relação à janela de visualização

    const offset = mouseY - top; // Calcula a distância entre o cursor do mouse e a posição superior da tarefa

    // Verifica se a distância é negativa (ou seja, o cursor está acima da tarefa) e se é maior do que a distância registrada anteriormente
    if (offset < 0 && offset > closestOffset) {
      closestOffset = offset; // Atualiza a distância registrada mais próxima
      closestTask = task; // Atualiza a tarefa mais próxima
    }
  });

  return closestTask; // Retorna a tarefa mais próxima acima do cursor do mouse na área de soltar
};

}

// Obtém o botão por ID
var inputButton3 = document.getElementById('input_button3');

// Adiciona um ouvinte de evento para o evento de clique
inputButton3.addEventListener('click', function() {
  // Obtém o elemento do kanban por classe
  var kanban = document.querySelector('.board');

  // Remove a classe "d-none" para exibir o kanban
  kanban.classList.remove('d-none');
  inputButton3.classList.add('d-none'); // Adiciona a classe 'd-none' para remover o botão
});
