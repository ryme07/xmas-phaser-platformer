var http = require("http");
var url = require("url");
var fs = require("fs");

var managePage = require("./managePage");
const PORT = "8080";
var server = http.createServer(traitReq);

server.listen(PORT);
console.log(`PORT : ${PORT}`);

function traitReq(request, response) {
  let myObj = url.parse(request.url);

  if (myObj.pathname === "/") {
    myObj.pathname = "/index.html";
  }

  if (myObj.pathname !== "/favicon.ico") {
    let dataPreparation = managePage.setData(myObj);
    let data = {};
    data.contentType = dataPreparation.contentType;
    data.pageHtml = fs.readFileSync(
      dataPreparation.folder + dataPreparation.file,
      dataPreparation.encodage
    );
    managePage.sendData(response, data);
  }
}
