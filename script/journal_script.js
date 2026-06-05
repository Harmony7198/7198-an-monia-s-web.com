function unlock() {
  const input = document.getElementById("pw").value;
  const password = "1234"; // change this
  if (input === password) {
    document.getElementById("secret").style.display = "block";
  } else {
    alert("wrong password");
  }
}
/* filter system */
function filterPosts(tag) {
  let posts = document.querySelectorAll('.entry');
  posts.forEach(post => {
    let tags = post.getAttribute('data-tags');
    if (!tags) return;
    let tagList = tags.split(" ");
    if (tagList.includes(tag)) {
      post.style.display = "block";
    } else {
      post.style.display = "none";
    }
  });
}
function showAll() {
  let posts = document.querySelectorAll('.entry');
  posts.forEach(post => {
    post.style.display = "block";
  });
}
/* SHOW LESS - SHOW MORE */
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