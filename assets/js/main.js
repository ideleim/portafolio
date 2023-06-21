console.log('Loading Javascript..........')

function guardarRegistro(event)
{
    event.preventDefault();

    let formulario = document.getElementById('miFormulario');
    let url = formulario.action;

    let datos = {
        nombre: formulario.nombre.value,
        apellidos: formulario.apellidos.value,
        tipo: formulario.tipo.value,
        identificacion: formulario.identificacion.value,
        celular: formulario.celular.value,
        profesion: formulario.profesion.value,
        rol: formulario.rol.value,
    }

    fetch(url,{
        method: 'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
    })
    .then(function(response){
        if(response.ok){
            formulario.reset();
            mostrarAlertaExitosa();           
        }else{
            mostrarAlertaError();
        }        
    })
    .catch(function(error){
        console.error(error);
        mostrarAlertaError();
    });
}

function mostrarAlertaExitosa(){
    Swal.fire({
        icon: 'success',
        title: '¡Registro exitoso!',
        text: 'En breve me comunicare contigo',
        showConfirmButton: false,
        timer: 3000
    });
}

function mostrarAlertaError(){
    Swal.fire({
        icon: 'error',
        title: 'Debe Llenar todos los campos!',
        showConfirmButton: false,
        timer: 3000
    });
}



// typing animation
var typed = new Typed(".typing",{
    strings:["Diseñador Web", "Desarrollador Web", "Diseñador Grafico", "Ing Civil"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})
// aside
const nav = document.querySelector(".nav");
    navList = nav.querySelectorAll("li");
    totalNavList = navList.length;
    allSection = document.querySelectorAll(".section");
    totalSection = allSection.length;
    for(let i=0; i<totalNavList; i++){
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function(){
            removeBackSection();
            for(let j=0; j<totalNavList; j++){
                if(navList[j].querySelector("a").classList.contains("active")){
                    addBackSection(j);
                    // allSection[j].classList.add("back-section")
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            showSection(this);
            if(window.innerWidth < 1200){
                asideSectionTogglerBtn();
            }
        })
    }
    function removeBackSection(){
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("back-section");
        }
    }
    function addBackSection(num){
        allSection[num].classList.add("back-section");
    }
    function showSection(element){
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
    }
    function updateNav(element){
        for(let i=0; i<totalNavList; i++){
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
                navList[i].querySelector("a").classList.add("active");
            }
        }
    }
    document.querySelector(".hire-me").addEventListener("click", function(){
        const sectionIndex = this.getAttribute("data-section-index");
        // console.log(sectionIndex);
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    })
    // Navegador
    const navTogglerBtn = document.querySelector(".nav__toggler");
        aside = document.querySelector(".aside");
        navTogglerBtn.addEventListener("click", () =>{
            asideSectionTogglerBtn();
        })
        function asideSectionTogglerBtn(){
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for(let i=0; i<totalSection; i++){
                allSection[i].classList.toggle("open");
            }
        }