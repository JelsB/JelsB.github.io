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
      };var element = document.getElementById("b4888f11-d2a5-4d9f-8f96-7c6b8b174011");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b4888f11-d2a5-4d9f-8f96-7c6b8b174011' but no matching script tag was found. ")
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

                  var docs_json = '{"85355728-9f77-4f40-b1ca-f1025e9a38ef":{"roots":{"references":[{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"9b0df4a6-5259-4136-a969-00d81ade56b7","type":"ImageURL"},{"attributes":{"dimension":1,"plot":{"id":"c52c3aa4-1be2-4665-9d75-5076d1d6cf43","subtype":"Figure","type":"Plot"},"ticker":{"id":"01053de1-fc30-40d5-9475-963b613efdb6","type":"BasicTicker"},"visible":false},"id":"edf38691-bb35-467d-9905-6e21c7689b6d","type":"Grid"},{"attributes":{"callback":null},"id":"0f49bb86-1ee3-4dc9-86e5-6c57887306e1","type":"Range1d"},{"attributes":{"children":[{"id":"ba6972bc-c8d0-44ea-8098-a74be3164d64","type":"Slider"}]},"id":"24ffed3b-d16a-4cc7-9a5c-d0ea3cbffc4a","type":"WidgetBox"},{"attributes":{},"id":"982bf99f-b85a-4387-8acc-10ab6d73b36b","type":"LinearScale"},{"attributes":{"args":{"source":{"id":"4af48203-d0c2-4ef9-8e3f-5383dc3cb215","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value/5\\n        var file_name = data[&#x27;url_full&#x27;]\\n        var file_num = data[&#x27;url_num&#x27;]\\n        var f_string = f.toString().padStart(3, &#x27;0&#x27;)\\n        file_name[0] = file_name[0].replace(file_num[0], f_string)\\n        file_num[0] = f_string\\n        source.change.emit();\\n        "},"id":"6542d571-bcff-4ac4-809b-f2001e6f21e8","type":"CustomJS"},{"attributes":{},"id":"b5659b81-828d-4b55-80fa-824855272f40","type":"BasicTicker"},{"attributes":{"plot":{"id":"c52c3aa4-1be2-4665-9d75-5076d1d6cf43","subtype":"Figure","type":"Plot"},"ticker":{"id":"b5659b81-828d-4b55-80fa-824855272f40","type":"BasicTicker"},"visible":false},"id":"8aab48ff-31bf-42a3-a0d2-2cdfeb6e4a01","type":"Grid"},{"attributes":{"formatter":{"id":"8bdf9e9c-108a-444e-998f-28f96dcce097","type":"BasicTickFormatter"},"plot":{"id":"c52c3aa4-1be2-4665-9d75-5076d1d6cf43","subtype":"Figure","type":"Plot"},"ticker":{"id":"b5659b81-828d-4b55-80fa-824855272f40","type":"BasicTicker"},"visible":false},"id":"a80d9eb1-4e12-461b-932e-a0e2b6bafda7","type":"LinearAxis"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"1edeaf04-5c62-4d1e-9625-517ceba24e29","type":"ImageURL"},{"attributes":{},"id":"01053de1-fc30-40d5-9475-963b613efdb6","type":"BasicTicker"},{"attributes":{"source":{"id":"4af48203-d0c2-4ef9-8e3f-5383dc3cb215","type":"ColumnDataSource"}},"id":"5b2e5825-bcf6-4b65-826e-d111997befe7","type":"CDSView"},{"attributes":{},"id":"4be9a72a-7930-475f-b55b-32112003a050","type":"LinearScale"},{"attributes":{"formatter":{"id":"cb075f52-3054-482e-9675-cf601423ff9c","type":"BasicTickFormatter"},"plot":{"id":"c52c3aa4-1be2-4665-9d75-5076d1d6cf43","subtype":"Figure","type":"Plot"},"ticker":{"id":"01053de1-fc30-40d5-9475-963b613efdb6","type":"BasicTicker"},"visible":false},"id":"b42aa00f-5dd7-4bef-94d9-bf0c9a77873e","type":"LinearAxis"},{"attributes":{},"id":"569d94c4-b072-47ac-b9cc-18bcd59685f0","type":"UnionRenderers"},{"attributes":{},"id":"d5140e3c-c24a-4fcc-ad1d-2ee41f667981","type":"Selection"},{"attributes":{},"id":"8bdf9e9c-108a-444e-998f-28f96dcce097","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"url_full":["/assets/academia/bokeh/figs/monomer/MgO/MGO_000.png"],"url_num":["000"]},"selected":{"id":"d5140e3c-c24a-4fcc-ad1d-2ee41f667981","type":"Selection"},"selection_policy":{"id":"569d94c4-b072-47ac-b9cc-18bcd59685f0","type":"UnionRenderers"}},"id":"4af48203-d0c2-4ef9-8e3f-5383dc3cb215","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"4af48203-d0c2-4ef9-8e3f-5383dc3cb215","type":"ColumnDataSource"},"glyph":{"id":"1edeaf04-5c62-4d1e-9625-517ceba24e29","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9b0df4a6-5259-4136-a969-00d81ade56b7","type":"ImageURL"},"selection_glyph":null,"view":{"id":"5b2e5825-bcf6-4b65-826e-d111997befe7","type":"CDSView"}},"id":"ec9535ec-662e-4cac-80bc-e3724d466f85","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"6cdfd410-b5f5-463b-937f-3199cb9a0c18","type":"Toolbar"},{"attributes":{"children":[{"id":"24ffed3b-d16a-4cc7-9a5c-d0ea3cbffc4a","type":"WidgetBox"},{"id":"c52c3aa4-1be2-4665-9d75-5076d1d6cf43","subtype":"Figure","type":"Plot"}]},"id":"c2ada142-140e-4058-afce-dcdb7f8054e4","type":"Column"},{"attributes":{},"id":"cb075f52-3054-482e-9675-cf601423ff9c","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"b407fb20-4737-48b2-8b1e-20edeb8ed6ed","type":"Range1d"},{"attributes":{"plot":null,"text":""},"id":"396bf8da-eb84-4c4d-ba35-447fdd90f455","type":"Title"},{"attributes":{"callback":{"id":"6542d571-bcff-4ac4-809b-f2001e6f21e8","type":"CustomJS"},"end":365,"start":0,"step":5,"title":"days","value":0},"id":"ba6972bc-c8d0-44ea-8098-a74be3164d64","type":"Slider"},{"attributes":{"below":[{"id":"a80d9eb1-4e12-461b-932e-a0e2b6bafda7","type":"LinearAxis"}],"left":[{"id":"b42aa00f-5dd7-4bef-94d9-bf0c9a77873e","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"a80d9eb1-4e12-461b-932e-a0e2b6bafda7","type":"LinearAxis"},{"id":"8aab48ff-31bf-42a3-a0d2-2cdfeb6e4a01","type":"Grid"},{"id":"b42aa00f-5dd7-4bef-94d9-bf0c9a77873e","type":"LinearAxis"},{"id":"edf38691-bb35-467d-9905-6e21c7689b6d","type":"Grid"},{"id":"ec9535ec-662e-4cac-80bc-e3724d466f85","type":"GlyphRenderer"}],"title":{"id":"396bf8da-eb84-4c4d-ba35-447fdd90f455","type":"Title"},"toolbar":{"id":"6cdfd410-b5f5-463b-937f-3199cb9a0c18","type":"Toolbar"},"x_range":{"id":"b407fb20-4737-48b2-8b1e-20edeb8ed6ed","type":"Range1d"},"x_scale":{"id":"982bf99f-b85a-4387-8acc-10ab6d73b36b","type":"LinearScale"},"y_range":{"id":"0f49bb86-1ee3-4dc9-86e5-6c57887306e1","type":"Range1d"},"y_scale":{"id":"4be9a72a-7930-475f-b55b-32112003a050","type":"LinearScale"}},"id":"c52c3aa4-1be2-4665-9d75-5076d1d6cf43","subtype":"Figure","type":"Plot"}],"root_ids":["c2ada142-140e-4058-afce-dcdb7f8054e4"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"85355728-9f77-4f40-b1ca-f1025e9a38ef","roots":{"c2ada142-140e-4058-afce-dcdb7f8054e4":"b4888f11-d2a5-4d9f-8f96-7c6b8b174011"}}];
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
