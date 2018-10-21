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
      };var element = document.getElementById("8b9af502-7392-4aef-a1c2-bccaa139a001");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8b9af502-7392-4aef-a1c2-bccaa139a001' but no matching script tag was found. ")
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

                  var docs_json = '{"eb66c934-6518-4c45-aad5-abaea2ea5176":{"roots":{"references":[{"attributes":{"source":{"id":"d8a0015b-1133-49c5-97b5-fe7217737678","type":"ColumnDataSource"}},"id":"70b860b8-8574-4b47-9c5e-4c768fef24a2","type":"CDSView"},{"attributes":{},"id":"bbbbb811-39a2-489d-9ccb-26fae256a8d5","type":"LinearScale"},{"attributes":{"callback":{"id":"2a8afac7-04f1-4b46-a6f6-4c9bafd390cd","type":"CustomJS"},"end":365,"start":0,"step":5,"title":"days","value":0},"id":"8a58a9e9-b1f9-451a-89f2-87c80d2df550","type":"Slider"},{"attributes":{"callback":null},"id":"988e24f1-98f9-47f3-9897-4076ec3b0126","type":"Range1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"5f712ce8-9d20-46bb-ad67-f62aba1d7485","type":"Toolbar"},{"attributes":{"callback":null},"id":"85c4db59-df25-40e6-9ba2-153370ff16ab","type":"Range1d"},{"attributes":{"children":[{"id":"8a58a9e9-b1f9-451a-89f2-87c80d2df550","type":"Slider"}]},"id":"4bb4dd4a-efff-4d31-8bae-b06488272324","type":"WidgetBox"},{"attributes":{},"id":"a018756d-58b0-4be8-86b3-5642aa953314","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"377abaa6-f57e-4322-8b48-32d90c7f5269","type":"Title"},{"attributes":{"plot":{"id":"2c3cdec7-f8e4-4385-99bd-af7a7ab774c6","subtype":"Figure","type":"Plot"},"ticker":{"id":"cbd67db4-4416-44d0-8dcc-730f955dd045","type":"BasicTicker"},"visible":false},"id":"92287f72-2d67-4f60-805a-063056d2c83d","type":"Grid"},{"attributes":{"formatter":{"id":"2484817f-ac81-4e67-b9e8-3b32567894db","type":"BasicTickFormatter"},"plot":{"id":"2c3cdec7-f8e4-4385-99bd-af7a7ab774c6","subtype":"Figure","type":"Plot"},"ticker":{"id":"cbd67db4-4416-44d0-8dcc-730f955dd045","type":"BasicTicker"},"visible":false},"id":"f984467c-cdb3-4645-930c-d9efdebf4c3e","type":"LinearAxis"},{"attributes":{},"id":"0f66848d-5d3f-45dd-bcba-3bdb456998ab","type":"UnionRenderers"},{"attributes":{"args":{"source":{"id":"d8a0015b-1133-49c5-97b5-fe7217737678","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value/5\\n        var file_name = data[&#x27;url_full&#x27;]\\n        var file_num = data[&#x27;url_num&#x27;]\\n        var f_string = f.toString().padStart(3, &#x27;0&#x27;)\\n        file_name[0] = file_name[0].replace(file_num[0], f_string)\\n        file_num[0] = f_string\\n        source.change.emit();\\n        "},"id":"2a8afac7-04f1-4b46-a6f6-4c9bafd390cd","type":"CustomJS"},{"attributes":{},"id":"c4856092-36cf-45d5-85b2-33e9f633026f","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"c4856092-36cf-45d5-85b2-33e9f633026f","type":"BasicTickFormatter"},"plot":{"id":"2c3cdec7-f8e4-4385-99bd-af7a7ab774c6","subtype":"Figure","type":"Plot"},"ticker":{"id":"56b3321a-568b-4473-9279-d5abb2d10c47","type":"BasicTicker"},"visible":false},"id":"083c80b4-43ee-44c2-856b-04077f62f4fe","type":"LinearAxis"},{"attributes":{},"id":"56b3321a-568b-4473-9279-d5abb2d10c47","type":"BasicTicker"},{"attributes":{},"id":"46796e18-0f78-4c90-a29d-0f905f78e209","type":"Selection"},{"attributes":{"below":[{"id":"f984467c-cdb3-4645-930c-d9efdebf4c3e","type":"LinearAxis"}],"left":[{"id":"083c80b4-43ee-44c2-856b-04077f62f4fe","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"f984467c-cdb3-4645-930c-d9efdebf4c3e","type":"LinearAxis"},{"id":"92287f72-2d67-4f60-805a-063056d2c83d","type":"Grid"},{"id":"083c80b4-43ee-44c2-856b-04077f62f4fe","type":"LinearAxis"},{"id":"04d6078c-c0c5-47c6-aa8b-420c51b17247","type":"Grid"},{"id":"39a6048a-b8c5-4d0f-b8df-e12b9eb7e1eb","type":"GlyphRenderer"}],"title":{"id":"377abaa6-f57e-4322-8b48-32d90c7f5269","type":"Title"},"toolbar":{"id":"5f712ce8-9d20-46bb-ad67-f62aba1d7485","type":"Toolbar"},"x_range":{"id":"85c4db59-df25-40e6-9ba2-153370ff16ab","type":"Range1d"},"x_scale":{"id":"a018756d-58b0-4be8-86b3-5642aa953314","type":"LinearScale"},"y_range":{"id":"988e24f1-98f9-47f3-9897-4076ec3b0126","type":"Range1d"},"y_scale":{"id":"bbbbb811-39a2-489d-9ccb-26fae256a8d5","type":"LinearScale"}},"id":"2c3cdec7-f8e4-4385-99bd-af7a7ab774c6","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"2c3cdec7-f8e4-4385-99bd-af7a7ab774c6","subtype":"Figure","type":"Plot"},"ticker":{"id":"56b3321a-568b-4473-9279-d5abb2d10c47","type":"BasicTicker"},"visible":false},"id":"04d6078c-c0c5-47c6-aa8b-420c51b17247","type":"Grid"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"bb747858-bfec-4f73-9d65-04a40c503113","type":"ImageURL"},{"attributes":{"children":[{"id":"4bb4dd4a-efff-4d31-8bae-b06488272324","type":"WidgetBox"},{"id":"2c3cdec7-f8e4-4385-99bd-af7a7ab774c6","subtype":"Figure","type":"Plot"}]},"id":"fe7f91bc-0d0b-418d-830a-a7147efd8c4f","type":"Column"},{"attributes":{},"id":"2484817f-ac81-4e67-b9e8-3b32567894db","type":"BasicTickFormatter"},{"attributes":{},"id":"cbd67db4-4416-44d0-8dcc-730f955dd045","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"url_full":["/assets/academia/bokeh/figs/monomer/TiO2/TI3O6_000.png"],"url_num":["000"]},"selected":{"id":"46796e18-0f78-4c90-a29d-0f905f78e209","type":"Selection"},"selection_policy":{"id":"0f66848d-5d3f-45dd-bcba-3bdb456998ab","type":"UnionRenderers"}},"id":"d8a0015b-1133-49c5-97b5-fe7217737678","type":"ColumnDataSource"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"6adb5fcf-199c-4691-8567-85c7a473a323","type":"ImageURL"},{"attributes":{"data_source":{"id":"d8a0015b-1133-49c5-97b5-fe7217737678","type":"ColumnDataSource"},"glyph":{"id":"bb747858-bfec-4f73-9d65-04a40c503113","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6adb5fcf-199c-4691-8567-85c7a473a323","type":"ImageURL"},"selection_glyph":null,"view":{"id":"70b860b8-8574-4b47-9c5e-4c768fef24a2","type":"CDSView"}},"id":"39a6048a-b8c5-4d0f-b8df-e12b9eb7e1eb","type":"GlyphRenderer"}],"root_ids":["fe7f91bc-0d0b-418d-830a-a7147efd8c4f"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"eb66c934-6518-4c45-aad5-abaea2ea5176","roots":{"fe7f91bc-0d0b-418d-830a-a7147efd8c4f":"8b9af502-7392-4aef-a1c2-bccaa139a001"}}];
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
