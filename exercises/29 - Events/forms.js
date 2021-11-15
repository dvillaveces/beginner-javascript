const wes = document.querySelector(".wesbos");

wes.addEventListener("click", (event) => {
  const shouldChangePage = confirm(
    "Website might be malicious. Want to proceed?"
  );
  if (!shouldChangePage) {
    event.preventDefault();
  }
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener("submit", function (event) {
  const name = event.currentTarget.name.value;
  if (name.toLowerCase().includes('chad')) {
    alert("Sorry bro");
    event.preventDefault();
  }
  console.log(event.currentTarget.name.value);
  console.log(event.currentTarget.email.value);
  console.log(event.currentTarget.agree.checked);
});
