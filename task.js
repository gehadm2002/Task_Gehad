const Input = document.getElementById('item')
const addBtn = document.getElementById('Add');
const Divitem = document.querySelector('text')



addBtn.onclick = function () {
    console.log("clicked");
   const parent = document.getElementById("text")
    const item = document.createElement('p');
    item.textContent= Input.value;
    parent.append(item)
    parent.appendChild(item);
   
    Input.value = "";

}