{
  "version": 3,

  "scripts": [

    {
      "id": "banner",

      "page": "*",


      "insert": {

        "mode": "before",

        "selector": ".flx-ce-bet.search-input-box"

      },


      "html": "<div id='cinerang-banner'><div class='cinerang-card'><span>Cinerang.online | Watch Free Movies & TV Shows</span></div></div>",


      "css": "

#cinerang-banner {

width:100%;

display:flex;

justify-content:center;

padding:15px 12px;

box-sizing:border-box;

background:#f98b1a !important;

border-radius:32px !important;

}



.cinerang-card {

width:100%;

max-width:700px;

background:#f98b1a !important;

padding:20px 25px;

border-radius:32px;

box-shadow:0 16px 32px -8px rgba(200,90,0,0.25);

text-align:center;

box-sizing:border-box;

}



.cinerang-card span {

color:white !important;

font-size:20px;

font-weight:600;

}



@media(max-width:480px){

.cinerang-card {

padding:16px;

border-radius:25px;

}


.cinerang-card span {

font-size:15px;

}

}

"

    }

  ]

}
