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
      };var element = document.getElementById("3304d9b7-a313-464f-aded-2e16a49d7197");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3304d9b7-a313-464f-aded-2e16a49d7197' but no matching script tag was found. ")
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

                  var docs_json = '{"1ce7bb30-a7eb-45d4-b752-a3f5518ed8c9":{"roots":{"references":[{"attributes":{},"id":"0ec405d3-2185-456e-87c3-8d2096dc36f5","type":"Selection"},{"attributes":{"callback":{"id":"b2619bdb-a18a-4e72-884f-17b40440b33a","type":"CustomJS"},"end":365,"start":0,"step":5,"title":"days","value":0},"id":"fa161be7-c5a5-49ff-abd6-8ea03c79f15f","type":"Slider"},{"attributes":{"args":{"source":{"id":"d3719e8e-d6c4-4140-9e56-e476038ca694","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value/5\\n        var file_name = data[&#x27;url_full&#x27;]\\n        var file_num = data[&#x27;url_num&#x27;]\\n        var f_string = f.toString().padStart(3, &#x27;0&#x27;)\\n        file_name[0] = file_name[0].replace(file_num[0], f_string)\\n        file_num[0] = f_string\\n        source.change.emit();\\n        "},"id":"b2619bdb-a18a-4e72-884f-17b40440b33a","type":"CustomJS"},{"attributes":{},"id":"5f47a886-6a66-45e3-ad7f-ecfc2e5c8ac5","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"bbf2153a-c597-4ca3-b41f-d1a177b6c6dc","type":"Range1d"},{"attributes":{},"id":"5762daf6-7ca2-488c-8a87-5e41f43b25dc","type":"UnionRenderers"},{"attributes":{"children":[{"id":"ca081df1-a3eb-4bff-87dd-4bf6b4aed25d","type":"WidgetBox"},{"id":"3b53df10-9409-40ab-a543-c44cc3f333b7","subtype":"Figure","type":"Plot"}]},"id":"2f3b5b99-04da-4fd9-8276-abf301dfc335","type":"Column"},{"attributes":{"formatter":{"id":"5f47a886-6a66-45e3-ad7f-ecfc2e5c8ac5","type":"BasicTickFormatter"},"plot":{"id":"3b53df10-9409-40ab-a543-c44cc3f333b7","subtype":"Figure","type":"Plot"},"ticker":{"id":"3d1932c1-79e0-46a8-b13c-14711185fcee","type":"BasicTicker"},"visible":false},"id":"dc13d3c0-19a1-43e3-afa7-299db52b596d","type":"LinearAxis"},{"attributes":{},"id":"86b71ceb-7db4-4cb7-b66f-6e37d7eb5a6b","type":"LinearScale"},{"attributes":{},"id":"0a8a8206-0c6a-4501-afef-100c3fa0e0bc","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"3b53df10-9409-40ab-a543-c44cc3f333b7","subtype":"Figure","type":"Plot"},"ticker":{"id":"3d1932c1-79e0-46a8-b13c-14711185fcee","type":"BasicTicker"},"visible":false},"id":"bc317dab-56d6-49b8-8871-d3999dc9dfb1","type":"Grid"},{"attributes":{"children":[{"id":"fa161be7-c5a5-49ff-abd6-8ea03c79f15f","type":"Slider"}]},"id":"ca081df1-a3eb-4bff-87dd-4bf6b4aed25d","type":"WidgetBox"},{"attributes":{},"id":"b374dcd0-ef09-45dc-a545-fff9b445d03d","type":"LinearScale"},{"attributes":{"below":[{"id":"90d93177-5c67-416e-bc48-c80858f663c5","type":"LinearAxis"}],"left":[{"id":"dc13d3c0-19a1-43e3-afa7-299db52b596d","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"90d93177-5c67-416e-bc48-c80858f663c5","type":"LinearAxis"},{"id":"ba934774-1950-4ac1-ad91-72d5d5d34548","type":"Grid"},{"id":"dc13d3c0-19a1-43e3-afa7-299db52b596d","type":"LinearAxis"},{"id":"bc317dab-56d6-49b8-8871-d3999dc9dfb1","type":"Grid"},{"id":"d5b9bd33-fd2b-47ea-b1cc-442e8b33e172","type":"GlyphRenderer"}],"title":{"id":"e616ddfa-37aa-40bf-a94e-7cf6ac9f4429","type":"Title"},"toolbar":{"id":"70d7eb9c-a17d-4ae7-8f4b-2f98064bdd35","type":"Toolbar"},"x_range":{"id":"bbf2153a-c597-4ca3-b41f-d1a177b6c6dc","type":"Range1d"},"x_scale":{"id":"86b71ceb-7db4-4cb7-b66f-6e37d7eb5a6b","type":"LinearScale"},"y_range":{"id":"db14e263-bbc8-4d93-8ffc-403e4be19e40","type":"Range1d"},"y_scale":{"id":"b374dcd0-ef09-45dc-a545-fff9b445d03d","type":"LinearScale"}},"id":"3b53df10-9409-40ab-a543-c44cc3f333b7","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"98862ab5-925d-48b5-b981-b2090889165e","type":"BasicTickFormatter"},"plot":{"id":"3b53df10-9409-40ab-a543-c44cc3f333b7","subtype":"Figure","type":"Plot"},"ticker":{"id":"0a8a8206-0c6a-4501-afef-100c3fa0e0bc","type":"BasicTicker"},"visible":false},"id":"90d93177-5c67-416e-bc48-c80858f663c5","type":"LinearAxis"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"0cdef02e-f650-4905-abf6-46aa489fe26a","type":"ImageURL"},{"attributes":{"plot":{"id":"3b53df10-9409-40ab-a543-c44cc3f333b7","subtype":"Figure","type":"Plot"},"ticker":{"id":"0a8a8206-0c6a-4501-afef-100c3fa0e0bc","type":"BasicTicker"},"visible":false},"id":"ba934774-1950-4ac1-ad91-72d5d5d34548","type":"Grid"},{"attributes":{"source":{"id":"d3719e8e-d6c4-4140-9e56-e476038ca694","type":"ColumnDataSource"}},"id":"2eda13e8-7113-4440-9756-dfaa0f4db8d0","type":"CDSView"},{"attributes":{"data_source":{"id":"d3719e8e-d6c4-4140-9e56-e476038ca694","type":"ColumnDataSource"},"glyph":{"id":"f9d38fa1-4caf-4b26-91e6-00e321ec8361","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0cdef02e-f650-4905-abf6-46aa489fe26a","type":"ImageURL"},"selection_glyph":null,"view":{"id":"2eda13e8-7113-4440-9756-dfaa0f4db8d0","type":"CDSView"}},"id":"d5b9bd33-fd2b-47ea-b1cc-442e8b33e172","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"url_full":["/assets/academia/bokeh/figs/monomer/TiO2/TI8O16_000.png"],"url_num":["000"]},"selected":{"id":"0ec405d3-2185-456e-87c3-8d2096dc36f5","type":"Selection"},"selection_policy":{"id":"5762daf6-7ca2-488c-8a87-5e41f43b25dc","type":"UnionRenderers"}},"id":"d3719e8e-d6c4-4140-9e56-e476038ca694","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"db14e263-bbc8-4d93-8ffc-403e4be19e40","type":"Range1d"},{"attributes":{},"id":"98862ab5-925d-48b5-b981-b2090889165e","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"e616ddfa-37aa-40bf-a94e-7cf6ac9f4429","type":"Title"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"f9d38fa1-4caf-4b26-91e6-00e321ec8361","type":"ImageURL"},{"attributes":{},"id":"3d1932c1-79e0-46a8-b13c-14711185fcee","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"70d7eb9c-a17d-4ae7-8f4b-2f98064bdd35","type":"Toolbar"}],"root_ids":["2f3b5b99-04da-4fd9-8276-abf301dfc335"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"1ce7bb30-a7eb-45d4-b752-a3f5518ed8c9","roots":{"2f3b5b99-04da-4fd9-8276-abf301dfc335":"3304d9b7-a313-464f-aded-2e16a49d7197"}}];
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
