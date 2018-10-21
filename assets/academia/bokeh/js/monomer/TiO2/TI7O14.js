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
      };var element = document.getElementById("d9780b25-e29a-45b5-aa45-b644612c4362");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd9780b25-e29a-45b5-aa45-b644612c4362' but no matching script tag was found. ")
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

                  var docs_json = '{"d031640b-db75-4eb6-a560-829bc85ae079":{"roots":{"references":[{"attributes":{},"id":"74c678fc-7b42-4b78-bdce-d427525279a2","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"993286a8-40ba-4dd2-b544-2f57d79c3691","type":"WidgetBox"},{"id":"18f14936-9a02-4941-afd1-f98286400ac0","subtype":"Figure","type":"Plot"}]},"id":"d415e118-31e7-47c2-a7d2-02fd6b760f3f","type":"Column"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"49d56061-e28b-4d68-9ded-7e467fc25ec7","type":"ImageURL"},{"attributes":{"callback":{"id":"f0a7e27e-6749-424c-8df9-e40a99866122","type":"CustomJS"},"end":365,"start":0,"step":5,"title":"days","value":0},"id":"a5f3dfa0-0921-40a7-9b1a-556677ae8f05","type":"Slider"},{"attributes":{},"id":"c346313a-b592-43e6-abd6-b609c3b433c9","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"f4972e87-3524-4e5e-a62a-57b10c497a34","type":"Toolbar"},{"attributes":{"args":{"source":{"id":"750e178e-3987-4cd5-ae0e-2b6a08d0aa4f","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value/5\\n        var file_name = data[&#x27;url_full&#x27;]\\n        var file_num = data[&#x27;url_num&#x27;]\\n        var f_string = f.toString().padStart(3, &#x27;0&#x27;)\\n        file_name[0] = file_name[0].replace(file_num[0], f_string)\\n        file_num[0] = f_string\\n        source.change.emit();\\n        "},"id":"f0a7e27e-6749-424c-8df9-e40a99866122","type":"CustomJS"},{"attributes":{"source":{"id":"750e178e-3987-4cd5-ae0e-2b6a08d0aa4f","type":"ColumnDataSource"}},"id":"9494ff16-3f85-4f51-ae6e-104c5aface60","type":"CDSView"},{"attributes":{"data_source":{"id":"750e178e-3987-4cd5-ae0e-2b6a08d0aa4f","type":"ColumnDataSource"},"glyph":{"id":"49d56061-e28b-4d68-9ded-7e467fc25ec7","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"66d9cfc9-adfd-4bec-94f3-70175400a75a","type":"ImageURL"},"selection_glyph":null,"view":{"id":"9494ff16-3f85-4f51-ae6e-104c5aface60","type":"CDSView"}},"id":"1eafb3b9-fd77-4db8-9638-028e50268b1c","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"18f14936-9a02-4941-afd1-f98286400ac0","subtype":"Figure","type":"Plot"},"ticker":{"id":"52909651-4f4b-4718-80c8-efea0802ae2a","type":"BasicTicker"},"visible":false},"id":"118d1af5-53c6-4678-9c7d-7d44d2ed9561","type":"Grid"},{"attributes":{"callback":null},"id":"3d1d2303-7d66-46e1-b8e8-b72675355e88","type":"Range1d"},{"attributes":{"plot":{"id":"18f14936-9a02-4941-afd1-f98286400ac0","subtype":"Figure","type":"Plot"},"ticker":{"id":"ddaa254f-2ea1-43ae-b27f-03e598d98837","type":"BasicTicker"},"visible":false},"id":"0e56b7cb-9872-47fd-8ec5-da78c6a87657","type":"Grid"},{"attributes":{},"id":"553cfd79-396b-44ef-a8fc-21a9e762da57","type":"BasicTickFormatter"},{"attributes":{},"id":"52909651-4f4b-4718-80c8-efea0802ae2a","type":"BasicTicker"},{"attributes":{"children":[{"id":"a5f3dfa0-0921-40a7-9b1a-556677ae8f05","type":"Slider"}]},"id":"993286a8-40ba-4dd2-b544-2f57d79c3691","type":"WidgetBox"},{"attributes":{"below":[{"id":"dca08903-f709-4636-9907-8f5274d4d3b1","type":"LinearAxis"}],"left":[{"id":"3f2f3ae7-68d2-4d3c-a6c1-ae945cd266dd","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"dca08903-f709-4636-9907-8f5274d4d3b1","type":"LinearAxis"},{"id":"0e56b7cb-9872-47fd-8ec5-da78c6a87657","type":"Grid"},{"id":"3f2f3ae7-68d2-4d3c-a6c1-ae945cd266dd","type":"LinearAxis"},{"id":"118d1af5-53c6-4678-9c7d-7d44d2ed9561","type":"Grid"},{"id":"1eafb3b9-fd77-4db8-9638-028e50268b1c","type":"GlyphRenderer"}],"title":{"id":"f1a1a470-2b34-4a66-894f-8fe9c85edb95","type":"Title"},"toolbar":{"id":"f4972e87-3524-4e5e-a62a-57b10c497a34","type":"Toolbar"},"x_range":{"id":"3d1d2303-7d66-46e1-b8e8-b72675355e88","type":"Range1d"},"x_scale":{"id":"c346313a-b592-43e6-abd6-b609c3b433c9","type":"LinearScale"},"y_range":{"id":"17256781-f2de-44fe-afe3-53a8cbc4f978","type":"Range1d"},"y_scale":{"id":"98d3fe35-eb50-4b06-9b22-68a696148704","type":"LinearScale"}},"id":"18f14936-9a02-4941-afd1-f98286400ac0","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"74c678fc-7b42-4b78-bdce-d427525279a2","type":"BasicTickFormatter"},"plot":{"id":"18f14936-9a02-4941-afd1-f98286400ac0","subtype":"Figure","type":"Plot"},"ticker":{"id":"52909651-4f4b-4718-80c8-efea0802ae2a","type":"BasicTicker"},"visible":false},"id":"3f2f3ae7-68d2-4d3c-a6c1-ae945cd266dd","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"f1a1a470-2b34-4a66-894f-8fe9c85edb95","type":"Title"},{"attributes":{},"id":"126923cc-07e2-48cb-bed0-4a2a22adc300","type":"UnionRenderers"},{"attributes":{},"id":"98d3fe35-eb50-4b06-9b22-68a696148704","type":"LinearScale"},{"attributes":{},"id":"2eb2070f-ddd0-476e-8365-fe67218d8647","type":"Selection"},{"attributes":{},"id":"ddaa254f-2ea1-43ae-b27f-03e598d98837","type":"BasicTicker"},{"attributes":{"callback":null},"id":"17256781-f2de-44fe-afe3-53a8cbc4f978","type":"Range1d"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"66d9cfc9-adfd-4bec-94f3-70175400a75a","type":"ImageURL"},{"attributes":{"callback":null,"data":{"url_full":["/assets/academia/bokeh/figs/monomer/TiO2/TI7O14_000.png"],"url_num":["000"]},"selected":{"id":"2eb2070f-ddd0-476e-8365-fe67218d8647","type":"Selection"},"selection_policy":{"id":"126923cc-07e2-48cb-bed0-4a2a22adc300","type":"UnionRenderers"}},"id":"750e178e-3987-4cd5-ae0e-2b6a08d0aa4f","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"553cfd79-396b-44ef-a8fc-21a9e762da57","type":"BasicTickFormatter"},"plot":{"id":"18f14936-9a02-4941-afd1-f98286400ac0","subtype":"Figure","type":"Plot"},"ticker":{"id":"ddaa254f-2ea1-43ae-b27f-03e598d98837","type":"BasicTicker"},"visible":false},"id":"dca08903-f709-4636-9907-8f5274d4d3b1","type":"LinearAxis"}],"root_ids":["d415e118-31e7-47c2-a7d2-02fd6b760f3f"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"d031640b-db75-4eb6-a560-829bc85ae079","roots":{"d415e118-31e7-47c2-a7d2-02fd6b760f3f":"d9780b25-e29a-45b5-aa45-b644612c4362"}}];
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
