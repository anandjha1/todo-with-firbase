

// data binding
const list = ['item 1', 'item 2']
const itemInputEl = document.getElementById('itemInput')
const btnSubmitEl = document.getElementById('btnSubmit')
const listItemsEl = document.getElementById('listItems')

updateList()

// add Event listener
btnSubmitEl.addEventListener('click', addItemToArray)



// functions
function addItemToArray() {
    const value = itemInputEl.value
    list.push(value)
    updateList()
}


function updateList(){
    // reset list
    listItemsEl.innerHTML = ''

    list.forEach(item=>{
        const li = document.createElement('li')
        li.innerHTML = item
        li.addEventListener('dblclick', removeItem)
        // li.setAttribute('id', item)
        listItemsEl.append(li)
    })
}

function removeItem(){
    console.log('...remove called')
}