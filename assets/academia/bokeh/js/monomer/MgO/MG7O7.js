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
      };var element = document.getElementById("feaf026f-5ac6-45ab-90be-e0a8d4f419da");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'feaf026f-5ac6-45ab-90be-e0a8d4f419da' but no matching script tag was found. ")
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

                  var docs_json = '{"e3a3b5fa-ab20-4573-8c59-c8c88b78f8d9":{"roots":{"references":[{"attributes":{"children":[{"id":"7569946b-6d38-4657-940e-2720e14aeae4","type":"WidgetBox"},{"id":"9b7a189a-ce82-41a6-a821-db13ac4bb398","subtype":"Figure","type":"Plot"}]},"id":"038d74bf-11c7-47c6-9f70-7a44a23595b1","type":"Column"},{"attributes":{"callback":null,"data":{"url_full":["/assets/academia/bokeh/figs/monomer/MgO/MG7O7_000.png"],"url_num":["000"]},"selected":{"id":"23f03fe8-8a5a-4dee-a26c-3dfa86a0cc18","type":"Selection"},"selection_policy":{"id":"d78f2ac8-16f2-4c27-939d-2f32b1cf24be","type":"UnionRenderers"}},"id":"a14b0a22-8991-461b-9b2c-bd3dceb9e3b5","type":"ColumnDataSource"},{"attributes":{},"id":"435f85ee-4a40-40cf-ace0-3bdac03213cb","type":"BasicTicker"},{"attributes":{},"id":"23f03fe8-8a5a-4dee-a26c-3dfa86a0cc18","type":"Selection"},{"attributes":{"below":[{"id":"f2c11e10-9a79-45d5-a803-0fe6cec04a33","type":"LinearAxis"}],"left":[{"id":"e45dc552-c62f-4d7f-b96b-c6531de14ce1","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"f2c11e10-9a79-45d5-a803-0fe6cec04a33","type":"LinearAxis"},{"id":"7db51f6a-b894-4a17-ae8c-f58f8cc47bf2","type":"Grid"},{"id":"e45dc552-c62f-4d7f-b96b-c6531de14ce1","type":"LinearAxis"},{"id":"bbac911b-8f06-4b2c-8b32-93efc87d83e1","type":"Grid"},{"id":"714f13c1-ca13-41d6-9caf-8ccfa5c2973a","type":"GlyphRenderer"}],"title":{"id":"f1220f1f-97a3-499e-8a77-f4fc42d6aa49","type":"Title"},"toolbar":{"id":"5a73505b-f1ac-4c6e-a156-364bf4329cb5","type":"Toolbar"},"x_range":{"id":"ea7b0880-ba3c-4409-ba6d-c16d99956fb1","type":"Range1d"},"x_scale":{"id":"7d36a86d-f48a-4cd8-afa9-05bcd656c17b","type":"LinearScale"},"y_range":{"id":"64127afb-d5db-4310-b430-076fed31dfc3","type":"Range1d"},"y_scale":{"id":"ec1bf035-c13d-47e5-872e-dd19ade209a1","type":"LinearScale"}},"id":"9b7a189a-ce82-41a6-a821-db13ac4bb398","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"7d36a86d-f48a-4cd8-afa9-05bcd656c17b","type":"LinearScale"},{"attributes":{},"id":"1165f790-6842-49c6-84ad-548092023752","type":"BasicTickFormatter"},{"attributes":{},"id":"ec1bf035-c13d-47e5-872e-dd19ade209a1","type":"LinearScale"},{"attributes":{"source":{"id":"a14b0a22-8991-461b-9b2c-bd3dceb9e3b5","type":"ColumnDataSource"}},"id":"798f02c1-0afc-4b5f-846e-bfb2c68d1967","type":"CDSView"},{"attributes":{"callback":null},"id":"ea7b0880-ba3c-4409-ba6d-c16d99956fb1","type":"Range1d"},{"attributes":{"plot":null,"text":""},"id":"f1220f1f-97a3-499e-8a77-f4fc42d6aa49","type":"Title"},{"attributes":{"formatter":{"id":"deaca55d-e916-43ac-afce-e2e7763586ee","type":"BasicTickFormatter"},"plot":{"id":"9b7a189a-ce82-41a6-a821-db13ac4bb398","subtype":"Figure","type":"Plot"},"ticker":{"id":"79f0f51c-69d5-4aaa-ac8d-e1c9c401921b","type":"BasicTicker"},"visible":false},"id":"f2c11e10-9a79-45d5-a803-0fe6cec04a33","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"9b7a189a-ce82-41a6-a821-db13ac4bb398","subtype":"Figure","type":"Plot"},"ticker":{"id":"435f85ee-4a40-40cf-ace0-3bdac03213cb","type":"BasicTicker"},"visible":false},"id":"bbac911b-8f06-4b2c-8b32-93efc87d83e1","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"5a73505b-f1ac-4c6e-a156-364bf4329cb5","type":"Toolbar"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"00b2c85b-5f4a-4db5-a521-4928e7ee2239","type":"ImageURL"},{"attributes":{"callback":null},"id":"64127afb-d5db-4310-b430-076fed31dfc3","type":"Range1d"},{"attributes":{},"id":"deaca55d-e916-43ac-afce-e2e7763586ee","type":"BasicTickFormatter"},{"attributes":{"args":{"source":{"id":"a14b0a22-8991-461b-9b2c-bd3dceb9e3b5","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value/5\\n        var file_name = data[&#x27;url_full&#x27;]\\n        var file_num = data[&#x27;url_num&#x27;]\\n        var f_string = f.toString().padStart(3, &#x27;0&#x27;)\\n        file_name[0] = file_name[0].replace(file_num[0], f_string)\\n        file_num[0] = f_string\\n        source.change.emit();\\n        "},"id":"3d259bb8-06fa-495a-9ec5-a3ba920d8023","type":"CustomJS"},{"attributes":{"data_source":{"id":"a14b0a22-8991-461b-9b2c-bd3dceb9e3b5","type":"ColumnDataSource"},"glyph":{"id":"458d5751-28ae-41be-b8ea-be14307647e8","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"00b2c85b-5f4a-4db5-a521-4928e7ee2239","type":"ImageURL"},"selection_glyph":null,"view":{"id":"798f02c1-0afc-4b5f-846e-bfb2c68d1967","type":"CDSView"}},"id":"714f13c1-ca13-41d6-9caf-8ccfa5c2973a","type":"GlyphRenderer"},{"attributes":{"callback":{"id":"3d259bb8-06fa-495a-9ec5-a3ba920d8023","type":"CustomJS"},"end":365,"start":0,"step":5,"title":"days","value":0},"id":"40fe3181-2894-4d32-9cf6-c9faf4ce09e6","type":"Slider"},{"attributes":{"formatter":{"id":"1165f790-6842-49c6-84ad-548092023752","type":"BasicTickFormatter"},"plot":{"id":"9b7a189a-ce82-41a6-a821-db13ac4bb398","subtype":"Figure","type":"Plot"},"ticker":{"id":"435f85ee-4a40-40cf-ace0-3bdac03213cb","type":"BasicTicker"},"visible":false},"id":"e45dc552-c62f-4d7f-b96b-c6531de14ce1","type":"LinearAxis"},{"attributes":{"children":[{"id":"40fe3181-2894-4d32-9cf6-c9faf4ce09e6","type":"Slider"}]},"id":"7569946b-6d38-4657-940e-2720e14aeae4","type":"WidgetBox"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"458d5751-28ae-41be-b8ea-be14307647e8","type":"ImageURL"},{"attributes":{},"id":"79f0f51c-69d5-4aaa-ac8d-e1c9c401921b","type":"BasicTicker"},{"attributes":{"plot":{"id":"9b7a189a-ce82-41a6-a821-db13ac4bb398","subtype":"Figure","type":"Plot"},"ticker":{"id":"79f0f51c-69d5-4aaa-ac8d-e1c9c401921b","type":"BasicTicker"},"visible":false},"id":"7db51f6a-b894-4a17-ae8c-f58f8cc47bf2","type":"Grid"},{"attributes":{},"id":"d78f2ac8-16f2-4c27-939d-2f32b1cf24be","type":"UnionRenderers"}],"root_ids":["038d74bf-11c7-47c6-9f70-7a44a23595b1"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"e3a3b5fa-ab20-4573-8c59-c8c88b78f8d9","roots":{"038d74bf-11c7-47c6-9f70-7a44a23595b1":"feaf026f-5ac6-45ab-90be-e0a8d4f419da"}}];
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
