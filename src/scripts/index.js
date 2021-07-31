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
      // .classList.add("buttons");
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
      doneButton.addEventListener(
        "click",
        () => done(item)
        // newLi.classList.toggle("completed")
      );
      laterButton.addEventListener("click", () => later(item));
    })
    .join("");
};

// done Button
const done = (item) => {
  arr.splice(arr.indexOf(item), 1);
  arr.push(item);
  drawList();
};
// later button
const later = (item) => {
  arr.splice(arr.indexOf(item), 1);
  arr.push(item);
  drawList();
};
// delete Button
const del = (item) => {
  arr.splice(arr.indexOf(item), 1);
  drawList();
};
