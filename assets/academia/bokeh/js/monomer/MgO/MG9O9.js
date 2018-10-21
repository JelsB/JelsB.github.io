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
      };var element = document.getElementById("6abd3fb5-e7ff-4105-8194-fb0eb71bc4d1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6abd3fb5-e7ff-4105-8194-fb0eb71bc4d1' but no matching script tag was found. ")
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

                  var docs_json = '{"bae89ba2-2390-4f14-9bf8-3a5d320830d2":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"5f56fd2c-2d85-4237-bafd-6c33febc881b","type":"Title"},{"attributes":{"callback":{"id":"9818054d-7c8a-49c5-9eb7-040b5c20163f","type":"CustomJS"},"end":365,"start":0,"step":5,"title":"days","value":0},"id":"c4dc4288-8aa2-45fd-9aa7-88bc8b83b40d","type":"Slider"},{"attributes":{},"id":"376f606e-9ec5-4b8b-bac9-0ab05f2367ab","type":"LinearScale"},{"attributes":{"formatter":{"id":"586206a6-e9f4-4433-8e61-7735474fdda1","type":"BasicTickFormatter"},"plot":{"id":"788b0bdf-9144-4214-a776-01dd773ff709","subtype":"Figure","type":"Plot"},"ticker":{"id":"7b6e6611-74a6-4b75-ac25-b85577ee8563","type":"BasicTicker"},"visible":false},"id":"c9957f43-df03-4e1d-b5cc-3d13cae90032","type":"LinearAxis"},{"attributes":{"children":[{"id":"c29d203c-c08b-489a-ad8a-2cd868b7bc30","type":"WidgetBox"},{"id":"788b0bdf-9144-4214-a776-01dd773ff709","subtype":"Figure","type":"Plot"}]},"id":"368370bd-2f21-444e-a8b7-79e95bc90d04","type":"Column"},{"attributes":{"formatter":{"id":"ab47c0be-fb7b-419c-9e58-43e33d469dcb","type":"BasicTickFormatter"},"plot":{"id":"788b0bdf-9144-4214-a776-01dd773ff709","subtype":"Figure","type":"Plot"},"ticker":{"id":"21f984b4-ec67-4234-9f75-621e5f771739","type":"BasicTicker"},"visible":false},"id":"ca3fdbbd-d97c-4485-ab0c-278461f32e0c","type":"LinearAxis"},{"attributes":{},"id":"7b6e6611-74a6-4b75-ac25-b85577ee8563","type":"BasicTicker"},{"attributes":{"below":[{"id":"ca3fdbbd-d97c-4485-ab0c-278461f32e0c","type":"LinearAxis"}],"left":[{"id":"c9957f43-df03-4e1d-b5cc-3d13cae90032","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"ca3fdbbd-d97c-4485-ab0c-278461f32e0c","type":"LinearAxis"},{"id":"df1cda3c-8775-496b-8343-52102d09188d","type":"Grid"},{"id":"c9957f43-df03-4e1d-b5cc-3d13cae90032","type":"LinearAxis"},{"id":"c6963c2b-d30c-45ad-9fe9-f647d5ff8ce4","type":"Grid"},{"id":"331a90b9-1770-4012-a5cf-047578bdfbbb","type":"GlyphRenderer"}],"title":{"id":"5f56fd2c-2d85-4237-bafd-6c33febc881b","type":"Title"},"toolbar":{"id":"8bc9dbb0-86d8-4fa6-b0ac-c7e544f27ccb","type":"Toolbar"},"x_range":{"id":"3c721497-31bc-4e79-a4c3-fd2fe006e252","type":"Range1d"},"x_scale":{"id":"da187c19-f441-41e0-8336-bb848368061b","type":"LinearScale"},"y_range":{"id":"8012ffda-6156-467a-b4c3-2d589e497b1e","type":"Range1d"},"y_scale":{"id":"376f606e-9ec5-4b8b-bac9-0ab05f2367ab","type":"LinearScale"}},"id":"788b0bdf-9144-4214-a776-01dd773ff709","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"586206a6-e9f4-4433-8e61-7735474fdda1","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"3686c56d-2818-479a-81af-e2bbabfe817e","type":"ColumnDataSource"}},"id":"33c0324e-135a-4249-82c7-daaa6b6627cd","type":"CDSView"},{"attributes":{"callback":null},"id":"8012ffda-6156-467a-b4c3-2d589e497b1e","type":"Range1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"8bc9dbb0-86d8-4fa6-b0ac-c7e544f27ccb","type":"Toolbar"},{"attributes":{"callback":null,"data":{"url_full":["/assets/academia/bokeh/figs/monomer/MgO/MG9O9_000.png"],"url_num":["000"]},"selected":{"id":"22effd0e-7b48-4b41-81ae-b46b051cf90a","type":"Selection"},"selection_policy":{"id":"6e6ad68d-9a3f-4714-b21c-b3e0d8af4ece","type":"UnionRenderers"}},"id":"3686c56d-2818-479a-81af-e2bbabfe817e","type":"ColumnDataSource"},{"attributes":{},"id":"ab47c0be-fb7b-419c-9e58-43e33d469dcb","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"3686c56d-2818-479a-81af-e2bbabfe817e","type":"ColumnDataSource"},"glyph":{"id":"df50a6d2-ac62-4a08-832d-f73bcb77321b","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cd75eeb7-d53e-41c3-bb90-d66cc8923fd8","type":"ImageURL"},"selection_glyph":null,"view":{"id":"33c0324e-135a-4249-82c7-daaa6b6627cd","type":"CDSView"}},"id":"331a90b9-1770-4012-a5cf-047578bdfbbb","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"c4dc4288-8aa2-45fd-9aa7-88bc8b83b40d","type":"Slider"}]},"id":"c29d203c-c08b-489a-ad8a-2cd868b7bc30","type":"WidgetBox"},{"attributes":{},"id":"22effd0e-7b48-4b41-81ae-b46b051cf90a","type":"Selection"},{"attributes":{"plot":{"id":"788b0bdf-9144-4214-a776-01dd773ff709","subtype":"Figure","type":"Plot"},"ticker":{"id":"21f984b4-ec67-4234-9f75-621e5f771739","type":"BasicTicker"},"visible":false},"id":"df1cda3c-8775-496b-8343-52102d09188d","type":"Grid"},{"attributes":{},"id":"21f984b4-ec67-4234-9f75-621e5f771739","type":"BasicTicker"},{"attributes":{},"id":"da187c19-f441-41e0-8336-bb848368061b","type":"LinearScale"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"df50a6d2-ac62-4a08-832d-f73bcb77321b","type":"ImageURL"},{"attributes":{},"id":"6e6ad68d-9a3f-4714-b21c-b3e0d8af4ece","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"3c721497-31bc-4e79-a4c3-fd2fe006e252","type":"Range1d"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"cd75eeb7-d53e-41c3-bb90-d66cc8923fd8","type":"ImageURL"},{"attributes":{"args":{"source":{"id":"3686c56d-2818-479a-81af-e2bbabfe817e","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value/5\\n        var file_name = data[&#x27;url_full&#x27;]\\n        var file_num = data[&#x27;url_num&#x27;]\\n        var f_string = f.toString().padStart(3, &#x27;0&#x27;)\\n        file_name[0] = file_name[0].replace(file_num[0], f_string)\\n        file_num[0] = f_string\\n        source.change.emit();\\n        "},"id":"9818054d-7c8a-49c5-9eb7-040b5c20163f","type":"CustomJS"},{"attributes":{"dimension":1,"plot":{"id":"788b0bdf-9144-4214-a776-01dd773ff709","subtype":"Figure","type":"Plot"},"ticker":{"id":"7b6e6611-74a6-4b75-ac25-b85577ee8563","type":"BasicTicker"},"visible":false},"id":"c6963c2b-d30c-45ad-9fe9-f647d5ff8ce4","type":"Grid"}],"root_ids":["368370bd-2f21-444e-a8b7-79e95bc90d04"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"bae89ba2-2390-4f14-9bf8-3a5d320830d2","roots":{"368370bd-2f21-444e-a8b7-79e95bc90d04":"6abd3fb5-e7ff-4105-8194-fb0eb71bc4d1"}}];
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
