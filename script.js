var popupoverlay = document.querySelector(".pop-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopup = document.getElementById("add-popup-button");

addpopup.addEventListener("click",function()
{
    popupoverlay.style.display="block";
    popupbox.style.display="block";
})

var cancelButton = document.getElementById("cancel");

cancelButton.addEventListener("click",function(event)
{
    event.preventDefault();
    popupoverlay.style.display="none";
    popupbox.style.display="none";

})
var container = document.querySelector(".container");
var addbook = document.getElementById("Add-Book");
var booktitle = document.getElementById("Book-title");
var author = document.getElementById("Book-author");
var bookdesc = document.getElementById("Book-desc");

addbook.addEventListener("click",function(event)
{
    event.preventDefault()
    var div = document.createElement("div");
    div.setAttribute("class","book-container");
    div.innerHTML=`<h2>${booktitle.value}</h2>
            <h5>${author.value}</h5>
            <p>${bookdesc.value}</p><br>
            <button onclick="deleteitem(event)">Delete</button>`
    container.append(div);
    popupoverlay.style.display="none";
    popupbox.style.display="none";


})

function deleteitem(event){
    event.target.parentElement.remove();
}
