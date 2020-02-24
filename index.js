const request = require("request");
const fs = require("fs");

let i = 0;
let timer = null;

const rand = () => Math.floor(Math.random() * 10) + 1;
const post = () =>
  request.post(
    "https://docs.google.com/forms/d/1gTWCRK4phPKtxYvxxS_ma_h_AO_BtcKlAHqdxVQey5U/formResponse",
    {
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
        "accept-language": "th-TH,th;q=0.9,en;q=0.8",
        "cache-control": "max-age=0",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "same-origin",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36",
        "x-chrome-connected":
          "id=115201375894437541919,mode=0,enable_account_consistency=false,consistency_enabled_by_default=false",
        "x-client-data":
          "CIu2yQEIprbJAQjBtskBCKmdygEI4qjKAQjKr8oBCM6wygEIq7LKAQ==",
        referer:
          "https://docs.google.com/forms/d/1gTWCRK4phPKtxYvxxS_ma_h_AO_BtcKlAHqdxVQey5U/formResponse"
      },
      
      form: encodeURI(`fvv=1&draftResponse=[[[null,1212348438,["${
        rand() > 8 ? "XS" : rand() > 5 ? "S" : "M"
      }"]
    ,0],[null,865000962,["${
      rand() > 7
        ? "Center"
        : rand() > 7
        ? "North"
        : rand() > 7
        ? "South"
        : "Northeast"
    }"]
    ,0]
  ]
    ,null,"29752272310871733"]
    &pageHistory=0&fbzx=29752272310871733`)
    },
    (e, r, b) => {
      console.log(++i, b.indexOf("เราได้บันทึกคำตอบของคุณไว้แล้ว") !== -1);
      fs.writeFileSync("debug.html", b);
    }
  );

post();
timer = setInterval(post, 100);
// setTimeout(() => clearInterval(timer), 60000);
