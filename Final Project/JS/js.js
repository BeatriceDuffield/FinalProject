document.addEventListener('DOMContentLoaded', (loaded) =>{

    document.getElementById("GlobalHeader").innerHTML =
    "<div>" +
        "<img src=img/logo.png alt='Shark.com logo taken from the web'>"+
        "<!--Nice little logo I found online -->"+
    "</div>"+
    "<nav>"+
        "<menu>"+
            "<li><a href='index.html'>Home</a></li>"+
            "<li><a href='about.html'>About</a></li>"+
            "<li><a href='contact.html'>Contact</a></li>"+
            "<li><a href='shop.html'>Store</a></li>"+
            "<li><a href='great.html'>Great White Shark</a></li>"+
            "<li><a href='goblin.html'>Goblin Shark</a></li>"+
            "<li><a href='Tiger.html'>Tiger Shark</a></li>"+
            "<!--All of our different pages -->"+
        "</menu>"+
    "</nav>";
    document.getElementById("GlobalFooter").innerHTML =
    "<div>"+
        "<p>For more information please contact us at our email:Sharks@email.com</p>"+
        "<p>Phone Number is 505-503-4455 </p>"+
    "</div>"+
    "<div>"+
        "<p>Copyright to Sharks incorporated, 2024</p>"+
        "<p>Sharks.com can not be held responsible for any shark attacks.</p>"+
    "</div>";
});