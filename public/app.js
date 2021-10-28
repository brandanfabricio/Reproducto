

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
        })


     })





}



main();
