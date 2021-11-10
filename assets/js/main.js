import Navbar from "./navbar.js";

const createApp = options => {
        const app = Vue.createApp(options)
        app.config.compilerOptions.delimiters = ['[[', ']]']
        return app
};

const navBarApp = createApp(Navbar).mount("#NavBar");
