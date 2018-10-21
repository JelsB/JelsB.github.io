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
      };var element = document.getElementById("c9f8e362-6bb5-4c3f-bcbb-5fb23e0245a5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c9f8e362-6bb5-4c3f-bcbb-5fb23e0245a5' but no matching script tag was found. ")
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

                  var docs_json = '{"b3ade1b9-0dbe-4b78-9d5b-e7995120db05":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"c1890e43-7d2a-49b4-ab63-e380abd9b628","subtype":"Figure","type":"Plot"},"ticker":{"id":"4e05859a-7917-42e6-89d0-855d4e2d30e2","type":"BasicTicker"},"visible":false},"id":"c93e6796-33b5-410f-924a-d6f982f758df","type":"Grid"},{"attributes":{"args":{"source":{"id":"53990b50-2686-4005-8995-f71ca936980b","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value/5\\n        var file_name = data[&#x27;url_full&#x27;]\\n        var file_num = data[&#x27;url_num&#x27;]\\n        var f_string = f.toString().padStart(3, &#x27;0&#x27;)\\n        file_name[0] = file_name[0].replace(file_num[0], f_string)\\n        file_num[0] = f_string\\n        source.change.emit();\\n        "},"id":"1e48b8a4-44dd-4b67-869a-af4fad48d633","type":"CustomJS"},{"attributes":{},"id":"b05f0ad9-bf24-4141-b907-567c561cd2f4","type":"BasicTicker"},{"attributes":{},"id":"6e9325bb-7900-44fe-9d04-a27848d09405","type":"LinearScale"},{"attributes":{},"id":"4e05859a-7917-42e6-89d0-855d4e2d30e2","type":"BasicTicker"},{"attributes":{},"id":"77900c84-0154-46fb-8dc2-404cb78cd128","type":"Selection"},{"attributes":{},"id":"3352010f-5842-41c5-93bf-d459a7c7c325","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"8781f1dd-cdd3-45bf-93d7-c47547f502cd","type":"Range1d"},{"attributes":{"plot":null,"text":""},"id":"649fc25d-f6b0-4113-8c00-3dc851d4cfd9","type":"Title"},{"attributes":{"callback":null},"id":"229df9c4-6fd1-4fb3-aedb-886847a65c96","type":"Range1d"},{"attributes":{"formatter":{"id":"3352010f-5842-41c5-93bf-d459a7c7c325","type":"BasicTickFormatter"},"plot":{"id":"c1890e43-7d2a-49b4-ab63-e380abd9b628","subtype":"Figure","type":"Plot"},"ticker":{"id":"4e05859a-7917-42e6-89d0-855d4e2d30e2","type":"BasicTicker"},"visible":false},"id":"f7bbc7e8-45cc-4c04-af16-6364e5a1115c","type":"LinearAxis"},{"attributes":{"children":[{"id":"dd266b58-b204-4ba4-b2bb-47b30a5d68dc","type":"WidgetBox"},{"id":"c1890e43-7d2a-49b4-ab63-e380abd9b628","subtype":"Figure","type":"Plot"}]},"id":"7036ed6f-a93e-4872-9bcd-ac52a93b75d4","type":"Column"},{"attributes":{"callback":null,"data":{"url_full":["/assets/academia/bokeh/figs/monomer/TiO2/TI9O18_000.png"],"url_num":["000"]},"selected":{"id":"77900c84-0154-46fb-8dc2-404cb78cd128","type":"Selection"},"selection_policy":{"id":"598492b9-5377-47ab-bffc-c9edd866494d","type":"UnionRenderers"}},"id":"53990b50-2686-4005-8995-f71ca936980b","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"c1890e43-7d2a-49b4-ab63-e380abd9b628","subtype":"Figure","type":"Plot"},"ticker":{"id":"b05f0ad9-bf24-4141-b907-567c561cd2f4","type":"BasicTicker"},"visible":false},"id":"32fa4f1b-0668-4fd6-86fd-0df8fe869157","type":"Grid"},{"attributes":{},"id":"6bd2f64b-01ed-454c-a640-7206700fc00c","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"53990b50-2686-4005-8995-f71ca936980b","type":"ColumnDataSource"},"glyph":{"id":"29f8dd5b-e371-4638-ae0d-a090c2a25fcd","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"67774501-f386-4959-9ac4-9af308f99e83","type":"ImageURL"},"selection_glyph":null,"view":{"id":"17bc4b38-8241-473a-8a22-754b68e15a88","type":"CDSView"}},"id":"6dabe034-25ec-46c1-b6ff-59614dd3fb75","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"6bd2f64b-01ed-454c-a640-7206700fc00c","type":"BasicTickFormatter"},"plot":{"id":"c1890e43-7d2a-49b4-ab63-e380abd9b628","subtype":"Figure","type":"Plot"},"ticker":{"id":"b05f0ad9-bf24-4141-b907-567c561cd2f4","type":"BasicTicker"},"visible":false},"id":"3e53b46d-5db0-4ee6-943a-cbd243c0f03d","type":"LinearAxis"},{"attributes":{"source":{"id":"53990b50-2686-4005-8995-f71ca936980b","type":"ColumnDataSource"}},"id":"17bc4b38-8241-473a-8a22-754b68e15a88","type":"CDSView"},{"attributes":{"children":[{"id":"cd020db9-133a-4d8c-88ba-36e16c84e9f4","type":"Slider"}]},"id":"dd266b58-b204-4ba4-b2bb-47b30a5d68dc","type":"WidgetBox"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"29f8dd5b-e371-4638-ae0d-a090c2a25fcd","type":"ImageURL"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"67774501-f386-4959-9ac4-9af308f99e83","type":"ImageURL"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"e1703947-56a3-46e3-8e97-29a8b141cd03","type":"Toolbar"},{"attributes":{"below":[{"id":"3e53b46d-5db0-4ee6-943a-cbd243c0f03d","type":"LinearAxis"}],"left":[{"id":"f7bbc7e8-45cc-4c04-af16-6364e5a1115c","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"3e53b46d-5db0-4ee6-943a-cbd243c0f03d","type":"LinearAxis"},{"id":"32fa4f1b-0668-4fd6-86fd-0df8fe869157","type":"Grid"},{"id":"f7bbc7e8-45cc-4c04-af16-6364e5a1115c","type":"LinearAxis"},{"id":"c93e6796-33b5-410f-924a-d6f982f758df","type":"Grid"},{"id":"6dabe034-25ec-46c1-b6ff-59614dd3fb75","type":"GlyphRenderer"}],"title":{"id":"649fc25d-f6b0-4113-8c00-3dc851d4cfd9","type":"Title"},"toolbar":{"id":"e1703947-56a3-46e3-8e97-29a8b141cd03","type":"Toolbar"},"x_range":{"id":"229df9c4-6fd1-4fb3-aedb-886847a65c96","type":"Range1d"},"x_scale":{"id":"6e9325bb-7900-44fe-9d04-a27848d09405","type":"LinearScale"},"y_range":{"id":"8781f1dd-cdd3-45bf-93d7-c47547f502cd","type":"Range1d"},"y_scale":{"id":"d9f4a82c-4973-4503-a780-c20c8f5fe533","type":"LinearScale"}},"id":"c1890e43-7d2a-49b4-ab63-e380abd9b628","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"598492b9-5377-47ab-bffc-c9edd866494d","type":"UnionRenderers"},{"attributes":{},"id":"d9f4a82c-4973-4503-a780-c20c8f5fe533","type":"LinearScale"},{"attributes":{"callback":{"id":"1e48b8a4-44dd-4b67-869a-af4fad48d633","type":"CustomJS"},"end":365,"start":0,"step":5,"title":"days","value":0},"id":"cd020db9-133a-4d8c-88ba-36e16c84e9f4","type":"Slider"}],"root_ids":["7036ed6f-a93e-4872-9bcd-ac52a93b75d4"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"b3ade1b9-0dbe-4b78-9d5b-e7995120db05","roots":{"7036ed6f-a93e-4872-9bcd-ac52a93b75d4":"c9f8e362-6bb5-4c3f-bcbb-5fb23e0245a5"}}];
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
