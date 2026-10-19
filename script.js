
window.showAuthScreen = function (screenId) {
  const screenIds = [
    "roles",
    "customerLogin",
    "customerSignup",
    "adminLogin",
    "customerDashboard",
    "adminDashboard"
  ];

  screenIds.forEach(id => {
    const element = document.getElementById(id);

    if (element) {
      element.hidden = id !== screenId;
    }
  });

  document.querySelectorAll(".message").forEach(element => {
    element.textContent = "";
    element.classList.remove("success", "error");
  });
};

