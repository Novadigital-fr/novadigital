<template>
    <div>
    <TheHeaderBlack/>
    <nav id="menu_blog">
    
        <ul id="liste" >
      
            <li><NuxtLink to="/notreblog">Site vitine</NuxtLink></li>
            <li><NuxtLink to="/notreblog">Site e-commerce</NuxtLink></li>
            <li><NuxtLink to="/notreblog">Réferencement SEO</NuxtLink></li>
            <li><NuxtLink to="/notreblog">Réferencement SEO</NuxtLink></li>

        </ul>
        </nav>

    <slot />
    <TheFooterBlob />
  </div>
</template>


<style lang="scss" scoped>

#menu_blog{
    background-color: var(--color-text);
    z-index: 3;
    position: sticky;
    width: 100%;
    top: 0;
//    height: 10vh;
padding: 2px 0;
border-bottom: solid 1px var(--color-bg);
@media (max-width: 867px) {
    display: none;
}

ul{
    list-style: none;
    padding: 0;
}
    #liste{
        display: flex;
        justify-content: space-around;
        @media (max-width: 867px) {
        flex-wrap: wrap;
        }
        li{
            border: 1px solid var(--color-bg);
            border-radius: 50px;
            padding: 3px 1%;
            @media (max-width: 867px) {
            width: 44%;
            margin: 2% 3%;
            }
        }
        li:hover{
            background-color: var(--color-secondaire);
            color: var(--color-text);
        }
    }

}

</style>