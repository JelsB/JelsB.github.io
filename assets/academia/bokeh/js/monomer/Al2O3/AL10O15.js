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
      };var element = document.getElementById("89707765-28ef-4ea0-864d-5bf0558d816e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '89707765-28ef-4ea0-864d-5bf0558d816e' but no matching script tag was found. ")
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

                  var docs_json = '{"211d06d2-42bf-4b92-a86b-464f97788f34":{"roots":{"references":[{"attributes":{},"id":"38cf3177-5f4f-47b9-a90f-b6f4dc735ec7","type":"UnionRenderers"},{"attributes":{"children":[{"id":"aeb64f1f-4e96-44d2-809a-76262802b21a","type":"Slider"}]},"id":"61466379-a302-4f6d-a5fa-48b422c4cdc2","type":"WidgetBox"},{"attributes":{},"id":"46dc593e-7952-44f7-92c7-7cd431764d82","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"049d5194-b3b0-4941-b531-5eb4933f60c3","type":"Toolbar"},{"attributes":{"args":{"source":{"id":"417e9708-18b1-49d7-bcb4-cf62db28a5fd","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value/5\\n        var file_name = data[&#x27;url_full&#x27;]\\n        var file_num = data[&#x27;url_num&#x27;]\\n        var f_string = f.toString().padStart(3, &#x27;0&#x27;)\\n        file_name[0] = file_name[0].replace(file_num[0], f_string)\\n        file_num[0] = f_string\\n        source.change.emit();\\n        "},"id":"d0f53f15-8f7b-4d9a-ad23-212ba67d8049","type":"CustomJS"},{"attributes":{},"id":"e57faeda-13ad-4899-a1b1-f362d9cc9b3c","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"417e9708-18b1-49d7-bcb4-cf62db28a5fd","type":"ColumnDataSource"},"glyph":{"id":"eb81af2e-4480-4d13-a5cb-8dee30d7e3d3","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"970570bf-e44c-42ed-b933-c8ff8d419694","type":"ImageURL"},"selection_glyph":null,"view":{"id":"124026ec-1839-4394-bfe5-162a719d1d60","type":"CDSView"}},"id":"5d9eeddd-817a-4d37-a771-61a860f67ace","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"url_full":["/assets/academia/bokeh/figs/monomer/Al2O3/AL10O15_000.png"],"url_num":["000"]},"selected":{"id":"b5545fcc-4f22-49aa-9550-0a9dafff4f12","type":"Selection"},"selection_policy":{"id":"38cf3177-5f4f-47b9-a90f-b6f4dc735ec7","type":"UnionRenderers"}},"id":"417e9708-18b1-49d7-bcb4-cf62db28a5fd","type":"ColumnDataSource"},{"attributes":{},"id":"b5545fcc-4f22-49aa-9550-0a9dafff4f12","type":"Selection"},{"attributes":{"children":[{"id":"61466379-a302-4f6d-a5fa-48b422c4cdc2","type":"WidgetBox"},{"id":"52b1b6cd-a50b-402e-bdfa-e827dfe994bb","subtype":"Figure","type":"Plot"}]},"id":"3db4b725-3857-4006-831f-428946bc1c4b","type":"Column"},{"attributes":{},"id":"663e8eeb-3aab-4512-a029-80d0a430f311","type":"LinearScale"},{"attributes":{"below":[{"id":"b1191b84-365c-43ce-8853-a441bcb317f8","type":"LinearAxis"}],"left":[{"id":"0962a7af-73f0-4099-8545-72befa5e047e","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"b1191b84-365c-43ce-8853-a441bcb317f8","type":"LinearAxis"},{"id":"3ca32b3e-ce03-4fc1-b828-d544ce3bbd5c","type":"Grid"},{"id":"0962a7af-73f0-4099-8545-72befa5e047e","type":"LinearAxis"},{"id":"172bc41a-237f-481e-9e5a-1c3c3d3617ee","type":"Grid"},{"id":"5d9eeddd-817a-4d37-a771-61a860f67ace","type":"GlyphRenderer"}],"title":{"id":"b940666f-8f21-40eb-9cde-2a627809d340","type":"Title"},"toolbar":{"id":"049d5194-b3b0-4941-b531-5eb4933f60c3","type":"Toolbar"},"x_range":{"id":"d1742ba6-efcb-456c-90e7-7c4f8670319d","type":"Range1d"},"x_scale":{"id":"663e8eeb-3aab-4512-a029-80d0a430f311","type":"LinearScale"},"y_range":{"id":"d197b772-30ec-425b-82c2-4b6a4de4115d","type":"Range1d"},"y_scale":{"id":"cf8eb431-20bf-4e39-9485-6225c46bf15a","type":"LinearScale"}},"id":"52b1b6cd-a50b-402e-bdfa-e827dfe994bb","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"cf8eb431-20bf-4e39-9485-6225c46bf15a","type":"LinearScale"},{"attributes":{"callback":{"id":"d0f53f15-8f7b-4d9a-ad23-212ba67d8049","type":"CustomJS"},"end":365,"start":0,"step":5,"title":"days","value":0},"id":"aeb64f1f-4e96-44d2-809a-76262802b21a","type":"Slider"},{"attributes":{"plot":null,"text":""},"id":"b940666f-8f21-40eb-9cde-2a627809d340","type":"Title"},{"attributes":{"formatter":{"id":"e57faeda-13ad-4899-a1b1-f362d9cc9b3c","type":"BasicTickFormatter"},"plot":{"id":"52b1b6cd-a50b-402e-bdfa-e827dfe994bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"46dc593e-7952-44f7-92c7-7cd431764d82","type":"BasicTicker"},"visible":false},"id":"0962a7af-73f0-4099-8545-72befa5e047e","type":"LinearAxis"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"eb81af2e-4480-4d13-a5cb-8dee30d7e3d3","type":"ImageURL"},{"attributes":{"dimension":1,"plot":{"id":"52b1b6cd-a50b-402e-bdfa-e827dfe994bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"46dc593e-7952-44f7-92c7-7cd431764d82","type":"BasicTicker"},"visible":false},"id":"172bc41a-237f-481e-9e5a-1c3c3d3617ee","type":"Grid"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"970570bf-e44c-42ed-b933-c8ff8d419694","type":"ImageURL"},{"attributes":{"plot":{"id":"52b1b6cd-a50b-402e-bdfa-e827dfe994bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"e498e300-bce3-4fbe-823a-9e8316ee673b","type":"BasicTicker"},"visible":false},"id":"3ca32b3e-ce03-4fc1-b828-d544ce3bbd5c","type":"Grid"},{"attributes":{},"id":"e498e300-bce3-4fbe-823a-9e8316ee673b","type":"BasicTicker"},{"attributes":{"callback":null},"id":"d197b772-30ec-425b-82c2-4b6a4de4115d","type":"Range1d"},{"attributes":{},"id":"2f38d40e-b2aa-4c44-9f06-01ce71939773","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"2f38d40e-b2aa-4c44-9f06-01ce71939773","type":"BasicTickFormatter"},"plot":{"id":"52b1b6cd-a50b-402e-bdfa-e827dfe994bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"e498e300-bce3-4fbe-823a-9e8316ee673b","type":"BasicTicker"},"visible":false},"id":"b1191b84-365c-43ce-8853-a441bcb317f8","type":"LinearAxis"},{"attributes":{"source":{"id":"417e9708-18b1-49d7-bcb4-cf62db28a5fd","type":"ColumnDataSource"}},"id":"124026ec-1839-4394-bfe5-162a719d1d60","type":"CDSView"},{"attributes":{"callback":null},"id":"d1742ba6-efcb-456c-90e7-7c4f8670319d","type":"Range1d"}],"root_ids":["3db4b725-3857-4006-831f-428946bc1c4b"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"211d06d2-42bf-4b92-a86b-464f97788f34","roots":{"3db4b725-3857-4006-831f-428946bc1c4b":"89707765-28ef-4ea0-864d-5bf0558d816e"}}];
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
