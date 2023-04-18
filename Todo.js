export default class Todo {
    list = ['item 1', 'item 2']
    itemInputEl = document.getElementById('itemInput')
    btnSubmitEl = document.getElementById('btnSubmit')
    listItemsEl = document.getElementById('listItems')
    constructor(){
        this.addListeners()
        console.log('created')
    }

    addListeners(){
        this.btnSubmitEl.addEventListener('click', addItemValue)
    }
    addItemValue(){
        const value = this.itemInputEl.value
        this.list.push(value)
        updateList()
    }
    updateList(){
        this.list.forEach(item=>{
            const li = document.createElement('li')
            li.innerHTML = item
            li.addEventListener('dblclick', removeItem)
            // li.setAttribute('id', item)
            this.listItemsEl.append(li)
        })
    }


}