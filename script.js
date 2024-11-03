// Initialize the image slider
document.addEventListener("DOMContentLoaded", function () {
  const imageSlider = new bootstrap.Carousel(
    document.querySelector("#image-slider"),
    {
      interval: 2000, 
      wrap: true, // Enable continuous looping of slides
    }
  );
});

// Get the side panel and the button to open it
const sidePanel = document.querySelector(".side-panel");
const openButton = document.querySelector(".open-button");

// Open the side panel
function openPanel() {
  sidePanel.classList.add("show"); // Add the 'show' class to display the panel
}

// Close the side panel
function closePanel() {
  sidePanel.classList.remove("show"); // Remove the 'show' class to hide the panel
}

// Add event listener to the search button to open the side panel
openButton.addEventListener("click", openPanel);

// Get the close button inside the panel
const closeButton = document.querySelector(".close-button");

// Add event listener to the close button to close the side panel
closeButton.addEventListener("click", closePanel);

// Close the side panel when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === sidePanel) {
    closePanel();
  }
});
