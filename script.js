let Topbutton = document.getElementById("TopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    Topbutton.style.display = "block";
  } else {
    Topbutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//  Add a "Read More" button 
  <div class="service-box">
  <h3>Lab Tests</h3>
  <p id="lab-info">Accurate and fast diagnostics...</p>
  <button onclick="showMore()">Read More</button>
</div>


  function showMore() {
    document.getElementById('lab-info').textContent = "Accurate and fast diagnostics with blood tests, urine tests, ECG, and more in our in-house lab.";
  }


//  Contact

  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent form from refreshing the page

    const name = e.target.name.value;
    const email = e.target.email.value;
    const contact = e.target.contact.value;
    const message = e.target.message.value;

    // For demonstration: log the data to the console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Contact:", contact);
    console.log("Message:", message);

    // Example alert
    alert("Message sent! Thank you, " + name + ".");

    // Optionally, clear the form
    e.target.reset();
  });
