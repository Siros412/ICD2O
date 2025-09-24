document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("searchBtn");
  const clearBtn = document.getElementById("clearBtn");
  const searchInput = document.getElementById("searchInput");

  // Search button opens Google
  searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
      const url = `https://www.google.com/search?q=Miami+${encodeURIComponent(query)}`;
      window.open(url, "_blank");
    } else {
      alert("Please enter an attraction to search.");
    }
  });

  // Clear button empties the text field
  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchInput.focus();
  });
});
