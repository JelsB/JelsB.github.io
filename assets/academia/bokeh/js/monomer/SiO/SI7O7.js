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
      };var element = document.getElementById("050b68b9-9fe5-420c-8b59-051265a56102");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '050b68b9-9fe5-420c-8b59-051265a56102' but no matching script tag was found. ")
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

                  var docs_json = '{"9983bba4-c463-4bc7-b6eb-af73d0b19efc":{"roots":{"references":[{"attributes":{"formatter":{"id":"d3764ab2-f9ab-44eb-a48c-0f8ab2091640","type":"BasicTickFormatter"},"plot":{"id":"850bc922-a7a6-4da4-b612-95690ee262ae","subtype":"Figure","type":"Plot"},"ticker":{"id":"12ddcd51-cf1e-4b64-8209-f64ae4e725ca","type":"BasicTicker"},"visible":false},"id":"a51fb285-69ab-42ba-9d70-d1a550196bbb","type":"LinearAxis"},{"attributes":{"source":{"id":"773f3657-b6f0-4ed7-ba6b-1a0db67499f3","type":"ColumnDataSource"}},"id":"60738f4c-a1ba-4e2c-b7fb-09cf16cb2c01","type":"CDSView"},{"attributes":{"callback":null},"id":"05c562bb-270d-4ba2-9b7d-becea915466c","type":"Range1d"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"72ffa86b-a25d-4131-a834-001d42220fc4","type":"ImageURL"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"83a0aa1b-3308-4ad6-a620-5b41b74a86b4","type":"ImageURL"},{"attributes":{},"id":"315cd871-4860-4700-954e-c203b8478024","type":"LinearScale"},{"attributes":{"data_source":{"id":"773f3657-b6f0-4ed7-ba6b-1a0db67499f3","type":"ColumnDataSource"},"glyph":{"id":"83a0aa1b-3308-4ad6-a620-5b41b74a86b4","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72ffa86b-a25d-4131-a834-001d42220fc4","type":"ImageURL"},"selection_glyph":null,"view":{"id":"60738f4c-a1ba-4e2c-b7fb-09cf16cb2c01","type":"CDSView"}},"id":"5c33f82f-aefa-402e-84cd-3aa100b0a0a0","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"06923516-f345-4325-9198-57dafe94be2a","type":"Range1d"},{"attributes":{},"id":"6af8ca10-98d1-4c82-9751-b22e963cc97c","type":"BasicTicker"},{"attributes":{"below":[{"id":"a51fb285-69ab-42ba-9d70-d1a550196bbb","type":"LinearAxis"}],"left":[{"id":"2bf7ec90-a317-405b-8515-8d41233da506","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"a51fb285-69ab-42ba-9d70-d1a550196bbb","type":"LinearAxis"},{"id":"172e4650-6bc7-42a6-9c34-a4f930f14d6a","type":"Grid"},{"id":"2bf7ec90-a317-405b-8515-8d41233da506","type":"LinearAxis"},{"id":"48d81efe-fd77-4218-8c37-39eb1a98229d","type":"Grid"},{"id":"5c33f82f-aefa-402e-84cd-3aa100b0a0a0","type":"GlyphRenderer"}],"title":{"id":"f16981ab-897f-4ac4-bfd5-c892f70fe73b","type":"Title"},"toolbar":{"id":"51d928e1-3fc1-4174-8d50-0948095d0623","type":"Toolbar"},"x_range":{"id":"06923516-f345-4325-9198-57dafe94be2a","type":"Range1d"},"x_scale":{"id":"fb4ec51d-9424-492f-8ad2-e9c5401fb3cc","type":"LinearScale"},"y_range":{"id":"05c562bb-270d-4ba2-9b7d-becea915466c","type":"Range1d"},"y_scale":{"id":"315cd871-4860-4700-954e-c203b8478024","type":"LinearScale"}},"id":"850bc922-a7a6-4da4-b612-95690ee262ae","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"c5cdcdff-3c87-4dae-9c9d-8a78f2138750","type":"Selection"},{"attributes":{"plot":{"id":"850bc922-a7a6-4da4-b612-95690ee262ae","subtype":"Figure","type":"Plot"},"ticker":{"id":"12ddcd51-cf1e-4b64-8209-f64ae4e725ca","type":"BasicTicker"},"visible":false},"id":"172e4650-6bc7-42a6-9c34-a4f930f14d6a","type":"Grid"},{"attributes":{},"id":"6182190a-6eeb-4aec-a67a-af3c5be27f40","type":"BasicTickFormatter"},{"attributes":{},"id":"12ddcd51-cf1e-4b64-8209-f64ae4e725ca","type":"BasicTicker"},{"attributes":{},"id":"d3764ab2-f9ab-44eb-a48c-0f8ab2091640","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"37200774-abb5-46a5-aa9c-7d465b971c37","type":"Slider"}]},"id":"9e29dc1d-8386-4a0d-bf18-47d4e3030165","type":"WidgetBox"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"51d928e1-3fc1-4174-8d50-0948095d0623","type":"Toolbar"},{"attributes":{"children":[{"id":"9e29dc1d-8386-4a0d-bf18-47d4e3030165","type":"WidgetBox"},{"id":"850bc922-a7a6-4da4-b612-95690ee262ae","subtype":"Figure","type":"Plot"}]},"id":"39623aab-f90c-4fd0-bbee-89c85d90e684","type":"Column"},{"attributes":{"callback":{"id":"edc48c22-e7bf-4eba-8aa6-03a3961e1d77","type":"CustomJS"},"end":365,"start":0,"step":5,"title":"days","value":0},"id":"37200774-abb5-46a5-aa9c-7d465b971c37","type":"Slider"},{"attributes":{"dimension":1,"plot":{"id":"850bc922-a7a6-4da4-b612-95690ee262ae","subtype":"Figure","type":"Plot"},"ticker":{"id":"6af8ca10-98d1-4c82-9751-b22e963cc97c","type":"BasicTicker"},"visible":false},"id":"48d81efe-fd77-4218-8c37-39eb1a98229d","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"f16981ab-897f-4ac4-bfd5-c892f70fe73b","type":"Title"},{"attributes":{"args":{"source":{"id":"773f3657-b6f0-4ed7-ba6b-1a0db67499f3","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value/5\\n        var file_name = data[&#x27;url_full&#x27;]\\n        var file_num = data[&#x27;url_num&#x27;]\\n        var f_string = f.toString().padStart(3, &#x27;0&#x27;)\\n        file_name[0] = file_name[0].replace(file_num[0], f_string)\\n        file_num[0] = f_string\\n        source.change.emit();\\n        "},"id":"edc48c22-e7bf-4eba-8aa6-03a3961e1d77","type":"CustomJS"},{"attributes":{"callback":null,"data":{"url_full":["/assets/academia/bokeh/figs/monomer/SiO/SI7O7_000.png"],"url_num":["000"]},"selected":{"id":"c5cdcdff-3c87-4dae-9c9d-8a78f2138750","type":"Selection"},"selection_policy":{"id":"11e56c69-f922-4c8e-9b7f-995d65656502","type":"UnionRenderers"}},"id":"773f3657-b6f0-4ed7-ba6b-1a0db67499f3","type":"ColumnDataSource"},{"attributes":{},"id":"fb4ec51d-9424-492f-8ad2-e9c5401fb3cc","type":"LinearScale"},{"attributes":{"formatter":{"id":"6182190a-6eeb-4aec-a67a-af3c5be27f40","type":"BasicTickFormatter"},"plot":{"id":"850bc922-a7a6-4da4-b612-95690ee262ae","subtype":"Figure","type":"Plot"},"ticker":{"id":"6af8ca10-98d1-4c82-9751-b22e963cc97c","type":"BasicTicker"},"visible":false},"id":"2bf7ec90-a317-405b-8515-8d41233da506","type":"LinearAxis"},{"attributes":{},"id":"11e56c69-f922-4c8e-9b7f-995d65656502","type":"UnionRenderers"}],"root_ids":["39623aab-f90c-4fd0-bbee-89c85d90e684"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"9983bba4-c463-4bc7-b6eb-af73d0b19efc","roots":{"39623aab-f90c-4fd0-bbee-89c85d90e684":"050b68b9-9fe5-420c-8b59-051265a56102"}}];
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
