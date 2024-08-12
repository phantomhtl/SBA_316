document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("destination-form");
  const destinationList = document.querySelector("#destination-list");


  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const destinationName = document.getElementById("destination-name").value;
    const destinationStart = document.getElementById("destination-start").value;
    const destinationEnd = document.getElementById("destination-end").value;
    // Check to see if there is characters in the input
    const pattern = /[a-zA-Z]/;
    if (!pattern.test(destinationName)) {
      alert("Destination name must include at least two characters.");
      return;
    }

    // Convert dates to Date objects for comparison
    const startDate = new Date(destinationStart);
    const endDate = new Date(destinationEnd);
    if (startDate > endDate) {
      alert("Start date cannot be later than the end date.");
    } else if (destinationName && destinationStart && destinationEnd) {
      addDestination(destinationName, destinationStart, destinationEnd);
      form.reset();
      updateMessage();
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
      li.style.border = "2px solid green";
    });
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
      if (window.confirm("Are you sure you want to delete this destination?")) {
        li.remove();
        updateMessage();
      }
    });
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    destinationList.appendChild(li);
  }

  function updateMessage() {
    const message = document.getElementById("message");
    const totalDestinations = destinationList.children.length;
    if (totalDestinations == 1) {
      message.textContent = `You have 1 destination planned.`;
    } else {
      message.textContent = `You have ${totalDestinations} destinations planned.`;
    }
  }
});
