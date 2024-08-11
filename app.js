document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("destination-form");
  const destinationList = document.getElementById("destination-list");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const destinationName = document.getElementById("destination-name").value;
    const destinationStart = document.getElementById("destination-start").value;
    const destinationEnd = document.getElementById("destination-end").value;
    // Convert dates to Date objects for comparison
    const startDate = new Date(destinationStart);
    const endDate = new Date(destinationEnd);

  });

  function addDestination(name, startDate, endDate) {

  }
});
