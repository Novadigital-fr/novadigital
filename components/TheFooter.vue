<template>
  <div id="contact">
    <div class="menu">
      <a href="#notreProcede" class="link">
        <div>
          <p class="MnotreProcede">NOUS CONTACTER</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="57.657"
            height="57.657"
            viewBox="0 0 57.657 57.657"
          >
            <defs></defs>
            <g transform="translate(-13057.099 -5086.941)">
              <path
                class="a"
                d="M52,4H-4V-4H52Z"
                transform="translate(13062.756 5090.941)"
              />
              <path
                class="a"
                d="M51.766,4H-4V-4H51.766Z"
                transform="translate(13110.756 5091.059) rotate(90)"
              />
              <path
                class="a"
                d="M0,47.657-5.657,42,42-5.657,47.657,0Z"
                transform="translate(13062.756 5096.941)"
              />
            </g>
          </svg>
        </div>
      </a>
    </div>
    <div class="footer">
      <div class="mail">
        <a href="mailto:contact@novadigital.fr"
          ><p>contact@novadigital.fr</p></a
        >
        <!-- <Button text='nous contacter'/> -->
      </div>
    </div>
    <div class="bottom">
      <div class="left">
        <div class="tel">
          <p class="name">Tel.</p>
          <p>O6 42 77 23 85</p>
        </div>
        <div class="adresse">
          <p class="name">Adresse.</p>
          <p>
            78 rue saint pierre de vaise <br />
            69001 Lyon
          </p>
          <p></p>
        </div>
      </div>
      <div class="right">
        <div class="one">
          <p>Nos services</p>
          <ul>
            <li class="link link--metis"><NuxtLink to="/creation-site-web-lyon">Site vitrine</NuxtLink></li>
            <li class="link link--metis"><NuxtLink to="/creation-de-site-e-commerce">Site e-commerce</NuxtLink></li>
            <li class="link link--metis"><NuxtLink to="/agence-de-referencement-seo">Réferencement SEO</NuxtLink></li>
          <li class="link link--metis"><NuxtLink to="/agence-video-par-drone">Vidéo panorama en drone</NuxtLink></li>

          </ul>
        </div>
        <div class="two">
          <p>Nos articles</p>
          <ul>
            <li class="link link--metis"><NuxtLink to="/notreblog">Développement web</NuxtLink></li>
          <li class="link link--metis"><NuxtLink to="/notreblog">Marketing digital</NuxtLink></li>
          <li class="link link--metis"><NuxtLink to="/notreblog">Référencement SEO</NuxtLink></li>
          <li class="link link--metis"><NuxtLink to="/notreblog">Entreprenariat</NuxtLink></li>
          </ul>
        </div>
        <div class="three">
          <p>Nos projets</p>
          <ul>
            <li class="link link--metis"><NuxtLink to="/nosprojets">Site e-commerce</NuxtLink></li>
            <li class="link link--metis"><NuxtLink to="/nosprojets">Site vitrine</NuxtLink></li>
            <li class="link link--metis"><NuxtLink to="/nosprojets">Réferencement SEO</NuxtLink></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="copy">
      <p>© novadigital 2023</p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  background-color: var(--color-secondaire);
  color: var(--color-text);
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0 1vw;
}
.footer p {
  font-size: 40px;
}
.copy {
  text-align: center;
  height: 11vh;
}

.menu {
  text-transform: uppercase;
  width: 100vw;
  padding: 0 1vw;
}
.menu div {
  border-bottom: solid 1px;
  display: flex;
  justify-content: space-between;
  padding: 20px 0 10px 0;
  z-index: 5;
  fill: currentColor;
}
.menu div svg {
  width: 20px;
  height: 20px;
}
.bottom{
    display: flex;
    border-bottom: solid 1px var(--color-bg) ;
    // padding: 50px 0;
    height: 50vh;
    align-items: center;


    .left{
        flex-grow: 1;
        margin-left: 5vw;

        .tel{
            margin-bottom: 30px;
        }

        .name{
            font-size: 30px;
            font-weight: 300;
        }
        p{
            font-size: 25px;
            margin-top: 5px;
        }

    }
    .right{
        flex-grow: 2;
        display: flex;
        justify-content: space-around;
        border-left: solid 1px var(--color-bg) ;

        ul{
            list-style-type: none;
            margin: 30px 0 0 0;
            padding: 0;
            line-height: 1.8;
        }
        p{
          text-decoration: underline;
          color: gray;
        }
    }
}

@media screen and (max-width: 867px) {
  /* mobile */
  .footer .h6 {
    font-size: 20px;
  }
  .footer p {
    font-size: 30px;
  }

  .bottom{

    flex-direction: column;
    height: fit-content;
    align-items: flex-start;
    margin: 0 5vw;

    .left{
      margin-top: 40px;
    }
    .right{
      flex-direction: column;
      border: none;
      margin-bottom: 40px;
      margin-left: 5vw;
   
      p{
        margin-top: 40px;
      }
    }
  }


}
</style>
