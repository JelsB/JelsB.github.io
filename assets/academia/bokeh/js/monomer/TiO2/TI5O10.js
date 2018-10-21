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
      };var element = document.getElementById("3af72713-bdba-4e48-b791-835c27202dcb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3af72713-bdba-4e48-b791-835c27202dcb' but no matching script tag was found. ")
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

                  var docs_json = '{"d6c68954-5bf4-46b5-9c68-730abc351ad4":{"roots":{"references":[{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"03f77428-221f-474c-8046-396677933b99","type":"ImageURL"},{"attributes":{"args":{"source":{"id":"37d86f93-0a3f-4247-bfd7-200562adef4d","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value/5\\n        var file_name = data[&#x27;url_full&#x27;]\\n        var file_num = data[&#x27;url_num&#x27;]\\n        var f_string = f.toString().padStart(3, &#x27;0&#x27;)\\n        file_name[0] = file_name[0].replace(file_num[0], f_string)\\n        file_num[0] = f_string\\n        source.change.emit();\\n        "},"id":"1509819f-ce29-4aae-87c7-69983193630e","type":"CustomJS"},{"attributes":{"data_source":{"id":"37d86f93-0a3f-4247-bfd7-200562adef4d","type":"ColumnDataSource"},"glyph":{"id":"03f77428-221f-474c-8046-396677933b99","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ce37e2ce-9300-440c-a415-9e5e0096e9a1","type":"ImageURL"},"selection_glyph":null,"view":{"id":"3e0e610c-6fdb-4a48-8ec4-502b70ead50b","type":"CDSView"}},"id":"75202670-506a-4061-8bdc-3d3a93899aa2","type":"GlyphRenderer"},{"attributes":{},"id":"4fbe51e2-09af-4d45-8474-d419d3be3d50","type":"BasicTicker"},{"attributes":{"children":[{"id":"ef75e18a-4ef9-4d43-be72-9de7e1b66446","type":"Slider"}]},"id":"32953df3-ceb8-4789-a258-7229d9a9b45a","type":"WidgetBox"},{"attributes":{},"id":"da9c9c0b-a5dd-4b2b-b202-3995588b41a2","type":"BasicTicker"},{"attributes":{"callback":null},"id":"f368980a-faa5-4af9-9065-dd883d1bd5e5","type":"Range1d"},{"attributes":{"dimension":1,"plot":{"id":"786b21ae-5e9f-4f21-bf46-464e279f39c3","subtype":"Figure","type":"Plot"},"ticker":{"id":"4fbe51e2-09af-4d45-8474-d419d3be3d50","type":"BasicTicker"},"visible":false},"id":"e5b93d3d-2646-41ec-a3f5-2a9fcb8b28ca","type":"Grid"},{"attributes":{},"id":"6429311d-e3b0-4501-9da6-881ce544c46a","type":"BasicTickFormatter"},{"attributes":{"callback":{"id":"1509819f-ce29-4aae-87c7-69983193630e","type":"CustomJS"},"end":365,"start":0,"step":5,"title":"days","value":0},"id":"ef75e18a-4ef9-4d43-be72-9de7e1b66446","type":"Slider"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"512bfd2c-1fac-4206-b4fa-e217f89ff75a","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"0900da89-e089-4dc7-863f-5deeb460b88e","type":"Title"},{"attributes":{},"id":"f1195204-68e4-4c16-bc49-e3da32a5da78","type":"LinearScale"},{"attributes":{"children":[{"id":"32953df3-ceb8-4789-a258-7229d9a9b45a","type":"WidgetBox"},{"id":"786b21ae-5e9f-4f21-bf46-464e279f39c3","subtype":"Figure","type":"Plot"}]},"id":"b405e7f6-9d0c-4856-b016-fb3e87786cd3","type":"Column"},{"attributes":{},"id":"76b58bc9-a6b9-4c4d-bc80-5bf84ff27230","type":"LinearScale"},{"attributes":{"source":{"id":"37d86f93-0a3f-4247-bfd7-200562adef4d","type":"ColumnDataSource"}},"id":"3e0e610c-6fdb-4a48-8ec4-502b70ead50b","type":"CDSView"},{"attributes":{"formatter":{"id":"cd7f7257-04a3-4119-a62a-aab5f07427a2","type":"BasicTickFormatter"},"plot":{"id":"786b21ae-5e9f-4f21-bf46-464e279f39c3","subtype":"Figure","type":"Plot"},"ticker":{"id":"da9c9c0b-a5dd-4b2b-b202-3995588b41a2","type":"BasicTicker"},"visible":false},"id":"3c445797-bcf9-4b0b-b144-e2334e900463","type":"LinearAxis"},{"attributes":{},"id":"cd7f7257-04a3-4119-a62a-aab5f07427a2","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"url_full":["/assets/academia/bokeh/figs/monomer/TiO2/TI5O10_000.png"],"url_num":["000"]},"selected":{"id":"5ea7ffbc-f517-4a65-987e-dc092066da76","type":"Selection"},"selection_policy":{"id":"c4525906-975f-4026-bd45-cb1cff24c163","type":"UnionRenderers"}},"id":"37d86f93-0a3f-4247-bfd7-200562adef4d","type":"ColumnDataSource"},{"attributes":{},"id":"5ea7ffbc-f517-4a65-987e-dc092066da76","type":"Selection"},{"attributes":{"below":[{"id":"3c445797-bcf9-4b0b-b144-e2334e900463","type":"LinearAxis"}],"left":[{"id":"4e640155-af9b-4b13-957b-b500317009c6","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"3c445797-bcf9-4b0b-b144-e2334e900463","type":"LinearAxis"},{"id":"fddb064e-b37e-410f-bf3f-0208e0dcc12f","type":"Grid"},{"id":"4e640155-af9b-4b13-957b-b500317009c6","type":"LinearAxis"},{"id":"e5b93d3d-2646-41ec-a3f5-2a9fcb8b28ca","type":"Grid"},{"id":"75202670-506a-4061-8bdc-3d3a93899aa2","type":"GlyphRenderer"}],"title":{"id":"0900da89-e089-4dc7-863f-5deeb460b88e","type":"Title"},"toolbar":{"id":"512bfd2c-1fac-4206-b4fa-e217f89ff75a","type":"Toolbar"},"x_range":{"id":"b9b4132a-2f6e-4407-905c-c3abf95bd461","type":"Range1d"},"x_scale":{"id":"f1195204-68e4-4c16-bc49-e3da32a5da78","type":"LinearScale"},"y_range":{"id":"f368980a-faa5-4af9-9065-dd883d1bd5e5","type":"Range1d"},"y_scale":{"id":"76b58bc9-a6b9-4c4d-bc80-5bf84ff27230","type":"LinearScale"}},"id":"786b21ae-5e9f-4f21-bf46-464e279f39c3","subtype":"Figure","type":"Plot"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"ce37e2ce-9300-440c-a415-9e5e0096e9a1","type":"ImageURL"},{"attributes":{"formatter":{"id":"6429311d-e3b0-4501-9da6-881ce544c46a","type":"BasicTickFormatter"},"plot":{"id":"786b21ae-5e9f-4f21-bf46-464e279f39c3","subtype":"Figure","type":"Plot"},"ticker":{"id":"4fbe51e2-09af-4d45-8474-d419d3be3d50","type":"BasicTicker"},"visible":false},"id":"4e640155-af9b-4b13-957b-b500317009c6","type":"LinearAxis"},{"attributes":{"callback":null},"id":"b9b4132a-2f6e-4407-905c-c3abf95bd461","type":"Range1d"},{"attributes":{"plot":{"id":"786b21ae-5e9f-4f21-bf46-464e279f39c3","subtype":"Figure","type":"Plot"},"ticker":{"id":"da9c9c0b-a5dd-4b2b-b202-3995588b41a2","type":"BasicTicker"},"visible":false},"id":"fddb064e-b37e-410f-bf3f-0208e0dcc12f","type":"Grid"},{"attributes":{},"id":"c4525906-975f-4026-bd45-cb1cff24c163","type":"UnionRenderers"}],"root_ids":["b405e7f6-9d0c-4856-b016-fb3e87786cd3"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"d6c68954-5bf4-46b5-9c68-730abc351ad4","roots":{"b405e7f6-9d0c-4856-b016-fb3e87786cd3":"3af72713-bdba-4e48-b791-835c27202dcb"}}];
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
