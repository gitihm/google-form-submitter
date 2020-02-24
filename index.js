const request = require("request");
const fs = require("fs");

let i = 0;
let timer = null;

const rand = () => Math.floor(Math.random() * 10) + 1;
const post = () =>
  request.post(
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSe4RCHjykHRmTV--t31qLkSoqTuWIwge2D_Z2bsdlkkelZ4ng/formResponse",
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
          "https://docs.google.com/forms/u/0/d/e/1FAIpQLSe4RCHjykHRmTV--t31qLkSoqTuWIwge2D_Z2bsdlkkelZ4ng/formResponse"
      },
      form: encodeURI(`entry.1124049050=${
        rand() > 5 ? "Female" : "Male"
      }&entry.335377238=${
        rand() > 8 ? "Less than 23" : rand() > 5 ? "31 to 50" : "more than 50"
      }&entry.1167156427=${
        rand() > 8
          ? "With friends"
          : rand() > 5
          ? "With family (sons, relatives, etc)"
          : "Boyfriend/Girlfriend"
      }&entry.915067496=${
        rand() > 8
          ? "Monthly"
          : rand() > 7
          ? "Once a year"
          : rand() > 5
          ? "Twice a year"
          : "More than 5 times a year"
      }&fvv=1&draftResponse=[[[null,1038019991,["${
        rand() > 8 ? "Community" : rand() > 5 ? "Adventure" : "Sight-seeing"
      }"]
    ,0]
    ,[null,2012118827,["${
      rand() > 7
        ? "Center"
        : rand() > 7
        ? "North"
        : rand() > 7
        ? "South"
        : "Northeast"
    }"]
    ,0]
    ,[null,1118193831,["${
      rand() > 5
        ? "Following someone else’s plan (tour guide, online plan, etc)"
        : "Planning before leaving home"
    }"]
    ,0]
    ,[null,163025962,["${
      rand() > 7
        ? "Internet websites"
        : rand() > 7
        ? "Asking the locals of your destination"
        : "Asking service providers, such as hotels clerks or tourist guides"
    }"]
    ,0]
    ,[null,1993826339,["${
      rand() > 7
        ? "3,000฿-4,000฿ per person"
        : rand() > 7
        ? "5,000฿-7,000฿ per person"
        : rand() > 7
        ? "8,000฿-10,000฿ per person"
        : "More than 10,000฿ per person"
    }"]
    ,0]
    ,[null,1075586648,["${
      rand() > 7
        ? "half day trip"
        : rand() > 7
        ? "one day trip"
        : rand() > 7
        ? "2 days 1 night"
        : rand() > 5
        ? "3 days 2 nights"
        : "1 week"
    }"]
    ,0]
    ,[null,1626751957,["${
      rand() > 7
        ? "Hotel"
        : rand() > 7
        ? "Resort"
        : rand() > 7
        ? "Villa"
        : "Homestay"
    }"]
    ,0]
    ,[null,1886407717,["${rand() > 7 ? "Yes" : rand() > 5 ? "No" : "Maybe"}"]
    ,0]
  ]
    ,null,"-2897307624769073063"]
    &pageHistory=0,1,2,3,4&fbzx=-2897307624769073063`)
    },
    (e, r, b) => {
      console.log(++i, b.indexOf("เราได้บันทึกคำตอบของคุณไว้แล้ว") !== -1);
      fs.writeFileSync("debug.html", b);
    }
  );

post();
timer = setInterval(post, 300);
setTimeout(() => clearInterval(timer), 60000);
