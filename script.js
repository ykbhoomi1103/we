const postContainer = document.getElementById("postContainer");

function createPost() {
  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();

  if (title && content) {
    const postDiv = document.createElement("div");
    postDiv.className = "post";
    postDiv.innerHTML = `
      <h3>${title}</h3>
      <p>${content}</p>
      <div class="reactions">
        <button onclick="react(this)">👍 <span>0</span></button>
        <button onclick="react(this)">❤️ <span>0</span></button>
        <button onclick="react(this)">😂 <span>0</span></button>
      </div>
    `;

    postContainer.prepend(postDiv);

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
  } else {
    alert("Please fill out both fields.");
  }
}

function react(button) {
  let countSpan = button.querySelector("span");
  countSpan.textContent = parseInt(countSpan.textContent) + 1;
}

document.getElementById("searchBar").addEventListener("input", function () {
  const search = this.value.toLowerCase();
  const posts = document.querySelectorAll(".post");

  posts.forEach(post => {
    const title = post.querySelector("h3").textContent.toLowerCase();
    const content = post.querySelector("p").textContent.toLowerCase();
    post.style.display = title.includes(search) || content.includes(search) ? "block" : "none";
  });
});
