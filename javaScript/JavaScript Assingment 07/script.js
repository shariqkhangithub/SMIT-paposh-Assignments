const addBtn = document.querySelector("#add-task");
const list = document.querySelector(".list");
const searchInput = document.querySelector("#searchInput")

let editindex = null
addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const input = document.querySelector("#input");
    const items = list.children
    if (editindex !== null) {
        const li = items[editindex]
        li.textContent = input.value.trim();
        const spanC = document.createElement("span");
        spanC.classList.add("checkbox");
        const spanD = document.createElement("span");
        spanD.classList.add("delete");
        const spanE = document.createElement("span")
        spanE.innerHTML = `<i class="fa-solid fa-pen"></i>`
        spanE.classList.add("edit");
        
        

        const spanM = document.createElement("span")
        spanC.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        spanD.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
        li.innerHTML = input.value;
        spanM.appendChild(spanE)
        spanM.appendChild(spanC);
        spanM.appendChild(spanD);
        li.appendChild(spanM)
        addBtn.innerHTML = "ADD Todo"
        editindex = null
        input.value = ""
        
    }else{

        const input = document.querySelector("#input");
        if (input.value === "") {
            alert("Please Write Some Task");
    } else {
        const li = document.createElement("li");
        const spanC = document.createElement("span");
        spanC.classList.add("checkbox");
        const spanD = document.createElement("span");
        spanD.classList.add("delete");
        const spanE = document.createElement("span")
        spanE.innerHTML = `<i class="fa-solid fa-pen"></i>`
        spanE.classList.add("edit");
        

        const spanM = document.createElement("span")
        spanC.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        spanD.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
        li.innerHTML = input.value.trim();
        spanM.appendChild(spanE)
        spanM.appendChild(spanC);
        spanM.appendChild(spanD);
        li.appendChild(spanM)
        list.appendChild(li);
        input.value = "";
        
    }
}
});

list.addEventListener("click", (e) => {
    if (e.target.parentElement.classList.contains("delete")) {
        e.target.parentElement.parentElement.parentElement.remove();
        
    }
    
    else if (e.target.parentElement.classList.contains("checkbox")) {
        e.target.parentElement.parentElement.parentElement.classList.toggle("checked");
        
    }
    else if (e.target.parentElement.classList.contains("edit")) {
        const text = e.target.parentElement.parentElement.parentElement.textContent;
        const input = document.querySelector("#input")
        input.value = text
        addBtn.innerHTML = " Edit Todo"
        const item = list.children
        for(let i =0 ;i < item.length; i++){
            if (item[i].textContent === text) {
                editindex = i
                
                
                
            }
            
        }
        
    }
});

searchInput.addEventListener("keyup",()=>{
    const items = list.children
    const text = searchInput.value.trim();
    for(let i = 0;  i < items.length; i++){
        const item = items[i]
        const isMatch = item.textContent.includes(text)
        if (!isMatch) {
            item.classList.add("filtered")
        }else{
            item.classList.remove("filtered")
        }
        
    }
    
    
})

