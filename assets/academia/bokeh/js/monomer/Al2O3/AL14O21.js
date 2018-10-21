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
      };var element = document.getElementById("223a213a-9d6c-495f-9bcd-0ac4deee58d5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '223a213a-9d6c-495f-9bcd-0ac4deee58d5' but no matching script tag was found. ")
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

                  var docs_json = '{"e2f85721-48e8-466b-b4a6-b2a82a550a4f":{"roots":{"references":[{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"8edad01f-ab33-4b61-a38a-28bc42cd2103","type":"ImageURL"},{"attributes":{},"id":"9da2202c-bb02-4afe-be09-4bb5d417427a","type":"BasicTicker"},{"attributes":{"source":{"id":"ba7235a5-8320-49cc-93a3-67c6a918b209","type":"ColumnDataSource"}},"id":"11497cf7-1698-4ab1-996b-d3bc6adc1ef4","type":"CDSView"},{"attributes":{},"id":"4ac1d7ee-1d00-4634-a0ec-bf42b91ecf0c","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"d3098bf2-c21f-402f-b112-fde7eda4121c","type":"Toolbar"},{"attributes":{"data_source":{"id":"ba7235a5-8320-49cc-93a3-67c6a918b209","type":"ColumnDataSource"},"glyph":{"id":"987c0fdc-dbf1-4d18-8fa9-08658761d718","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8edad01f-ab33-4b61-a38a-28bc42cd2103","type":"ImageURL"},"selection_glyph":null,"view":{"id":"11497cf7-1698-4ab1-996b-d3bc6adc1ef4","type":"CDSView"}},"id":"e808621c-f6db-47f3-855f-2169998f87e3","type":"GlyphRenderer"},{"attributes":{"callback":{"id":"d73266ec-af59-4ca7-91f6-611354063e2c","type":"CustomJS"},"end":365,"start":0,"step":5,"title":"days","value":0},"id":"174e3860-5e2f-4f0e-9392-83df20d17463","type":"Slider"},{"attributes":{"callback":null,"data":{"url_full":["/assets/academia/bokeh/figs/monomer/Al2O3/AL14O21_000.png"],"url_num":["000"]},"selected":{"id":"ed999a06-b090-4587-af86-e4aef7cb9926","type":"Selection"},"selection_policy":{"id":"319b458e-44dd-45a1-83e2-1a8ae6c222fd","type":"UnionRenderers"}},"id":"ba7235a5-8320-49cc-93a3-67c6a918b209","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"a3d5b8c2-78ce-4967-acd1-c716159f5d53","type":"WidgetBox"},{"id":"b69805de-fca3-42ae-ae41-ee8351c141d7","subtype":"Figure","type":"Plot"}]},"id":"e7f2e82e-b85c-46e9-a188-a7cf8f252fcf","type":"Column"},{"attributes":{"plot":null,"text":""},"id":"b1d132b9-8754-4192-874c-e8f8e9294f4c","type":"Title"},{"attributes":{"callback":null},"id":"8274e275-3048-4451-ad6f-7b23009d4e90","type":"Range1d"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"987c0fdc-dbf1-4d18-8fa9-08658761d718","type":"ImageURL"},{"attributes":{},"id":"dc60606b-3ea4-486f-aa3e-d15ac7ec04c6","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"b69805de-fca3-42ae-ae41-ee8351c141d7","subtype":"Figure","type":"Plot"},"ticker":{"id":"96a2c396-5a4b-4d6b-923a-cf85104d4287","type":"BasicTicker"},"visible":false},"id":"ab0acc0d-bede-4056-a5b7-53a022cf6864","type":"Grid"},{"attributes":{"children":[{"id":"174e3860-5e2f-4f0e-9392-83df20d17463","type":"Slider"}]},"id":"a3d5b8c2-78ce-4967-acd1-c716159f5d53","type":"WidgetBox"},{"attributes":{"callback":null},"id":"7424a7f2-e6d6-4f92-9f5a-bfc704a88fd1","type":"Range1d"},{"attributes":{"args":{"source":{"id":"ba7235a5-8320-49cc-93a3-67c6a918b209","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value/5\\n        var file_name = data[&#x27;url_full&#x27;]\\n        var file_num = data[&#x27;url_num&#x27;]\\n        var f_string = f.toString().padStart(3, &#x27;0&#x27;)\\n        file_name[0] = file_name[0].replace(file_num[0], f_string)\\n        file_num[0] = f_string\\n        source.change.emit();\\n        "},"id":"d73266ec-af59-4ca7-91f6-611354063e2c","type":"CustomJS"},{"attributes":{},"id":"27f1fad5-33f1-48f1-8b89-ec4f46738f43","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"b69805de-fca3-42ae-ae41-ee8351c141d7","subtype":"Figure","type":"Plot"},"ticker":{"id":"9da2202c-bb02-4afe-be09-4bb5d417427a","type":"BasicTicker"},"visible":false},"id":"a37fd064-2a26-462f-83ee-86755bd97b67","type":"Grid"},{"attributes":{},"id":"319b458e-44dd-45a1-83e2-1a8ae6c222fd","type":"UnionRenderers"},{"attributes":{},"id":"ed999a06-b090-4587-af86-e4aef7cb9926","type":"Selection"},{"attributes":{},"id":"96a2c396-5a4b-4d6b-923a-cf85104d4287","type":"BasicTicker"},{"attributes":{},"id":"03edd48d-7e4f-4681-b8f4-20c2a2390f23","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"03edd48d-7e4f-4681-b8f4-20c2a2390f23","type":"BasicTickFormatter"},"plot":{"id":"b69805de-fca3-42ae-ae41-ee8351c141d7","subtype":"Figure","type":"Plot"},"ticker":{"id":"9da2202c-bb02-4afe-be09-4bb5d417427a","type":"BasicTicker"},"visible":false},"id":"f9069e6e-3e4c-4d01-bf32-31901be955d5","type":"LinearAxis"},{"attributes":{"formatter":{"id":"dc60606b-3ea4-486f-aa3e-d15ac7ec04c6","type":"BasicTickFormatter"},"plot":{"id":"b69805de-fca3-42ae-ae41-ee8351c141d7","subtype":"Figure","type":"Plot"},"ticker":{"id":"96a2c396-5a4b-4d6b-923a-cf85104d4287","type":"BasicTicker"},"visible":false},"id":"fd179dfc-ab02-4f6d-87b2-fa3d18f36ff9","type":"LinearAxis"},{"attributes":{"below":[{"id":"fd179dfc-ab02-4f6d-87b2-fa3d18f36ff9","type":"LinearAxis"}],"left":[{"id":"f9069e6e-3e4c-4d01-bf32-31901be955d5","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"fd179dfc-ab02-4f6d-87b2-fa3d18f36ff9","type":"LinearAxis"},{"id":"ab0acc0d-bede-4056-a5b7-53a022cf6864","type":"Grid"},{"id":"f9069e6e-3e4c-4d01-bf32-31901be955d5","type":"LinearAxis"},{"id":"a37fd064-2a26-462f-83ee-86755bd97b67","type":"Grid"},{"id":"e808621c-f6db-47f3-855f-2169998f87e3","type":"GlyphRenderer"}],"title":{"id":"b1d132b9-8754-4192-874c-e8f8e9294f4c","type":"Title"},"toolbar":{"id":"d3098bf2-c21f-402f-b112-fde7eda4121c","type":"Toolbar"},"x_range":{"id":"8274e275-3048-4451-ad6f-7b23009d4e90","type":"Range1d"},"x_scale":{"id":"4ac1d7ee-1d00-4634-a0ec-bf42b91ecf0c","type":"LinearScale"},"y_range":{"id":"7424a7f2-e6d6-4f92-9f5a-bfc704a88fd1","type":"Range1d"},"y_scale":{"id":"27f1fad5-33f1-48f1-8b89-ec4f46738f43","type":"LinearScale"}},"id":"b69805de-fca3-42ae-ae41-ee8351c141d7","subtype":"Figure","type":"Plot"}],"root_ids":["e7f2e82e-b85c-46e9-a188-a7cf8f252fcf"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"e2f85721-48e8-466b-b4a6-b2a82a550a4f","roots":{"e7f2e82e-b85c-46e9-a188-a7cf8f252fcf":"223a213a-9d6c-495f-9bcd-0ac4deee58d5"}}];
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
