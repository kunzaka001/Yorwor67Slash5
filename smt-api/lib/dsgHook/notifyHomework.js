const axios = require("axios");
const { initializeApp } = require("firebase/app");
const {
    collection,
    getDocs,
    getFirestore

} = require("firebase/firestore");
require("dotenv").config();

const firebaseConfig = {
    apiKey: process.env.ApiKey,
    authDomain: process.env.AuthDomain,
    projectId: process.env.ProjectId,
    storageBucket: process.env.StorageBucket,
    messagingSenderId: process.env.MessagingSenderId,
    appId: process.env.AppId,
    measurementId: process.env.MeasurementId,
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function notifyHomework(Time, Subject, Decs, Due) {
    const querySnapshot = await getDocs(collection(db, "DiscordWebhooks"));
    querySnapshot.forEach((doc) => {
        const Url = doc.data().WebhookUrl
        const Payload = {
            "embeds": [
                {
                    "color": 4892137,
                    "image": {
                        "url": "https://smt.siraphop.me/assets/Discord/NewHomework.png"
                    }
                },
                {
                    "title": "📣  แจ้งเตือนการบ้านใหม่! (New Homework Assigned)",
                    "description": "Cynthia ขอแจ้งให้ทราบว่ามีการบ้านใหม่ที่เพิ่งเพิ่มเข้ามาแล้วนะคะ 😊 หากต้องการความช่วยเหลือหรือคำแนะนำ สามารถถาม [Cynthia](https://smt.siraphop.me/chat/cynthia) ได้เสมอค่ะ!",
                    "color": 4892137,
                    "fields": [
                        {
                            "name": "วันที่",
                            "value": `${Time}`,
                            "inline": true
                        },
                        {
                            "name": "วันกำหนดส่ง",
                            "value": `${Due}`,
                            "inline": true
                        },
                        {
                            "name": "วิชา",
                            "value": `${Subject}`
                        },
                        {
                            "name": "ลายละเอียดงาน",
                            "value": `${Decs}`
                        }
                    ],
                    "author": {
                        "name": "SMT Notify",
                        "url": "https://smt.siraphop.me/homework",
                        "icon_url": "https://upload.wikimedia.org/wikipedia/commons/6/6f/ตรีจักร.png"
                    },
                    "footer": {
                        "text": "อย่าลืมตรวจสอบรายละเอียดและส่งงานให้ตรงเวลานะคะ!"
                    }
                }
            ]
        };
        axios.post(Url, Payload)
            .then(response => {
                console.log(`Successfully broadcast to Discord`);
            })
            .catch(error => {
                console.log(error.message);
            });
    });
}

module.exports = notifyHomework;