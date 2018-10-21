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
      };var element = document.getElementById("8286bbdf-261a-4183-a45c-4706db06f1b4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8286bbdf-261a-4183-a45c-4706db06f1b4' but no matching script tag was found. ")
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

                  var docs_json = '{"9c7f7be9-a9fa-45f3-89b0-7b65c5dbb625":{"roots":{"references":[{"attributes":{"data_source":{"id":"4f1d95ab-5312-42e4-9970-1f83e8284eb5","type":"ColumnDataSource"},"glyph":{"id":"2336ebe2-a493-401c-864f-f590894f8be5","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a3c7223a-f443-46ca-ba4c-c8f84c6b3740","type":"ImageURL"},"selection_glyph":null,"view":{"id":"8ead212e-ba5e-403e-924a-68f805855cb0","type":"CDSView"}},"id":"5fe5bf5d-8fc6-473a-9ef5-b3297f3cceb7","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"url_full":["/assets/academia/bokeh/figs/monomer/MgO/MG2O2_000.png"],"url_num":["000"]},"selected":{"id":"71a030c4-f097-4f37-8bfd-880cd9556daa","type":"Selection"},"selection_policy":{"id":"aa9b61ec-b1e6-4f8c-9956-1266eca7085a","type":"UnionRenderers"}},"id":"4f1d95ab-5312-42e4-9970-1f83e8284eb5","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"dcc0d5b2-18ac-4f5b-8213-e80588b94826","type":"Range1d"},{"attributes":{},"id":"3d6e7e5e-0423-47df-adf7-694eaf75502f","type":"BasicTicker"},{"attributes":{"children":[{"id":"f847deb9-1d97-4994-84c2-e72a89dfc6d2","type":"Slider"}]},"id":"eb53ca7b-1004-4a86-98ed-892298baef31","type":"WidgetBox"},{"attributes":{},"id":"aa9b61ec-b1e6-4f8c-9956-1266eca7085a","type":"UnionRenderers"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"2336ebe2-a493-401c-864f-f590894f8be5","type":"ImageURL"},{"attributes":{"dimension":1,"plot":{"id":"688b875b-9a44-4520-9b18-1817cc204c5f","subtype":"Figure","type":"Plot"},"ticker":{"id":"3d6e7e5e-0423-47df-adf7-694eaf75502f","type":"BasicTicker"},"visible":false},"id":"20443a3c-9a73-45e7-bac1-b5613ac2bbe3","type":"Grid"},{"attributes":{},"id":"360904a0-65b0-49e1-9f4f-6df48039b70a","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"14d4a6fa-73d2-487b-9921-c0d24973f41f","type":"Toolbar"},{"attributes":{"formatter":{"id":"3cb924cc-7b5f-4600-bea4-177441024248","type":"BasicTickFormatter"},"plot":{"id":"688b875b-9a44-4520-9b18-1817cc204c5f","subtype":"Figure","type":"Plot"},"ticker":{"id":"b95c4ba3-8220-43e1-8f6f-3c7be2290ab5","type":"BasicTicker"},"visible":false},"id":"9e3598bd-e0dd-420a-a7c5-d02d314d0d9a","type":"LinearAxis"},{"attributes":{},"id":"71a030c4-f097-4f37-8bfd-880cd9556daa","type":"Selection"},{"attributes":{"callback":{"id":"1f384ccd-9d85-4d8b-b4f4-ac62f898ef09","type":"CustomJS"},"end":365,"start":0,"step":5,"title":"days","value":0},"id":"f847deb9-1d97-4994-84c2-e72a89dfc6d2","type":"Slider"},{"attributes":{},"id":"cba0db11-ef3a-40b9-a8f4-a081415af2ca","type":"LinearScale"},{"attributes":{"args":{"source":{"id":"4f1d95ab-5312-42e4-9970-1f83e8284eb5","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value/5\\n        var file_name = data[&#x27;url_full&#x27;]\\n        var file_num = data[&#x27;url_num&#x27;]\\n        var f_string = f.toString().padStart(3, &#x27;0&#x27;)\\n        file_name[0] = file_name[0].replace(file_num[0], f_string)\\n        file_num[0] = f_string\\n        source.change.emit();\\n        "},"id":"1f384ccd-9d85-4d8b-b4f4-ac62f898ef09","type":"CustomJS"},{"attributes":{"children":[{"id":"eb53ca7b-1004-4a86-98ed-892298baef31","type":"WidgetBox"},{"id":"688b875b-9a44-4520-9b18-1817cc204c5f","subtype":"Figure","type":"Plot"}]},"id":"701e56ef-25df-476f-84df-e4198c3d10ff","type":"Column"},{"attributes":{},"id":"713ee6ca-dcc7-469b-aa97-a732f8faedf8","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"560402e7-bdcd-425d-9a41-de8eafa7cfe5","type":"Range1d"},{"attributes":{"below":[{"id":"9e3598bd-e0dd-420a-a7c5-d02d314d0d9a","type":"LinearAxis"}],"left":[{"id":"3bfcfc3d-8ac8-4d9c-bd9a-471ed6af8f2d","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"9e3598bd-e0dd-420a-a7c5-d02d314d0d9a","type":"LinearAxis"},{"id":"e7a670a7-1e3d-4bfd-a40f-980ee08088c4","type":"Grid"},{"id":"3bfcfc3d-8ac8-4d9c-bd9a-471ed6af8f2d","type":"LinearAxis"},{"id":"20443a3c-9a73-45e7-bac1-b5613ac2bbe3","type":"Grid"},{"id":"5fe5bf5d-8fc6-473a-9ef5-b3297f3cceb7","type":"GlyphRenderer"}],"title":{"id":"d8acd5c4-6131-4747-9f5a-48d61be0e757","type":"Title"},"toolbar":{"id":"14d4a6fa-73d2-487b-9921-c0d24973f41f","type":"Toolbar"},"x_range":{"id":"dcc0d5b2-18ac-4f5b-8213-e80588b94826","type":"Range1d"},"x_scale":{"id":"cba0db11-ef3a-40b9-a8f4-a081415af2ca","type":"LinearScale"},"y_range":{"id":"560402e7-bdcd-425d-9a41-de8eafa7cfe5","type":"Range1d"},"y_scale":{"id":"360904a0-65b0-49e1-9f4f-6df48039b70a","type":"LinearScale"}},"id":"688b875b-9a44-4520-9b18-1817cc204c5f","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"d8acd5c4-6131-4747-9f5a-48d61be0e757","type":"Title"},{"attributes":{"plot":{"id":"688b875b-9a44-4520-9b18-1817cc204c5f","subtype":"Figure","type":"Plot"},"ticker":{"id":"b95c4ba3-8220-43e1-8f6f-3c7be2290ab5","type":"BasicTicker"},"visible":false},"id":"e7a670a7-1e3d-4bfd-a40f-980ee08088c4","type":"Grid"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"a3c7223a-f443-46ca-ba4c-c8f84c6b3740","type":"ImageURL"},{"attributes":{},"id":"3cb924cc-7b5f-4600-bea4-177441024248","type":"BasicTickFormatter"},{"attributes":{},"id":"b95c4ba3-8220-43e1-8f6f-3c7be2290ab5","type":"BasicTicker"},{"attributes":{"formatter":{"id":"713ee6ca-dcc7-469b-aa97-a732f8faedf8","type":"BasicTickFormatter"},"plot":{"id":"688b875b-9a44-4520-9b18-1817cc204c5f","subtype":"Figure","type":"Plot"},"ticker":{"id":"3d6e7e5e-0423-47df-adf7-694eaf75502f","type":"BasicTicker"},"visible":false},"id":"3bfcfc3d-8ac8-4d9c-bd9a-471ed6af8f2d","type":"LinearAxis"},{"attributes":{"source":{"id":"4f1d95ab-5312-42e4-9970-1f83e8284eb5","type":"ColumnDataSource"}},"id":"8ead212e-ba5e-403e-924a-68f805855cb0","type":"CDSView"}],"root_ids":["701e56ef-25df-476f-84df-e4198c3d10ff"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"9c7f7be9-a9fa-45f3-89b0-7b65c5dbb625","roots":{"701e56ef-25df-476f-84df-e4198c3d10ff":"8286bbdf-261a-4183-a45c-4706db06f1b4"}}];
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
