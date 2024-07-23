// Global variable to keep track of the element being edited
let CurrentElement = null;
function TODO() {
  var todo = document.getElementById("todo").value;
  if (todo == "") {
    document.getElementById(
      "wrong"
    ).innerHTML = `<strong>Please input the values</strong>`;
  } else {
    document.getElementById("wrong").innerHTML = ``;
    if (CurrentElement) {
      CurrentElement.querySelector("p").innerText = todo;
      CurrentElement = null;
      var todo = (document.getElementById("todo").value = "");
    } else {
      var description = `<div class="box d-flex mx-auto justify-content-center align-item-center">
<p class="py-1 text-start fs-3 w-100 h-75">${todo}  </p>
<button class=" fw-bold btn btn-success my-2 me-2 h-75"onclick="edited(this)">EDIT</button>  
<button class="fw-bold  btn btn-danger my-2 h-75" onclick="Delete(this)">REMOVE</button>  
        </div>`;
      document.getElementById("rs").innerHTML += description;
      var todo = (document.getElementById("todo").value = "");
    }
  }
}
function Delete(element) {
  element = element.parentElement;
  // console.log(element);
  element.remove();
  var todo = (document.getElementById("todo").value = "");

  // we use (this) in function to get location of the element
  //  and find the element that we went to delete
}
function edited(element) {
  CurrentElement = element.parentElement;
  // it track the location of the tage that has value we went to update
  //   console.log(CurrentElement);
  var text = CurrentElement.querySelector("p").innerText;
  // Retrieve the text of the <p> inside CurrentElement
  //   console.log(text);
  document.getElementById("todo").value = text;
  // Set the value of the input field to the text from the
}
