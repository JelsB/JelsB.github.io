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
      };var element = document.getElementById("1c1b216a-8777-44c6-b7d7-8540a88ce438");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1c1b216a-8777-44c6-b7d7-8540a88ce438' but no matching script tag was found. ")
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

                  var docs_json = '{"46caa5e0-33fd-4da5-82b2-3d3cabc44270":{"roots":{"references":[{"attributes":{"data_source":{"id":"75303f87-5936-450d-9343-81e3ebd2aae1","type":"ColumnDataSource"},"glyph":{"id":"262b206f-f5e1-410d-9301-7673f306e33f","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5c543829-a018-4b64-b108-0d6257d77087","type":"ImageURL"},"selection_glyph":null,"view":{"id":"aa58798f-3560-40aa-9fc9-425bf83286d6","type":"CDSView"}},"id":"83896009-c312-473a-afef-83defd7fc9a0","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"348d9f28-ad45-4cca-bff5-0566f8937bb3","type":"Range1d"},{"attributes":{},"id":"9dcf42a6-58d1-47b6-9673-4775c8e26ea8","type":"Selection"},{"attributes":{"plot":{"id":"c027c4ad-96ef-4292-a53e-8bcc311b9c84","subtype":"Figure","type":"Plot"},"ticker":{"id":"4ed3da48-b618-4703-9e20-fa99b2a8df4c","type":"BasicTicker"},"visible":false},"id":"cba612f0-16dc-4fe5-9383-72630abfa68c","type":"Grid"},{"attributes":{},"id":"2b5ecb51-8635-4047-aed5-65bdd85f9e30","type":"BasicTicker"},{"attributes":{},"id":"66352ad6-62ee-428a-bf57-8d21ae88935e","type":"BasicTickFormatter"},{"attributes":{},"id":"87f382a3-81a5-4037-b014-87ca7b6f2d0c","type":"UnionRenderers"},{"attributes":{"below":[{"id":"e040ee3a-506c-44b8-b882-3bda7c72831b","type":"LinearAxis"}],"left":[{"id":"a1e0aae8-ab08-4d47-ab46-0f237c73a4fe","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"e040ee3a-506c-44b8-b882-3bda7c72831b","type":"LinearAxis"},{"id":"cba612f0-16dc-4fe5-9383-72630abfa68c","type":"Grid"},{"id":"a1e0aae8-ab08-4d47-ab46-0f237c73a4fe","type":"LinearAxis"},{"id":"a7d1e7dc-546e-4896-bccb-9278e1de220e","type":"Grid"},{"id":"83896009-c312-473a-afef-83defd7fc9a0","type":"GlyphRenderer"}],"title":{"id":"a940e942-0770-4953-b98b-451cb0567e98","type":"Title"},"toolbar":{"id":"410e041c-e828-4b6b-8e50-13388e49bae1","type":"Toolbar"},"x_range":{"id":"05353881-be91-42df-90cb-ea6b5a630650","type":"Range1d"},"x_scale":{"id":"ceab1fda-759f-47d1-ad0f-4ad156245777","type":"LinearScale"},"y_range":{"id":"348d9f28-ad45-4cca-bff5-0566f8937bb3","type":"Range1d"},"y_scale":{"id":"ef2403dd-9f03-482a-9bf9-417c8bc52825","type":"LinearScale"}},"id":"c027c4ad-96ef-4292-a53e-8bcc311b9c84","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"f763dbce-23c1-4f45-9996-3fb2eef24183","type":"BasicTickFormatter"},"plot":{"id":"c027c4ad-96ef-4292-a53e-8bcc311b9c84","subtype":"Figure","type":"Plot"},"ticker":{"id":"2b5ecb51-8635-4047-aed5-65bdd85f9e30","type":"BasicTicker"},"visible":false},"id":"a1e0aae8-ab08-4d47-ab46-0f237c73a4fe","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"c027c4ad-96ef-4292-a53e-8bcc311b9c84","subtype":"Figure","type":"Plot"},"ticker":{"id":"2b5ecb51-8635-4047-aed5-65bdd85f9e30","type":"BasicTicker"},"visible":false},"id":"a7d1e7dc-546e-4896-bccb-9278e1de220e","type":"Grid"},{"attributes":{"children":[{"id":"b8ffe305-a53b-4dae-b05f-db3686455e53","type":"WidgetBox"},{"id":"c027c4ad-96ef-4292-a53e-8bcc311b9c84","subtype":"Figure","type":"Plot"}]},"id":"03297ea7-441e-489a-a6af-af86b0cf75e4","type":"Column"},{"attributes":{},"id":"f763dbce-23c1-4f45-9996-3fb2eef24183","type":"BasicTickFormatter"},{"attributes":{},"id":"4ed3da48-b618-4703-9e20-fa99b2a8df4c","type":"BasicTicker"},{"attributes":{"formatter":{"id":"66352ad6-62ee-428a-bf57-8d21ae88935e","type":"BasicTickFormatter"},"plot":{"id":"c027c4ad-96ef-4292-a53e-8bcc311b9c84","subtype":"Figure","type":"Plot"},"ticker":{"id":"4ed3da48-b618-4703-9e20-fa99b2a8df4c","type":"BasicTicker"},"visible":false},"id":"e040ee3a-506c-44b8-b882-3bda7c72831b","type":"LinearAxis"},{"attributes":{"callback":{"id":"bafbce69-9787-44b1-a8b5-8ed4fa38dd93","type":"CustomJS"},"end":365,"start":0,"step":5,"title":"days","value":0},"id":"7eb249b9-eb86-44c3-9790-1c0197085a47","type":"Slider"},{"attributes":{"callback":null,"data":{"url_full":["/assets/academia/bokeh/figs/monomer/SiO/SI9O9_000.png"],"url_num":["000"]},"selected":{"id":"9dcf42a6-58d1-47b6-9673-4775c8e26ea8","type":"Selection"},"selection_policy":{"id":"87f382a3-81a5-4037-b014-87ca7b6f2d0c","type":"UnionRenderers"}},"id":"75303f87-5936-450d-9343-81e3ebd2aae1","type":"ColumnDataSource"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"262b206f-f5e1-410d-9301-7673f306e33f","type":"ImageURL"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"410e041c-e828-4b6b-8e50-13388e49bae1","type":"Toolbar"},{"attributes":{"callback":null},"id":"05353881-be91-42df-90cb-ea6b5a630650","type":"Range1d"},{"attributes":{},"id":"ceab1fda-759f-47d1-ad0f-4ad156245777","type":"LinearScale"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"5c543829-a018-4b64-b108-0d6257d77087","type":"ImageURL"},{"attributes":{"children":[{"id":"7eb249b9-eb86-44c3-9790-1c0197085a47","type":"Slider"}]},"id":"b8ffe305-a53b-4dae-b05f-db3686455e53","type":"WidgetBox"},{"attributes":{"source":{"id":"75303f87-5936-450d-9343-81e3ebd2aae1","type":"ColumnDataSource"}},"id":"aa58798f-3560-40aa-9fc9-425bf83286d6","type":"CDSView"},{"attributes":{"args":{"source":{"id":"75303f87-5936-450d-9343-81e3ebd2aae1","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value/5\\n        var file_name = data[&#x27;url_full&#x27;]\\n        var file_num = data[&#x27;url_num&#x27;]\\n        var f_string = f.toString().padStart(3, &#x27;0&#x27;)\\n        file_name[0] = file_name[0].replace(file_num[0], f_string)\\n        file_num[0] = f_string\\n        source.change.emit();\\n        "},"id":"bafbce69-9787-44b1-a8b5-8ed4fa38dd93","type":"CustomJS"},{"attributes":{"plot":null,"text":""},"id":"a940e942-0770-4953-b98b-451cb0567e98","type":"Title"},{"attributes":{},"id":"ef2403dd-9f03-482a-9bf9-417c8bc52825","type":"LinearScale"}],"root_ids":["03297ea7-441e-489a-a6af-af86b0cf75e4"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"46caa5e0-33fd-4da5-82b2-3d3cabc44270","roots":{"03297ea7-441e-489a-a6af-af86b0cf75e4":"1c1b216a-8777-44c6-b7d7-8540a88ce438"}}];
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
