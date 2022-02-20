function main() {
    sidebar_i = 0;
    menu_i = 0;
    console.log("Page loaded successfully")
}

function mobile_scale() {
    console.log("Scaling to mobile screen if necessary...")
        if (navigator.userAgent.match(/Android/i)
                || navigator.userAgent.match(/webOS/i)
                || navigator.userAgent.match(/iPhone/i) 
                || navigator.userAgent.match(/iPad/i) 
                || navigator.userAgent.match(/iPod/i)
                || navigator.userAgent.match(/BlackBerry/i)
                || navigator.userAgent.match(/Windows Phone/i)) {

            var element = document.getElementById("mobile_navbar");
            element.setAttribute("style", "display: inline;");
            console.log("Content scaled")
            }
        else {
            var element = document.getElementById("navbar");
            element.setAttribute("style", "display: inline-block;");
            console.log("Didn't scale content")
        }
}

function sidebar_action() {
    if (sidebar_i == 0) {
        var element = document.getElementById("sidebar");
        element.setAttribute("style", "width: 225px");
        var element = document.getElementById("sidebar_content");
        element.setAttribute("style", "width: 225px");
        sidebar_i = 1;
        console.log("Expanded sidebar")
    }
    else {
        var element = document.getElementById("sidebar");
        element.setAttribute("style", "width: 0");
        var element = document.getElementById("sidebar_content");
        element.setAttribute("style", "width: 0");
        sidebar_i = 0;
        console.log("Collapsed sidebar")
    }
}

function collapse_random_area_sidebar() {
    if (sidebar_i == 1) {
        var element = document.getElementById("sidebar");
        element.setAttribute("style", "width: 0")
        var element = document.getElementById("sidebar_content");
        element.setAttribute("style", "width: 0");
        sidebar_i = 0;
        console.log("Collapsed sidebar")

        
    }
    else {
        console.log("Random area pressed, nothing to collapse")
    }
}

function menu_action() {
    if (menu_i == 0) {
        var element1 = document.getElementById("menu");
        element1.setAttribute("style", "display: block");
        var element = document.getElementById("menu_content");
        element.setAttribute("style", "display: block");
        var element = document.getElementById("banner_hidable");
        element.setAttribute("style", "display: none");
        var element = null
        menu_i = 1;
        window.scrollTo({top: 0, behavior: 'smooth'});
        console.log("Expanded menu")
    }
    else {
        var element = document.getElementById("menu");
        element.setAttribute("style", "display: none");
        var element = document.getElementById("menu_content");
        element.setAttribute("style", "display: none");
        var element = document.getElementById("banner_hidable");
        element.setAttribute("style", "display: block");
        menu_i = 0;
        console.log("Collapsed menu")
    }
}
