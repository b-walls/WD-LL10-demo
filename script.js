/* Task 1 - Complete the function according to the TODO */
function addComment(username, comment, addToStart) {
  // Make sure username starts with @
  if (!username.startsWith("@")) {
    username = `@${username}`;
  }
  const combinedComment = `${username}: ${comment}`;

  // Add to the comments array based on addToStart
  if (addToStart) {
    comments.unshift(combinedComment);
  } else {
    comments.push(combinedComment);
  }

  // Show Bootstrap toast when comment is added
  const toastElement = document.getElementById("commentToast");
  // Create a Bootstrap toast instance and show it
  const toast = new bootstrap.Toast(toastElement);
  toast.show();
}

/* Task 2 - Create your showWinnerMessage below according to the TODO */
function showWinnerMessage(message) {
  const pickerSection = document.getElementById("picker-section");
  pickerSection.textContent = message;
}
/* Task 3 - Create your pickWinner below according to the TODO */
function pickWinner() {
  commentLength = comments.length;
  indexChosen = Math.floor(Math.random() * commentLength);
  winMessage = `Winner: ${comments[indexChosen]}!`;
  showWinnerMessage(winMessage);
  showRandomEmoji();
}

/* Task 4 - Complete the function according to the TODO */
function showRandomEmoji() {
  emojisLength = emojis.length;
  indexChosen = Math.floor(Math.random() * emojisLength);
  winnerEmoji = document.getElementById("winner-emoji");
  winnerEmoji.textContent = emojis[indexChosen];
}

/* Task 5 - Complete the function according to the TODO */
function reverseOrder() {
  comments.reverse();
}

/* Task 6 - Complete the function according to the TODO */
function removeComment(index) {
  comments.splice(index, 1);
}

/* Task 7 - Complete the function according to the TODO */
function filterEmojiComments() {
  const emojiComments = [];

  for (let comment of comments) {
    for (let emoji of emojis) {
      if (comment.includes(emoji)) {
        emojiComments.push(comment);
        break;
      }
    }
  }

  return emojiComments;
}

/* Level Ups */

/* Level Up - Task 8 - Complete the filterList function according to the TODO */
function filterList(searchTerm, searchUsers) {
  const filtered = [];

  for (let comment of comments) {
    if (searchUsers) {
      const username = comment.split(":")[0].replace("@", "").trim();
      if (username.toLowerCase().includes(searchTerm.toLowerCase())) {
        filtered.push(comment);
      }
    } else {
      if (comment.toLowerCase().includes(searchTerm.toLowerCase())) {
        filtered.push(comment);
      }
    }
  }

  return filtered;
}

/* Level Up - Task 9 - Compelte the task according to the TODO */

/* Level Up - Task 10 - Add to the `addComment` function so that the an `@` sign is added to the username if there is not already one before it gets pushed into the array.  */

// document elements
let submitCommentButton = document.getElementById("submitComment");
let commentUsername = document.getElementById("new-username");
let commentText = document.getElementById("new-comment");
let addToStartCheckbox = document.getElementById("add-to-start");
let pickWinnerButton = document.getElementById("pick-winner-btn");

// add event listener to submitCommentButton
submitCommentButton.addEventListener(
  "click",
  addComment(
    commentUsername.value,
    commentText.value,
    addToStartCheckbox.checked
  )
);

// add event listener to pick winner button
pickWinnerButton.addEventListener("click", pickWinner());
