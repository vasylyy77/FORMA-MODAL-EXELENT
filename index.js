//https://github.com/RobinHerbots/Inputmask
//https://www.youtube.com/watch?v=EPXabErmGrQ&t=1008s

const wrap = document.querySelector('.wrup-modal')
const open = document.querySelector('.open')
const clouse = document.querySelector('.clouse')
const span = document.querySelector('.modal__titl-span')






const url = 'https://jsonplaceholder.typicode.com/todos'
const ruleses = {
                  email: {required: true,email: true},
                  text: {required: true}
                }


    let formValidate = function (selector,rules){
    new JustValidate(selector, {
        rules: rules,
        submitHandler: function (form){
            const formData = new FormData(form)
            const data = Object.fromEntries(formData.entries())
            console.log(data)
            sendData(url,data)
            modalopen()
        },
       
    })
      }

      const sendData = async (url,data)=>{
        const set =  await fetch(url,{
            method:'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
           console.log(set)
        return await set
     }

    
      formValidate('#form1',ruleses)







      const modalopen = ()=>{
       wrap.style.display = 'block'
       open.addEventListener('click', ()=>{
        wrap.style.display = 'none'
       })
       clouse.addEventListener('click', ()=>{
        wrap.style.display = 'none'
       })
       span.addEventListener('click', ()=>{
        wrap.style.display = 'none'
       })
       

    }

   