

// data binding
const list = ['item 1', 'item 2']
const itemInputEl = document.getElementById('itemInput')
const btnSubmitEl = document.getElementById('btnSubmit')
const listItemsEl = document.getElementById('listItems')

renderList()

// add Event listener
btnSubmitEl.addEventListener('click', addItemToArray)



// functions
function addItemToArray() {
    const value = itemInputEl.value
    resetField()

    list.push(value)
    renderList()
}


function renderList(){
    // reset list
    listItemsEl.innerHTML = ''

    list.forEach((item, i)=>{
        const li = document.createElement('li')
        li.innerHTML = item
        li.addEventListener('dblclick', removeItem)
        li.setAttribute('value', i)
        // li.setAttribute('id', item)
        listItemsEl.append(li)
    })
}

function removeItem(event){
    const item = event.target
    list.splice(item.value, 1)
    renderList()
}

function resetField(){
    itemInputEl.value = ''
}
