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
      };var element = document.getElementById("5cf8f9fb-4f86-46b2-9c68-f8d8bbb8e00c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5cf8f9fb-4f86-46b2-9c68-f8d8bbb8e00c' but no matching script tag was found. ")
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

                  var docs_json = '{"3f1a6656-16d4-490c-b070-f0c7770007c9":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"6ca8be07-19c3-4ddb-b056-1f0dbb724055","subtype":"Figure","type":"Plot"},"ticker":{"id":"e6aba378-723a-4106-adab-43e0fa9f8861","type":"BasicTicker"},"visible":false},"id":"5da408d4-dcd9-41a0-af44-59aedce77fed","type":"Grid"},{"attributes":{},"id":"ca18e7d6-7b37-40ce-9986-e0f8afa7c042","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"9b490039-9c3b-442d-b216-2bfed4298894","type":"BasicTickFormatter"},"plot":{"id":"6ca8be07-19c3-4ddb-b056-1f0dbb724055","subtype":"Figure","type":"Plot"},"ticker":{"id":"e6aba378-723a-4106-adab-43e0fa9f8861","type":"BasicTicker"},"visible":false},"id":"950e8fca-68b8-4695-aabb-a0fa0f6a9196","type":"LinearAxis"},{"attributes":{"source":{"id":"427c32f2-f6cd-4088-9865-f140fd6c3dc0","type":"ColumnDataSource"}},"id":"6a54aae2-50d4-4905-b034-0c1e68fe5083","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"d5687823-8a25-4c78-b404-6e4bef159818","type":"Title"},{"attributes":{"below":[{"id":"406acc15-fc6f-4e8c-bbc1-5982f9f83fcd","type":"LinearAxis"}],"left":[{"id":"950e8fca-68b8-4695-aabb-a0fa0f6a9196","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"406acc15-fc6f-4e8c-bbc1-5982f9f83fcd","type":"LinearAxis"},{"id":"38345336-5bfc-4bbd-b912-131d3511efa8","type":"Grid"},{"id":"950e8fca-68b8-4695-aabb-a0fa0f6a9196","type":"LinearAxis"},{"id":"5da408d4-dcd9-41a0-af44-59aedce77fed","type":"Grid"},{"id":"ea041958-0afb-404a-bdc6-768c562bfd20","type":"GlyphRenderer"}],"title":{"id":"d5687823-8a25-4c78-b404-6e4bef159818","type":"Title"},"toolbar":{"id":"e810ea44-67aa-4274-b663-95f15da7603f","type":"Toolbar"},"x_range":{"id":"79dac8fd-d914-4376-9909-cdab6d04a4e4","type":"Range1d"},"x_scale":{"id":"f6a6c212-dfb6-4334-ac8e-6d6bef86fb1c","type":"LinearScale"},"y_range":{"id":"2b6a0cd0-67f5-492a-919d-7881d1bbeece","type":"Range1d"},"y_scale":{"id":"1ffcad5f-38dc-467a-91ae-4566d5557f88","type":"LinearScale"}},"id":"6ca8be07-19c3-4ddb-b056-1f0dbb724055","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"ab744542-93d9-4606-aa3b-f22f1d1ebf05","type":"BasicTicker"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"7264543a-18af-4f8c-8227-c2f76b9e0cef","type":"ImageURL"},{"attributes":{},"id":"b33b17a1-b25e-49c3-af92-26fa6132d3c9","type":"Selection"},{"attributes":{"callback":null},"id":"79dac8fd-d914-4376-9909-cdab6d04a4e4","type":"Range1d"},{"attributes":{},"id":"4b6c434e-4579-49ce-8a18-46ba82c7e334","type":"UnionRenderers"},{"attributes":{"children":[{"id":"3896014e-bac8-4eeb-a1c7-2130af14508c","type":"Slider"}]},"id":"084c8360-7dbb-4245-8209-cec4ac12dd3a","type":"WidgetBox"},{"attributes":{"plot":{"id":"6ca8be07-19c3-4ddb-b056-1f0dbb724055","subtype":"Figure","type":"Plot"},"ticker":{"id":"ab744542-93d9-4606-aa3b-f22f1d1ebf05","type":"BasicTicker"},"visible":false},"id":"38345336-5bfc-4bbd-b912-131d3511efa8","type":"Grid"},{"attributes":{"data_source":{"id":"427c32f2-f6cd-4088-9865-f140fd6c3dc0","type":"ColumnDataSource"},"glyph":{"id":"e324f49f-97f4-43b5-9fe3-6057caf7eeb1","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7264543a-18af-4f8c-8227-c2f76b9e0cef","type":"ImageURL"},"selection_glyph":null,"view":{"id":"6a54aae2-50d4-4905-b034-0c1e68fe5083","type":"CDSView"}},"id":"ea041958-0afb-404a-bdc6-768c562bfd20","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"e810ea44-67aa-4274-b663-95f15da7603f","type":"Toolbar"},{"attributes":{"formatter":{"id":"ca18e7d6-7b37-40ce-9986-e0f8afa7c042","type":"BasicTickFormatter"},"plot":{"id":"6ca8be07-19c3-4ddb-b056-1f0dbb724055","subtype":"Figure","type":"Plot"},"ticker":{"id":"ab744542-93d9-4606-aa3b-f22f1d1ebf05","type":"BasicTicker"},"visible":false},"id":"406acc15-fc6f-4e8c-bbc1-5982f9f83fcd","type":"LinearAxis"},{"attributes":{"callback":null},"id":"2b6a0cd0-67f5-492a-919d-7881d1bbeece","type":"Range1d"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"e324f49f-97f4-43b5-9fe3-6057caf7eeb1","type":"ImageURL"},{"attributes":{"args":{"source":{"id":"427c32f2-f6cd-4088-9865-f140fd6c3dc0","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value/5\\n        var file_name = data[&#x27;url_full&#x27;]\\n        var file_num = data[&#x27;url_num&#x27;]\\n        var f_string = f.toString().padStart(3, &#x27;0&#x27;)\\n        file_name[0] = file_name[0].replace(file_num[0], f_string)\\n        file_num[0] = f_string\\n        source.change.emit();\\n        "},"id":"155958d5-7364-4647-8647-c9c64d9b9f9b","type":"CustomJS"},{"attributes":{"callback":{"id":"155958d5-7364-4647-8647-c9c64d9b9f9b","type":"CustomJS"},"end":365,"start":0,"step":5,"title":"days","value":0},"id":"3896014e-bac8-4eeb-a1c7-2130af14508c","type":"Slider"},{"attributes":{},"id":"1ffcad5f-38dc-467a-91ae-4566d5557f88","type":"LinearScale"},{"attributes":{"children":[{"id":"084c8360-7dbb-4245-8209-cec4ac12dd3a","type":"WidgetBox"},{"id":"6ca8be07-19c3-4ddb-b056-1f0dbb724055","subtype":"Figure","type":"Plot"}]},"id":"78b4b56f-c482-4ff1-bbc3-ea758a1e0dbc","type":"Column"},{"attributes":{},"id":"f6a6c212-dfb6-4334-ac8e-6d6bef86fb1c","type":"LinearScale"},{"attributes":{},"id":"9b490039-9c3b-442d-b216-2bfed4298894","type":"BasicTickFormatter"},{"attributes":{},"id":"e6aba378-723a-4106-adab-43e0fa9f8861","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"url_full":["/assets/academia/bokeh/figs/monomer/MgO/MG6O6_000.png"],"url_num":["000"]},"selected":{"id":"b33b17a1-b25e-49c3-af92-26fa6132d3c9","type":"Selection"},"selection_policy":{"id":"4b6c434e-4579-49ce-8a18-46ba82c7e334","type":"UnionRenderers"}},"id":"427c32f2-f6cd-4088-9865-f140fd6c3dc0","type":"ColumnDataSource"}],"root_ids":["78b4b56f-c482-4ff1-bbc3-ea758a1e0dbc"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"3f1a6656-16d4-490c-b070-f0c7770007c9","roots":{"78b4b56f-c482-4ff1-bbc3-ea758a1e0dbc":"5cf8f9fb-4f86-46b2-9c68-f8d8bbb8e00c"}}];
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
