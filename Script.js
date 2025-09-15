// =============================
// Part 2: JavaScript Functions
// =============================

// Global scope variable
let animationCount = 0;

/**
 * Function to log and count animations
 * Demonstrates parameters + return values
 */
function logAnimation(action) {
  animationCount++;
  console.log(`Action: ${action}, Total Animations: ${animationCount}`);
  return animationCount;
}

/**
 * Function to add/remove animation class
 * Demonstrates scope and DOM manipulation
 */
function toggleAnimation(element, className) {
  element.classList.toggle(className);
  return element.classList.contains(className);
}

// =============================
// Part 3: Combine JS + CSS Animations
// =============================

// Animate box on button click
const box = document.querySelector(".box");
document.getElementById("animateBoxBtn").addEventListener("click", () => {
  const added = toggleAnimation(box, "extra-animate");
  logAnimation(added ? "Started Box Animation" : "Stopped Box Animation");
});

// Extra CSS animation class controlled by JS
// (add this dynamically with toggleAnimation)
const style = document.createElement("style");
style.textContent = `
  .extra-animate {
    animation: spin 2s linear infinite;
  }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);

// Modal popup logic
const modal = document.getElementById("modal");
const toggleModalBtn = document.getElementById("toggleModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

toggleModalBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("show");
  logAnimation("Opened Modal");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("show");
  setTimeout(() => {
    modal.classList.add("hidden");
  }, 500); // Wait for fade out transition
  logAnimation("Closed Modal");
});
