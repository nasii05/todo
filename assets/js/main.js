
let form =  document.querySelector('#form-id')
let favorbtn = document.querySelector('#favourites')
let reset = document.querySelector('#reset')
let Input = document.querySelector("#name")
let ul = document.querySelector("#ul-id")
let list = document.querySelector('#list')
let listdiv = document.querySelector('#listdiv')
const btn =  document.querySelector('.btn')
let favpara = document.querySelector('#favpara')
let dltfav = document.createElement('button')
let fav = [{}]
// let favourites=[{}]

btn.addEventListener("click",(e)=>{

    e.preventDefault();
     const li = document.createElement('li');
     const div =  document.createElement('div');
     const delbtn =  document.createElement('button');
     const favbtn = document.createElement('button');
     const done = document.createElement('button')
     const h1 = document.createElement('h1')
// div.innerHTML = `${Input.value}`\
div.id="itemdiv"
div.appendChild(h1)
h1.innerText= `${Input.value}`
h1.id="items"
delbtn.innerHTML = "🚫"
delbtn.id="delete"
div.appendChild(h1)
div.appendChild(delbtn)
li.appendChild(div)
ul.appendChild(li)
favbtn.innerHTML = "❤️️"
favbtn.id="favbutton"
div.appendChild(favbtn)
done.innerHTML = "✔"
done.id = "doneit"
div.appendChild(done)
            //adding list as objects

let p ={
new:h1.innerText,
fav:false

}
fav.push(p)
Input.value=""
// console.log(fav)


                //add the delete btn

delbtn.addEventListener("click" , ()=>{
    li.remove()
    // fav.pop()
    // console.log(fav)

    for(i in fav){
        if(fav[i].new ==  li.innerText){
            delete fav[i]
            console.log(fav)
        }
    }
})

favbtn.addEventListener('click',(e)=>{
    // e.preventDefault()
    // favourites.push(h1.innerText)
    // // console.log(h1.innerText)
    // console.log(favourites)
    alert("item added to favourites")
    for(i in fav){
        if(fav[i].new == h1.innerText){
            fav[i].fav=true


        }
    }
    console.log(fav)
})

done.addEventListener('click',(evt)=>{
    h1.style.textDecoration="line-through"
    alert("task done! ❤️")
})


})


favorbtn.addEventListener('click',(e)=>{
    e.preventDefault()
    const s = fav.filter(a =>{
        return a.fav==true
    })
    console.log(s)
    s.forEach(e=>{
    //   favpara.innerText += e.new
      let ls = document.createElement('li')
      ls.id="favlist"
      ls.innerHTML = e.new
      list.appendChild(ls)
      dltfav.innerHTML = "🚫"
      dltfav.id="dltfav"
      list.appendChild(dltfav)

      dltfav.addEventListener('click',(evt)=>{
         ls.remove()
         alert("favourites deleted !!")
      })
    })
    listdiv.appendChild(list)


})






reset.addEventListener('click',(evt)=>{
    location.reload()
})





