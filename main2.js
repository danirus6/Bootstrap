document.addEventListener("DOMContentLoaded", function () {
  
    const userCardsContainer = document.getElementById("userCards");

    for (let i = 0; i < localStorage.length; i++) {
        let profile = localStorage.key(i);
        let userData = JSON.parse(localStorage.getItem(profile));

        let userCard = document.createElement("div");
        userCard.classList.add("card", "mb-3");

        userCard.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${userData.nombre}</h5>
                <p class="card-text"><strong>Correo:</strong> ${userData.correo}</p>
            </div>
        `;

        userCardsContainer.appendChild(userCard);
    }
});
