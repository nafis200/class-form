
let pass = 0
let name = ''


function nafis(id3,id4,values = 110){
    pass = id3
    name = id4
    console.log(values);
    if(pass === undefined || name === undefined){
         if(values === 110)
         {
            alert('Please register first')
         }
    }
    if(pass > 0 && name !== ''){
        const id1 = document.getElementsByClassName('pointer')
        id1[0].classList.remove('pointer')
    }

    console.log(ok);
    
}

function fun1(){
     const id3 = document.getElementById('id3').value 
     const id4 = document.getElementById('id4').value 
     const id5 = document.getElementById('id5')
     id5.innerText='hellow'
     nafis(id3,id4,0)
}