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
      };var element = document.getElementById("eb03bbc5-00c8-4e03-b541-81dc3d203d4a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'eb03bbc5-00c8-4e03-b541-81dc3d203d4a' but no matching script tag was found. ")
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

                  var docs_json = '{"54abe629-0ec7-4ca5-82eb-cc04bf159a26":{"roots":{"references":[{"attributes":{"data_source":{"id":"9b92370c-472f-47b2-9c89-196afdb59e16","type":"ColumnDataSource"},"glyph":{"id":"19913fe8-c815-4512-9db2-f6f90dcf643c","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f440532c-1635-40d5-9c86-ac9f19fffa09","type":"ImageURL"},"selection_glyph":null,"view":{"id":"e016f50e-acd0-4c7e-8b0b-07576f7107e9","type":"CDSView"}},"id":"47f6c4bd-494b-451e-a54c-e7b9c8830ef3","type":"GlyphRenderer"},{"attributes":{},"id":"98b58057-3e32-41cb-9117-75b66228c7e0","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"9b92370c-472f-47b2-9c89-196afdb59e16","type":"ColumnDataSource"}},"id":"e016f50e-acd0-4c7e-8b0b-07576f7107e9","type":"CDSView"},{"attributes":{"callback":null,"data":{"url_full":["/assets/academia/bokeh/figs/monomer/TiO2/TI2O4_000.png"],"url_num":["000"]},"selected":{"id":"df5bd5cc-17e9-4040-8204-7bd3d8aa7ce0","type":"Selection"},"selection_policy":{"id":"e33b7ee6-c73d-4d0d-9322-d9af77b38214","type":"UnionRenderers"}},"id":"9b92370c-472f-47b2-9c89-196afdb59e16","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"9147d04e-143b-4165-a91d-a75e5b747769","type":"Toolbar"},{"attributes":{"callback":{"id":"98b29e54-c795-4edf-aa3d-ce1d3d7a1db1","type":"CustomJS"},"end":365,"start":0,"step":5,"title":"days","value":0},"id":"2314fb3c-fa24-49a1-a84c-bde2cc55af4a","type":"Slider"},{"attributes":{"children":[{"id":"53f22907-f068-49ee-9d23-f3c51c457828","type":"WidgetBox"},{"id":"97de64af-6b20-4d20-a833-3031a1488b0a","subtype":"Figure","type":"Plot"}]},"id":"832bc9db-5b2f-4342-a347-2e9d736ee239","type":"Column"},{"attributes":{"children":[{"id":"2314fb3c-fa24-49a1-a84c-bde2cc55af4a","type":"Slider"}]},"id":"53f22907-f068-49ee-9d23-f3c51c457828","type":"WidgetBox"},{"attributes":{"callback":null},"id":"c5a2041b-49b0-4c47-abca-dd210108331e","type":"Range1d"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"19913fe8-c815-4512-9db2-f6f90dcf643c","type":"ImageURL"},{"attributes":{"plot":{"id":"97de64af-6b20-4d20-a833-3031a1488b0a","subtype":"Figure","type":"Plot"},"ticker":{"id":"230a9ae8-e70d-4142-9118-402cfc61956a","type":"BasicTicker"},"visible":false},"id":"3224757e-8a4a-4898-87fe-43707eb1d8ab","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"00012858-4eff-41b9-994c-4a4333928692","type":"Title"},{"attributes":{"callback":null},"id":"99ce3e01-148a-4bb9-b63a-9d5f283cac5b","type":"Range1d"},{"attributes":{},"id":"eb576d26-db71-4e54-b56d-f2f97c2b1c9a","type":"LinearScale"},{"attributes":{},"id":"6a7d6ae0-6be5-42f7-8d8f-cfb1b18b2504","type":"LinearScale"},{"attributes":{},"id":"230a9ae8-e70d-4142-9118-402cfc61956a","type":"BasicTicker"},{"attributes":{},"id":"e33b7ee6-c73d-4d0d-9322-d9af77b38214","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"98b58057-3e32-41cb-9117-75b66228c7e0","type":"BasicTickFormatter"},"plot":{"id":"97de64af-6b20-4d20-a833-3031a1488b0a","subtype":"Figure","type":"Plot"},"ticker":{"id":"230a9ae8-e70d-4142-9118-402cfc61956a","type":"BasicTicker"},"visible":false},"id":"7afdee36-dfec-4e8b-9a01-8b78675a3679","type":"LinearAxis"},{"attributes":{"args":{"source":{"id":"9b92370c-472f-47b2-9c89-196afdb59e16","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value/5\\n        var file_name = data[&#x27;url_full&#x27;]\\n        var file_num = data[&#x27;url_num&#x27;]\\n        var f_string = f.toString().padStart(3, &#x27;0&#x27;)\\n        file_name[0] = file_name[0].replace(file_num[0], f_string)\\n        file_num[0] = f_string\\n        source.change.emit();\\n        "},"id":"98b29e54-c795-4edf-aa3d-ce1d3d7a1db1","type":"CustomJS"},{"attributes":{"dimension":1,"plot":{"id":"97de64af-6b20-4d20-a833-3031a1488b0a","subtype":"Figure","type":"Plot"},"ticker":{"id":"fd6d573f-318e-48ac-a508-964d61ec318d","type":"BasicTicker"},"visible":false},"id":"336d98d3-07f3-4919-959f-3d634dfc8a0b","type":"Grid"},{"attributes":{},"id":"71273349-496c-41cc-8a04-477c994852b6","type":"BasicTickFormatter"},{"attributes":{},"id":"fd6d573f-318e-48ac-a508-964d61ec318d","type":"BasicTicker"},{"attributes":{"below":[{"id":"7afdee36-dfec-4e8b-9a01-8b78675a3679","type":"LinearAxis"}],"left":[{"id":"f8a7b86f-3e06-45c2-8c77-9585a91d9d04","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"7afdee36-dfec-4e8b-9a01-8b78675a3679","type":"LinearAxis"},{"id":"3224757e-8a4a-4898-87fe-43707eb1d8ab","type":"Grid"},{"id":"f8a7b86f-3e06-45c2-8c77-9585a91d9d04","type":"LinearAxis"},{"id":"336d98d3-07f3-4919-959f-3d634dfc8a0b","type":"Grid"},{"id":"47f6c4bd-494b-451e-a54c-e7b9c8830ef3","type":"GlyphRenderer"}],"title":{"id":"00012858-4eff-41b9-994c-4a4333928692","type":"Title"},"toolbar":{"id":"9147d04e-143b-4165-a91d-a75e5b747769","type":"Toolbar"},"x_range":{"id":"99ce3e01-148a-4bb9-b63a-9d5f283cac5b","type":"Range1d"},"x_scale":{"id":"6a7d6ae0-6be5-42f7-8d8f-cfb1b18b2504","type":"LinearScale"},"y_range":{"id":"c5a2041b-49b0-4c47-abca-dd210108331e","type":"Range1d"},"y_scale":{"id":"eb576d26-db71-4e54-b56d-f2f97c2b1c9a","type":"LinearScale"}},"id":"97de64af-6b20-4d20-a833-3031a1488b0a","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"71273349-496c-41cc-8a04-477c994852b6","type":"BasicTickFormatter"},"plot":{"id":"97de64af-6b20-4d20-a833-3031a1488b0a","subtype":"Figure","type":"Plot"},"ticker":{"id":"fd6d573f-318e-48ac-a508-964d61ec318d","type":"BasicTicker"},"visible":false},"id":"f8a7b86f-3e06-45c2-8c77-9585a91d9d04","type":"LinearAxis"},{"attributes":{},"id":"df5bd5cc-17e9-4040-8204-7bd3d8aa7ce0","type":"Selection"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"f440532c-1635-40d5-9c86-ac9f19fffa09","type":"ImageURL"}],"root_ids":["832bc9db-5b2f-4342-a347-2e9d736ee239"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"54abe629-0ec7-4ca5-82eb-cc04bf159a26","roots":{"832bc9db-5b2f-4342-a347-2e9d736ee239":"eb03bbc5-00c8-4e03-b541-81dc3d203d4a"}}];
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
