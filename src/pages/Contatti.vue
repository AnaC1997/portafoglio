<script>
export default {
    name: "Contatti"
}
</script>

<template>
    <div class="backgrounImg">
        <div class="container d-flex flex-column h-75 w-100 justify-content-center">
            <h1 class="text-center text-white fw-bold p-2">I miei contatti</h1>
            <p class="text-white h4 pb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                hic quidem, impedit velit, accusantium
                odio fugit aspernatur ad id nam quisquam inventore veniam accusamus, quos ut aliquam. Eligendi,
                laboriosam et!</p>
                <div class="d-flex flex-column gap-3 mx-10">
                    <Span class="text-white "><img src="../assets/img/iconaEmail.png" alt="Icona Email"> Email:
                        anamariacorrea1997@gmail.com</Span>
                    <span class="text-white"><img src="../assets/img/iconaTelefono.png" alt=""> Telefono: +39 328
                        2245828</span>
                    <span class="text-white"><img src="../assets/img/iconaLinkedin.png" alt=""> <a
                            href="https://www.linkedin.com/in/ana-maria-correa-espinosa-953106114/">Profilo
                            Linkedin</a></span>
                    <span class="text-white d"><img src="../assets/img/iconaGitHub.png" alt="https://github.com/AnaC1997"
                            class="imgGitHub"> <a href="https://github.com/AnaC1997">Profile GitHub</a></span>
                </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.backgrounImg {
    max-width: 100vw;
    height: 93vh;
    background-image: url("img3.png");
    cursor: pointer;
}

img{
    width: 3%;
  
}
</style>