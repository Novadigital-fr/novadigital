<template>
    <div>
        <div class="menu">
    <a href="#notreProcede" class="link" >
            <div>
                <p class="MnotreProcede">NOUS CONTACTER</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="57.657" height="57.657" viewBox="0 0 57.657 57.657"><defs></defs><g transform="translate(-13057.099 -5086.941)"><path class="a" d="M52,4H-4V-4H52Z" transform="translate(13062.756 5090.941)"/><path class="a" d="M51.766,4H-4V-4H51.766Z" transform="translate(13110.756 5091.059) rotate(90)"/><path class="a" d="M0,47.657-5.657,42,42-5.657,47.657,0Z" transform="translate(13062.756 5096.941)"/></g></svg>						
            </div>
        </a>
    </div>
    <div class="footer">
 <div class="mail">
 <p class="h6">E-mail</p>
 <a href="mailto:contact@novadigital.fr"><p>contact@novadigital.fr</p></a>
 </div>
 <div>
 <p class="h6">Telephone</p>
 <p>06 42 77 23 85</p>
 </div>
    </div>
    <div class="copy">
    <p>© novadigital 2023</p>
    </div>
</div>
</template>

<script setup>

</script>

<style scoped>
.footer{
    background-color: var( --color-secondaire);
    color: var(--color-bg);
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 4%;
}
.footer .h6 {
    font-size: 30px;
    font-weight: 300;
}
.footer p {
    font-size: 40px;
}
.mail{
    margin-bottom: 2%;
}
.copy{
    text-align: center;
}

.menu{
    text-transform: uppercase;
    width: 98vw;
}
.menu div{
    border-bottom: solid 1px;
    display: flex;
    justify-content: space-between;
    padding: 20px 0 10px 0;
	z-index: 5;
	fill: currentColor;
}
.menu div svg{
	width: 20px;
	height: 20px;
}

@media screen and (max-width: 767px) {
    /* mobile */
    .footer .h6 {
    font-size: 20px;
}
.footer p {
    font-size: 30px;
}

}
</style>