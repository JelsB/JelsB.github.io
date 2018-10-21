(function() {
  var fn = function() {

    (function(root) {
      function now() {
        return new Date();
      }

      var force = false;

      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }







      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }

      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("db8c822a-8471-4676-8001-c3965b3acc37");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'db8c822a-8471-4676-8001-c3965b3acc37' but no matching script tag was found. ")
        return false;
      }

      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-0.13.0.min.js"];

      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },

        function(Bokeh) {

        },

        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {

                  var docs_json = '{"06104493-ac88-4b9b-9e80-3864d8ec67a3":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"0bee1d04-abe1-4d3e-9a62-558327561bb0","type":"Toolbar"},{"attributes":{},"id":"c685259b-16e4-497e-a852-789d23b71339","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"e313a20b-1c9c-4e6b-add4-9c7c7858adcd","subtype":"Figure","type":"Plot"},"ticker":{"id":"c685259b-16e4-497e-a852-789d23b71339","type":"BasicTicker"},"visible":false},"id":"e2cb88ae-568f-401c-aa94-89f00b56dc4b","type":"Grid"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"2dcb35e6-ac07-442c-9d46-fe6f1cc33633","type":"ImageURL"},{"attributes":{"callback":null,"data":{"url_full":["/assets/academia/bokeh/figs/monomer/SiO/SI5O5_000.png"],"url_num":["000"]},"selected":{"id":"7a88b0f3-f0f2-4cee-bdd6-bce3a7db2a3f","type":"Selection"},"selection_policy":{"id":"233a8430-2926-44cd-b998-b360c1264928","type":"UnionRenderers"}},"id":"96786842-634f-4147-9a64-3e5caf3db65f","type":"ColumnDataSource"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"355a2aac-9d94-4eb3-8d6f-11063191c21b","type":"ImageURL"},{"attributes":{"plot":null,"text":""},"id":"97a25626-05db-4818-9451-b23f3bd923d9","type":"Title"},{"attributes":{"children":[{"id":"be3a5422-7be2-40e2-a5ff-5487987f0681","type":"Slider"}]},"id":"f582018c-7b77-496d-a839-43e8b837d711","type":"WidgetBox"},{"attributes":{},"id":"c625403d-3814-43c5-9ccd-c2830108c05a","type":"BasicTickFormatter"},{"attributes":{},"id":"f5e4af9f-8dc2-4211-bdce-fd727df213a8","type":"BasicTicker"},{"attributes":{"callback":null},"id":"07779b2a-c319-4820-b7ba-f3b5df1a0717","type":"Range1d"},{"attributes":{},"id":"b79084a5-3f5e-4d2d-adb5-038e677bc194","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"96786842-634f-4147-9a64-3e5caf3db65f","type":"ColumnDataSource"}},"id":"f6fc7a3c-ffff-45e8-8ad6-d8d6d1aa7df5","type":"CDSView"},{"attributes":{},"id":"09bbd51d-4f41-4a00-8efe-3bd2605e6c6b","type":"LinearScale"},{"attributes":{},"id":"7a88b0f3-f0f2-4cee-bdd6-bce3a7db2a3f","type":"Selection"},{"attributes":{},"id":"9528da3b-0369-4a28-b605-842bcaff4ab4","type":"LinearScale"},{"attributes":{"args":{"source":{"id":"96786842-634f-4147-9a64-3e5caf3db65f","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value/5\\n        var file_name = data[&#x27;url_full&#x27;]\\n        var file_num = data[&#x27;url_num&#x27;]\\n        var f_string = f.toString().padStart(3, &#x27;0&#x27;)\\n        file_name[0] = file_name[0].replace(file_num[0], f_string)\\n        file_num[0] = f_string\\n        source.change.emit();\\n        "},"id":"5a45b4e3-9ee1-43aa-950f-48258ce9f3db","type":"CustomJS"},{"attributes":{"below":[{"id":"20daadbd-e9f8-4211-84db-2bb9580f5874","type":"LinearAxis"}],"left":[{"id":"bb6341ff-528b-4495-ac81-f05842810a0e","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"20daadbd-e9f8-4211-84db-2bb9580f5874","type":"LinearAxis"},{"id":"1fe05776-794d-42ff-8ed1-419f140f94f8","type":"Grid"},{"id":"bb6341ff-528b-4495-ac81-f05842810a0e","type":"LinearAxis"},{"id":"e2cb88ae-568f-401c-aa94-89f00b56dc4b","type":"Grid"},{"id":"2d929854-e945-466b-9a29-c16b7ede7ed0","type":"GlyphRenderer"}],"title":{"id":"97a25626-05db-4818-9451-b23f3bd923d9","type":"Title"},"toolbar":{"id":"0bee1d04-abe1-4d3e-9a62-558327561bb0","type":"Toolbar"},"x_range":{"id":"07779b2a-c319-4820-b7ba-f3b5df1a0717","type":"Range1d"},"x_scale":{"id":"09bbd51d-4f41-4a00-8efe-3bd2605e6c6b","type":"LinearScale"},"y_range":{"id":"d318b4fe-49da-4f3f-990a-d3d86941535e","type":"Range1d"},"y_scale":{"id":"9528da3b-0369-4a28-b605-842bcaff4ab4","type":"LinearScale"}},"id":"e313a20b-1c9c-4e6b-add4-9c7c7858adcd","subtype":"Figure","type":"Plot"},{"attributes":{"children":[{"id":"f582018c-7b77-496d-a839-43e8b837d711","type":"WidgetBox"},{"id":"e313a20b-1c9c-4e6b-add4-9c7c7858adcd","subtype":"Figure","type":"Plot"}]},"id":"726acf1b-aa1b-441e-b955-7ed91fb2e3b0","type":"Column"},{"attributes":{"formatter":{"id":"c625403d-3814-43c5-9ccd-c2830108c05a","type":"BasicTickFormatter"},"plot":{"id":"e313a20b-1c9c-4e6b-add4-9c7c7858adcd","subtype":"Figure","type":"Plot"},"ticker":{"id":"f5e4af9f-8dc2-4211-bdce-fd727df213a8","type":"BasicTicker"},"visible":false},"id":"20daadbd-e9f8-4211-84db-2bb9580f5874","type":"LinearAxis"},{"attributes":{"data_source":{"id":"96786842-634f-4147-9a64-3e5caf3db65f","type":"ColumnDataSource"},"glyph":{"id":"355a2aac-9d94-4eb3-8d6f-11063191c21b","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2dcb35e6-ac07-442c-9d46-fe6f1cc33633","type":"ImageURL"},"selection_glyph":null,"view":{"id":"f6fc7a3c-ffff-45e8-8ad6-d8d6d1aa7df5","type":"CDSView"}},"id":"2d929854-e945-466b-9a29-c16b7ede7ed0","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"d318b4fe-49da-4f3f-990a-d3d86941535e","type":"Range1d"},{"attributes":{},"id":"233a8430-2926-44cd-b998-b360c1264928","type":"UnionRenderers"},{"attributes":{"callback":{"id":"5a45b4e3-9ee1-43aa-950f-48258ce9f3db","type":"CustomJS"},"end":365,"start":0,"step":5,"title":"days","value":0},"id":"be3a5422-7be2-40e2-a5ff-5487987f0681","type":"Slider"},{"attributes":{"plot":{"id":"e313a20b-1c9c-4e6b-add4-9c7c7858adcd","subtype":"Figure","type":"Plot"},"ticker":{"id":"f5e4af9f-8dc2-4211-bdce-fd727df213a8","type":"BasicTicker"},"visible":false},"id":"1fe05776-794d-42ff-8ed1-419f140f94f8","type":"Grid"},{"attributes":{"formatter":{"id":"b79084a5-3f5e-4d2d-adb5-038e677bc194","type":"BasicTickFormatter"},"plot":{"id":"e313a20b-1c9c-4e6b-add4-9c7c7858adcd","subtype":"Figure","type":"Plot"},"ticker":{"id":"c685259b-16e4-497e-a852-789d23b71339","type":"BasicTicker"},"visible":false},"id":"bb6341ff-528b-4495-ac81-f05842810a0e","type":"LinearAxis"}],"root_ids":["726acf1b-aa1b-441e-b955-7ed91fb2e3b0"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"06104493-ac88-4b9b-9e80-3864d8ec67a3","roots":{"726acf1b-aa1b-441e-b955-7ed91fb2e3b0":"db8c822a-8471-4676-8001-c3965b3acc37"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);

                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-tables-0.13.0.min.css");
        }
      ];

      function run_inline_js() {

        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }

      }

      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
