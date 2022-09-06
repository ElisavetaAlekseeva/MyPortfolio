// NAVBAR
window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

// ABOUT, TEXT REVEAL
var height = document.getElementById('about');
window.addEventListener('scroll', reveal)
console.log(height.clientHeight);


function reveal() {
    var reveals = document.querySelectorAll('.reveal')

    for(var i = 0; i < reveals.length; i++){
        var windowheight = height.clientHeight
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 50;

        console.log(revealtop);
        console.log(height.clientHeight);
        console.log(revealpoint);


        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

// SKILLS, FOLOOW MOUSE


document.addEventListener('mousemove', function(e){
    var cursor = document.getElementById('hidden-html');
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + 'px';
    cursor.style.top = y-1 + 'px';
})


document.addEventListener('mousemove', function(e){
    var cursor = document.getElementById('hidden-javascript');
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + 'px';
    cursor.style.top = y-1 + 'px';
})


document.addEventListener('mousemove', function(e){
    var cursor = document.getElementById('hidden-python');
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + 'px';
    cursor.style.top = y-1 + 'px';
})


document.addEventListener('mousemove', function(e){
    var cursor = document.getElementById('hidden-oop');
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + 'px';
    cursor.style.top = y-1 + 'px';
})


document.addEventListener('mousemove', function(e){
    var cursor = document.getElementById('hidden-sql');
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + 'px';
    cursor.style.top = y-1 + 'px';
})


document.addEventListener('mousemove', function(e){
    var cursor = document.getElementById('hidden-django');
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + 'px';
    cursor.style.top = y-1 + 'px';
})
