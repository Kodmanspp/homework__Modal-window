const open = document.querySelector(".modal__open");
const close = document.querySelector(".modal__close"); 
const modal = document.querySelector(".modal");
function openModal(){
    modal.style.visibility = "visible";
    modal.style.opacity = 1; 
}
function closeModal(){
    modal.style.visibility = "hidden";
    modal.style.opacity = 0; 
}

open.addEventListener("click", openModal);
close.onclick = closeModal;  
 window.onclick = function(event){
     if(event.target == modal){
         closeModal();
     }
 }