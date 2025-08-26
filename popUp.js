// Function untuk mengirim data form ke WhatsApp
function sendToWhatsApp(event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value;
  const paket = document.getElementById("paket").value; // Mengambil dari hidden input
  const request = document.getElementById("request").value;

  const noWaTujuan = "6285212350700";

  const pesan =
    `Halo admin, Nama saya ${nama} saya ingin memesan:\n` +
    `Paket: ${paket}\n` +
    `Request: ${request}`;

  const url = `https://wa.me/${noWaTujuan}?text=${encodeURIComponent(pesan)}`;

  window.open(url, "_blank");
}

// Custom Dropdown Script
document.addEventListener("DOMContentLoaded", function () {
  const customSelects = document.querySelectorAll(".custom-select-wrapper");

  customSelects.forEach((wrapper) => {
    const selectedDiv = wrapper.querySelector(".select-selected");
    const itemsDiv = wrapper.querySelector(".select-items");
    const hiddenInput = wrapper.querySelector("input[type='hidden']");

    selectedDiv.addEventListener("click", function () {
      // Toggle visibility and animation
      itemsDiv.classList.toggle("visible");
      selectedDiv.classList.toggle("select-arrow-active");
    });

    itemsDiv.querySelectorAll("div").forEach((item) => {
      item.addEventListener("click", function () {
        const value = this.getAttribute("data-value");
        const text = this.textContent;

        // Update the selected text and the hidden input value
        selectedDiv.textContent = text;
        hiddenInput.value = value;

        // Add arrow back and update the active class
        const arrow = document.createElement("span");
        arrow.className = "arrow-down";
        arrow.textContent = "▼";
        selectedDiv.appendChild(arrow);

        // Hide the dropdown
        itemsDiv.classList.remove("visible");
        selectedDiv.classList.remove("select-arrow-active");
      });
    });

    // Close the dropdown if the user clicks outside
    document.addEventListener("click", function (e) {
      if (!wrapper.contains(e.target)) {
        itemsDiv.classList.remove("visible");
        selectedDiv.classList.remove("select-arrow-active");
      }
    });
  });
});
