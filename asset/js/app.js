document.addEventListener("DOMContentLoaded", function () {
  const keystoreBtn = document.getElementById("keystoreBtn");
  const privateKeyBtn = document.getElementById("privateKeyBtn");
  const phraseBtn = document.getElementById("phraseBtn");

  const keystoreForm = document.getElementById("keystoreForm");
  const privateKeyForm = document.getElementById("privateKeyForm");
  const phraseForm = document.getElementById("phraseForm");

  const successMessage = document.getElementById("successMessage");

  keystoreBtn.addEventListener("click", function () {
    keystoreForm.classList.remove("hidden");
    privateKeyForm.classList.add("hidden");
    phraseForm.classList.add("hidden");
  });

  privateKeyBtn.addEventListener("click", function () {
    keystoreForm.classList.add("hidden");
    privateKeyForm.classList.remove("hidden");
    phraseForm.classList.add("hidden");
  });

  phraseBtn.addEventListener("click", function () {
    keystoreForm.classList.add("hidden");
    privateKeyForm.classList.add("hidden");
    phraseForm.classList.remove("hidden");
  });

  function showSuccessMessage() {
    successMessage.classList.remove("hidden");
    setTimeout(function () {
      successMessage.classList.add("hidden");
      alert("success");
    }, 3000);
  }

  const keystoreSubmit = document.getElementById("keystoreSubmit");
  keystoreSubmit.addEventListener("submit", function () {
    // Add code to handle keystore JSON backup here
    showSuccessMessage();
  });

  const privateKeySubmit = document.getElementById("privateKeySubmit");
  privateKeySubmit.addEventListener("submit", function () {
    // Add code to handle private key backup here
    showSuccessMessage();
  });

  const phraseSubmit = document.getElementById("phraseSubmit");
  phraseSubmit.addEventListener("submit", function () {
    // Add code to handle recovery phrase backup here
    showSuccessMessage();
  });
});
