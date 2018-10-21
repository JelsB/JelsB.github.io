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
      };var element = document.getElementById("a7bd4d20-f86a-47f5-83ba-c1e2330a9c7d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a7bd4d20-f86a-47f5-83ba-c1e2330a9c7d' but no matching script tag was found. ")
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

                  var docs_json = '{"6a6a9c50-7e63-488b-ad6e-d862bffb49cb":{"roots":{"references":[{"attributes":{"callback":null},"id":"018f3385-670a-4c7a-9662-b2515cd954aa","type":"Range1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"e746f42e-7145-42ef-9e01-9e9cc091d5dc","type":"Toolbar"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"4c0121eb-b197-4614-89fd-437166392ae5","type":"ImageURL"},{"attributes":{"args":{"source":{"id":"990f74d3-e2ed-4095-9cd2-8c68ce3e4e39","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value/5\\n        var file_name = data[&#x27;url_full&#x27;]\\n        var file_num = data[&#x27;url_num&#x27;]\\n        var f_string = f.toString().padStart(3, &#x27;0&#x27;)\\n        file_name[0] = file_name[0].replace(file_num[0], f_string)\\n        file_num[0] = f_string\\n        source.change.emit();\\n        "},"id":"08a0e022-ee0f-495c-9cef-dfebe91f2359","type":"CustomJS"},{"attributes":{},"id":"3c259a6e-d6f4-463b-abe5-fbf621a3d458","type":"BasicTicker"},{"attributes":{"children":[{"id":"4dd58b53-066d-4b4f-94d7-7ece37f73146","type":"WidgetBox"},{"id":"3abd5ea5-cf51-4a48-9e88-f9b3d10c1292","subtype":"Figure","type":"Plot"}]},"id":"31439f9a-1f08-49e2-8274-088a5124b059","type":"Column"},{"attributes":{},"id":"390b30be-4237-417b-a197-5dba5473c9f6","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"b573fd10-667d-4a6b-a18c-129b352fc566","type":"BasicTickFormatter"},"plot":{"id":"3abd5ea5-cf51-4a48-9e88-f9b3d10c1292","subtype":"Figure","type":"Plot"},"ticker":{"id":"3c259a6e-d6f4-463b-abe5-fbf621a3d458","type":"BasicTicker"},"visible":false},"id":"73ab5d4e-1073-42da-9c20-2f59e8b423ea","type":"LinearAxis"},{"attributes":{},"id":"18bf271b-ae57-4f68-b5ff-df8a7bf8e09f","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"ce689273-af8c-4f3f-976c-3cc1f1817d84","type":"Title"},{"attributes":{"callback":null},"id":"3dea4244-184a-429d-9a1e-13b9a3b2cc67","type":"Range1d"},{"attributes":{"data_source":{"id":"990f74d3-e2ed-4095-9cd2-8c68ce3e4e39","type":"ColumnDataSource"},"glyph":{"id":"4c0121eb-b197-4614-89fd-437166392ae5","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1ef7d353-d256-4819-b006-0f176d139b24","type":"ImageURL"},"selection_glyph":null,"view":{"id":"b73f9b2d-4603-413f-b915-77c26275ceab","type":"CDSView"}},"id":"3ce45cad-06d9-4940-b442-01dd91c5448b","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"bd009bf0-7569-4f31-b93c-8a7d67de5f87","type":"LinearAxis"}],"left":[{"id":"73ab5d4e-1073-42da-9c20-2f59e8b423ea","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"bd009bf0-7569-4f31-b93c-8a7d67de5f87","type":"LinearAxis"},{"id":"ba4201e3-848a-4f17-b5dc-ec71136b9c6f","type":"Grid"},{"id":"73ab5d4e-1073-42da-9c20-2f59e8b423ea","type":"LinearAxis"},{"id":"debb64fd-2b8a-4e02-a11a-09679cc22d50","type":"Grid"},{"id":"3ce45cad-06d9-4940-b442-01dd91c5448b","type":"GlyphRenderer"}],"title":{"id":"ce689273-af8c-4f3f-976c-3cc1f1817d84","type":"Title"},"toolbar":{"id":"e746f42e-7145-42ef-9e01-9e9cc091d5dc","type":"Toolbar"},"x_range":{"id":"3dea4244-184a-429d-9a1e-13b9a3b2cc67","type":"Range1d"},"x_scale":{"id":"dc9db8d0-c762-45f9-b3ba-1679ff4963cc","type":"LinearScale"},"y_range":{"id":"018f3385-670a-4c7a-9662-b2515cd954aa","type":"Range1d"},"y_scale":{"id":"d37770f5-31a4-49bd-b5e6-f63a3ac99329","type":"LinearScale"}},"id":"3abd5ea5-cf51-4a48-9e88-f9b3d10c1292","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"url_full":["/assets/academia/bokeh/figs/monomer/SiO/SI2O2_000.png"],"url_num":["000"]},"selected":{"id":"6e251041-85d0-4193-af60-66b29446e059","type":"Selection"},"selection_policy":{"id":"390b30be-4237-417b-a197-5dba5473c9f6","type":"UnionRenderers"}},"id":"990f74d3-e2ed-4095-9cd2-8c68ce3e4e39","type":"ColumnDataSource"},{"attributes":{"callback":{"id":"08a0e022-ee0f-495c-9cef-dfebe91f2359","type":"CustomJS"},"end":365,"start":0,"step":5,"title":"days","value":0},"id":"6b51d65f-d79c-43dd-a005-63cefb7f82da","type":"Slider"},{"attributes":{"children":[{"id":"6b51d65f-d79c-43dd-a005-63cefb7f82da","type":"Slider"}]},"id":"4dd58b53-066d-4b4f-94d7-7ece37f73146","type":"WidgetBox"},{"attributes":{},"id":"6e251041-85d0-4193-af60-66b29446e059","type":"Selection"},{"attributes":{},"id":"d37770f5-31a4-49bd-b5e6-f63a3ac99329","type":"LinearScale"},{"attributes":{"source":{"id":"990f74d3-e2ed-4095-9cd2-8c68ce3e4e39","type":"ColumnDataSource"}},"id":"b73f9b2d-4603-413f-b915-77c26275ceab","type":"CDSView"},{"attributes":{},"id":"b573fd10-667d-4a6b-a18c-129b352fc566","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"18bf271b-ae57-4f68-b5ff-df8a7bf8e09f","type":"BasicTickFormatter"},"plot":{"id":"3abd5ea5-cf51-4a48-9e88-f9b3d10c1292","subtype":"Figure","type":"Plot"},"ticker":{"id":"ae9cf447-546f-4198-9088-190b221b1594","type":"BasicTicker"},"visible":false},"id":"bd009bf0-7569-4f31-b93c-8a7d67de5f87","type":"LinearAxis"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"1ef7d353-d256-4819-b006-0f176d139b24","type":"ImageURL"},{"attributes":{},"id":"ae9cf447-546f-4198-9088-190b221b1594","type":"BasicTicker"},{"attributes":{"plot":{"id":"3abd5ea5-cf51-4a48-9e88-f9b3d10c1292","subtype":"Figure","type":"Plot"},"ticker":{"id":"ae9cf447-546f-4198-9088-190b221b1594","type":"BasicTicker"},"visible":false},"id":"ba4201e3-848a-4f17-b5dc-ec71136b9c6f","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"3abd5ea5-cf51-4a48-9e88-f9b3d10c1292","subtype":"Figure","type":"Plot"},"ticker":{"id":"3c259a6e-d6f4-463b-abe5-fbf621a3d458","type":"BasicTicker"},"visible":false},"id":"debb64fd-2b8a-4e02-a11a-09679cc22d50","type":"Grid"},{"attributes":{},"id":"dc9db8d0-c762-45f9-b3ba-1679ff4963cc","type":"LinearScale"}],"root_ids":["31439f9a-1f08-49e2-8274-088a5124b059"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"6a6a9c50-7e63-488b-ad6e-d862bffb49cb","roots":{"31439f9a-1f08-49e2-8274-088a5124b059":"a7bd4d20-f86a-47f5-83ba-c1e2330a9c7d"}}];
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
