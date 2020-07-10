const request = require("request");
const fs = require("fs");

let i = 0;
let timer = null;

const rand = () => Math.floor(Math.random() * 10) + 1;
const post = () =>
  request.post(
    "https://docs.google.com/forms/d/e/1FAIpQLSf1y-lN4ePiTJ2y0XFVL8dXuNs2cMO7Au1fQsCYxZSUpJqH7g/formResponse",
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
          "https://docs.google.com/forms/d/e/1FAIpQLSf1y-lN4ePiTJ2y0XFVL8dXuNs2cMO7Au1fQsCYxZSUpJqH7g/formResponse"
      },
      

      form: encodeURI(`fvv=1&draftResponse=[[
        [null,1895985693,[""Yes, I am (ใช่)],0],
        [null,2020539539,["${
          rand() > 7
            ? "5"
            : rand() > 7
            ? "3"
            : rand() > 7
            ? "4"
            : rand() > 7 
            ? "2"
            : "1"
        }"]
        ,0],
        [null,188243699,["${
          rand() > 7
            ? "5"
            : rand() > 7
            ? "3"
            : rand() > 7
            ? "4"
            : rand() > 7 
            ? "2"
            : "1"
        }"]
        ,0],
        [null,188243699,["${
          rand() > 7
            ? "5"
            : rand() > 7
            ? "3"
            : rand() > 7
            ? "4"
            : rand() > 7 
            ? "2"
            : "1"
        }"]
        ,0],
        [null,902884018,["${
          rand() > 7
            ? "5"
            : rand() > 7
            ? "3"
            : rand() > 7
            ? "4"
            : rand() > 7 
            ? "2"
            : "1"
        }"]
        ,0],
        [null,1338186110,["${
          rand() > 7
            ? "5"
            : rand() > 7
            ? "3"
            : rand() > 7
            ? "4"
            : rand() > 7 
            ? "2"
            : "1"
        }"]
        ,0],
        [null,1868234083,["${
          rand() > 7
            ? "5"
            : rand() > 7
            ? "3"
            : rand() > 7
            ? "4"
            : rand() > 7 
            ? "2"
            : "1"
        }"]
        ,0],
        [null,591247175,["${
          rand() > 7
            ? "5"
            : rand() > 7
            ? "3"
            : rand() > 7
            ? "4"
            : rand() > 7 
            ? "2"
            : "1"
        }"]
        ,0],
        [null,112673333,["${
          rand() > 7
            ? "5"
            : rand() > 7
            ? "3"
            : rand() > 7
            ? "4"
            : rand() > 7 
            ? "2"
            : "1"
        }"]
        ,0],
        [null,615918331,["${
          rand() > 7
            ? "5"
            : rand() > 7
            ? "3"
            : rand() > 7
            ? "4"
            : rand() > 7 
            ? "2"
            : "1"
        }"]
        ,0],
        [null,627761708,["${
          rand() > 7
            ? "5"
            : rand() > 7
            ? "3"
            : rand() > 7
            ? "4"
            : rand() > 7 
            ? "2"
            : "1"
        }"]
        ,0],
        [null,716553906,["${
          rand() > 7
            ? "5"
            : rand() > 7
            ? "3"
            : rand() > 7
            ? "4"
            : rand() > 7 
            ? "2"
            : "1"
        }"]
        ,0],
        [null,1445650290,["${
          rand() > 7
            ? "5"
            : rand() > 7
            ? "3"
            : rand() > 7
            ? "4"
            : rand() > 7 
            ? "2"
            : "1"
        }"]
        ,0],
        [null,1105754828,["${
          rand() > 7
            ? "5"
            : rand() > 7
            ? "3"
            : rand() > 7
            ? "4"
            : rand() > 7 
            ? "2"
            : "1"
        }"]
        ,0],
        [null,396770170,["${
          rand() > 7
            ? "5"
            : rand() > 7
            ? "3"
            : rand() > 7
            ? "4"
            : rand() > 7 
            ? "2"
            : "1"
        }"]
        ,0],
        [null,1635940082,["${
          rand() > 7
            ? "5"
            : rand() > 7
            ? "3"
            : rand() > 7
            ? "4"
            : rand() > 7 
            ? "2"
            : "1"
        }"]
        ,0],
        [null,1648325037,["${
          rand() > 7
            ? "5"
            : rand() > 7
            ? "3"
            : rand() > 7
            ? "4"
            : rand() > 7 
            ? "2"
            : "1"
        }"]
        ,0],
        [null,1791028447,["${
          rand() > 7
            ? "5"
            : rand() > 7
            ? "3"
            : rand() > 7
            ? "4"
            : rand() > 7 
            ? "2"
            : "1"
        }"]
        ,0],
        [null,1825525569,["${
          rand() > 7
            ? "5"
            : rand() > 7
            ? "3"
            : rand() > 7
            ? "4"
            : rand() > 7 
            ? "2"
            : "1"
        }"]
        ,0],
        [null,586596687,["${
          rand() > 7
            ? "Male (ผู้ชาย)"
            : "Female (ผู้หญิง)"
        }"]
        ,0],
        [null,1558394379,["${
          rand() > 7
            ? "Below 20 (ต่ำกว่า 20 ปี)"
            : rand() > 7
            ? "20 to 29"
            : rand() > 7
            ? "30 to 39"
            : rand() > 7
            ? "40 to 49"
            : rand() > 7
            ? "50 to 59"
            : "Above 60 (มากกว่า 60 ปี)"
        }"]
        ,0],
        [null,281119569,["${
          rand() > 7
            ? "Single (โสด)"
            : rand() > 7
            ? "Married (แต่งงาน)"
            : "Other (อื่นๆ)"
        }"]
        ,0],
        [null,1478095871,["${
          rand() > 7
            ? "Under THB 15,000 (น้อยกว่า 15,000 บาท)"
            : rand() > 7
            ? "THB 15,001-30,000"
            : rand() > 7
            ? "THB 30,001-60,000"
            : rand() > 7
            ? "THB 60,001-90,000"
            : "Above THB 90,000 (มากกว่า 90,000 บาท)"
        }"]
        ,0],
        [null,833865791,["${
          rand() > 7
            ? "Below Bachelor’s Degree (ต่ากว่าปริญญาตรี)"
            : rand() > 7
            ? "Bachelor’s Degree (ปริญญาตรี)"
            : rand() > 7
            ? "Master’s Degree (ปริญญาโท)"
            : "Doctor’s Degree (ปริญญาเอก)"
        }"]
        ,0],
        [null,1506122594,["${
          rand() > 7
            ? "Student/College (นักเรียน/นักศึกษา)"
            : rand() > 7
            ? "Government Employee/ State Enterprises (ข้าราชการ/รัฐวิสาหกิจ)"
            : rand() > 7
            ? "Private Company Employee (พนักงานบริษัทเอกชน)"
            : rand() > 7
            ? "Private Business (ธุรกิจส่วนตัว)"
            : "Other (อื่น)"
        }"]
        ,0],
  ]
    ,null,"-589234318075932048"]
    &pageHistory=0&fbzx=-589234318075932048`)
    },
    (e, r, b) => {
      console.log(++i, b.indexOf("เราได้บันทึกคำตอบของคุณไว้แล้ว") !== -1);
      fs.writeFileSync("debug.html", b);
    }
  );

post();
timer = setInterval(post, 100);
// setTimeout(() => clearInterval(timer), 60000);
