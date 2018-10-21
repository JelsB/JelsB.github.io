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
      };var element = document.getElementById("1d8b31f0-ff2f-4050-9eea-7d11942ca265");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1d8b31f0-ff2f-4050-9eea-7d11942ca265' but no matching script tag was found. ")
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

                  var docs_json = '{"8f20caba-eea7-4953-9275-f432ec875adc":{"roots":{"references":[{"attributes":{},"id":"b4e63ce4-6f18-4ebc-9f59-9275bc5793e1","type":"BasicTickFormatter"},{"attributes":{},"id":"73e84cc5-1eaa-4986-8801-639961af2faa","type":"BasicTicker"},{"attributes":{},"id":"88fa5894-e17e-4bf3-a000-f699fe011ee1","type":"BasicTicker"},{"attributes":{"plot":{"id":"cc3b0f86-b044-4537-bee2-743e8ba276ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"73e84cc5-1eaa-4986-8801-639961af2faa","type":"BasicTicker"},"visible":false},"id":"ab38fdf3-b2f2-4a3f-a368-86056e7b8f8e","type":"Grid"},{"attributes":{},"id":"8f91fc4a-3dc0-4c12-b4d6-6d711f73ac03","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"89aa9143-81e0-4813-bcb1-38188806ce3a","type":"BasicTickFormatter"},"plot":{"id":"cc3b0f86-b044-4537-bee2-743e8ba276ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"73e84cc5-1eaa-4986-8801-639961af2faa","type":"BasicTicker"},"visible":false},"id":"df8fab41-08b6-4b5a-87c3-98059cb44baa","type":"LinearAxis"},{"attributes":{"children":[{"id":"1cbc40c2-efb8-42c0-8b39-6a293816fd20","type":"Slider"}]},"id":"9b72a6e4-4a8c-444f-8364-7c41b38f0569","type":"WidgetBox"},{"attributes":{"formatter":{"id":"b4e63ce4-6f18-4ebc-9f59-9275bc5793e1","type":"BasicTickFormatter"},"plot":{"id":"cc3b0f86-b044-4537-bee2-743e8ba276ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"88fa5894-e17e-4bf3-a000-f699fe011ee1","type":"BasicTicker"},"visible":false},"id":"0fc7a9f4-de35-4dda-b455-c4d73fd91878","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"cc3b0f86-b044-4537-bee2-743e8ba276ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"88fa5894-e17e-4bf3-a000-f699fe011ee1","type":"BasicTicker"},"visible":false},"id":"0768e57b-54c1-46f8-a61c-9a123bf4728a","type":"Grid"},{"attributes":{"data_source":{"id":"3adb6242-9d4a-432d-aec3-2f9028a80275","type":"ColumnDataSource"},"glyph":{"id":"c9d51f08-14d3-4a91-82fa-5dad6eb5deb9","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"219cb7a9-c936-4f06-8385-dbaa93901cad","type":"ImageURL"},"selection_glyph":null,"view":{"id":"317ada41-c711-4d85-a0e3-1fdbd618f838","type":"CDSView"}},"id":"da509777-47db-4599-8d1d-c1c3b60cb418","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"6322dc54-d691-4945-bf76-340114895d43","type":"Toolbar"},{"attributes":{"source":{"id":"3adb6242-9d4a-432d-aec3-2f9028a80275","type":"ColumnDataSource"}},"id":"317ada41-c711-4d85-a0e3-1fdbd618f838","type":"CDSView"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"219cb7a9-c936-4f06-8385-dbaa93901cad","type":"ImageURL"},{"attributes":{"args":{"source":{"id":"3adb6242-9d4a-432d-aec3-2f9028a80275","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value/5\\n        var file_name = data[&#x27;url_full&#x27;]\\n        var file_num = data[&#x27;url_num&#x27;]\\n        var f_string = f.toString().padStart(3, &#x27;0&#x27;)\\n        file_name[0] = file_name[0].replace(file_num[0], f_string)\\n        file_num[0] = f_string\\n        source.change.emit();\\n        "},"id":"81f93c03-7a26-4587-8105-082568a0d137","type":"CustomJS"},{"attributes":{"plot":null,"text":""},"id":"954b4cf6-f85a-44f1-bac2-4c9f7570999b","type":"Title"},{"attributes":{},"id":"0e8d3ae2-0f30-4e94-99c1-2fa7b133d954","type":"LinearScale"},{"attributes":{"callback":{"id":"81f93c03-7a26-4587-8105-082568a0d137","type":"CustomJS"},"end":365,"start":0,"step":5,"title":"days","value":0},"id":"1cbc40c2-efb8-42c0-8b39-6a293816fd20","type":"Slider"},{"attributes":{},"id":"b2c69096-71a2-4984-98df-e15cacd1110a","type":"LinearScale"},{"attributes":{"callback":null},"id":"fb6ffd71-5fa8-4b67-8ccb-8b85ad8bdda2","type":"Range1d"},{"attributes":{"below":[{"id":"df8fab41-08b6-4b5a-87c3-98059cb44baa","type":"LinearAxis"}],"left":[{"id":"0fc7a9f4-de35-4dda-b455-c4d73fd91878","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"df8fab41-08b6-4b5a-87c3-98059cb44baa","type":"LinearAxis"},{"id":"ab38fdf3-b2f2-4a3f-a368-86056e7b8f8e","type":"Grid"},{"id":"0fc7a9f4-de35-4dda-b455-c4d73fd91878","type":"LinearAxis"},{"id":"0768e57b-54c1-46f8-a61c-9a123bf4728a","type":"Grid"},{"id":"da509777-47db-4599-8d1d-c1c3b60cb418","type":"GlyphRenderer"}],"title":{"id":"954b4cf6-f85a-44f1-bac2-4c9f7570999b","type":"Title"},"toolbar":{"id":"6322dc54-d691-4945-bf76-340114895d43","type":"Toolbar"},"x_range":{"id":"fb6ffd71-5fa8-4b67-8ccb-8b85ad8bdda2","type":"Range1d"},"x_scale":{"id":"0e8d3ae2-0f30-4e94-99c1-2fa7b133d954","type":"LinearScale"},"y_range":{"id":"ef4eaf58-8cde-4a01-83f9-564fb176cf54","type":"Range1d"},"y_scale":{"id":"b2c69096-71a2-4984-98df-e15cacd1110a","type":"LinearScale"}},"id":"cc3b0f86-b044-4537-bee2-743e8ba276ee","subtype":"Figure","type":"Plot"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"c9d51f08-14d3-4a91-82fa-5dad6eb5deb9","type":"ImageURL"},{"attributes":{},"id":"89aa9143-81e0-4813-bcb1-38188806ce3a","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"ef4eaf58-8cde-4a01-83f9-564fb176cf54","type":"Range1d"},{"attributes":{"callback":null,"data":{"url_full":["/assets/academia/bokeh/figs/monomer/TiO2/TI10O20_000.png"],"url_num":["000"]},"selected":{"id":"1adc0e76-2625-4ee1-963f-7ad8bfed11f6","type":"Selection"},"selection_policy":{"id":"8f91fc4a-3dc0-4c12-b4d6-6d711f73ac03","type":"UnionRenderers"}},"id":"3adb6242-9d4a-432d-aec3-2f9028a80275","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"9b72a6e4-4a8c-444f-8364-7c41b38f0569","type":"WidgetBox"},{"id":"cc3b0f86-b044-4537-bee2-743e8ba276ee","subtype":"Figure","type":"Plot"}]},"id":"fad309cf-81cf-4b62-bba8-a1e8171023ff","type":"Column"},{"attributes":{},"id":"1adc0e76-2625-4ee1-963f-7ad8bfed11f6","type":"Selection"}],"root_ids":["fad309cf-81cf-4b62-bba8-a1e8171023ff"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"8f20caba-eea7-4953-9275-f432ec875adc","roots":{"fad309cf-81cf-4b62-bba8-a1e8171023ff":"1d8b31f0-ff2f-4050-9eea-7d11942ca265"}}];
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
