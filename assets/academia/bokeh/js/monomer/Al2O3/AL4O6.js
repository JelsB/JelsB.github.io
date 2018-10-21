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
      };var element = document.getElementById("4c4eed9e-aafc-4e7b-af5d-cea0d23cc172");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4c4eed9e-aafc-4e7b-af5d-cea0d23cc172' but no matching script tag was found. ")
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

                  var docs_json = '{"fec499a5-4ab7-487c-b0b0-b5911dedf76b":{"roots":{"references":[{"attributes":{"formatter":{"id":"e21ce944-03e4-46fe-91a7-aaf62663597d","type":"BasicTickFormatter"},"plot":{"id":"7dcf1f5f-4d7a-403e-90b9-97c88937835c","subtype":"Figure","type":"Plot"},"ticker":{"id":"bb564fb7-9b6c-4cf8-ac97-887806f4606f","type":"BasicTicker"},"visible":false},"id":"73441f81-711a-4dff-84e2-76a780b1fe60","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"url_full":["/assets/academia/bokeh/figs/monomer/Al2O3/AL4O6_000.png"],"url_num":["000"]},"selected":{"id":"f3b3e232-9929-4571-bb69-d8b3919a0664","type":"Selection"},"selection_policy":{"id":"3ef0b87d-b0cc-4684-b813-9d4cc28fdd4f","type":"UnionRenderers"}},"id":"c2b197d2-dc56-4297-afc2-c31c0c9143ba","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"7dcf1f5f-4d7a-403e-90b9-97c88937835c","subtype":"Figure","type":"Plot"},"ticker":{"id":"bb564fb7-9b6c-4cf8-ac97-887806f4606f","type":"BasicTicker"},"visible":false},"id":"ca1f4445-a296-4235-97ce-a35059489b2a","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"912f97ed-c9a5-48e4-bd5b-6d6bbda90dbc","type":"Toolbar"},{"attributes":{"formatter":{"id":"ceb676c8-ac9e-4a72-850a-bac23aed4914","type":"BasicTickFormatter"},"plot":{"id":"7dcf1f5f-4d7a-403e-90b9-97c88937835c","subtype":"Figure","type":"Plot"},"ticker":{"id":"6c33c30e-8f1f-4afd-a581-30909834e46a","type":"BasicTicker"},"visible":false},"id":"d3bef923-1b45-4508-bc77-8fd8834db0f0","type":"LinearAxis"},{"attributes":{},"id":"bb564fb7-9b6c-4cf8-ac97-887806f4606f","type":"BasicTicker"},{"attributes":{"below":[{"id":"d3bef923-1b45-4508-bc77-8fd8834db0f0","type":"LinearAxis"}],"left":[{"id":"73441f81-711a-4dff-84e2-76a780b1fe60","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"d3bef923-1b45-4508-bc77-8fd8834db0f0","type":"LinearAxis"},{"id":"02cea46a-0006-4cd9-9045-2fb66a08d2d2","type":"Grid"},{"id":"73441f81-711a-4dff-84e2-76a780b1fe60","type":"LinearAxis"},{"id":"ca1f4445-a296-4235-97ce-a35059489b2a","type":"Grid"},{"id":"40767b6e-6d51-43a6-82f1-2b071dd487db","type":"GlyphRenderer"}],"title":{"id":"fbb07a21-7c5e-4708-9ff2-e354f6492010","type":"Title"},"toolbar":{"id":"912f97ed-c9a5-48e4-bd5b-6d6bbda90dbc","type":"Toolbar"},"x_range":{"id":"e0d5ad03-c19e-431a-ba32-6e3e5ed0802d","type":"Range1d"},"x_scale":{"id":"9edf0d00-c507-4406-b796-bdd297375b1e","type":"LinearScale"},"y_range":{"id":"56539fca-5431-4489-a99c-f17935e5e19f","type":"Range1d"},"y_scale":{"id":"f77e7420-ebbb-4660-bdc1-91723b9a703d","type":"LinearScale"}},"id":"7dcf1f5f-4d7a-403e-90b9-97c88937835c","subtype":"Figure","type":"Plot"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"1211360c-a66b-49f8-9401-84181995514e","type":"ImageURL"},{"attributes":{},"id":"6c33c30e-8f1f-4afd-a581-30909834e46a","type":"BasicTicker"},{"attributes":{"data_source":{"id":"c2b197d2-dc56-4297-afc2-c31c0c9143ba","type":"ColumnDataSource"},"glyph":{"id":"1211360c-a66b-49f8-9401-84181995514e","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ce188e4b-a073-4fc0-9412-d3ae7b11c90e","type":"ImageURL"},"selection_glyph":null,"view":{"id":"eb71346d-ff68-44d9-a44c-175c916bd647","type":"CDSView"}},"id":"40767b6e-6d51-43a6-82f1-2b071dd487db","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"56539fca-5431-4489-a99c-f17935e5e19f","type":"Range1d"},{"attributes":{},"id":"e21ce944-03e4-46fe-91a7-aaf62663597d","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"c2b197d2-dc56-4297-afc2-c31c0c9143ba","type":"ColumnDataSource"}},"id":"eb71346d-ff68-44d9-a44c-175c916bd647","type":"CDSView"},{"attributes":{},"id":"9edf0d00-c507-4406-b796-bdd297375b1e","type":"LinearScale"},{"attributes":{"children":[{"id":"dab8a877-0d91-402a-890d-5ffc0385b8e6","type":"Slider"}]},"id":"14b0fba1-f84b-4fe2-8880-39681396bf76","type":"WidgetBox"},{"attributes":{},"id":"f3b3e232-9929-4571-bb69-d8b3919a0664","type":"Selection"},{"attributes":{"plot":null,"text":""},"id":"fbb07a21-7c5e-4708-9ff2-e354f6492010","type":"Title"},{"attributes":{"children":[{"id":"14b0fba1-f84b-4fe2-8880-39681396bf76","type":"WidgetBox"},{"id":"7dcf1f5f-4d7a-403e-90b9-97c88937835c","subtype":"Figure","type":"Plot"}]},"id":"c60b4b0b-2a22-40d2-a635-9bb05793cb4e","type":"Column"},{"attributes":{},"id":"ceb676c8-ac9e-4a72-850a-bac23aed4914","type":"BasicTickFormatter"},{"attributes":{"callback":{"id":"a4560048-4641-41f3-a53f-8013bbebb159","type":"CustomJS"},"end":365,"start":0,"step":5,"title":"days","value":0},"id":"dab8a877-0d91-402a-890d-5ffc0385b8e6","type":"Slider"},{"attributes":{"plot":{"id":"7dcf1f5f-4d7a-403e-90b9-97c88937835c","subtype":"Figure","type":"Plot"},"ticker":{"id":"6c33c30e-8f1f-4afd-a581-30909834e46a","type":"BasicTicker"},"visible":false},"id":"02cea46a-0006-4cd9-9045-2fb66a08d2d2","type":"Grid"},{"attributes":{"callback":null},"id":"e0d5ad03-c19e-431a-ba32-6e3e5ed0802d","type":"Range1d"},{"attributes":{"args":{"source":{"id":"c2b197d2-dc56-4297-afc2-c31c0c9143ba","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value/5\\n        var file_name = data[&#x27;url_full&#x27;]\\n        var file_num = data[&#x27;url_num&#x27;]\\n        var f_string = f.toString().padStart(3, &#x27;0&#x27;)\\n        file_name[0] = file_name[0].replace(file_num[0], f_string)\\n        file_num[0] = f_string\\n        source.change.emit();\\n        "},"id":"a4560048-4641-41f3-a53f-8013bbebb159","type":"CustomJS"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"ce188e4b-a073-4fc0-9412-d3ae7b11c90e","type":"ImageURL"},{"attributes":{},"id":"3ef0b87d-b0cc-4684-b813-9d4cc28fdd4f","type":"UnionRenderers"},{"attributes":{},"id":"f77e7420-ebbb-4660-bdc1-91723b9a703d","type":"LinearScale"}],"root_ids":["c60b4b0b-2a22-40d2-a635-9bb05793cb4e"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"fec499a5-4ab7-487c-b0b0-b5911dedf76b","roots":{"c60b4b0b-2a22-40d2-a635-9bb05793cb4e":"4c4eed9e-aafc-4e7b-af5d-cea0d23cc172"}}];
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
