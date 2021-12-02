

async function main(){
        let data = await axios('http://192.168.1.122:4000/canciones')
                        .then(res=> res.data)

                        
    const div = document.getElementById('lista-musica');
    const fragment  = document.createDocumentFragment();
    const template = document.querySelector('#temple').content;


    data.map(({nombre})=>{
        template.querySelector('#canciones').textContent = nombre;
        const clone = template.cloneNode(true)
        fragment.appendChild(clone);
    })
    div.appendChild(fragment)
    const audio = document.getElementById('audio')
    const li = document.querySelectorAll("#canciones")
     li.forEach((e)=>{
        const canciones = e.textContent;
        e.addEventListener('click',()=>{
            audio.setAttribute('src',`/canciones/${canciones}`)
            document.getElementById('modal').className = 'ver'
            document.getElementById('p-cancion').textContent = `${canciones}`
        })


     })




     document.querySelector('.icon-lista')
     .addEventListener('click',()=>{
       let modal =  document.getElementById('modal');
       if(modal.className == 'modal '){
            modal.className = 'ver' 
       } else{
           modal.className = 'modal'
       }   
     })



    document.getElementById('play').addEventListener('click', async ()=>{
        let btn =  document.querySelector('.play')
        let ruta = btn.src
        let indice = ruta.includes('/img/play.png')

        const audio = document.getElementById('audio')

            if(indice){
               btn.src = './img/pausa.png';
                await audio.play();

            }  else{
                btn.src = './img/play.png'
                await    audio.pause();
            }

        

        


    })



    document.getElementById('agregar-musica')
    .addEventListener('click',()=>{
      let modal =  document.querySelector('.ver-mas');
      if(modal.className == 'ver-mas'){
           modal.className = 'modal-agragar' 
      } else{
          modal.className = 'ver-mas'
      }   
    })

    document.getElementById('subir').addEventListener('click',()=>{
        document.querySelector('.ver-mas').className ='ver-mas'
    })


}



main();
