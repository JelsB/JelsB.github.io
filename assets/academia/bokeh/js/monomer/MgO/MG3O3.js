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
      };var element = document.getElementById("9891fe35-ec84-4b7a-a4cc-d1536329808a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9891fe35-ec84-4b7a-a4cc-d1536329808a' but no matching script tag was found. ")
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

                  var docs_json = '{"dd2b6400-c849-441b-9331-992fe3a38695":{"roots":{"references":[{"attributes":{"formatter":{"id":"a7520b46-e5cd-4c1b-97be-96f9a4890ab2","type":"BasicTickFormatter"},"plot":{"id":"5a21e1cb-2381-45e6-aeaf-0c2e2f3545d3","subtype":"Figure","type":"Plot"},"ticker":{"id":"4ed5f63b-2d8c-4251-a1c1-3d8f8aa34102","type":"BasicTicker"},"visible":false},"id":"4ba28f94-aa70-4178-aafe-f157d8a432bd","type":"LinearAxis"},{"attributes":{},"id":"31d5ca84-53ca-4b2c-92e9-09280afa1eef","type":"Selection"},{"attributes":{"plot":null,"text":""},"id":"cc197a32-22a5-409b-b0a5-b6c910efb552","type":"Title"},{"attributes":{"data_source":{"id":"6fe03393-9088-4c85-8e1c-8678a9e0de40","type":"ColumnDataSource"},"glyph":{"id":"7ac287ac-cad5-4e5c-9c69-393729bb66e7","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0bb9adb0-c486-44ab-9b85-f13700509060","type":"ImageURL"},"selection_glyph":null,"view":{"id":"1970a904-3f04-4a47-bcb8-4449b42163a6","type":"CDSView"}},"id":"95d258dd-8f50-428e-8d0f-caa0a52c9852","type":"GlyphRenderer"},{"attributes":{},"id":"ed41dba9-9d53-4597-bcf7-019f96b537aa","type":"BasicTickFormatter"},{"attributes":{},"id":"75745825-525d-4da9-bb0c-5b573115efa7","type":"LinearScale"},{"attributes":{"callback":null,"data":{"url_full":["/assets/academia/bokeh/figs/monomer/MgO/MG3O3_000.png"],"url_num":["000"]},"selected":{"id":"31d5ca84-53ca-4b2c-92e9-09280afa1eef","type":"Selection"},"selection_policy":{"id":"6704f797-3cde-44ef-a605-12c91a310228","type":"UnionRenderers"}},"id":"6fe03393-9088-4c85-8e1c-8678a9e0de40","type":"ColumnDataSource"},{"attributes":{"source":{"id":"6fe03393-9088-4c85-8e1c-8678a9e0de40","type":"ColumnDataSource"}},"id":"1970a904-3f04-4a47-bcb8-4449b42163a6","type":"CDSView"},{"attributes":{"args":{"source":{"id":"6fe03393-9088-4c85-8e1c-8678a9e0de40","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value/5\\n        var file_name = data[&#x27;url_full&#x27;]\\n        var file_num = data[&#x27;url_num&#x27;]\\n        var f_string = f.toString().padStart(3, &#x27;0&#x27;)\\n        file_name[0] = file_name[0].replace(file_num[0], f_string)\\n        file_num[0] = f_string\\n        source.change.emit();\\n        "},"id":"2fc00a77-712f-4425-afc8-566d54d6e728","type":"CustomJS"},{"attributes":{},"id":"4ed5f63b-2d8c-4251-a1c1-3d8f8aa34102","type":"BasicTicker"},{"attributes":{"below":[{"id":"4ba28f94-aa70-4178-aafe-f157d8a432bd","type":"LinearAxis"}],"left":[{"id":"4097c835-6621-46cb-acd5-68eb33052197","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"4ba28f94-aa70-4178-aafe-f157d8a432bd","type":"LinearAxis"},{"id":"231adae0-5c3a-40ab-860d-6db5378c051c","type":"Grid"},{"id":"4097c835-6621-46cb-acd5-68eb33052197","type":"LinearAxis"},{"id":"2b8a5545-666d-40d3-8f75-8cec8be17b30","type":"Grid"},{"id":"95d258dd-8f50-428e-8d0f-caa0a52c9852","type":"GlyphRenderer"}],"title":{"id":"cc197a32-22a5-409b-b0a5-b6c910efb552","type":"Title"},"toolbar":{"id":"afd63991-a0e1-43fa-8b67-1488ce69db53","type":"Toolbar"},"x_range":{"id":"3c9b55fb-9372-410f-a8ab-15bf95e0b463","type":"Range1d"},"x_scale":{"id":"75745825-525d-4da9-bb0c-5b573115efa7","type":"LinearScale"},"y_range":{"id":"629d50cf-f67d-4fd4-88b5-2fb2c2856ba1","type":"Range1d"},"y_scale":{"id":"2153bce3-ab03-4d71-a338-9ab8cd94a46b","type":"LinearScale"}},"id":"5a21e1cb-2381-45e6-aeaf-0c2e2f3545d3","subtype":"Figure","type":"Plot"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"0bb9adb0-c486-44ab-9b85-f13700509060","type":"ImageURL"},{"attributes":{"dimension":1,"plot":{"id":"5a21e1cb-2381-45e6-aeaf-0c2e2f3545d3","subtype":"Figure","type":"Plot"},"ticker":{"id":"dbbf45d6-2f30-45f9-b634-3f4cc6d8f134","type":"BasicTicker"},"visible":false},"id":"2b8a5545-666d-40d3-8f75-8cec8be17b30","type":"Grid"},{"attributes":{"formatter":{"id":"ed41dba9-9d53-4597-bcf7-019f96b537aa","type":"BasicTickFormatter"},"plot":{"id":"5a21e1cb-2381-45e6-aeaf-0c2e2f3545d3","subtype":"Figure","type":"Plot"},"ticker":{"id":"dbbf45d6-2f30-45f9-b634-3f4cc6d8f134","type":"BasicTicker"},"visible":false},"id":"4097c835-6621-46cb-acd5-68eb33052197","type":"LinearAxis"},{"attributes":{"callback":null},"id":"629d50cf-f67d-4fd4-88b5-2fb2c2856ba1","type":"Range1d"},{"attributes":{"children":[{"id":"6d0aa6d7-8793-4bcb-b53e-834f6ff393e6","type":"WidgetBox"},{"id":"5a21e1cb-2381-45e6-aeaf-0c2e2f3545d3","subtype":"Figure","type":"Plot"}]},"id":"055afbc5-e8e2-4961-a671-72ee33b0a647","type":"Column"},{"attributes":{"plot":{"id":"5a21e1cb-2381-45e6-aeaf-0c2e2f3545d3","subtype":"Figure","type":"Plot"},"ticker":{"id":"4ed5f63b-2d8c-4251-a1c1-3d8f8aa34102","type":"BasicTicker"},"visible":false},"id":"231adae0-5c3a-40ab-860d-6db5378c051c","type":"Grid"},{"attributes":{},"id":"dbbf45d6-2f30-45f9-b634-3f4cc6d8f134","type":"BasicTicker"},{"attributes":{},"id":"a7520b46-e5cd-4c1b-97be-96f9a4890ab2","type":"BasicTickFormatter"},{"attributes":{},"id":"2153bce3-ab03-4d71-a338-9ab8cd94a46b","type":"LinearScale"},{"attributes":{"callback":null},"id":"3c9b55fb-9372-410f-a8ab-15bf95e0b463","type":"Range1d"},{"attributes":{},"id":"6704f797-3cde-44ef-a605-12c91a310228","type":"UnionRenderers"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"7ac287ac-cad5-4e5c-9c69-393729bb66e7","type":"ImageURL"},{"attributes":{"callback":{"id":"2fc00a77-712f-4425-afc8-566d54d6e728","type":"CustomJS"},"end":365,"start":0,"step":5,"title":"days","value":0},"id":"9669e595-5d1b-4cc0-8b9e-aea1b8ffe348","type":"Slider"},{"attributes":{"children":[{"id":"9669e595-5d1b-4cc0-8b9e-aea1b8ffe348","type":"Slider"}]},"id":"6d0aa6d7-8793-4bcb-b53e-834f6ff393e6","type":"WidgetBox"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"afd63991-a0e1-43fa-8b67-1488ce69db53","type":"Toolbar"}],"root_ids":["055afbc5-e8e2-4961-a671-72ee33b0a647"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"dd2b6400-c849-441b-9331-992fe3a38695","roots":{"055afbc5-e8e2-4961-a671-72ee33b0a647":"9891fe35-ec84-4b7a-a4cc-d1536329808a"}}];
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
