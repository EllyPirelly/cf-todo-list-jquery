# ToDo List with jQuery

### What is this about?
This ToDo List was build as a task for Achievement 1 in [Career Foundry's Full-Stack Web Development Program](https://careerfoundry.com/en/courses/become-a-web-developer/). <br>
It is a web application, build with HTML, S/CSS and jQuery. <br>

### Requirements
- jQuery is mandatory (via CDN) and will be refactored off of a given JavaScript file
- HTML to display added items will be generated dynamically, depending on amount of ToDos filled in

The ToDo List has following features:
- user can add a new item (to a list of items)
- user can cross out an item (via click, styling)
- user can delete an item (via click, styling display hidden)
- user can change the order of items (via drag and drop)

### Tools
- Visual Studio Code
- GitHub / GitHub Pages
- HTML, S/CSS, JavaScript
- SCSS optional (!)
- [jQuery via CDN](https://releases.jquery.com/)
- [Visual Studio Extension "Live Server"](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [Visual Studio Extension "Live Sass Compiler"](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass)

### How to run this?
At time of writing, there's no npm packages or a build workflow present
- clone the repo
- `cd` into project
- if on Visual Studio Code, install "Live Server" extension, go to bottom menu and click "Go Live": <br>
![Visual Studio Code Screenhot Go Live](img/screenshot-golive.png) <br>
- this is going to open the ToDo List on localhost http://127.0.0.1:5500/

### How to add Sass
- via command line, unless you already have it, run `npm install -g scss`
  - see more info here: [install Sass](https://sass-lang.com/install)
- on Visual Studio Code, install "Live Sass Compiler" extension, this will add a functionality you can comfortably reach via click on "Watch Sass": <br>
![Visual Studio Code Screenshot Live Sass Compiler](img/screenshot-watchsass.png)
  - this will run a watcher in your terminal, and will compile everything you do in your `styles.scss` into a `styles.css`