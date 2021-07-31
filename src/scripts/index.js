// const create = () => {
//   // creation
//   const newElement = document.createElement("div");
//   const newText = document.createTextNode("Catha fetzt");
//   // injection (text into div > div into document)
//   // div                // text
//   newElement.appendChild(newText);
//   document.body.appendChild(newElement);
// };
// const arr = [];
// const add2List = () => {
//   let userData = document.querySelector("#userData").value;
//   //   console.log(userData);
//   if (userData != "") {
//     let newLi = document.createElement("li");
//     let text = document.createTextNode(userData);
//     newLi.appendChild(text);
//     // newLi.style.color = colorGen();
//     document.querySelector(".result").appendChild(newLi);
//     document.querySelector("#userData").value = "";
//     const listItems = document.querySelectorAll("li");
//     listItems.forEach((item) => {
//       //   item.style.color = colorGen();
//       // console.log(listItems);
//     });
//     const newContainer = document.createElement("div");
//     const doneButton = document.createElement("button");
//     const skipButton = document.createElement("button");
//     const deleteButton = document.createElement("button");

//     newContainer.appendChild(doneButton);
//     newContainer.appendChild(skipButton);
//     newContainer.appendChild(deleteButton);
//     newLi.appendChild(newContainer);

//     // CHECKBOX
//     // const checkBox = document.createElement("input");
//     // checkBox.type = "checkbox";
//     // newContainer.appendChild(checkBox);

//     doneButton.innerHTML = "Did it";
//     skipButton.innerHTML = "Skip it";
//     deleteButton.innerHTML = "Forget it ";

//     const check = () => {
//       newLi.classList.innerHTML.toggle("completed");
//     };
//     const skip = () => {
//       newLi.remove();
//     };
//     const del = () => {
//       newLi.remove();
//     };

//     doneButton.addEventListener("click", check);
//     skipButton.addEventListener("click", skip);
//     deleteButton.addEventListener("click", del);
//     doneButton.classList.add("done");
//     skipButton.classList.add("skip");
//     deleteButton.classList.add("del");
//     newContainer.classList.add("buttons");
//   } else {
//     document.querySelector("#userData").placeholder = "Type something first!";
//   }
// };

// // const colorGen = () => {
// //   let result = "#";
// //   let colorCode = "1234567890ABCDEF";
// //   for (let i = 0; i < 6; i++) {
// //     result += colorCode[Math.floor(Math.random() * 16)];
// //   }
// //   return result;
// // };

// const keyCheck = (event) => {
//   if (event.key == "Enter") add2List();
// };

// const userInput = document.querySelector("#userData");
// userInput.addEventListener("keypress", keyCheck);

//--------------------Hadis skip Button

const arr = [];
const add2List = (e) => {
  // Preventing the from sending information out aka Reloading the page
  e.preventDefault();
  let userData = document.querySelector("#userData").value;
  arr.unshift(userData);
  // Checking my input if it has a text
  if (userData != "") {
    drawList();
    document.querySelector("#userData").value = "";
  } else {
    document.querySelector("#userData").placeholder = "Type something first";
  }
};
// Random colour generator in hexa number
const colorGen = () => {
  let result = "#";
  let colorCode = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    result += colorCode[Math.floor(Math.random() * 16)];
  }
  return result;
};

// Adding event listener to the form
document.querySelector("form").addEventListener("submit", add2List);
const drawList = () => {
  document.querySelector(".result").innerHTML = "";
  arr
    .map((item) => {
      const newLi = document.createElement("li");
      const newContainer = document.createElement("div");
      const doneButton = document.createElement("button");
      const laterButton = document.createElement("button");
      const deleteButton = document.createElement("button");

      const text = document.createTextNode(item);
      newLi.appendChild(text);
      // newLi.style.color = colorGen();
      document.querySelector(".result").appendChild(newLi);
      doneButton.innerHTML = "Did it";
      laterButton.innerHTML = "Skip it";
      deleteButton.innerHTML = "Forget it";

      newContainer.appendChild(doneButton);
      newContainer.appendChild(laterButton);
      newContainer.appendChild(deleteButton);

      doneButton.classList.add("done");
      laterButton.classList.add("later");
      deleteButton.classList.add("del");
      newLi.appendChild(newContainer);
      deleteButton.addEventListener("click", () => del(item));
      doneButton.addEventListener("click", () =>
        newLi.classList.toggle("completed")
      );
      laterButton.addEventListener("click", () => later(item));
    })
    .join("");
};

const del = (item) => {
  arr.splice(arr.indexOf(item), 1);
  drawList();
};

const later = (item) => {
  arr.splice(arr.indexOf(item), 1);
  arr.push(item);
  drawList();
};
