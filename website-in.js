//navigation bar
var lastScrollTop = 0;
var navbar = document.getElementById("navbar");
var contSimplebar = document.querySelector(".cont-simplebar");

contSimplebar.addEventListener("scroll", function () {
    var scrollTop = contSimplebar.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-15%";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;


    document.getElementById("Brand").style.top = "auto";
});

//cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 1)
})

//About Me Tabs
const tabs = document.querySelectorAll('.tab_btn');
const allContent = document.querySelectorAll('.content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-target');

        // Toggle 'hidden' class for the clicked content
        allContent.forEach(content => {
            if (content.id === target) {
                content.classList.toggle('hidden');
            } else {
                content.classList.add('hidden');
            }
        });

        // Remove 'active' class from all tabs
        tabs.forEach(t => t.classList.remove('active'));

        // Add 'active' class to the clicked tab if content is visible
        if (!document.getElementById(target).classList.contains('hidden')) {
            tab.classList.add('active');
        }
    });
});


