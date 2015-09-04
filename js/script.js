var l = {
  init : function() {
    html = "";
    for (var i=0; i < sites.length; i++) {
      var site = sites[i];

      html += "<div><a href='" + l.makeUrl(site) + "'>" + site.name;
      html += " port: " + site.port + "</a></div>";
    }

    var localServerList = document.getElementById('theSites');

    localServerList.innerHTML = html;

  }, makeUrl : function(site){
    return "http://localhost:" + (site.port || 80) + "/" + (site.path || "");
  }

};
l.init();
