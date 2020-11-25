//JS code for ToDO App



var listOfActivities = []   

// Create an array named list to store our to-do activities

var input = document.getElementById("input") 

// Create a DOM variable  named input to get the to-do activities added from HTML form

var todolist = document.getElementById("todolist")

//Create a DOM variable todolist ul tag (unordered list)

document.getElementById("button").onclick = click;

//Using onlclick to run the click function when button is clicked.





// Adding a to-do activity

  function click() { // function -> click()

    listOfActivities.push(input.value)
    
    console.log(listOfActivities);

    //Using push array operation to add the input todo activity to the list created earlier.

    input.value="" 

    // Giving Empty string to input value after pushing it to array

    showList()

    // Calling a function showList() to display the todo activities present in the list after addding new element

}







// function -> showList()

function showList(){

  //Using innerHTML DOM property to set HTML , giving empty string initially

  todolist.innerHTML = " "

  //To display each to-do activity from the list using innerHTML property.


   

 
   
   
   listOfActivities.forEach( function(n,i) {

   todolist.innerHTML += ("<li>"+n+
                          
  "<a onclick='editItem("+i+")'>Edit</a>"+
                          
   "<a onclick='deleteItem("+i+")'>&times | </a></li>")

  } )
   
   
} 

 /*

}*/





//Deleting an activity

function deleteItem(i){

  // Using splice array operations to remove one item at specified index

listOfActivities.splice(i,1)

  // Display the todo list

showList()

}




//Editing an activity

function editItem(i) {

  //Using prompt to get the new value of the activty after editing

    var newValue = prompt("Please insert your new value")

    // Using splice array operation to remove the previous activity and add the new activity

    listOfActivities.splice(i,1,newValue)

  //Display the list

   showList()
}
