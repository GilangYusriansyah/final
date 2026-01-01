
// ===== CLEAN MAIN SCRIPT =====
document.addEventListener('DOMContentLoaded', function() {
  const popup = document.getElementById('myPopup');
  const closeBtn = document.querySelector('.close');
  const audio = document.getElementById('popupAudio');

  // Function to close popup and play audio
  closeBtn.addEventListener('click', function() {
    popup.style.display = 'none';
    audio.play();
  });

  // Function to stop audio when logo is clicked
  const logo = document.getElementById('logo');
  logo.addEventListener('click', function() {
    audio.pause();
    audio.currentTime = 0;
  });

  // Slider functionality
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Auto slide every 3 seconds
  setInterval(nextSlide, 3000);

  // Countdown functionality
  const countdownDate = new Date('2026-04-12T00:00:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    if (distance < 0) {
      clearInterval(countdownInterval);
      document.getElementById('countdown').innerHTML = 'The wedding has arrived!';
    }
  }

  updateCountdown();
  const countdownInterval = setInterval(updateCountdown, 1000);

  // Wedding gift show cards functionality
  const showCardsBtn = document.getElementById('show-cards');
  const cardContainer = document.querySelector('.card-container');

  showCardsBtn.addEventListener('click', function() {
    cardContainer.classList.toggle('show');
  });
});

function copyText(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text).then(() => {
    Swal.fire({
      icon: 'success',
      title: 'Berhasil disalin',
      text: text,
      timer: 1500,
      showConfirmButton: false
    });
  });
}

document.getElementById("openGift").onclick = function () {
  document.getElementById("giftWrapper").style.display = "block";
  this.style.display = "none";
};

document.querySelectorAll(".copy-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    navigator.clipboard.writeText(btn.dataset.number);
    btn.innerText = "Copied!";
    setTimeout(() => btn.innerText = "Copy", 1500);
  });
});
