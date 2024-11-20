// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  runtimeConfig:{
    public:{
      baseUrl:"http://127.0.0.1:1890/"
    }
  },
  alias: {
    "@": "./"
  },
  app:{
    head:{
      script:[
        {
          type: "text/javascript",
           src: '/js/uikit.js',
           body:true
       },
       {
        type: "text/javascript",
        src: '/js/uikit-icons.js',
         body:true
       },
      ]

    }
  },
  server: {
    port: 80,
    host: '0.0.0.0'
  },
  css:["@/assets/style/content.css","@/assets/fonts/font.css"],
})
