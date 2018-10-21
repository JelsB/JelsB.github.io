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
      };var element = document.getElementById("02731820-147b-4276-a854-b85ad81ae57d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '02731820-147b-4276-a854-b85ad81ae57d' but no matching script tag was found. ")
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

                  var docs_json = '{"47472599-3736-4df7-80a5-fdf8cbb50073":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"e5b79429-97c4-4ed4-bd2c-7e1982bf5dd5","type":"Toolbar"},{"attributes":{},"id":"e49ab96b-03dc-4d2a-be60-46c885076852","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"ea53d16f-1dbd-4844-88bc-c0220bdc15ce","subtype":"Figure","type":"Plot"},"ticker":{"id":"e49ab96b-03dc-4d2a-be60-46c885076852","type":"BasicTicker"},"visible":false},"id":"37c526bb-8715-4128-acc9-0ba3dd24cade","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"c8204362-8ce6-4443-a568-fa24c66d28cd","type":"Title"},{"attributes":{"callback":null},"id":"3fafa94e-5d7c-4cba-ae56-2f8bf3430ced","type":"Range1d"},{"attributes":{"args":{"source":{"id":"8974ea03-a2b1-4056-8707-730028be6305","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value/5\\n        var file_name = data[&#x27;url_full&#x27;]\\n        var file_num = data[&#x27;url_num&#x27;]\\n        var f_string = f.toString().padStart(3, &#x27;0&#x27;)\\n        file_name[0] = file_name[0].replace(file_num[0], f_string)\\n        file_num[0] = f_string\\n        source.change.emit();\\n        "},"id":"304e55a5-b711-44e8-9150-970c9bc37e0b","type":"CustomJS"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"3253ae89-8d7c-477c-8796-39ea7c42db76","type":"ImageURL"},{"attributes":{"callback":{"id":"304e55a5-b711-44e8-9150-970c9bc37e0b","type":"CustomJS"},"end":365,"start":0,"step":5,"title":"days","value":0},"id":"2bd7f144-7ebe-43ad-a8e1-f19f82e8dabb","type":"Slider"},{"attributes":{"below":[{"id":"babd1f8a-3e5d-4c7c-b9c7-36f054bd6aa5","type":"LinearAxis"}],"left":[{"id":"74b41e9a-3f65-48f5-abdb-a84491ca4b3c","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"babd1f8a-3e5d-4c7c-b9c7-36f054bd6aa5","type":"LinearAxis"},{"id":"0adbeafb-8a14-4d91-b548-7e00b38257d3","type":"Grid"},{"id":"74b41e9a-3f65-48f5-abdb-a84491ca4b3c","type":"LinearAxis"},{"id":"37c526bb-8715-4128-acc9-0ba3dd24cade","type":"Grid"},{"id":"9f78228d-8d91-4388-ac53-58d4ab604072","type":"GlyphRenderer"}],"title":{"id":"c8204362-8ce6-4443-a568-fa24c66d28cd","type":"Title"},"toolbar":{"id":"e5b79429-97c4-4ed4-bd2c-7e1982bf5dd5","type":"Toolbar"},"x_range":{"id":"90dffc4d-3e64-4315-b89d-5b0949218abf","type":"Range1d"},"x_scale":{"id":"9df01c79-ef89-4dd4-9154-295f9985986b","type":"LinearScale"},"y_range":{"id":"3fafa94e-5d7c-4cba-ae56-2f8bf3430ced","type":"Range1d"},"y_scale":{"id":"e131578a-4e0b-4653-bd54-1c8ff398ba79","type":"LinearScale"}},"id":"ea53d16f-1dbd-4844-88bc-c0220bdc15ce","subtype":"Figure","type":"Plot"},{"attributes":{"children":[{"id":"2bd7f144-7ebe-43ad-a8e1-f19f82e8dabb","type":"Slider"}]},"id":"a662bd4e-7c47-4e68-a68a-a4b37eb7951e","type":"WidgetBox"},{"attributes":{},"id":"9df01c79-ef89-4dd4-9154-295f9985986b","type":"LinearScale"},{"attributes":{},"id":"d2656b3d-5320-4776-b4f2-ce9ba630594a","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"0698bf76-e211-415c-8aba-c9438be6e6b5","type":"BasicTickFormatter"},"plot":{"id":"ea53d16f-1dbd-4844-88bc-c0220bdc15ce","subtype":"Figure","type":"Plot"},"ticker":{"id":"e49ab96b-03dc-4d2a-be60-46c885076852","type":"BasicTicker"},"visible":false},"id":"74b41e9a-3f65-48f5-abdb-a84491ca4b3c","type":"LinearAxis"},{"attributes":{"source":{"id":"8974ea03-a2b1-4056-8707-730028be6305","type":"ColumnDataSource"}},"id":"a6552ddd-51c3-44b8-aa50-6b630986b8ea","type":"CDSView"},{"attributes":{},"id":"3d75396a-f1f0-476b-8cb2-4f2af1620800","type":"Selection"},{"attributes":{"formatter":{"id":"5264be9f-de90-4826-aedd-e2b17d7bf8e2","type":"BasicTickFormatter"},"plot":{"id":"ea53d16f-1dbd-4844-88bc-c0220bdc15ce","subtype":"Figure","type":"Plot"},"ticker":{"id":"c156f793-603d-4fb6-bce7-2ac218ac7f7a","type":"BasicTicker"},"visible":false},"id":"babd1f8a-3e5d-4c7c-b9c7-36f054bd6aa5","type":"LinearAxis"},{"attributes":{"children":[{"id":"a662bd4e-7c47-4e68-a68a-a4b37eb7951e","type":"WidgetBox"},{"id":"ea53d16f-1dbd-4844-88bc-c0220bdc15ce","subtype":"Figure","type":"Plot"}]},"id":"7663d413-e29e-46fa-a263-54987a0b69ba","type":"Column"},{"attributes":{"data_source":{"id":"8974ea03-a2b1-4056-8707-730028be6305","type":"ColumnDataSource"},"glyph":{"id":"d0550fe1-6a2e-499b-812d-b5cabbf52f05","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3253ae89-8d7c-477c-8796-39ea7c42db76","type":"ImageURL"},"selection_glyph":null,"view":{"id":"a6552ddd-51c3-44b8-aa50-6b630986b8ea","type":"CDSView"}},"id":"9f78228d-8d91-4388-ac53-58d4ab604072","type":"GlyphRenderer"},{"attributes":{},"id":"0698bf76-e211-415c-8aba-c9438be6e6b5","type":"BasicTickFormatter"},{"attributes":{},"id":"5264be9f-de90-4826-aedd-e2b17d7bf8e2","type":"BasicTickFormatter"},{"attributes":{},"id":"e131578a-4e0b-4653-bd54-1c8ff398ba79","type":"LinearScale"},{"attributes":{},"id":"c156f793-603d-4fb6-bce7-2ac218ac7f7a","type":"BasicTicker"},{"attributes":{"plot":{"id":"ea53d16f-1dbd-4844-88bc-c0220bdc15ce","subtype":"Figure","type":"Plot"},"ticker":{"id":"c156f793-603d-4fb6-bce7-2ac218ac7f7a","type":"BasicTicker"},"visible":false},"id":"0adbeafb-8a14-4d91-b548-7e00b38257d3","type":"Grid"},{"attributes":{"callback":null},"id":"90dffc4d-3e64-4315-b89d-5b0949218abf","type":"Range1d"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"d0550fe1-6a2e-499b-812d-b5cabbf52f05","type":"ImageURL"},{"attributes":{"callback":null,"data":{"url_full":["/assets/academia/bokeh/figs/monomer/MgO/MG10O10_000.png"],"url_num":["000"]},"selected":{"id":"3d75396a-f1f0-476b-8cb2-4f2af1620800","type":"Selection"},"selection_policy":{"id":"d2656b3d-5320-4776-b4f2-ce9ba630594a","type":"UnionRenderers"}},"id":"8974ea03-a2b1-4056-8707-730028be6305","type":"ColumnDataSource"}],"root_ids":["7663d413-e29e-46fa-a263-54987a0b69ba"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"47472599-3736-4df7-80a5-fdf8cbb50073","roots":{"7663d413-e29e-46fa-a263-54987a0b69ba":"02731820-147b-4276-a854-b85ad81ae57d"}}];
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
