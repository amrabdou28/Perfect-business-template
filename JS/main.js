
const searchDiv = document.querySelector(".line-serch");
const searchIcon = document.querySelector(".fa-search");
const hideDiv = document.querySelector("#hiden");
const backToTopButton = document.querySelector("#back-to-top");


//  show div line-serch when click on serch icone 
searchIcon.addEventListener("click" , searchDivUn);
function searchDivUn(){       
    searchDiv.style.display = "block";
    
};
//  hide div line-serch when click on serch icone 

hideDiv.addEventListener("click" , hideDivUn);
function hideDivUn () {    
    searchDiv.style.display = "none";    
}

/*  when scroll the  page the button show when margin-top= 600px
    and back to  top when you click on it  
*/
window.addEventListener("scroll",scrollFunction);
function scrollFunction() {
    if(window.pageYOffset> 600) {
        backToTopButton.style.display = "block";
    }
    else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.addEventListener( "click" , backToTop);
function backToTop() {
    window.scrollTo(0,0);
};