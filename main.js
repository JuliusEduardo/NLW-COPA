function createGame(player1, hour, player2) {
  return `
   <li>
      <img src="./Conteudo/icon-${player1}.svg" alt="bandira do ${player1}">
      <strong>${hour}</strong>
      <img src="./Conteudo/icon-${player2}.svg" alt="Bandeira da ${player2}">
   </li>
   `;
}

function createCard(date, day, games) {
  return `
<div class="card">
      <h2>${date} <span>${day}</span></h2>
      <ul>
         ${games}
      </ul>
   </div>
`;
}

document.querySelector("#cards").innerHTML =
  createCard(
    "22/11",
    "Terça",
    createGame("argentina", "7:00", "arabiasaudita") +
      createGame("dinamarca", "10:00", "tunisia") +
      createGame("mexico", "13:00", "polonia") +
      createGame("franca", "16:00", "serbia")
  ) +
  createCard(
    "23/11",
    "Quarta",
    createGame("marrocos", "7:00", "croacia") +
      createGame("alemanha", "10:00", "japao") +
      createGame("espanha", "13:00", "costarica") +
      createGame("belgica", "16:00", "canada")
  ) +
  createCard(
    "24/11",
    "Quinta",
    createGame("suiça", "7:00", "camarao") +
      createGame("uruguai", "10:00", "coreiadosul") +
      createGame("portugal", "13:00", "gana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "25/11",
    "Sexta",
    createGame("gales", "7:00", "ira") +
      createGame("catar", "10:00", "senegal") +
      createGame("holanda", "13:00", "equador") +
      createGame("inglaterra", "16:00", "estadosunidos")
  ) +
  createCard(
    "26/11",
    "Sabado",
    createGame("tunisia", "7:00", "australia") +
      createGame("polonia", "10:00", "arabiasaudita") +
      createGame("franca", "13:00", "dinamarca") +
      createGame("argentina", "16:00", "mexico")
  ) +
  createCard(
    "27/11",
    "Domingo",
    createGame("japao", "7:00", "costarica") +
      createGame("belgica", "10:00", "marrocos") +
      createGame("croacia", "13:00", "canada") +
      createGame("espanha", "16:00", "alemanha")
  ) +
  createCard(
    "28/11",
    "Segunda",
    createGame("camarao", "7:00", "serbia") +
      createGame("coreiadosul", "10:00", "gana") +
      createGame("brazil", "13:00", "suiça") +
      createGame("portugal", "16:00", "uruguai")
  ) +
  createCard(
    "29/11",
    "Terça",
    createGame("equador", "12:00", "senegal") +
      createGame("holanda", "12:00", "catar") +
      createGame("ira", "16:00", "estadosunidos") +
      createGame("gales", "16:00", "inglaterra")
  ) +
  createCard(
    "30/11",
    "Quarta",
    createGame("tunisia", "12:00", "franca") +
      createGame("australia", "12:00", "dinamarca") +
      createGame("polonia", "16:00", "argentina") +
      createGame("arabiasaudita", "16:00", "mexico")
  ) +
  createCard(
    "01/12",
    "Quinta",
    createGame("croacia", "12:00", "belgica") +
      createGame("canada", "12:00", "marrocos") +
      createGame("japao", "16:00", "espanha") +
      createGame("costarica", "16:00", "alemanha")
  ) +
  createCard(
    "02/12",
    "Sexta",
    createGame("coreiadosul", "12:00", "portugal") +
      createGame("gana", "12:00", "uruguai") +
      createGame("serbia", "16:00", "suiça") +
      createGame("camarao", "16:00", "brazil")
  );
