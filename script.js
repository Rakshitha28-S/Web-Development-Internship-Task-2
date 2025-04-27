// Navigation between sections
function showSection(id) {
  const sections = document.querySelectorAll('.page-section');
  sections.forEach(section => section.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();

  if (!name || !email.includes("@")) {
    alert("Please enter a valid name and email!");
    return;
  }

  // Alert the submitted data
  alert(
    `Contact Submitted:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}`
  );

  // Display submitted data below the form
  const output = document.getElementById("contactOutput");
  output.innerHTML = `
    <h3>Submitted Contact Details</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Address:</strong> ${address}</p>
  `;

  this.reset();
});


// To-Do List
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (!taskText) return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

// Image Gallery
function addImage() {
  const input = document.getElementById("imageInput");
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const gallery = document.getElementById("galleryContainer");

      const card = document.createElement("div");
      card.className = "image-card";

      const img = document.createElement("img");
      img.src = e.target.result;

      const btn = document.createElement("button");
      btn.textContent = "Delete";
      btn.className = "delete-img-btn";
      btn.onclick = () => card.remove();

      card.appendChild(img);
      card.appendChild(btn);
      gallery.appendChild(card);
    };
    reader.readAsDataURL(input.files[0]);
    input.value = "";
  }
}

// Add default image on load
window.onload = () => {
  const gallery = document.getElementById("galleryContainer");

  const card = document.createElement("div");
  card.className = "image-card";

  const img = document.createElement("img");
  img.src = "https://images.unsplash.com/photo-1506744038136-46273834b3fb";

  const btn = document.createElement("button");
  btn.textContent = "Delete";
  btn.className = "delete-img-btn";
  btn.onclick = () => card.remove();

  card.appendChild(img);
  card.appendChild(btn);
  gallery.appendChild(card);
};
