
    let projetos = document.querySelector(".btn_projetos");
    let perfil = document.querySelector(".btn_perfil");
    let contato = document.querySelector(".btn_contatos");

    let blk_projeto = document.querySelector(".container_content_projetos");    
    let blk_contato = document.querySelector(".container_content_contatos");
    let blk_perfil = document.querySelector(".container_content_perfil");
    
    document.addEventListener("DOMContentLoaded", function() {
        
        projetos.classList.remove("active");
        perfil.classList.add("active");
        contato.classList.remove("active");

        blk_perfil.style.display = "block";
        blk_contato.style.display = "none";
        blk_projeto.style.display = "none";
        
    });

    projetos.addEventListener("click", function () {
        projetos.classList.add("active");
        perfil.classList.remove("active");
        contato.classList.remove("active");

        blk_projeto.style.display = "block";
        blk_contato.style.display = "none";
        blk_perfil.style.display = "none";
    });

    contato.addEventListener("click", function () {
        projetos.classList.remove("active");
        perfil.classList.remove("active");
        contato.classList.add("active");

        blk_projeto.style.display = "none";
        blk_perfil.style.display = "none";
        blk_contato.style.display = "block";
    });

    perfil.addEventListener("click", function () {
        projetos.classList.remove("active");
        perfil.classList.add("active");
        contato.classList.remove("active");

        blk_perfil.style.display = "block";
        blk_contato.style.display = "none";
        blk_projeto.style.display = "none";
    });
