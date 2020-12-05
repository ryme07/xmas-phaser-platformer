var http = require("http");
var url = require("url");
var fs = require("fs");

var managePage = require("./managePage");

const PORT = "8083";

var serveur = http.createServer(treatReq);
serveur.listen(PORT);

function treatReq(request, response) {
  var myObj = url.parse(request.url);

  if (myObj.pathname === "/") {
    myObj.pathname = "/index.html";
  }

  if (myObj.pathname !== "/favicon.ico") {
    var dataInitialization = managePage.initData(myObj);
    var data = {};
    data.contentType = dataInitialization.contentType;
    data.pageHTML = fs.readFileSync(
      dataInitialization.folder + dataInitialization.file,
      dataInitialization.encoding
    );
    managePage.sendData(response, data);
  }
}
