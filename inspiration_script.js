/* SECRET BOX */
function unlock(button) {
  const entry = button.closest(".entry");
  const input = entry.querySelector(".pw").value;
  const secret = entry.querySelector(".secret");

  const password = "tuongan";

  if (input === password) {
    secret.style.display = "block";
  } else {
    alert("wrong password");
  }
}
/* FILTER SYSTEM */
function filterPosts(tag) {
  let posts = document.querySelectorAll('.entry');
  document.getElementById('activeTag').innerText = tag;
  posts.forEach(post => {
    let tags = post.getAttribute('data-tags');
    if (tags && tags.includes(tag)) {
      post.style.display = "block";
    } else {
      post.style.display = "none";
    }
  });
}
function showAll() {
  let posts = document.querySelectorAll('.entry');
  document.getElementById('activeTag').innerText = "All";
  posts.forEach(post => {
    post.style.display = "block";
  });
}
function toggleContent(button) {
  const content = button.parentElement;
  const moreText = content.querySelector(".more");

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    button.textContent = "Show less";
  } else {
    moreText.style.display = "none";
    button.textContent = "Show more";
  }
}
/* SHOW MORE/LESS */
function toggleContent(button) {
  const content = button.parentElement;
  const more = content.querySelector(".more");
  if (more.style.display === "none") {
    more.style.display = "block";
    button.textContent = "Show less";
  } else {
    more.style.display = "none";
    button.textContent = "Show more";
  }
}