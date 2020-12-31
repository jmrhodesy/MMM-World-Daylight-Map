/* global cloneObject */

/* Magic Mirror
 * Module: World Daylight Map
 *
 * By Jonathan Rhodes
 * MIT Licensed.
 */


Module.register("MMM-World-Daylight-Map", {

    defaults: {
        fetchInterval: 5 * 60 * 1000 // Update every 5 minutes.
    },

    getScripts: function() {
        return [
            "d3.min.js", 
            "jquery.min.js", 
            "topojson.min.js",
            "d3.geo.projection.min.js", 
            "moment.min.js", 
            "moment-timezone.min.js", 
            "suncalc.js", 
            "script.js"
        ];
    },

    /*getStyles: function() {
      return["style.css"];
    }*/

    start: function (){
        Log.info("Starting module: " + this.name);
        
        var timer = setInterval(this.updateDom(), this.config.fetchInterval);
      },

      getDom: function() {
        
        var element = document.createElement("div");
        element.innerHTML = "<div class=\"thin medium bright pre-line\">World Daylight Map</div>"
          + "<div class=\"container\">"
          + "<svg id=\"daylight-map\"></svg>"
          + "</div>"
          + "<script src='./d3.min.js'></script>"
          + "<script src='./jquery.min.js'></script>"
          + "<script src='./topojson.min.js'></script>"
          + "<script src='./d3.geo.projection.min.js'></script>"
          + "<script src='./moment.min.js'></script>"
          + "<script src='./moment-timezone.min.js'></script>"
          + "<script src='./suncalc.js'></script>"
          + "<script src=\"./script.js\"></script>";

        return element;
      }
  })

  