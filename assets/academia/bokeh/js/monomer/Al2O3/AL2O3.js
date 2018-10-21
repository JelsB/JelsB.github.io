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
      };var element = document.getElementById("42a85e65-3db1-4e7e-a40e-ee7d73ad18f9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '42a85e65-3db1-4e7e-a40e-ee7d73ad18f9' but no matching script tag was found. ")
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

                  var docs_json = '{"79f3b25e-ab7c-4acd-b40e-48ae39505422":{"roots":{"references":[{"attributes":{"children":[{"id":"2ce30cdb-4880-49ea-96cf-0250ee6aa149","type":"Slider"}]},"id":"635f28ab-20c0-4b4a-b31a-cdaf4d84defd","type":"WidgetBox"},{"attributes":{"source":{"id":"2f1a9558-16b3-442d-a1bd-bcc6656c6d30","type":"ColumnDataSource"}},"id":"455aa1b3-3138-43b5-a5f5-e4e38d1d857a","type":"CDSView"},{"attributes":{"callback":{"id":"cf211ef8-1773-4e36-86af-a38ab3c93547","type":"CustomJS"},"end":365,"start":0,"step":5,"title":"days","value":0},"id":"2ce30cdb-4880-49ea-96cf-0250ee6aa149","type":"Slider"},{"attributes":{"children":[{"id":"635f28ab-20c0-4b4a-b31a-cdaf4d84defd","type":"WidgetBox"},{"id":"8d1476ec-6220-4693-ba11-7ad50fbc0482","subtype":"Figure","type":"Plot"}]},"id":"663c1829-011d-48d5-a571-bc637cba907c","type":"Column"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"30d575b7-667b-4c37-9220-5e02d2e7523f","type":"ImageURL"},{"attributes":{"callback":null},"id":"02c12789-0d28-4bdd-b9ca-f12e4d9e8585","type":"Range1d"},{"attributes":{"args":{"source":{"id":"2f1a9558-16b3-442d-a1bd-bcc6656c6d30","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value/5\\n        var file_name = data[&#x27;url_full&#x27;]\\n        var file_num = data[&#x27;url_num&#x27;]\\n        var f_string = f.toString().padStart(3, &#x27;0&#x27;)\\n        file_name[0] = file_name[0].replace(file_num[0], f_string)\\n        file_num[0] = f_string\\n        source.change.emit();\\n        "},"id":"cf211ef8-1773-4e36-86af-a38ab3c93547","type":"CustomJS"},{"attributes":{"dimension":1,"plot":{"id":"8d1476ec-6220-4693-ba11-7ad50fbc0482","subtype":"Figure","type":"Plot"},"ticker":{"id":"e058e867-320b-42c4-910d-359cca36df45","type":"BasicTicker"},"visible":false},"id":"d1982e30-2dd5-4cee-bb85-dcb14e0980c3","type":"Grid"},{"attributes":{},"id":"f7c8b5fc-20f8-4684-a178-728e00f0a2ff","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"8d1476ec-6220-4693-ba11-7ad50fbc0482","subtype":"Figure","type":"Plot"},"ticker":{"id":"e45ec9b7-a517-42a3-ae65-d65977c0ad83","type":"BasicTicker"},"visible":false},"id":"27b9a53c-f324-4f5c-b4be-bda2895e5370","type":"Grid"},{"attributes":{"formatter":{"id":"41a2c091-a933-4818-8cc3-be8407c750d5","type":"BasicTickFormatter"},"plot":{"id":"8d1476ec-6220-4693-ba11-7ad50fbc0482","subtype":"Figure","type":"Plot"},"ticker":{"id":"e45ec9b7-a517-42a3-ae65-d65977c0ad83","type":"BasicTicker"},"visible":false},"id":"8fc58865-f5da-4633-85fb-e7bf6c97a8af","type":"LinearAxis"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"bacea4e5-eeff-4ccc-aa54-d8de731569f9","type":"ImageURL"},{"attributes":{},"id":"7a5769a9-1955-44d3-bf84-fcdcd45e762a","type":"Selection"},{"attributes":{},"id":"41a2c091-a933-4818-8cc3-be8407c750d5","type":"BasicTickFormatter"},{"attributes":{},"id":"055abd5b-a4b4-4d38-a0ff-1047a575026a","type":"LinearScale"},{"attributes":{},"id":"e058e867-320b-42c4-910d-359cca36df45","type":"BasicTicker"},{"attributes":{"formatter":{"id":"f7c8b5fc-20f8-4684-a178-728e00f0a2ff","type":"BasicTickFormatter"},"plot":{"id":"8d1476ec-6220-4693-ba11-7ad50fbc0482","subtype":"Figure","type":"Plot"},"ticker":{"id":"e058e867-320b-42c4-910d-359cca36df45","type":"BasicTicker"},"visible":false},"id":"50731fb4-509d-4904-80ba-b51531cd088b","type":"LinearAxis"},{"attributes":{},"id":"2a9e71c1-29e1-46a0-a64f-9eb0afdc2819","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"8896c1ad-2244-483e-8a25-b81bb8126ea4","type":"Toolbar"},{"attributes":{"callback":null},"id":"eda05b2d-c701-49c3-a81a-775ea7de682d","type":"Range1d"},{"attributes":{"data_source":{"id":"2f1a9558-16b3-442d-a1bd-bcc6656c6d30","type":"ColumnDataSource"},"glyph":{"id":"bacea4e5-eeff-4ccc-aa54-d8de731569f9","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30d575b7-667b-4c37-9220-5e02d2e7523f","type":"ImageURL"},"selection_glyph":null,"view":{"id":"455aa1b3-3138-43b5-a5f5-e4e38d1d857a","type":"CDSView"}},"id":"78288b82-7195-4bca-bf7e-3c9e46ec65d6","type":"GlyphRenderer"},{"attributes":{},"id":"e45ec9b7-a517-42a3-ae65-d65977c0ad83","type":"BasicTicker"},{"attributes":{},"id":"c8fc172d-95a7-4418-9198-da76f006089b","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"dff789ac-2f9f-4610-bdb9-2ab393bf2ebd","type":"Title"},{"attributes":{"callback":null,"data":{"url_full":["/assets/academia/bokeh/figs/monomer/Al2O3/AL2O3_000.png"],"url_num":["000"]},"selected":{"id":"7a5769a9-1955-44d3-bf84-fcdcd45e762a","type":"Selection"},"selection_policy":{"id":"2a9e71c1-29e1-46a0-a64f-9eb0afdc2819","type":"UnionRenderers"}},"id":"2f1a9558-16b3-442d-a1bd-bcc6656c6d30","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"8fc58865-f5da-4633-85fb-e7bf6c97a8af","type":"LinearAxis"}],"left":[{"id":"50731fb4-509d-4904-80ba-b51531cd088b","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"8fc58865-f5da-4633-85fb-e7bf6c97a8af","type":"LinearAxis"},{"id":"27b9a53c-f324-4f5c-b4be-bda2895e5370","type":"Grid"},{"id":"50731fb4-509d-4904-80ba-b51531cd088b","type":"LinearAxis"},{"id":"d1982e30-2dd5-4cee-bb85-dcb14e0980c3","type":"Grid"},{"id":"78288b82-7195-4bca-bf7e-3c9e46ec65d6","type":"GlyphRenderer"}],"title":{"id":"dff789ac-2f9f-4610-bdb9-2ab393bf2ebd","type":"Title"},"toolbar":{"id":"8896c1ad-2244-483e-8a25-b81bb8126ea4","type":"Toolbar"},"x_range":{"id":"02c12789-0d28-4bdd-b9ca-f12e4d9e8585","type":"Range1d"},"x_scale":{"id":"c8fc172d-95a7-4418-9198-da76f006089b","type":"LinearScale"},"y_range":{"id":"eda05b2d-c701-49c3-a81a-775ea7de682d","type":"Range1d"},"y_scale":{"id":"055abd5b-a4b4-4d38-a0ff-1047a575026a","type":"LinearScale"}},"id":"8d1476ec-6220-4693-ba11-7ad50fbc0482","subtype":"Figure","type":"Plot"}],"root_ids":["663c1829-011d-48d5-a571-bc637cba907c"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"79f3b25e-ab7c-4acd-b40e-48ae39505422","roots":{"663c1829-011d-48d5-a571-bc637cba907c":"42a85e65-3db1-4e7e-a40e-ee7d73ad18f9"}}];
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
