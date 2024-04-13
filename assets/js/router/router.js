function setRouter() {
  switch (window.location.pathname) {
    // If you are logged in you cant access outside pages; redirect to dashboard
    case "/frontend-web":
    case "/frontend-web/login.html":
    case "/frontend-web/register.html":
      if (localStorage.getItem("token")) {
        window.location.pathname = "/frontend-web/dashboard.html";
      }
      break;

    // If you are not logged in you cant access dashboard pages; redirect to /
    case "/frontend-web/dashboard.html":
    // case "/frontend-web/presentation.html":
    // case "/frontend-web/slides.html":
      if (!localStorage.getItem("token")) {
        window.location.pathname = "/frontend-web/";
      }
      break;

    // For Admin Users only; redirect to /dashboard
    case "/users.html":
      if (localStorage.getItem("role") != "Admin") {
        window.location.pathname = "/frontend-web/dashboard.html";
      }
      break;

    default:
      break;
  }
}

export { setRouter };