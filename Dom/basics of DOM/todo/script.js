
let globalIndex = 0;


function createChild(title, desc){
    const child = document.createElement("div");
    child.setAttribute("class", "outer")
    const firstChild = document.createElement("div"); 
    firstChild.innerHTML = title;
    firstChild.setAttribute("class", "output-title");
    const secondChild = document.createElement("div"); 
    secondChild. innerHTML = desc;
    secondChild.setAttribute("class", "output-description")
    const thirdChild = document.createElement("button");
    thirdChild.innerHTML = "Mark as read";
    thirdChild.setAttribute("onclick", `markAsDone(${globalIndex})`)

    child.appendChild(firstChild);
    child.appendChild(secondChild);
    child.appendChild(thirdChild);

    child.setAttribute("id", globalIndex);
    return child;
}


function addTodos(){
    const title = document.getElementById("title").value;
    const desc = document.getElementById("description").value;

    const parent = document.getElementById("todo-outputs");
    parent.appendChild(createChild(title,desc,globalIndex++));

}

function markAsDone(id){
    const target = document.getElementById(id);
    target.children[2].innerHTML = "Done!";
}