const create = () => {
  // creation
  const newElement = document.createElement("div");
  const newText = document.createTextNode("Catha fetzt");
  // injection (text into div > div into document)
  // div                // text
  newElement.appendChild(newText);
  document.body.appendChild(newElement);
};
const arr = [];
const add2List = () => {
  let userData = document.querySelector("#userData").value;
  //   console.log(userData);
  if (userData != "") {
    let newLi = document.createElement("li");
    let text = document.createTextNode(userData);
    newLi.appendChild(text);
    // newLi.style.color = colorGen();
    document.querySelector(".result").appendChild(newLi);
    document.querySelector("#userData").value = "";
    const listItems = document.querySelectorAll("li");
    listItems.forEach((item) => {
      //   item.style.color = colorGen();
      // console.log(listItems);
    });
    const newContainer = document.createElement("div");
    const doneButton = document.createElement("button");
    const skipButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    newContainer.appendChild(doneButton);
    newContainer.appendChild(skipButton);
    newContainer.appendChild(deleteButton);
    newLi.appendChild(newContainer);

    // CHECKBOX
    // const checkBox = document.createElement("input");
    // checkBox.type = "checkbox";
    // newContainer.appendChild(checkBox);

    doneButton.innerHTML = "Did it";
    skipButton.innerHTML = "Skip it";
    deleteButton.innerHTML = "Forget it ";

    const check = () => {
      newLi.classList.innerHTML.toggle("completed");
    };
    const skip = () => {
      newLi.remove();
    };
    const del = () => {
      newLi.remove();
    };

    doneButton.addEventListener("click", check);
    skipButton.addEventListener("click", skip);
    deleteButton.addEventListener("click", del);
    doneButton.classList.add("done");
    skipButton.classList.add("skip");
    deleteButton.classList.add("del");
    newContainer.classList.add("buttons");
  } else {
    document.querySelector("#userData").placeholder = "Type something first!";
  }
};

// const colorGen = () => {
//   let result = "#";
//   let colorCode = "1234567890ABCDEF";
//   for (let i = 0; i < 6; i++) {
//     result += colorCode[Math.floor(Math.random() * 16)];
//   }
//   return result;
// };

const keyCheck = (event) => {
  if (event.key == "Enter") add2List();
};

const userInput = document.querySelector("#userData");
userInput.addEventListener("keypress", keyCheck);
