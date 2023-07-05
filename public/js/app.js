//const { response } = require("express")



    // fetch('api.weatherstack.com/current?access_key=feb89ef3bc6d3bfb44e623e5b4575172&query=RAYACHOTI').then((response) =>{
    //     response.json().then((data) =>{
    //         if(data.error){
    //             console.log('Unable to connect to weatherstack')
    //         }else if(data.body.error) {
    //             console.log('Unable to locate location. Try another search')
    //         }else{
    //             console.log("It is currently "+body.current.temperature+" degrees out.")
    //         }

    //     })
    // })
    const search= document.querySelector('input')
    const weatherform = document.querySelector('form')
    const message0ne= document.querySelector('#message-1')
    const messagetwo= document.querySelector('#message-2')

    weatherform.addEventListener('submit', (e) => {
        e.preventDefault()
        const loc =search.value 
        message0ne.textContent="Loading..."
        messagetwo.textContent=""

        fetch('http://localhost:3000/weather?address='+loc).then((response)=>{
            response.json().then((resul)=>{
                 if(resul.error){
                    message0ne.textContent= resul.error
                 } else{
                    message0ne.textContent = resul.data
                    messagetwo.textContent = resul.loc
                 
                }
            })
        })
//
   
    })

    // fetch('http://localhost:3000/weather?address='+loc).then((response)=>{
    //     response.json().then((data)=>{
    //          if(data.error){
    //          console.log(data.error)  
    //          } else{
    //             console.log(data.address)
    //         }
    //     })
    // })





  
//         if(loc.length===0){
//             console.log("Please provide input.")
//         } else{
//             console.log(loc +"is the given input.")
//         }
    
    
// })