let box = document.getElementById("cards");

let API = async () => {
  let response = await fetch("https://reqres.in/api/users?page=1");
  let file = await response.json();
  let info = file.data
    .map((element) => {
      return `<div class="card">
        <div class="profile-image">
            <img src="${element.avatar}" alt="">
        </div>
        <div class="card-content">
            <p class="name">${element.first_name} ${element.last_name}</p>
            <p>${element.email}</p>
            <p>User ID: ${element.id}</p>
        </div>
    </div>`;
    })
    .join("");
  cards.innerHTML = info;
};

let navBtn = document.getElementById("nav-btn");
navBtn.addEventListener("click", () => {
  cards.innerHTML = `<center><h1 class='load'>Requested Data is Fetching....</h1></center>`;
  setTimeout(() => {
    API();
  }, 2500);
});