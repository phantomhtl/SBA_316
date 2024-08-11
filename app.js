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
    // Check if start date is later than end date
    if (startDate > endDate) {
      alert("Start date cannot be later than the end date.");
    } else if (destinationName && destinationStart && destinationEnd) {
      addDestination(destinationName, destinationStart, destinationEnd);
      form.reset();
    }
  });

  function addDestination(name, startDate, endDate) {
    const li = document.createElement("li");
    li.textContent = `${name} - Start: ${startDate} | End: ${endDate}`;

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.classList.add("complete-btn");
    completeBtn.addEventListener("click", () => {
      li.classList.toggle("completed");
    });
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    destinationList.appendChild(li);
  }
});
