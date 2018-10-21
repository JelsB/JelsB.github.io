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
      };var element = document.getElementById("2a59e7fc-549c-4160-bf36-dbbf4cc72e69");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2a59e7fc-549c-4160-bf36-dbbf4cc72e69' but no matching script tag was found. ")
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

                  var docs_json = '{"922044d3-702a-497d-8a0e-7ab97d3d112c":{"roots":{"references":[{"attributes":{"data_source":{"id":"15e0dfa9-207d-4dd4-beb2-c4c43cf06b80","type":"ColumnDataSource"},"glyph":{"id":"806d9697-8210-4d35-bb71-bfdae629207f","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d022720b-6962-45c9-8e10-7f5304577b56","type":"ImageURL"},"selection_glyph":null,"view":{"id":"9b6e1e50-395d-4c7b-97a5-f80bade7b0f8","type":"CDSView"}},"id":"e42b8d64-f5cb-4e05-bb20-a6059d5fad27","type":"GlyphRenderer"},{"attributes":{},"id":"5396b5ee-5768-4972-aff0-778691060814","type":"Selection"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"d022720b-6962-45c9-8e10-7f5304577b56","type":"ImageURL"},{"attributes":{},"id":"c00884fc-4977-40d5-ba22-1c2e81fe8773","type":"BasicTickFormatter"},{"attributes":{},"id":"13505c29-0965-4e4d-a12a-0d8a51b2ef6c","type":"BasicTicker"},{"attributes":{"callback":null},"id":"c734e93a-ea10-4a54-b1f2-43d3a63af8fc","type":"Range1d"},{"attributes":{"plot":null,"text":""},"id":"d978808a-6003-4022-b8b0-44b520cce5a6","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"985ede7b-b38a-499f-99ce-2050559a589c","subtype":"Figure","type":"Plot"},"ticker":{"id":"9bbd95ec-89af-4c1c-8c37-3531b1395ae7","type":"BasicTicker"},"visible":false},"id":"e9dc247d-8f5d-4fd0-9f7b-e0b54464fc6a","type":"Grid"},{"attributes":{"formatter":{"id":"c00884fc-4977-40d5-ba22-1c2e81fe8773","type":"BasicTickFormatter"},"plot":{"id":"985ede7b-b38a-499f-99ce-2050559a589c","subtype":"Figure","type":"Plot"},"ticker":{"id":"9bbd95ec-89af-4c1c-8c37-3531b1395ae7","type":"BasicTicker"},"visible":false},"id":"457beb3b-f86c-4446-b692-782261c2a4ef","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"e8f42234-35c9-4dc1-8afb-e37b75a7592d","type":"Toolbar"},{"attributes":{"plot":{"id":"985ede7b-b38a-499f-99ce-2050559a589c","subtype":"Figure","type":"Plot"},"ticker":{"id":"13505c29-0965-4e4d-a12a-0d8a51b2ef6c","type":"BasicTicker"},"visible":false},"id":"ca3d4f5e-4fd0-4eac-95d5-3e00a3e987d8","type":"Grid"},{"attributes":{"below":[{"id":"cdbffca7-2db5-4a07-95ae-d19283bfbf97","type":"LinearAxis"}],"left":[{"id":"457beb3b-f86c-4446-b692-782261c2a4ef","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"cdbffca7-2db5-4a07-95ae-d19283bfbf97","type":"LinearAxis"},{"id":"ca3d4f5e-4fd0-4eac-95d5-3e00a3e987d8","type":"Grid"},{"id":"457beb3b-f86c-4446-b692-782261c2a4ef","type":"LinearAxis"},{"id":"e9dc247d-8f5d-4fd0-9f7b-e0b54464fc6a","type":"Grid"},{"id":"e42b8d64-f5cb-4e05-bb20-a6059d5fad27","type":"GlyphRenderer"}],"title":{"id":"d978808a-6003-4022-b8b0-44b520cce5a6","type":"Title"},"toolbar":{"id":"e8f42234-35c9-4dc1-8afb-e37b75a7592d","type":"Toolbar"},"x_range":{"id":"c734e93a-ea10-4a54-b1f2-43d3a63af8fc","type":"Range1d"},"x_scale":{"id":"51c52275-6557-47c4-8819-a26d21e3f455","type":"LinearScale"},"y_range":{"id":"b4efda40-f54b-48e1-96e7-fb7068398918","type":"Range1d"},"y_scale":{"id":"a69b7dc4-908f-4f3e-856f-6564e5ec20e6","type":"LinearScale"}},"id":"985ede7b-b38a-499f-99ce-2050559a589c","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"dba6ba15-c7ba-4709-b58b-3e48c34affd1","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"b4efda40-f54b-48e1-96e7-fb7068398918","type":"Range1d"},{"attributes":{},"id":"b412f7da-8612-4f22-b7fd-26a3e9950a7e","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"dba6ba15-c7ba-4709-b58b-3e48c34affd1","type":"BasicTickFormatter"},"plot":{"id":"985ede7b-b38a-499f-99ce-2050559a589c","subtype":"Figure","type":"Plot"},"ticker":{"id":"13505c29-0965-4e4d-a12a-0d8a51b2ef6c","type":"BasicTicker"},"visible":false},"id":"cdbffca7-2db5-4a07-95ae-d19283bfbf97","type":"LinearAxis"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"806d9697-8210-4d35-bb71-bfdae629207f","type":"ImageURL"},{"attributes":{"source":{"id":"15e0dfa9-207d-4dd4-beb2-c4c43cf06b80","type":"ColumnDataSource"}},"id":"9b6e1e50-395d-4c7b-97a5-f80bade7b0f8","type":"CDSView"},{"attributes":{},"id":"51c52275-6557-47c4-8819-a26d21e3f455","type":"LinearScale"},{"attributes":{"callback":null,"data":{"url_full":["/assets/academia/bokeh/figs/monomer/TiO2/TI4O8_000.png"],"url_num":["000"]},"selected":{"id":"5396b5ee-5768-4972-aff0-778691060814","type":"Selection"},"selection_policy":{"id":"b412f7da-8612-4f22-b7fd-26a3e9950a7e","type":"UnionRenderers"}},"id":"15e0dfa9-207d-4dd4-beb2-c4c43cf06b80","type":"ColumnDataSource"},{"attributes":{},"id":"a69b7dc4-908f-4f3e-856f-6564e5ec20e6","type":"LinearScale"},{"attributes":{"args":{"source":{"id":"15e0dfa9-207d-4dd4-beb2-c4c43cf06b80","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value/5\\n        var file_name = data[&#x27;url_full&#x27;]\\n        var file_num = data[&#x27;url_num&#x27;]\\n        var f_string = f.toString().padStart(3, &#x27;0&#x27;)\\n        file_name[0] = file_name[0].replace(file_num[0], f_string)\\n        file_num[0] = f_string\\n        source.change.emit();\\n        "},"id":"11df6705-7455-4b44-9734-21940041d799","type":"CustomJS"},{"attributes":{},"id":"9bbd95ec-89af-4c1c-8c37-3531b1395ae7","type":"BasicTicker"},{"attributes":{"children":[{"id":"7fb90801-a4b0-465e-a85d-45fb16194471","type":"Slider"}]},"id":"c98b93cc-0a05-45e1-b0c0-8d5faa624438","type":"WidgetBox"},{"attributes":{"children":[{"id":"c98b93cc-0a05-45e1-b0c0-8d5faa624438","type":"WidgetBox"},{"id":"985ede7b-b38a-499f-99ce-2050559a589c","subtype":"Figure","type":"Plot"}]},"id":"f28a38cc-9f44-4313-98ef-b096eef2cc47","type":"Column"},{"attributes":{"callback":{"id":"11df6705-7455-4b44-9734-21940041d799","type":"CustomJS"},"end":365,"start":0,"step":5,"title":"days","value":0},"id":"7fb90801-a4b0-465e-a85d-45fb16194471","type":"Slider"}],"root_ids":["f28a38cc-9f44-4313-98ef-b096eef2cc47"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"922044d3-702a-497d-8a0e-7ab97d3d112c","roots":{"f28a38cc-9f44-4313-98ef-b096eef2cc47":"2a59e7fc-549c-4160-bf36-dbbf4cc72e69"}}];
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
