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
      };var element = document.getElementById("775c07ca-1c77-4cf8-aedd-db0dd312d8ca");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '775c07ca-1c77-4cf8-aedd-db0dd312d8ca' but no matching script tag was found. ")
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

                  var docs_json = '{"1040a739-563d-4433-ad00-43828091cfba":{"roots":{"references":[{"attributes":{"data_source":{"id":"e5bfa3a4-e743-48a5-9df3-2bab31c6e0f3","type":"ColumnDataSource"},"glyph":{"id":"e946be16-41a0-4b4a-b9f8-402159aa5fe2","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d216d570-ee96-422d-8111-dc98402bad30","type":"ImageURL"},"selection_glyph":null,"view":{"id":"363949fa-0e5c-4ab4-8502-94d12191f2f1","type":"CDSView"}},"id":"c42757da-f625-46ff-9866-d4c68b1e4cb5","type":"GlyphRenderer"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"e946be16-41a0-4b4a-b9f8-402159aa5fe2","type":"ImageURL"},{"attributes":{},"id":"99010cb3-c4d2-48bc-b507-e9f2699e04a2","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"7926cac4-99ba-4023-a4b1-054314b60ee9","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"e0743984-1ac1-4d0e-a49c-fa33cbb3df05","subtype":"Figure","type":"Plot"},"ticker":{"id":"bd636642-f01e-4d0d-a2ce-6dc832173242","type":"BasicTicker"},"visible":false},"id":"b0330452-e71d-4904-95ec-8961b7e05e85","type":"Grid"},{"attributes":{"args":{"source":{"id":"e5bfa3a4-e743-48a5-9df3-2bab31c6e0f3","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value/5\\n        var file_name = data[&#x27;url_full&#x27;]\\n        var file_num = data[&#x27;url_num&#x27;]\\n        var f_string = f.toString().padStart(3, &#x27;0&#x27;)\\n        file_name[0] = file_name[0].replace(file_num[0], f_string)\\n        file_num[0] = f_string\\n        source.change.emit();\\n        "},"id":"7b27e527-4be7-4446-90dd-b2684f96de24","type":"CustomJS"},{"attributes":{"callback":null,"data":{"url_full":["/assets/academia/bokeh/figs/monomer/SiO/SI8O8_000.png"],"url_num":["000"]},"selected":{"id":"7256692f-32bf-40ba-9c87-186f2a67ddbf","type":"Selection"},"selection_policy":{"id":"f163f518-ec7d-408f-8835-90dc067fd259","type":"UnionRenderers"}},"id":"e5bfa3a4-e743-48a5-9df3-2bab31c6e0f3","type":"ColumnDataSource"},{"attributes":{"callback":{"id":"7b27e527-4be7-4446-90dd-b2684f96de24","type":"CustomJS"},"end":365,"start":0,"step":5,"title":"days","value":0},"id":"dc692576-2342-4a33-9442-b12ba8e9ac11","type":"Slider"},{"attributes":{},"id":"bd636642-f01e-4d0d-a2ce-6dc832173242","type":"BasicTicker"},{"attributes":{"formatter":{"id":"135f348c-0206-483e-92e3-5037d9de94b4","type":"BasicTickFormatter"},"plot":{"id":"e0743984-1ac1-4d0e-a49c-fa33cbb3df05","subtype":"Figure","type":"Plot"},"ticker":{"id":"bd636642-f01e-4d0d-a2ce-6dc832173242","type":"BasicTicker"},"visible":false},"id":"5c53eb11-1eff-4282-bdd9-2410fcb2d043","type":"LinearAxis"},{"attributes":{},"id":"7256692f-32bf-40ba-9c87-186f2a67ddbf","type":"Selection"},{"attributes":{},"id":"f163f518-ec7d-408f-8835-90dc067fd259","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"437b3c97-7a64-4764-b0a1-50c940fd8ea9","type":"Range1d"},{"attributes":{"children":[{"id":"b128b0e6-15ba-4bd9-bf2e-cbe26fd233a7","type":"WidgetBox"},{"id":"e0743984-1ac1-4d0e-a49c-fa33cbb3df05","subtype":"Figure","type":"Plot"}]},"id":"5969e0ef-b9c6-48b3-aef7-0bdb77fa11e3","type":"Column"},{"attributes":{},"id":"7f25f8f9-3a8b-477e-a6fb-fd1268a6e3d9","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"e0743984-1ac1-4d0e-a49c-fa33cbb3df05","subtype":"Figure","type":"Plot"},"ticker":{"id":"99010cb3-c4d2-48bc-b507-e9f2699e04a2","type":"BasicTicker"},"visible":false},"id":"37d80b2f-5f1d-4603-9c8e-3242dd0a3287","type":"Grid"},{"attributes":{"source":{"id":"e5bfa3a4-e743-48a5-9df3-2bab31c6e0f3","type":"ColumnDataSource"}},"id":"363949fa-0e5c-4ab4-8502-94d12191f2f1","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"dd110de5-8823-424e-bdd9-a1317ac42d32","type":"Toolbar"},{"attributes":{"callback":null},"id":"2666bea5-8f2a-41b0-a717-abff4bcc1d80","type":"Range1d"},{"attributes":{"children":[{"id":"dc692576-2342-4a33-9442-b12ba8e9ac11","type":"Slider"}]},"id":"b128b0e6-15ba-4bd9-bf2e-cbe26fd233a7","type":"WidgetBox"},{"attributes":{},"id":"1c8733e7-d577-4fdc-b50c-598d378b6383","type":"LinearScale"},{"attributes":{},"id":"135f348c-0206-483e-92e3-5037d9de94b4","type":"BasicTickFormatter"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"d216d570-ee96-422d-8111-dc98402bad30","type":"ImageURL"},{"attributes":{},"id":"10dcc135-6956-4b36-97e7-f4ef965e233f","type":"LinearScale"},{"attributes":{"formatter":{"id":"7f25f8f9-3a8b-477e-a6fb-fd1268a6e3d9","type":"BasicTickFormatter"},"plot":{"id":"e0743984-1ac1-4d0e-a49c-fa33cbb3df05","subtype":"Figure","type":"Plot"},"ticker":{"id":"99010cb3-c4d2-48bc-b507-e9f2699e04a2","type":"BasicTicker"},"visible":false},"id":"8c12ed52-ad79-4b7c-aaf6-41cca8facdd6","type":"LinearAxis"},{"attributes":{"below":[{"id":"8c12ed52-ad79-4b7c-aaf6-41cca8facdd6","type":"LinearAxis"}],"left":[{"id":"5c53eb11-1eff-4282-bdd9-2410fcb2d043","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"8c12ed52-ad79-4b7c-aaf6-41cca8facdd6","type":"LinearAxis"},{"id":"37d80b2f-5f1d-4603-9c8e-3242dd0a3287","type":"Grid"},{"id":"5c53eb11-1eff-4282-bdd9-2410fcb2d043","type":"LinearAxis"},{"id":"b0330452-e71d-4904-95ec-8961b7e05e85","type":"Grid"},{"id":"c42757da-f625-46ff-9866-d4c68b1e4cb5","type":"GlyphRenderer"}],"title":{"id":"7926cac4-99ba-4023-a4b1-054314b60ee9","type":"Title"},"toolbar":{"id":"dd110de5-8823-424e-bdd9-a1317ac42d32","type":"Toolbar"},"x_range":{"id":"2666bea5-8f2a-41b0-a717-abff4bcc1d80","type":"Range1d"},"x_scale":{"id":"10dcc135-6956-4b36-97e7-f4ef965e233f","type":"LinearScale"},"y_range":{"id":"437b3c97-7a64-4764-b0a1-50c940fd8ea9","type":"Range1d"},"y_scale":{"id":"1c8733e7-d577-4fdc-b50c-598d378b6383","type":"LinearScale"}},"id":"e0743984-1ac1-4d0e-a49c-fa33cbb3df05","subtype":"Figure","type":"Plot"}],"root_ids":["5969e0ef-b9c6-48b3-aef7-0bdb77fa11e3"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"1040a739-563d-4433-ad00-43828091cfba","roots":{"5969e0ef-b9c6-48b3-aef7-0bdb77fa11e3":"775c07ca-1c77-4cf8-aedd-db0dd312d8ca"}}];
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
