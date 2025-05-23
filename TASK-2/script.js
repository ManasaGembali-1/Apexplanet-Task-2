document
  .getElementById("feedback-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert(
      "Thank you for your submission, " + name + "! We'll get back to you soon."
    );
    document.getElementById("feedback-form").reset();
  });

const galleryGrid = document.querySelector(".gallery-grid");
const addImageInput = document.getElementById("add-image");
const addImageBtn = document.getElementById("add-image-btn");

function createGalleryItem(src) {
  const div = document.createElement("div");
  div.classList.add("gallery-item");

  const img = document.createElement("img");
  img.src = src;
  img.alt = "User added art";

  const btn = document.createElement("button");
  btn.textContent = "×"; // Cross mark for remove
  btn.classList.add("remove-btn");

  btn.addEventListener("click", () => {
    galleryGrid.removeChild(div);
  });

  div.appendChild(img);
  div.appendChild(btn);

  return div;
}

addImageBtn.addEventListener("click", () => {
  const files = addImageInput.files;
  if (files.length === 0) {
    alert("Please select an image to add.");
    return;
  }

  const file = files[0];

  if (!file.type.startsWith("image/")) {
    alert("Please select a valid image file.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const galleryItem = createGalleryItem(e.target.result);
    galleryGrid.appendChild(galleryItem);
    addImageInput.value = ""; // Clear input
  };
  reader.readAsDataURL(file);
});
