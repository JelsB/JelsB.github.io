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
      };var element = document.getElementById("7f31f787-bd72-4384-9b4a-16df71c8ae5c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7f31f787-bd72-4384-9b4a-16df71c8ae5c' but no matching script tag was found. ")
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

                  var docs_json = '{"bdab8c00-7af8-4c73-a081-dc666e3b3d4e":{"roots":{"references":[{"attributes":{},"id":"c548f7c2-5c65-47ee-b348-c8246b1d201e","type":"LinearScale"},{"attributes":{},"id":"075a6fa4-e2ed-4d25-b34a-bfdc08cd3822","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"aef62bd0-53dd-4fb7-b988-dd0a96c6f702","type":"ColumnDataSource"},"glyph":{"id":"d1b1ed68-242a-4ec8-ad05-a250856cd824","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2660bc1e-ed7c-4ec7-a2cf-f4c48493f78f","type":"ImageURL"},"selection_glyph":null,"view":{"id":"1c8398d3-1d5d-41c9-9bc5-24bfe1c444bb","type":"CDSView"}},"id":"bb113274-a171-4451-86ee-f9b2acdee1c6","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"f58ff001-ea1e-403e-b6aa-05d527d768bb","type":"Toolbar"},{"attributes":{"callback":{"id":"58966fbf-884c-4fed-a8ef-d7c177e0136c","type":"CustomJS"},"end":365,"start":0,"step":5,"title":"days","value":0},"id":"0fefe205-fc55-465e-b929-e123dfaa1d80","type":"Slider"},{"attributes":{},"id":"3db0086d-4cf1-4aad-b214-afac3b1f0f6a","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"5208fb32-92da-4bef-b2be-7f562403fb62","subtype":"Figure","type":"Plot"},"ticker":{"id":"30cf52ef-d8c7-4ceb-bd59-43240e2a5f9f","type":"BasicTicker"},"visible":false},"id":"57fccf55-05eb-4f08-96f8-65b4f543dc41","type":"Grid"},{"attributes":{"formatter":{"id":"075a6fa4-e2ed-4d25-b34a-bfdc08cd3822","type":"BasicTickFormatter"},"plot":{"id":"5208fb32-92da-4bef-b2be-7f562403fb62","subtype":"Figure","type":"Plot"},"ticker":{"id":"144a2b21-d990-4b98-a0b8-2818dd7a458f","type":"BasicTicker"},"visible":false},"id":"0f041929-9857-4a36-a539-6ab87e7f7c06","type":"LinearAxis"},{"attributes":{"callback":null},"id":"9bb97304-088f-4541-a65a-b03e7073bdd2","type":"Range1d"},{"attributes":{"children":[{"id":"659f62dc-e204-4fa4-b13e-488d359f4b66","type":"WidgetBox"},{"id":"5208fb32-92da-4bef-b2be-7f562403fb62","subtype":"Figure","type":"Plot"}]},"id":"2f81e0e2-d385-4f5b-9207-b1e69c6f6379","type":"Column"},{"attributes":{},"id":"c7d4bb25-fc37-4af4-aacb-ef7b694b4362","type":"UnionRenderers"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"d1b1ed68-242a-4ec8-ad05-a250856cd824","type":"ImageURL"},{"attributes":{},"id":"144a2b21-d990-4b98-a0b8-2818dd7a458f","type":"BasicTicker"},{"attributes":{},"id":"c5d977c4-1d1f-4605-9c2d-4d14dae613f7","type":"Selection"},{"attributes":{"children":[{"id":"0fefe205-fc55-465e-b929-e123dfaa1d80","type":"Slider"}]},"id":"659f62dc-e204-4fa4-b13e-488d359f4b66","type":"WidgetBox"},{"attributes":{"callback":null,"data":{"url_full":["/assets/academia/bokeh/figs/monomer/Al2O3/AL8O12_000.png"],"url_num":["000"]},"selected":{"id":"c5d977c4-1d1f-4605-9c2d-4d14dae613f7","type":"Selection"},"selection_policy":{"id":"c7d4bb25-fc37-4af4-aacb-ef7b694b4362","type":"UnionRenderers"}},"id":"aef62bd0-53dd-4fb7-b988-dd0a96c6f702","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"5208fb32-92da-4bef-b2be-7f562403fb62","subtype":"Figure","type":"Plot"},"ticker":{"id":"144a2b21-d990-4b98-a0b8-2818dd7a458f","type":"BasicTicker"},"visible":false},"id":"6e62c862-4e15-4930-b3c8-fdc53f45263a","type":"Grid"},{"attributes":{"formatter":{"id":"3db0086d-4cf1-4aad-b214-afac3b1f0f6a","type":"BasicTickFormatter"},"plot":{"id":"5208fb32-92da-4bef-b2be-7f562403fb62","subtype":"Figure","type":"Plot"},"ticker":{"id":"30cf52ef-d8c7-4ceb-bd59-43240e2a5f9f","type":"BasicTicker"},"visible":false},"id":"8b16cfa0-3a15-459e-8d25-58ff61333009","type":"LinearAxis"},{"attributes":{"source":{"id":"aef62bd0-53dd-4fb7-b988-dd0a96c6f702","type":"ColumnDataSource"}},"id":"1c8398d3-1d5d-41c9-9bc5-24bfe1c444bb","type":"CDSView"},{"attributes":{"callback":null},"id":"1dbbc2bc-c359-4190-8298-b64b1d86bc87","type":"Range1d"},{"attributes":{"plot":null,"text":""},"id":"e3a35dd9-6e76-46db-9b6e-185a9beb1269","type":"Title"},{"attributes":{},"id":"1409e912-c2d5-435f-b3c8-63686e938dfb","type":"LinearScale"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"2660bc1e-ed7c-4ec7-a2cf-f4c48493f78f","type":"ImageURL"},{"attributes":{"below":[{"id":"8b16cfa0-3a15-459e-8d25-58ff61333009","type":"LinearAxis"}],"left":[{"id":"0f041929-9857-4a36-a539-6ab87e7f7c06","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"8b16cfa0-3a15-459e-8d25-58ff61333009","type":"LinearAxis"},{"id":"57fccf55-05eb-4f08-96f8-65b4f543dc41","type":"Grid"},{"id":"0f041929-9857-4a36-a539-6ab87e7f7c06","type":"LinearAxis"},{"id":"6e62c862-4e15-4930-b3c8-fdc53f45263a","type":"Grid"},{"id":"bb113274-a171-4451-86ee-f9b2acdee1c6","type":"GlyphRenderer"}],"title":{"id":"e3a35dd9-6e76-46db-9b6e-185a9beb1269","type":"Title"},"toolbar":{"id":"f58ff001-ea1e-403e-b6aa-05d527d768bb","type":"Toolbar"},"x_range":{"id":"1dbbc2bc-c359-4190-8298-b64b1d86bc87","type":"Range1d"},"x_scale":{"id":"1409e912-c2d5-435f-b3c8-63686e938dfb","type":"LinearScale"},"y_range":{"id":"9bb97304-088f-4541-a65a-b03e7073bdd2","type":"Range1d"},"y_scale":{"id":"c548f7c2-5c65-47ee-b348-c8246b1d201e","type":"LinearScale"}},"id":"5208fb32-92da-4bef-b2be-7f562403fb62","subtype":"Figure","type":"Plot"},{"attributes":{"args":{"source":{"id":"aef62bd0-53dd-4fb7-b988-dd0a96c6f702","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value/5\\n        var file_name = data[&#x27;url_full&#x27;]\\n        var file_num = data[&#x27;url_num&#x27;]\\n        var f_string = f.toString().padStart(3, &#x27;0&#x27;)\\n        file_name[0] = file_name[0].replace(file_num[0], f_string)\\n        file_num[0] = f_string\\n        source.change.emit();\\n        "},"id":"58966fbf-884c-4fed-a8ef-d7c177e0136c","type":"CustomJS"},{"attributes":{},"id":"30cf52ef-d8c7-4ceb-bd59-43240e2a5f9f","type":"BasicTicker"}],"root_ids":["2f81e0e2-d385-4f5b-9207-b1e69c6f6379"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"bdab8c00-7af8-4c73-a081-dc666e3b3d4e","roots":{"2f81e0e2-d385-4f5b-9207-b1e69c6f6379":"7f31f787-bd72-4384-9b4a-16df71c8ae5c"}}];
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
