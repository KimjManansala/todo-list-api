document.addEventListener('DOMContentLoaded', init)

function init() {
    const init = document.getElementById('content')
    const adminResults = document.getElementById('admin-results')
    const userIdResults = document.getElementById('userid-div')

    const adminButton = (evt) => {
            axios.get('/api/todos/')
                .then((res) => {
                    data = JSON.stringify(res.data.userId)
                    adminResults.innerHTML = data
                })
    }

    const userIdGet = (evt) =>{
            console.log(evt.target.id)
    }



    const buttons = (evt) =>{
        evt.preventDefault()
        console.log(evt.target.id)
        if (evt.target.id === 'admin') adminButton(evt)
        if(evt.target.id === 'button-user') userIdGet(evt)

    }


    init.addEventListener('click', buttons)






}