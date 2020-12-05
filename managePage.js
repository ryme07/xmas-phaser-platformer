var managePage = {
  sendData: function (response, data) {
    response.writeHead(200, { "Content-Type": data.contentType });
    response.write(data.pageHTML);
    response.end();
  },

  initData: function (myObj) {
    var indexOfPoint = myObj.pathname.indexOf(".");
    var extension = myObj.pathname.substring(
      indexOfPoint,
      myObj.pathname.length
    );

    var data = {
      contentType: "",
      encoding: "",
      folder: "",
      file: myObj.pathname.substring(1, myObj.pathname.length),
    };

    switch (extension) {
      case ".html":
        data.contentType = "text/html";
        data.encoding = "UTF-8";
        data.folder = "html/";
        break;
      case ".css":
        data.contentType = "text/css";
        data.folder = "css/";
        break;
      case ".js":
        data.contentType = "application/javascript";
        data.folder = "js_client/";
        break;
      case ".png":
        data.contentType = "image/png";
        data.folder = "assets/images/";
        break;
      case ".jpg":
        data.contentType = "image/jpeg";
        data.folder = "assets/images/";
        break;
      case ".jpeg":
        data.contentType = "image/jpeg";
        data.folder = "assets/images/";
        break;
      case ".ttf":
        data.contentType = "";
        data.folder = "assets/font/";
        break;
      case ".ogg":
        data.contentType = "audio/ogg";
        data.folder = "assets/sounds/";
        break;
      case ".json":
        data.contentType = "application/json";
        data.folder = "assets/json/";
        break;

      default:
        console.log("error");
    }

    return data;
  },
};
module.exports = managePage;
