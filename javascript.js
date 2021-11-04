window.onscroll= function() {scrollFunction()};
function scrollFunction(){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
    {
        document.getElementById("navbar").style.backgroundColor="black";
        document.getElementById("navbar-mobile").style.backgroundColor="black";
    }
    else 
    {
        document.getElementById("navbar").style.background="none";
        document.getElementById("navbar-mobile").style.background="none";
    }
}