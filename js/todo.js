let input = document.getElementById('todo-input')
let addBtn = document.getElementById('add')
let counter = document.getElementById('task-count')
let display = document.getElementById('todo-list')

let count = 0;

addBtn.addEventListener('click', function () {
    //counter = input.value.length;
    //counter.textContent = (count++, "tasks remaining")

    count++ ;
    counter.textContent = (`${count} tasks remaining `);




    const li = document.createElement("li");
    li.textContent = input.value;

    display.appendChild(li);

    const undoBtn = document.createElement("button")
    undoBtn.textContent = "Undo"

    undoBtn.classList.add("complete-btn")

    document.body.appendChild(undoBtn)

    undoBtn.addEventListener('click', function(){

        li.style.textDecoration = "none" ;
        count++;
        counter.textContent = (`${count} tasks remaining `)

    })

    li.appendChild(undoBtn)



    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "delete"

    deleteBtn.classList.add("delete-btn")

    document.body.appendChild(deleteBtn)




    deleteBtn.addEventListener('click', function () {
        li.style.textDecoration = "line-through";
        
        count--;
        counter.textContent = (`${count} tasks remaining `)
        

    })

    li.appendChild(deleteBtn)


    

    

    



    input.value = "";

    
})


