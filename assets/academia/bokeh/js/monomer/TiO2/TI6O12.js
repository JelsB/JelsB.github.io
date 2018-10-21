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
      };var element = document.getElementById("ffe9f121-b697-4a92-b94d-4f3d3c5f6a8d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ffe9f121-b697-4a92-b94d-4f3d3c5f6a8d' but no matching script tag was found. ")
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

                  var docs_json = '{"4e57dd6e-f643-4191-bdd7-6fefc4f7f244":{"roots":{"references":[{"attributes":{"args":{"source":{"id":"7085eb76-9bad-4740-b172-17a64b7cc658","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value/5\\n        var file_name = data[&#x27;url_full&#x27;]\\n        var file_num = data[&#x27;url_num&#x27;]\\n        var f_string = f.toString().padStart(3, &#x27;0&#x27;)\\n        file_name[0] = file_name[0].replace(file_num[0], f_string)\\n        file_num[0] = f_string\\n        source.change.emit();\\n        "},"id":"b1fb77e5-d38e-4c80-ad30-10ee15828ae9","type":"CustomJS"},{"attributes":{},"id":"aba03caa-1bdf-4ef6-9928-823705615e6c","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"0c7e8716-35df-43e7-858a-146899da05ea","subtype":"Figure","type":"Plot"},"ticker":{"id":"97f32672-edb5-4bd8-bf7f-403e8cd9f7d2","type":"BasicTicker"},"visible":false},"id":"f9d9ea9c-92e8-4f35-87c5-bf8aab65f9e3","type":"Grid"},{"attributes":{},"id":"f5a4744e-bd84-4f7c-8c37-b4e723392c93","type":"LinearScale"},{"attributes":{"formatter":{"id":"1d8e82e0-8735-4445-89b4-2601a20e2f33","type":"BasicTickFormatter"},"plot":{"id":"0c7e8716-35df-43e7-858a-146899da05ea","subtype":"Figure","type":"Plot"},"ticker":{"id":"97f32672-edb5-4bd8-bf7f-403e8cd9f7d2","type":"BasicTicker"},"visible":false},"id":"c26bd72b-334a-4d8c-ab28-1feb1dfe01e4","type":"LinearAxis"},{"attributes":{},"id":"4d1011af-525c-4810-86a3-54a61a1dafd6","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"635fc84e-cb28-4e63-9466-a4ff1fd9b8f3","type":"Toolbar"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"4170697e-7dd8-48e8-b82b-c3bd00b479b5","type":"ImageURL"},{"attributes":{},"id":"97f32672-edb5-4bd8-bf7f-403e8cd9f7d2","type":"BasicTicker"},{"attributes":{},"id":"1d8e82e0-8735-4445-89b4-2601a20e2f33","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"0c7e8716-35df-43e7-858a-146899da05ea","subtype":"Figure","type":"Plot"},"ticker":{"id":"91dde25c-0aaf-416d-8ebe-9b5c377fa048","type":"BasicTicker"},"visible":false},"id":"6c439ae1-2a81-4448-ad7c-312afb2b389a","type":"Grid"},{"attributes":{"callback":null},"id":"88f02c66-2578-48b8-82db-781ff28205d5","type":"Range1d"},{"attributes":{"callback":null,"data":{"url_full":["/assets/academia/bokeh/figs/monomer/TiO2/TI6O12_000.png"],"url_num":["000"]},"selected":{"id":"dc716c75-b28c-48a1-b33d-cb6c2ca3e380","type":"Selection"},"selection_policy":{"id":"95e46195-15d2-4598-8357-e649a7ff013f","type":"UnionRenderers"}},"id":"7085eb76-9bad-4740-b172-17a64b7cc658","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"112429b4-3171-4aa6-9a7d-19b221c331ba","type":"Title"},{"attributes":{"callback":{"id":"b1fb77e5-d38e-4c80-ad30-10ee15828ae9","type":"CustomJS"},"end":365,"start":0,"step":5,"title":"days","value":0},"id":"80b62112-0930-4e06-a468-f16e6b6ef617","type":"Slider"},{"attributes":{},"id":"95e46195-15d2-4598-8357-e649a7ff013f","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"1b908d10-cbee-4681-932d-5abb6db85605","type":"Range1d"},{"attributes":{"below":[{"id":"c26bd72b-334a-4d8c-ab28-1feb1dfe01e4","type":"LinearAxis"}],"left":[{"id":"212e9e0d-353b-4a50-a9ca-49d65b1beb2a","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"c26bd72b-334a-4d8c-ab28-1feb1dfe01e4","type":"LinearAxis"},{"id":"f9d9ea9c-92e8-4f35-87c5-bf8aab65f9e3","type":"Grid"},{"id":"212e9e0d-353b-4a50-a9ca-49d65b1beb2a","type":"LinearAxis"},{"id":"6c439ae1-2a81-4448-ad7c-312afb2b389a","type":"Grid"},{"id":"9e29f3a4-9a22-46a5-ad7c-b1a451e91404","type":"GlyphRenderer"}],"title":{"id":"112429b4-3171-4aa6-9a7d-19b221c331ba","type":"Title"},"toolbar":{"id":"635fc84e-cb28-4e63-9466-a4ff1fd9b8f3","type":"Toolbar"},"x_range":{"id":"88f02c66-2578-48b8-82db-781ff28205d5","type":"Range1d"},"x_scale":{"id":"f5a4744e-bd84-4f7c-8c37-b4e723392c93","type":"LinearScale"},"y_range":{"id":"1b908d10-cbee-4681-932d-5abb6db85605","type":"Range1d"},"y_scale":{"id":"4d1011af-525c-4810-86a3-54a61a1dafd6","type":"LinearScale"}},"id":"0c7e8716-35df-43e7-858a-146899da05ea","subtype":"Figure","type":"Plot"},{"attributes":{"children":[{"id":"bf897c48-b5d2-487c-87cb-aa44d4407241","type":"WidgetBox"},{"id":"0c7e8716-35df-43e7-858a-146899da05ea","subtype":"Figure","type":"Plot"}]},"id":"fa2e4c0d-03b9-4ecb-900f-1707c2bf2879","type":"Column"},{"attributes":{"source":{"id":"7085eb76-9bad-4740-b172-17a64b7cc658","type":"ColumnDataSource"}},"id":"a9aa8759-8503-4af1-afd3-36ea31c778c3","type":"CDSView"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"ca8c6818-a435-4bec-82a0-df6ae5f84284","type":"ImageURL"},{"attributes":{"data_source":{"id":"7085eb76-9bad-4740-b172-17a64b7cc658","type":"ColumnDataSource"},"glyph":{"id":"4170697e-7dd8-48e8-b82b-c3bd00b479b5","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ca8c6818-a435-4bec-82a0-df6ae5f84284","type":"ImageURL"},"selection_glyph":null,"view":{"id":"a9aa8759-8503-4af1-afd3-36ea31c778c3","type":"CDSView"}},"id":"9e29f3a4-9a22-46a5-ad7c-b1a451e91404","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"80b62112-0930-4e06-a468-f16e6b6ef617","type":"Slider"}]},"id":"bf897c48-b5d2-487c-87cb-aa44d4407241","type":"WidgetBox"},{"attributes":{"formatter":{"id":"aba03caa-1bdf-4ef6-9928-823705615e6c","type":"BasicTickFormatter"},"plot":{"id":"0c7e8716-35df-43e7-858a-146899da05ea","subtype":"Figure","type":"Plot"},"ticker":{"id":"91dde25c-0aaf-416d-8ebe-9b5c377fa048","type":"BasicTicker"},"visible":false},"id":"212e9e0d-353b-4a50-a9ca-49d65b1beb2a","type":"LinearAxis"},{"attributes":{},"id":"dc716c75-b28c-48a1-b33d-cb6c2ca3e380","type":"Selection"},{"attributes":{},"id":"91dde25c-0aaf-416d-8ebe-9b5c377fa048","type":"BasicTicker"}],"root_ids":["fa2e4c0d-03b9-4ecb-900f-1707c2bf2879"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"4e57dd6e-f643-4191-bdd7-6fefc4f7f244","roots":{"fa2e4c0d-03b9-4ecb-900f-1707c2bf2879":"ffe9f121-b697-4a92-b94d-4f3d3c5f6a8d"}}];
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
