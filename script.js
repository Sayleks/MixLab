setGuestInLocalStorage();
checkUser();

// бургер меню


document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector("div").classList.toggle("open");
    document.querySelector("body").classList.toggle("body-scroll");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("blackOverId").addEventListener("click", function () {
    document.querySelector("div").classList.toggle("open");
    document.querySelector("body").classList.toggle("body-scroll");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("map-button").addEventListener("click", function () {
    document
      .getElementById("footer-map")
      .classList.toggle("footer-map-visible");
    document.querySelector("body").classList.toggle("body-scroll");
    document
      .getElementById("blackOver-two")
      .classList.toggle("blackOver-two-button");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("blackOver-two")
    .addEventListener("click", function () {
      document
        .getElementById("footer-map")
        .classList.toggle("footer-map-visible");
      document.querySelector("body").classList.toggle("body-scroll");
      document
        .getElementById("blackOver-two")
        .classList.toggle("blackOver-two-button");
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("button-close")
    .addEventListener("click", function () {
      document
        .getElementById("footer-map")
        .classList.toggle("footer-map-visible");
      document.querySelector("body").classList.toggle("body-scroll");
      document
        .getElementById("blackOver-two")
        .classList.toggle("blackOver-two-button");
    });
});

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    document.querySelector("div").classList.toggle("open");
    document.querySelector("body").classList.toggle("body-scroll");
    // e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

const swiper = new Swiper(".img-slider", {
  navigation: {
    nextEl: ".main-button-left",
    prevEl: ".main-button-right",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // slidesPerView: 2,
  spaceBetween: 11,
  slidesPerView: 1.2, // this
  centeredSlides: true,
  initialSlides: 1,
  loop: true,
});
async function getCurrentUserData() {
  try {
      const data = localStorage.getItem('currUser');
      if (!data) {
          throw new Error('No data found in localStorage');
      }
      return data;
  } catch (error) {
      console.error('Error:', error);
  }
}

async function setGuestInLocalStorage() {
  let currUserData = await getCurrentUserData();
  if (currUserData != null || currUserData != undefined) {
      return;
  }
  localStorage.setItem('currUser', "guest");
}
//Чек пользователя
function checkUser() {
  const data = localStorage.getItem('currUser');
  if (data == "user"){
      document.querySelector(".section-six").classList.remove("hidden");
      // document.querySelector(".pageour").classList.remove("hidden");
      // document.querySelector(".pagecustomer").classList.add("hidden");
       document.querySelector(".lng-veterinarian-login").classList.add("hidden");
       document.querySelector(".lng-logout").classList.remove("hidden");
  } else if (data == "admin"){
      document.querySelector(".section-five").classList.remove("hidden");
       document.querySelector(".section-six").classList.remove("hidden");
      // document.querySelector(".pagecustomer").classList.remove("hidden");
       document.querySelector(".lng-veterinarian-login").classList.add("hidden");
       document.querySelector(".lng-logout").classList.remove("hidden");
  } else {return;}
}

//логаут
document.getElementById('exit').addEventListener('click', function () {
  localStorage.setItem('currUser', "guest");
  location.reload();
});






