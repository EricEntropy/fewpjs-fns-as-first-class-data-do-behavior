/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time) {
  let hourArray = time.split(":")
  let hour = parseInt(hourArray)

  if (hour < 12){
    return "Good Morning";
  }
  else if (hour >= 12 && hour <= 17){
    return "Good Afternoon";
  }
  else if (hour > 17){ 
    return "Good Evening";
  }
}

function displayMessage(msg) {
  const content = document.getElementById("greeting");
  content.innerHTML = msg
}