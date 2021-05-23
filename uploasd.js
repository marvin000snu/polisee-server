const Pool = require("./utils/mysql");
const fetch = require("node-fetch");
var parser = require("xml2js").Parser();
const axios = require("axios");
const cheerio = require("cheerio");
const log = console.log;

// const getDetail = () => {
//   const getHtml = async (id) => {
//     try {
//       return await axios.get("http://likms.assembly.go.kr/bill/billDetail.do?billId="+id);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   getHtml("PRC_V1P5L1L1V2P6U1E1R1F9N0Z9F0E3V5")
//     .then((html) => {
//       let ulList = [];
//       const $ = cheerio.load(html.data);
//       const $body =$("div#summaryContentDiv").text()

//     })
//     .then((res) => {

//     }));
// };


const upLoad = async () => {
  const connection = await Pool.getConnection();
  try {
    var i = 102;
    var boolean = true;
    while (boolean) {
      const xmlText = await fetch(
        "http://apis.data.go.kr/9710000/BillInfoService2/getBillInfoList?serviceKey=1UaISC%2BjgGb42QmkaYlGngrBy5ck0NEAjPrzZJ0Kz3kahKXc7zTPIwjkKEeWYt%2BQMTME3YllFSTKUquN6e79aw%3D%3D&pageNo=" +
          i +
          "&numOfRows=30"
      );
      const revisedXmlText = await xmlText.text();
      parser.parseString(revisedXmlText, async function (err, result) {
        // console.log(result)
        // console.log(result.response.body[0].items[0].item.length)
        if (result.response.body[0].items[0].item.length < 30) {
          boolean = false;
        } else {
          for (var item of result.response.body[0].items[0].item) {
            await connection.query(
              "INSERT INTO `LAWDATA`.`LawCrawl` (`bill_name`, `bill_no`, `general_result`, `pass_gubn`, `proc_dt`, `proc_stage_cd`, `propose_dt`, `bill_id`, `proposer_kind`, `summary`) VALUES (?,?,?,?,?,?,?,?,?,?);",
              [
                item.billName ? item.billName[0] : "",
                item.billNo ? item.billNo[0] : "",
                item.generalResult ? item.generalResult[0] : "",
                item.passGubn ? item.passGubn[0] : "",
                item.procDt ? item.procDt[0] : "",
                item.procStageCD ? item.procStageCD[0] : "",
                item.proposeDt ? item.proposeDt[0] : "",
                item.billId ? item.billId[0] : "",
                item.proposerKind ? item.proposerKind[0] : "",
                item.summary ? item.summary[0]? item.summary[0] :"" :""
              ]
            );
          }
        }
      });
      // const text = "12345"
      // boolean = false
      console.log(i);
      i++;
    }
    process.exit(0);
  } catch (err) {
    console.log(err);
  } finally {
    connection.release();
  }
};
// getDetail()
upLoad();
