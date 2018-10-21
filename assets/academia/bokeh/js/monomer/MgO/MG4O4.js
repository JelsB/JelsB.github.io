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
      };var element = document.getElementById("67d4882d-c4ba-4325-a78c-384c7a427100");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '67d4882d-c4ba-4325-a78c-384c7a427100' but no matching script tag was found. ")
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

                  var docs_json = '{"d067ecdf-2fc0-4645-8c81-36dbf4c5c164":{"roots":{"references":[{"attributes":{},"id":"84fe25f5-fa9c-4735-b359-d727717b28f2","type":"LinearScale"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"46a684a8-e9d1-4577-bef6-d72ffa97d809","type":"ImageURL"},{"attributes":{"source":{"id":"a3426248-ec2f-4f21-9966-3cce4a1aace7","type":"ColumnDataSource"}},"id":"c1990239-6cec-4bb8-8bda-9eb48866b294","type":"CDSView"},{"attributes":{"args":{"source":{"id":"a3426248-ec2f-4f21-9966-3cce4a1aace7","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value/5\\n        var file_name = data[&#x27;url_full&#x27;]\\n        var file_num = data[&#x27;url_num&#x27;]\\n        var f_string = f.toString().padStart(3, &#x27;0&#x27;)\\n        file_name[0] = file_name[0].replace(file_num[0], f_string)\\n        file_num[0] = f_string\\n        source.change.emit();\\n        "},"id":"21924bcb-689c-494f-85af-b79b95c332dc","type":"CustomJS"},{"attributes":{},"id":"0c11e20f-67a3-47e7-955d-adad281426c3","type":"BasicTicker"},{"attributes":{},"id":"9da2f428-3911-43b5-8564-3500e057e047","type":"LinearScale"},{"attributes":{"callback":null},"id":"d33b8282-3b35-4a9e-ac1f-7a54c805d9a3","type":"Range1d"},{"attributes":{"children":[{"id":"69db2567-b169-46b8-b68b-592a5de465a7","type":"Slider"}]},"id":"60af5157-5245-4a3a-b3fd-0b60918e1098","type":"WidgetBox"},{"attributes":{"formatter":{"id":"13c52bc3-7e66-4c8a-93aa-6f3c9f9a640c","type":"BasicTickFormatter"},"plot":{"id":"e88e8e15-fc83-4099-bce7-09482215c0ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"0c11e20f-67a3-47e7-955d-adad281426c3","type":"BasicTicker"},"visible":false},"id":"c3844193-4a78-4d72-a62f-95701541355a","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"url_full":["/assets/academia/bokeh/figs/monomer/MgO/MG4O4_000.png"],"url_num":["000"]},"selected":{"id":"d8e750b4-3925-4731-a41c-f95be715021f","type":"Selection"},"selection_policy":{"id":"a2f43204-64b7-4058-8b33-b5f987f2a458","type":"UnionRenderers"}},"id":"a3426248-ec2f-4f21-9966-3cce4a1aace7","type":"ColumnDataSource"},{"attributes":{},"id":"d9d55e6d-806c-489b-8b67-f8e1da69a440","type":"BasicTickFormatter"},{"attributes":{},"id":"589c4102-eaa6-469f-aae0-97d8db926571","type":"BasicTicker"},{"attributes":{"plot":{"id":"e88e8e15-fc83-4099-bce7-09482215c0ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"589c4102-eaa6-469f-aae0-97d8db926571","type":"BasicTicker"},"visible":false},"id":"083d8970-c1a4-44cb-87ed-6ba3a7d562bc","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"e88e8e15-fc83-4099-bce7-09482215c0ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"0c11e20f-67a3-47e7-955d-adad281426c3","type":"BasicTicker"},"visible":false},"id":"eea51502-29a9-4200-97c1-b5899a360915","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"e58c22a7-f959-419b-857d-255f450a3eaf","type":"Title"},{"attributes":{"callback":{"id":"21924bcb-689c-494f-85af-b79b95c332dc","type":"CustomJS"},"end":365,"start":0,"step":5,"title":"days","value":0},"id":"69db2567-b169-46b8-b68b-592a5de465a7","type":"Slider"},{"attributes":{},"id":"13c52bc3-7e66-4c8a-93aa-6f3c9f9a640c","type":"BasicTickFormatter"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"e62fad3a-ee3c-4125-b5c4-75631193aeae","type":"ImageURL"},{"attributes":{"below":[{"id":"62e2c9e2-9db0-4bb7-b91c-6bd6f956290d","type":"LinearAxis"}],"left":[{"id":"c3844193-4a78-4d72-a62f-95701541355a","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"62e2c9e2-9db0-4bb7-b91c-6bd6f956290d","type":"LinearAxis"},{"id":"083d8970-c1a4-44cb-87ed-6ba3a7d562bc","type":"Grid"},{"id":"c3844193-4a78-4d72-a62f-95701541355a","type":"LinearAxis"},{"id":"eea51502-29a9-4200-97c1-b5899a360915","type":"Grid"},{"id":"7738651a-94f0-479d-a65b-66b3d0a1cd4f","type":"GlyphRenderer"}],"title":{"id":"e58c22a7-f959-419b-857d-255f450a3eaf","type":"Title"},"toolbar":{"id":"f3fb7051-1cf2-4807-aa15-fed9f15d4cf3","type":"Toolbar"},"x_range":{"id":"102cc01c-c890-4784-bb20-533952e046e5","type":"Range1d"},"x_scale":{"id":"84fe25f5-fa9c-4735-b359-d727717b28f2","type":"LinearScale"},"y_range":{"id":"d33b8282-3b35-4a9e-ac1f-7a54c805d9a3","type":"Range1d"},"y_scale":{"id":"9da2f428-3911-43b5-8564-3500e057e047","type":"LinearScale"}},"id":"e88e8e15-fc83-4099-bce7-09482215c0ee","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"102cc01c-c890-4784-bb20-533952e046e5","type":"Range1d"},{"attributes":{"formatter":{"id":"d9d55e6d-806c-489b-8b67-f8e1da69a440","type":"BasicTickFormatter"},"plot":{"id":"e88e8e15-fc83-4099-bce7-09482215c0ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"589c4102-eaa6-469f-aae0-97d8db926571","type":"BasicTicker"},"visible":false},"id":"62e2c9e2-9db0-4bb7-b91c-6bd6f956290d","type":"LinearAxis"},{"attributes":{},"id":"a2f43204-64b7-4058-8b33-b5f987f2a458","type":"UnionRenderers"},{"attributes":{},"id":"d8e750b4-3925-4731-a41c-f95be715021f","type":"Selection"},{"attributes":{"children":[{"id":"60af5157-5245-4a3a-b3fd-0b60918e1098","type":"WidgetBox"},{"id":"e88e8e15-fc83-4099-bce7-09482215c0ee","subtype":"Figure","type":"Plot"}]},"id":"28e2caf1-b616-4c0d-8a62-9043bceb0892","type":"Column"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"f3fb7051-1cf2-4807-aa15-fed9f15d4cf3","type":"Toolbar"},{"attributes":{"data_source":{"id":"a3426248-ec2f-4f21-9966-3cce4a1aace7","type":"ColumnDataSource"},"glyph":{"id":"46a684a8-e9d1-4577-bef6-d72ffa97d809","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e62fad3a-ee3c-4125-b5c4-75631193aeae","type":"ImageURL"},"selection_glyph":null,"view":{"id":"c1990239-6cec-4bb8-8bda-9eb48866b294","type":"CDSView"}},"id":"7738651a-94f0-479d-a65b-66b3d0a1cd4f","type":"GlyphRenderer"}],"root_ids":["28e2caf1-b616-4c0d-8a62-9043bceb0892"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"d067ecdf-2fc0-4645-8c81-36dbf4c5c164","roots":{"28e2caf1-b616-4c0d-8a62-9043bceb0892":"67d4882d-c4ba-4325-a78c-384c7a427100"}}];
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
