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
      };var element = document.getElementById("d791e5b2-090e-499a-a964-67ad29c26577");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd791e5b2-090e-499a-a964-67ad29c26577' but no matching script tag was found. ")
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

                  var docs_json = '{"6667f412-4e4e-42d8-856b-d000a24414b3":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"240e2052-be04-4caa-8e65-3ef00c472b2a","type":"Toolbar"},{"attributes":{"source":{"id":"9076de89-6d0e-46bf-9689-f35e5994b8d7","type":"ColumnDataSource"}},"id":"e750323f-6019-4ae5-baea-8fbac95946f7","type":"CDSView"},{"attributes":{"callback":null},"id":"38cefa7d-8d6f-435c-9e1c-19f07cb96494","type":"Range1d"},{"attributes":{},"id":"fc3a9c5d-7c94-47f0-9b78-414f21a7b8f8","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"7d172170-93ab-4fb7-bd64-b967d5ee9596","type":"Range1d"},{"attributes":{"plot":null,"text":""},"id":"e84f38d3-f0b1-4b37-9fb7-bb5602b967ff","type":"Title"},{"attributes":{"args":{"source":{"id":"9076de89-6d0e-46bf-9689-f35e5994b8d7","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value/5\\n        var file_name = data[&#x27;url_full&#x27;]\\n        var file_num = data[&#x27;url_num&#x27;]\\n        var f_string = f.toString().padStart(3, &#x27;0&#x27;)\\n        file_name[0] = file_name[0].replace(file_num[0], f_string)\\n        file_num[0] = f_string\\n        source.change.emit();\\n        "},"id":"beb3f716-104a-4577-bb0c-da8cbb69bd41","type":"CustomJS"},{"attributes":{},"id":"a68fc373-8c26-401c-a67a-03649551a17c","type":"Selection"},{"attributes":{},"id":"fb9a8406-57cf-41d8-ac63-ffb70f8bc813","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"1fbc8bf1-9da8-48c7-b242-49d150347958","type":"LinearAxis"}],"left":[{"id":"e28b7997-c687-4eac-8813-bc27af2dadde","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"1fbc8bf1-9da8-48c7-b242-49d150347958","type":"LinearAxis"},{"id":"a6104211-8359-408b-8941-5161843c892a","type":"Grid"},{"id":"e28b7997-c687-4eac-8813-bc27af2dadde","type":"LinearAxis"},{"id":"65376359-1a88-422d-aebc-59e753d810fa","type":"Grid"},{"id":"55b5f9db-0485-47e7-a363-4f317a07fc90","type":"GlyphRenderer"}],"title":{"id":"e84f38d3-f0b1-4b37-9fb7-bb5602b967ff","type":"Title"},"toolbar":{"id":"240e2052-be04-4caa-8e65-3ef00c472b2a","type":"Toolbar"},"x_range":{"id":"7d172170-93ab-4fb7-bd64-b967d5ee9596","type":"Range1d"},"x_scale":{"id":"e786727b-b29a-42a4-886d-b79b7e4eac46","type":"LinearScale"},"y_range":{"id":"38cefa7d-8d6f-435c-9e1c-19f07cb96494","type":"Range1d"},"y_scale":{"id":"9d508860-1a05-4604-b85f-d9e5535ae2e3","type":"LinearScale"}},"id":"30f8cd36-0af3-4478-aab2-5d10dc1e093c","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"9076de89-6d0e-46bf-9689-f35e5994b8d7","type":"ColumnDataSource"},"glyph":{"id":"926543f7-7fd7-41e9-a250-48bcc1089dd3","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9be5ff01-7839-4397-b35a-5d20daefcc61","type":"ImageURL"},"selection_glyph":null,"view":{"id":"e750323f-6019-4ae5-baea-8fbac95946f7","type":"CDSView"}},"id":"55b5f9db-0485-47e7-a363-4f317a07fc90","type":"GlyphRenderer"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"9be5ff01-7839-4397-b35a-5d20daefcc61","type":"ImageURL"},{"attributes":{},"id":"78333b07-c281-462f-b6ad-959d19a5512c","type":"BasicTicker"},{"attributes":{},"id":"9d508860-1a05-4604-b85f-d9e5535ae2e3","type":"LinearScale"},{"attributes":{"children":[{"id":"3afb403d-5809-4494-9a5f-08819736d310","type":"Slider"}]},"id":"9ba66c9f-a6d7-43c3-8b47-c82ec5e64f8b","type":"WidgetBox"},{"attributes":{"dimension":1,"plot":{"id":"30f8cd36-0af3-4478-aab2-5d10dc1e093c","subtype":"Figure","type":"Plot"},"ticker":{"id":"78333b07-c281-462f-b6ad-959d19a5512c","type":"BasicTicker"},"visible":false},"id":"65376359-1a88-422d-aebc-59e753d810fa","type":"Grid"},{"attributes":{},"id":"86924c09-96b2-4f92-8936-f9bf5bbfcd3b","type":"BasicTicker"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"926543f7-7fd7-41e9-a250-48bcc1089dd3","type":"ImageURL"},{"attributes":{"formatter":{"id":"fb9a8406-57cf-41d8-ac63-ffb70f8bc813","type":"BasicTickFormatter"},"plot":{"id":"30f8cd36-0af3-4478-aab2-5d10dc1e093c","subtype":"Figure","type":"Plot"},"ticker":{"id":"86924c09-96b2-4f92-8936-f9bf5bbfcd3b","type":"BasicTicker"},"visible":false},"id":"1fbc8bf1-9da8-48c7-b242-49d150347958","type":"LinearAxis"},{"attributes":{"plot":{"id":"30f8cd36-0af3-4478-aab2-5d10dc1e093c","subtype":"Figure","type":"Plot"},"ticker":{"id":"86924c09-96b2-4f92-8936-f9bf5bbfcd3b","type":"BasicTicker"},"visible":false},"id":"a6104211-8359-408b-8941-5161843c892a","type":"Grid"},{"attributes":{"children":[{"id":"9ba66c9f-a6d7-43c3-8b47-c82ec5e64f8b","type":"WidgetBox"},{"id":"30f8cd36-0af3-4478-aab2-5d10dc1e093c","subtype":"Figure","type":"Plot"}]},"id":"8b0e7d1e-05e2-4b5c-b475-1acef2f2a158","type":"Column"},{"attributes":{},"id":"135e7f1e-7439-4c4b-8d33-ea57e7fc8bf9","type":"BasicTickFormatter"},{"attributes":{},"id":"e786727b-b29a-42a4-886d-b79b7e4eac46","type":"LinearScale"},{"attributes":{"callback":null,"data":{"url_full":["/assets/academia/bokeh/figs/monomer/MgO/MG8O8_000.png"],"url_num":["000"]},"selected":{"id":"a68fc373-8c26-401c-a67a-03649551a17c","type":"Selection"},"selection_policy":{"id":"fc3a9c5d-7c94-47f0-9b78-414f21a7b8f8","type":"UnionRenderers"}},"id":"9076de89-6d0e-46bf-9689-f35e5994b8d7","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"135e7f1e-7439-4c4b-8d33-ea57e7fc8bf9","type":"BasicTickFormatter"},"plot":{"id":"30f8cd36-0af3-4478-aab2-5d10dc1e093c","subtype":"Figure","type":"Plot"},"ticker":{"id":"78333b07-c281-462f-b6ad-959d19a5512c","type":"BasicTicker"},"visible":false},"id":"e28b7997-c687-4eac-8813-bc27af2dadde","type":"LinearAxis"},{"attributes":{"callback":{"id":"beb3f716-104a-4577-bb0c-da8cbb69bd41","type":"CustomJS"},"end":365,"start":0,"step":5,"title":"days","value":0},"id":"3afb403d-5809-4494-9a5f-08819736d310","type":"Slider"}],"root_ids":["8b0e7d1e-05e2-4b5c-b475-1acef2f2a158"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"6667f412-4e4e-42d8-856b-d000a24414b3","roots":{"8b0e7d1e-05e2-4b5c-b475-1acef2f2a158":"d791e5b2-090e-499a-a964-67ad29c26577"}}];
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
