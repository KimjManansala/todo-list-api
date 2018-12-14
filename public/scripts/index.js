

document.addEventListener('DOMContentLoaded', init)

function init(){
    const init = document.getElementById('admin-div')
    const adminResults = document.getElementById('admin-results')






const adminButton = (evt) => {
    if(evt.target.id){
        axios.get('/api/todos/')
        .then((res) =>{
            console.log(res)
            console.log(res.data)
            console.log(typeof(res.data))

            data = JSON.stringify(res.data.userId)))
        adminResults.innerHTML = data
        console.log(adminResults)
        })
    }
}






init.addEventListener('click', adminButton)



}