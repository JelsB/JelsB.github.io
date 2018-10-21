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
      };var element = document.getElementById("8cc0146e-981e-4705-b9e8-a8a49311c0c7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8cc0146e-981e-4705-b9e8-a8a49311c0c7' but no matching script tag was found. ")
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

                  var docs_json = '{"3ff2b776-b211-4c77-8327-8ae415c600fa":{"roots":{"references":[{"attributes":{"callback":null},"id":"cc39fe39-9821-4a7a-ac22-ecf6e9038214","type":"Range1d"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"2dd3e314-fb55-45d0-a103-9ab0a61c2672","type":"ImageURL"},{"attributes":{"children":[{"id":"58270380-f59a-40b5-8d8f-a584f45fdfd1","type":"Slider"}]},"id":"ae93ad55-34a4-4be8-89f9-b690134f57cd","type":"WidgetBox"},{"attributes":{"callback":null},"id":"567b37f6-6697-49b5-98e2-db531b0c5d26","type":"Range1d"},{"attributes":{"callback":null,"data":{"url_full":["/assets/academia/bokeh/figs/monomer/TiO2/TIO2_000.png"],"url_num":["000"]},"selected":{"id":"dddda813-22ec-4890-846a-1b77230f4dbe","type":"Selection"},"selection_policy":{"id":"f720474d-4453-4554-bf5e-ef9697f77de5","type":"UnionRenderers"}},"id":"e197fadb-9f26-4b61-a6b2-f0aeba24215e","type":"ColumnDataSource"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"eadca22f-6f34-4ed1-8ea5-acb1a1f086f4","type":"ImageURL"},{"attributes":{},"id":"2d2ab356-39ca-4f49-904f-7db7d1d089c3","type":"LinearScale"},{"attributes":{},"id":"5aba409f-67f4-4418-ab16-0303a423920f","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"ce2b4733-3ee9-44c9-a8d3-2163d56ebcab","type":"Title"},{"attributes":{"children":[{"id":"ae93ad55-34a4-4be8-89f9-b690134f57cd","type":"WidgetBox"},{"id":"810fbddf-fe0e-4c9f-9e97-67effd0053e6","subtype":"Figure","type":"Plot"}]},"id":"f3b7a2c3-a42b-4272-892f-982e76658991","type":"Column"},{"attributes":{},"id":"6b6f9fb6-98dc-41a4-851e-3262677bd43e","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"6b6f9fb6-98dc-41a4-851e-3262677bd43e","type":"BasicTickFormatter"},"plot":{"id":"810fbddf-fe0e-4c9f-9e97-67effd0053e6","subtype":"Figure","type":"Plot"},"ticker":{"id":"37eb99ec-2b2d-4881-8da8-c6ce5ca0ff87","type":"BasicTicker"},"visible":false},"id":"385e82d8-4caa-47f9-9575-6717ac16d8b2","type":"LinearAxis"},{"attributes":{"below":[{"id":"385e82d8-4caa-47f9-9575-6717ac16d8b2","type":"LinearAxis"}],"left":[{"id":"ea27bc35-ddb6-4a43-b447-b0d127b7dee7","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"385e82d8-4caa-47f9-9575-6717ac16d8b2","type":"LinearAxis"},{"id":"deca3777-341b-4ec3-ab52-b9334486e444","type":"Grid"},{"id":"ea27bc35-ddb6-4a43-b447-b0d127b7dee7","type":"LinearAxis"},{"id":"fa8fc178-7e33-45ea-b3be-32e75e66ebf8","type":"Grid"},{"id":"85d67c3a-4799-4f74-832b-37ca930c02ca","type":"GlyphRenderer"}],"title":{"id":"ce2b4733-3ee9-44c9-a8d3-2163d56ebcab","type":"Title"},"toolbar":{"id":"4fd731be-ea26-4799-8f58-8a4022789e80","type":"Toolbar"},"x_range":{"id":"cc39fe39-9821-4a7a-ac22-ecf6e9038214","type":"Range1d"},"x_scale":{"id":"2d2ab356-39ca-4f49-904f-7db7d1d089c3","type":"LinearScale"},"y_range":{"id":"567b37f6-6697-49b5-98e2-db531b0c5d26","type":"Range1d"},"y_scale":{"id":"5aba409f-67f4-4418-ab16-0303a423920f","type":"LinearScale"}},"id":"810fbddf-fe0e-4c9f-9e97-67effd0053e6","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"cabb874a-d342-4bd5-8e8c-10368a977574","type":"BasicTickFormatter"},{"attributes":{},"id":"37eb99ec-2b2d-4881-8da8-c6ce5ca0ff87","type":"BasicTicker"},{"attributes":{},"id":"dddda813-22ec-4890-846a-1b77230f4dbe","type":"Selection"},{"attributes":{"plot":{"id":"810fbddf-fe0e-4c9f-9e97-67effd0053e6","subtype":"Figure","type":"Plot"},"ticker":{"id":"37eb99ec-2b2d-4881-8da8-c6ce5ca0ff87","type":"BasicTicker"},"visible":false},"id":"deca3777-341b-4ec3-ab52-b9334486e444","type":"Grid"},{"attributes":{"callback":{"id":"43223a88-cde9-411b-861c-e6fe5b073487","type":"CustomJS"},"end":365,"start":0,"step":5,"title":"days","value":0},"id":"58270380-f59a-40b5-8d8f-a584f45fdfd1","type":"Slider"},{"attributes":{"formatter":{"id":"cabb874a-d342-4bd5-8e8c-10368a977574","type":"BasicTickFormatter"},"plot":{"id":"810fbddf-fe0e-4c9f-9e97-67effd0053e6","subtype":"Figure","type":"Plot"},"ticker":{"id":"991eda14-5827-4baf-9628-ded31e89e0c7","type":"BasicTicker"},"visible":false},"id":"ea27bc35-ddb6-4a43-b447-b0d127b7dee7","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"4fd731be-ea26-4799-8f58-8a4022789e80","type":"Toolbar"},{"attributes":{},"id":"f720474d-4453-4554-bf5e-ef9697f77de5","type":"UnionRenderers"},{"attributes":{},"id":"991eda14-5827-4baf-9628-ded31e89e0c7","type":"BasicTicker"},{"attributes":{"source":{"id":"e197fadb-9f26-4b61-a6b2-f0aeba24215e","type":"ColumnDataSource"}},"id":"6a9f39be-6c4a-4a1f-b261-c53dc8967016","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"810fbddf-fe0e-4c9f-9e97-67effd0053e6","subtype":"Figure","type":"Plot"},"ticker":{"id":"991eda14-5827-4baf-9628-ded31e89e0c7","type":"BasicTicker"},"visible":false},"id":"fa8fc178-7e33-45ea-b3be-32e75e66ebf8","type":"Grid"},{"attributes":{"data_source":{"id":"e197fadb-9f26-4b61-a6b2-f0aeba24215e","type":"ColumnDataSource"},"glyph":{"id":"eadca22f-6f34-4ed1-8ea5-acb1a1f086f4","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2dd3e314-fb55-45d0-a103-9ab0a61c2672","type":"ImageURL"},"selection_glyph":null,"view":{"id":"6a9f39be-6c4a-4a1f-b261-c53dc8967016","type":"CDSView"}},"id":"85d67c3a-4799-4f74-832b-37ca930c02ca","type":"GlyphRenderer"},{"attributes":{"args":{"source":{"id":"e197fadb-9f26-4b61-a6b2-f0aeba24215e","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value/5\\n        var file_name = data[&#x27;url_full&#x27;]\\n        var file_num = data[&#x27;url_num&#x27;]\\n        var f_string = f.toString().padStart(3, &#x27;0&#x27;)\\n        file_name[0] = file_name[0].replace(file_num[0], f_string)\\n        file_num[0] = f_string\\n        source.change.emit();\\n        "},"id":"43223a88-cde9-411b-861c-e6fe5b073487","type":"CustomJS"}],"root_ids":["f3b7a2c3-a42b-4272-892f-982e76658991"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"3ff2b776-b211-4c77-8327-8ae415c600fa","roots":{"f3b7a2c3-a42b-4272-892f-982e76658991":"8cc0146e-981e-4705-b9e8-a8a49311c0c7"}}];
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
