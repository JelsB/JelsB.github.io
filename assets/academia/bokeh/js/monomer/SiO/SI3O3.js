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
      };var element = document.getElementById("b2d93397-e7be-4f11-b298-4cf29be2a54e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b2d93397-e7be-4f11-b298-4cf29be2a54e' but no matching script tag was found. ")
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

                  var docs_json = '{"f776a111-ea8e-484d-82ef-ada355c4ab46":{"roots":{"references":[{"attributes":{},"id":"e381c56c-474c-47c1-88e0-e8b5b42bb04f","type":"Selection"},{"attributes":{},"id":"398da31e-b5cc-4711-be04-0f78e22637d3","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"990c8720-1227-42ae-be11-ffe7a170ef8d","type":"ColumnDataSource"},"glyph":{"id":"c2672786-b20e-4868-9bd7-16703425a2fb","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b5bbfdbb-08e4-43e2-b887-90fa30429330","type":"ImageURL"},"selection_glyph":null,"view":{"id":"cb1b433f-edd6-4176-abbd-a30784e7840d","type":"CDSView"}},"id":"1b26c86f-11d2-4a66-a801-69774d162d72","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"4e2db787-41e4-4e4b-b426-e22bad85f7ae","subtype":"Figure","type":"Plot"},"ticker":{"id":"4a000495-318e-4159-b694-81732ffd3697","type":"BasicTicker"},"visible":false},"id":"47a6f367-c8b4-4cbf-9e76-89a4cf50924f","type":"Grid"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"c2672786-b20e-4868-9bd7-16703425a2fb","type":"ImageURL"},{"attributes":{"args":{"source":{"id":"990c8720-1227-42ae-be11-ffe7a170ef8d","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value/5\\n        var file_name = data[&#x27;url_full&#x27;]\\n        var file_num = data[&#x27;url_num&#x27;]\\n        var f_string = f.toString().padStart(3, &#x27;0&#x27;)\\n        file_name[0] = file_name[0].replace(file_num[0], f_string)\\n        file_num[0] = f_string\\n        source.change.emit();\\n        "},"id":"8a24d579-01f6-44b8-8db1-528cb9f47279","type":"CustomJS"},{"attributes":{"formatter":{"id":"b002fb2d-81df-462e-a3b7-2ffd3f0ab9b1","type":"BasicTickFormatter"},"plot":{"id":"4e2db787-41e4-4e4b-b426-e22bad85f7ae","subtype":"Figure","type":"Plot"},"ticker":{"id":"4a000495-318e-4159-b694-81732ffd3697","type":"BasicTicker"},"visible":false},"id":"4a9c4d62-3cbe-44d2-96e2-ab0ab3c10255","type":"LinearAxis"},{"attributes":{"source":{"id":"990c8720-1227-42ae-be11-ffe7a170ef8d","type":"ColumnDataSource"}},"id":"cb1b433f-edd6-4176-abbd-a30784e7840d","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"e4182093-42e9-4800-8973-d5a763df1943","type":"Toolbar"},{"attributes":{"callback":null},"id":"10a0d940-5da8-478d-a363-0e8b18f188b7","type":"Range1d"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"b5bbfdbb-08e4-43e2-b887-90fa30429330","type":"ImageURL"},{"attributes":{},"id":"caa83aaa-d451-4250-a35e-5bf858f38df0","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"4e2db787-41e4-4e4b-b426-e22bad85f7ae","subtype":"Figure","type":"Plot"},"ticker":{"id":"3725ada7-0daa-47de-9ecd-410aed11e1e1","type":"BasicTicker"},"visible":false},"id":"41e9bb3d-f2f4-4d4a-9d9c-407af12372da","type":"Grid"},{"attributes":{"children":[{"id":"aeff197d-c55d-4ca9-a8c0-740968badbc4","type":"Slider"}]},"id":"3b7b5dc7-a3fd-4362-b7ac-24dc0de5346d","type":"WidgetBox"},{"attributes":{"children":[{"id":"3b7b5dc7-a3fd-4362-b7ac-24dc0de5346d","type":"WidgetBox"},{"id":"4e2db787-41e4-4e4b-b426-e22bad85f7ae","subtype":"Figure","type":"Plot"}]},"id":"e02164e7-71c7-4682-be5d-b8602472f8a6","type":"Column"},{"attributes":{"callback":null,"data":{"url_full":["/assets/academia/bokeh/figs/monomer/SiO/SI3O3_000.png"],"url_num":["000"]},"selected":{"id":"e381c56c-474c-47c1-88e0-e8b5b42bb04f","type":"Selection"},"selection_policy":{"id":"f0655351-b092-413f-b0fe-5a513422db88","type":"UnionRenderers"}},"id":"990c8720-1227-42ae-be11-ffe7a170ef8d","type":"ColumnDataSource"},{"attributes":{},"id":"4a000495-318e-4159-b694-81732ffd3697","type":"BasicTicker"},{"attributes":{},"id":"b002fb2d-81df-462e-a3b7-2ffd3f0ab9b1","type":"BasicTickFormatter"},{"attributes":{},"id":"712cd2ae-b3dd-4298-a56b-f1920d9dbee6","type":"LinearScale"},{"attributes":{"callback":null},"id":"46efd98f-8d15-4c9c-95ac-c22c52a9c644","type":"Range1d"},{"attributes":{"callback":{"id":"8a24d579-01f6-44b8-8db1-528cb9f47279","type":"CustomJS"},"end":365,"start":0,"step":5,"title":"days","value":0},"id":"aeff197d-c55d-4ca9-a8c0-740968badbc4","type":"Slider"},{"attributes":{"formatter":{"id":"398da31e-b5cc-4711-be04-0f78e22637d3","type":"BasicTickFormatter"},"plot":{"id":"4e2db787-41e4-4e4b-b426-e22bad85f7ae","subtype":"Figure","type":"Plot"},"ticker":{"id":"3725ada7-0daa-47de-9ecd-410aed11e1e1","type":"BasicTicker"},"visible":false},"id":"22a81fa5-0842-436a-8027-167c69f20007","type":"LinearAxis"},{"attributes":{"below":[{"id":"4a9c4d62-3cbe-44d2-96e2-ab0ab3c10255","type":"LinearAxis"}],"left":[{"id":"22a81fa5-0842-436a-8027-167c69f20007","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"4a9c4d62-3cbe-44d2-96e2-ab0ab3c10255","type":"LinearAxis"},{"id":"47a6f367-c8b4-4cbf-9e76-89a4cf50924f","type":"Grid"},{"id":"22a81fa5-0842-436a-8027-167c69f20007","type":"LinearAxis"},{"id":"41e9bb3d-f2f4-4d4a-9d9c-407af12372da","type":"Grid"},{"id":"1b26c86f-11d2-4a66-a801-69774d162d72","type":"GlyphRenderer"}],"title":{"id":"f3c71148-ebef-47e8-b001-9eca51e1f3af","type":"Title"},"toolbar":{"id":"e4182093-42e9-4800-8973-d5a763df1943","type":"Toolbar"},"x_range":{"id":"10a0d940-5da8-478d-a363-0e8b18f188b7","type":"Range1d"},"x_scale":{"id":"caa83aaa-d451-4250-a35e-5bf858f38df0","type":"LinearScale"},"y_range":{"id":"46efd98f-8d15-4c9c-95ac-c22c52a9c644","type":"Range1d"},"y_scale":{"id":"712cd2ae-b3dd-4298-a56b-f1920d9dbee6","type":"LinearScale"}},"id":"4e2db787-41e4-4e4b-b426-e22bad85f7ae","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3725ada7-0daa-47de-9ecd-410aed11e1e1","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"f3c71148-ebef-47e8-b001-9eca51e1f3af","type":"Title"},{"attributes":{},"id":"f0655351-b092-413f-b0fe-5a513422db88","type":"UnionRenderers"}],"root_ids":["e02164e7-71c7-4682-be5d-b8602472f8a6"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"f776a111-ea8e-484d-82ef-ada355c4ab46","roots":{"e02164e7-71c7-4682-be5d-b8602472f8a6":"b2d93397-e7be-4f11-b298-4cf29be2a54e"}}];
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
