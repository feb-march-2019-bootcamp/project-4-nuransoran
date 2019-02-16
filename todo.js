var Task = document.querySelector('#in');
var listul = document.querySelector(".list ul");
var secondul =  document.querySelector(".second ul");
var completeTask = function(){
  
  var listItem = this.parentNode;
  var deleteBtn = document.createElement("button"); 
  deleteBtn.innerText ="Delete"; 
  deleteBtn.className = "delete";
  listItem.appendChild(deleteBtn);
  var checkBox = listItem.querySelector("input[type=checkbox]");
  checkBox.remove();
  secondul.appendChild(listItem); 
  bindCompleteItems(listItem, deleteTask);
  
}
var deleteTask = function(){

  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  
  ul.removeChild(listItem);
  
}
var bindIncompleteItems = function(taskItem, checkBoxClick){  

  var checkBox = taskItem.querySelector("input[type=checkbox]");
  checkBox.onchange = checkBoxClick;  
}
var bindCompleteItems = function(taskItem, deleteButtonPress){
 
  var deleteButton = taskItem.querySelector(".delete");
   
  deleteButton.onclick = deleteButtonPress;
    
}
for(var i=0; i < listul.children.length; i++) {
  bindIncompleteItems(listul.children[i], completeTask);
}

for(var i=0; i < secondul.children.length; i++) {
  bindCompleteItems(secondul.children[i], deleteTask);
}

