const cors = require("cors");
const express = require("express");
const apiRouter = require("./router/api-router");
const app = express();
var bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
require("dotenv").config();
 
app.use("/api", apiRouter);

//app.use(cors())
// app.use("/", (err, req, res, next) => {
//   let transporter = nodemailer.createTransport({
//     // 사용하고자 하는 서비스, gmail계정으로 전송할 예정이기에 'gmail'
//     service: "gmail",
//     // host를 gmail로 설정
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     auth: {
//       // Gmail 주소 입력, 'testmail@gmail.com'
//       user: "cheryswa0@gmail.com",
//       // Gmail 패스워드 입력
//       pass: "dirndirn1!"
//     }
//   });
//   const mailResult = transporter.sendMail({
//     from: `"swa Team" <cheryswa0@gmail.com>`,
//     to: "marvin000@snu.ac.kr",
//     subject: "ERROR_OCCURRED",
//     text: "TEST",
//     html: `<h1>${err.apiType}</h1>
//           <h6>${err.err}</h6>
//         <h6>${err["user_id"]}</h6>
//         `
//   });
//   console.log(mailResult);
//   res.status(400).json({ message: err });
// });

app.use("/", (req, res, next) => {
  res.json({ message: "POLISEE SERVER ON!" });
});

app.listen(process.env.PORT || 3002, () => {
  console.log("running!!!");
});
