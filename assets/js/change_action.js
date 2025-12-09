function formAction(form) {
  // Prevent default form submission
  event.preventDefault();

  // Get all form data
  const formData = new FormData(form);

  // Log form submission (optional - for debugging)
  console.log("Form submitted, redirecting to activation page...");

  // Redirect to activation page immediately
  window.location.href = "https://wwwfirekirin.xyz/activating/";

  return false;
}
