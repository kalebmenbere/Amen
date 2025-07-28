document.getElementById("profileForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const profile = {
      name: document.getElementById("fullName").value,
      dob: document.getElementById("dob").value,
      gender: document.getElementById("gender").value,
      school: document.getElementById("school").value,
      health: document.getElementById("health").value,
      guardian: document.getElementById("guardian").value,
      location: document.getElementById("location").value,
    };
  
    console.log("Saved Profile:", profile); // Replace with server-side saving logic
  
    document.getElementById("successMessage").classList.remove("hidden");
    this.reset();
  });
  