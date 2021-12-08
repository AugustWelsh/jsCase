//hämta info från html
var addToDoButton = document.getElementById('addToDo');
var clearToDo = document.getElementById('clearToDo')

//spela ljud när man lägger till en task
var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 
//clear button
function removeAll(){
  document.getElementById("toDoContainer").innerHTML = "";
}

//lägga till click funktion, så att när jag clickar så skapas en ny li
addToDoButton.addEventListener('click', function(){
  var list = document.createElement('li');
  

  //lägg till styling på p
  list.classList.add('list-styling');
  list.innerText = inputField.value;
  toDoContainer.appendChild(list);
  inputField.value = "";
  list.addEventListener('click', function(){
      list.style.textDecoration = "underline";
      
  })
  //gör li-text röd genom att clicka på texten
  list.addEventListener('click', function(){
    list.style.color = "Red";
    
  })
  //dubble clicka för att ta bort li
  list.addEventListener('dblclick', function(){
      toDoContainer.removeChild(list);
      
      
  })
      

})