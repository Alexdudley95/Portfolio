var flag = false;

const observer = new IntersectionObserver((enteries) => {
    //for each item in the list we are checking if they are on screen
    enteries.forEach((entry) => {
        if(entry.isIntersecting){
            //here we selecting the specific html item and adding a custom class
            entry.target.classList.add("in-view")
            entry.target.classList.remove("not-in-view")
        }else{
            entry.target.classList.add("not-in-view")
            entry.target.classList.remove("in-view")

        }
    })
}, {
    // we can check around the page to fade in with rootMargin
    rootMargin: "0px",
    // how much of the item is in view? 
    threshold: [0, 0.1, 1]
})


const tags = document.querySelectorAll('p, img, .card')

tags.forEach((tag) => {
    observer.observe(tag);
});

function darkMode(){
    var body = document.body;
    body.classList.toggle("dark-mode");
    if(flag){
        $(".card").css("background-color", "#c5c5c5");
        flag = false;
    }else{
        $(".card").css( "background-color", "#747677");
        flag = true;
    }
}
