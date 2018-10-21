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
      };var element = document.getElementById("c7f31a06-8600-482c-8be1-495b302dba89");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c7f31a06-8600-482c-8be1-495b302dba89' but no matching script tag was found. ")
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

                  var docs_json = '{"ed690a24-5b72-42c0-a77a-89ace9ff32b9":{"roots":{"references":[{"attributes":{"source":{"id":"737b5588-2434-4f56-bd81-75bff1ff6e30","type":"ColumnDataSource"}},"id":"6be92b62-a7b3-408c-a07e-0d67acbe2084","type":"CDSView"},{"attributes":{"formatter":{"id":"3e23314a-50cf-45fe-91bc-375b3ff2579a","type":"BasicTickFormatter"},"plot":{"id":"3c4dbc29-5d2b-41b1-babe-cdd6e862d781","subtype":"Figure","type":"Plot"},"ticker":{"id":"5621569a-803f-4605-b9af-3646413dc5bb","type":"BasicTicker"},"visible":false},"id":"70a00ba2-f841-4db7-b1d7-69942c43f713","type":"LinearAxis"},{"attributes":{"callback":{"id":"90593ce3-8778-4339-8173-096960397a9a","type":"CustomJS"},"end":365,"start":0,"step":5,"title":"days","value":0},"id":"5981ca10-4880-4467-ae2a-8970bf603ed4","type":"Slider"},{"attributes":{},"id":"c2a8592e-a18f-4bc4-b720-fad403230f0a","type":"LinearScale"},{"attributes":{"args":{"source":{"id":"737b5588-2434-4f56-bd81-75bff1ff6e30","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value/5\\n        var file_name = data[&#x27;url_full&#x27;]\\n        var file_num = data[&#x27;url_num&#x27;]\\n        var f_string = f.toString().padStart(3, &#x27;0&#x27;)\\n        file_name[0] = file_name[0].replace(file_num[0], f_string)\\n        file_num[0] = f_string\\n        source.change.emit();\\n        "},"id":"90593ce3-8778-4339-8173-096960397a9a","type":"CustomJS"},{"attributes":{"children":[{"id":"31e30db4-5d37-4a06-b4fa-ec4aa293da12","type":"WidgetBox"},{"id":"3c4dbc29-5d2b-41b1-babe-cdd6e862d781","subtype":"Figure","type":"Plot"}]},"id":"58766463-bbc3-4a2c-be28-70458129ba9a","type":"Column"},{"attributes":{"plot":{"id":"3c4dbc29-5d2b-41b1-babe-cdd6e862d781","subtype":"Figure","type":"Plot"},"ticker":{"id":"5621569a-803f-4605-b9af-3646413dc5bb","type":"BasicTicker"},"visible":false},"id":"682f3b7d-1607-4bed-bab9-70945e606afb","type":"Grid"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"7b1ddfb9-7297-4a5f-9b94-b18ff515667a","type":"ImageURL"},{"attributes":{"dimension":1,"plot":{"id":"3c4dbc29-5d2b-41b1-babe-cdd6e862d781","subtype":"Figure","type":"Plot"},"ticker":{"id":"8cad3f1e-953a-445d-a5a3-2debca792d96","type":"BasicTicker"},"visible":false},"id":"1b48753d-a617-4c56-9e0c-18077d5d5797","type":"Grid"},{"attributes":{},"id":"5621569a-803f-4605-b9af-3646413dc5bb","type":"BasicTicker"},{"attributes":{"callback":null},"id":"08ed3eb2-4ac6-468c-9ec3-0f6dd813afba","type":"Range1d"},{"attributes":{"callback":null,"data":{"url_full":["/assets/academia/bokeh/figs/monomer/Al2O3/AL6O9_000.png"],"url_num":["000"]},"selected":{"id":"62eeb4d9-1df2-4744-8a35-50797668842e","type":"Selection"},"selection_policy":{"id":"8d82ebda-774a-4e56-8cb3-7c8021312a28","type":"UnionRenderers"}},"id":"737b5588-2434-4f56-bd81-75bff1ff6e30","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"188d6222-447c-45b6-96ab-f6c9679d4a88","type":"Toolbar"},{"attributes":{"formatter":{"id":"9fa68621-4669-4c04-8297-6903ab5f8025","type":"BasicTickFormatter"},"plot":{"id":"3c4dbc29-5d2b-41b1-babe-cdd6e862d781","subtype":"Figure","type":"Plot"},"ticker":{"id":"8cad3f1e-953a-445d-a5a3-2debca792d96","type":"BasicTicker"},"visible":false},"id":"901998dd-6e9d-4dac-aa34-d8e2c8161efd","type":"LinearAxis"},{"attributes":{"callback":null},"id":"ff369020-ab0c-46d1-9928-5da81773e1f1","type":"Range1d"},{"attributes":{},"id":"8cad3f1e-953a-445d-a5a3-2debca792d96","type":"BasicTicker"},{"attributes":{},"id":"e7d4977e-a123-4a31-981f-e5f66b391ffa","type":"LinearScale"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"f1ba304a-579d-42e3-86f6-487a0b82bad6","type":"ImageURL"},{"attributes":{},"id":"62eeb4d9-1df2-4744-8a35-50797668842e","type":"Selection"},{"attributes":{"plot":null,"text":""},"id":"f99f5445-62d7-46b5-abf9-5ec57aec8c3e","type":"Title"},{"attributes":{},"id":"9fa68621-4669-4c04-8297-6903ab5f8025","type":"BasicTickFormatter"},{"attributes":{},"id":"3e23314a-50cf-45fe-91bc-375b3ff2579a","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"70a00ba2-f841-4db7-b1d7-69942c43f713","type":"LinearAxis"}],"left":[{"id":"901998dd-6e9d-4dac-aa34-d8e2c8161efd","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"70a00ba2-f841-4db7-b1d7-69942c43f713","type":"LinearAxis"},{"id":"682f3b7d-1607-4bed-bab9-70945e606afb","type":"Grid"},{"id":"901998dd-6e9d-4dac-aa34-d8e2c8161efd","type":"LinearAxis"},{"id":"1b48753d-a617-4c56-9e0c-18077d5d5797","type":"Grid"},{"id":"119f0629-e1b8-41a4-b130-428a1065eceb","type":"GlyphRenderer"}],"title":{"id":"f99f5445-62d7-46b5-abf9-5ec57aec8c3e","type":"Title"},"toolbar":{"id":"188d6222-447c-45b6-96ab-f6c9679d4a88","type":"Toolbar"},"x_range":{"id":"ff369020-ab0c-46d1-9928-5da81773e1f1","type":"Range1d"},"x_scale":{"id":"c2a8592e-a18f-4bc4-b720-fad403230f0a","type":"LinearScale"},"y_range":{"id":"08ed3eb2-4ac6-468c-9ec3-0f6dd813afba","type":"Range1d"},"y_scale":{"id":"e7d4977e-a123-4a31-981f-e5f66b391ffa","type":"LinearScale"}},"id":"3c4dbc29-5d2b-41b1-babe-cdd6e862d781","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"8d82ebda-774a-4e56-8cb3-7c8021312a28","type":"UnionRenderers"},{"attributes":{"children":[{"id":"5981ca10-4880-4467-ae2a-8970bf603ed4","type":"Slider"}]},"id":"31e30db4-5d37-4a06-b4fa-ec4aa293da12","type":"WidgetBox"},{"attributes":{"data_source":{"id":"737b5588-2434-4f56-bd81-75bff1ff6e30","type":"ColumnDataSource"},"glyph":{"id":"f1ba304a-579d-42e3-86f6-487a0b82bad6","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7b1ddfb9-7297-4a5f-9b94-b18ff515667a","type":"ImageURL"},"selection_glyph":null,"view":{"id":"6be92b62-a7b3-408c-a07e-0d67acbe2084","type":"CDSView"}},"id":"119f0629-e1b8-41a4-b130-428a1065eceb","type":"GlyphRenderer"}],"root_ids":["58766463-bbc3-4a2c-be28-70458129ba9a"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"ed690a24-5b72-42c0-a77a-89ace9ff32b9","roots":{"58766463-bbc3-4a2c-be28-70458129ba9a":"c7f31a06-8600-482c-8be1-495b302dba89"}}];
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
