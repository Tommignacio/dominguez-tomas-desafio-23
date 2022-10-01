'use strict'
const os = use('os');

class WebsiteController {
  async renderSesions({ view, auth, response }) {
    try {
      await auth.getUser();
      return response.redirect("/website");
    } catch (error) {
      return view.render("login");
    }
  }
  async renderHome({ view, auth }) {
    const { email } = await auth.getUser();
    return view.render("home", { nombre: email });
  }
  async renderInfo({ view }) {
    return view.render("info", {
      platformName: process.platform, 
      versionNode: process.version, 
      rss: process.memoryUsage().rss, 
      path: `"${process.argv[0]}"`,
      processId: process.pid, 
      projectFolder: `"${process.cwd()}"`,
      numOfProcessors: os.cpus().length
    });
    
  }
  async renderLogout({ view, auth }) {
    const { firstname, lastname } = await auth.getUser();
    await auth.logout();
    return view.render("logout", { nombre: `${firstname} ${lastname}` });
  }
  async renderError({ view, request }) {
    const url = request.url();
    const message = `USER ERROR ${url == "/register-error" ? "SIGNUP" : "LOGIN"}`;
    return view.render("error-session", { title: url, message });
  }
}

module.exports = WebsiteController
