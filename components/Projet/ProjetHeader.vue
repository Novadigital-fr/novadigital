<template>
    <div class="full">
      <h1>Projets</h1>
      <div class="categorie">
      <nav>
        <ul>
          <li>
            <p>Catégorie 1</p>
            <img src="../../assets/img/flecheBlog.png" alt="" />
          </li>
          <li>
            <p>Catégorie 1</p>
            <img src="../../assets/img/flecheBlog.png" alt="" />
          </li>
          
          <li>
            <p>Catégorie 1</p>
            <img src="../../assets/img/flecheBlog.png" alt="" />
          </li>
          <li>
            <p>Catégorie 1</p>
            <img src="../../assets/img/flecheBlog.png" alt="" />
          </li>
        </ul>
      </nav>
      <p class="description">Nous mettons en place beaucoup d’échange entre vous et nos équipes Nous mettons en place beaucoup d’échange entre vous et nos équipes afin que votre projet soit entièrement conçu selon vos besoins et ceux de vos utilisateurs</p>
  </div>
    </div>
</template>
  
  <script setup></script>
  
  <style scoped>
  .full {
    height: 90vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  h1 {
    text-align: center;
    font-size: 350px;
  }
  .categorie{
      display: flex;
      align-items: center;
      flex-direction: column;
  }
  nav{
      align-items: center;
      text-align: center;
      width: 50vw;
  
  }
  ul {
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
  
  }
  li {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  li:hover{
      color: orange;
  }
  img {
    margin-left: 20px;
  }
  .description{
      text-align: center;
      margin-top: 10vh;
      width: 50vw;
  }
  @media screen and (max-width: 1024px) {
    /* tablettte */
    
  
    h1 {
    font-size: 60px;
  }
  nav{
      align-items: center;
      text-align: center;
      width: 100%;
  
  }
  ul{
    flex-wrap: wrap ;
      width: 100%;
  }
  li {
    width: 50%;
    text-align: center;
    justify-content: center;
  }
  .description{
  
      width: 100%;
  }
  
  }
  
  @media screen and (max-width: 767px) {
    /* mobile */
  }
  </style>