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
      };var element = document.getElementById("14dcc7a3-749e-438a-a318-cc7c95079d5a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '14dcc7a3-749e-438a-a318-cc7c95079d5a' but no matching script tag was found. ")
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

                  var docs_json = '{"3e0b3509-87ad-475c-91b0-a8554ed237a4":{"roots":{"references":[{"attributes":{"callback":null,"data":{"url_full":["/assets/academia/bokeh/figs/monomer/SiO/SI6O6_000.png"],"url_num":["000"]},"selected":{"id":"15e29e90-e350-4fdb-8130-300974021225","type":"Selection"},"selection_policy":{"id":"fd566b9f-d89d-4d18-adb6-070a38b32dd5","type":"UnionRenderers"}},"id":"af828d01-2728-49c3-9b78-803c88933c7b","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"b5089322-0240-42dc-8152-f280a28b0350","type":"Title"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"7594b91e-1e29-4a66-9cdd-f8e5413b4a7c","type":"ImageURL"},{"attributes":{"formatter":{"id":"b1ffdc11-17d7-4d3b-9be9-9f265d05a0b7","type":"BasicTickFormatter"},"plot":{"id":"b0b17e07-662b-4538-8fcc-dfae4f163a1f","subtype":"Figure","type":"Plot"},"ticker":{"id":"1410d631-f71c-4138-a43b-de7200663a59","type":"BasicTicker"},"visible":false},"id":"ea0d3866-f139-46bd-85d4-98136c377030","type":"LinearAxis"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"88eb1d56-584f-4942-9c05-530dfd591a8c","type":"ImageURL"},{"attributes":{"callback":null},"id":"81c7a33c-4bcf-499b-811a-3847f3c3853f","type":"Range1d"},{"attributes":{"plot":{"id":"b0b17e07-662b-4538-8fcc-dfae4f163a1f","subtype":"Figure","type":"Plot"},"ticker":{"id":"c903a576-0892-44f5-9073-6c6188674d14","type":"BasicTicker"},"visible":false},"id":"38bb430d-5be2-47a9-8736-ae6372d83650","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"b0b17e07-662b-4538-8fcc-dfae4f163a1f","subtype":"Figure","type":"Plot"},"ticker":{"id":"1410d631-f71c-4138-a43b-de7200663a59","type":"BasicTicker"},"visible":false},"id":"cd047da3-65f9-457a-8aa3-f94431cb1b49","type":"Grid"},{"attributes":{"children":[{"id":"6981e8be-c7e3-4302-a1f2-7defde921d40","type":"Slider"}]},"id":"ffa83b5e-8e56-45f8-9cc2-6f6ef0ad1152","type":"WidgetBox"},{"attributes":{},"id":"15e29e90-e350-4fdb-8130-300974021225","type":"Selection"},{"attributes":{},"id":"a8d3b1da-4717-4bab-8272-e0d4eaebe20a","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"af828d01-2728-49c3-9b78-803c88933c7b","type":"ColumnDataSource"},"glyph":{"id":"88eb1d56-584f-4942-9c05-530dfd591a8c","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7594b91e-1e29-4a66-9cdd-f8e5413b4a7c","type":"ImageURL"},"selection_glyph":null,"view":{"id":"b8768c02-9d8a-4fc1-aa4e-428d89ae47c6","type":"CDSView"}},"id":"0f143705-b63d-4358-acbf-cbe481c3aa94","type":"GlyphRenderer"},{"attributes":{},"id":"b1ffdc11-17d7-4d3b-9be9-9f265d05a0b7","type":"BasicTickFormatter"},{"attributes":{},"id":"9d5fa015-c52f-4e24-b8b3-3086d643c63c","type":"LinearScale"},{"attributes":{"callback":null},"id":"745e03e0-beab-4ef1-847a-c6b237c3ba7a","type":"Range1d"},{"attributes":{"source":{"id":"af828d01-2728-49c3-9b78-803c88933c7b","type":"ColumnDataSource"}},"id":"b8768c02-9d8a-4fc1-aa4e-428d89ae47c6","type":"CDSView"},{"attributes":{},"id":"1410d631-f71c-4138-a43b-de7200663a59","type":"BasicTicker"},{"attributes":{},"id":"fd566b9f-d89d-4d18-adb6-070a38b32dd5","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"c2826814-cf50-4a97-9d4f-28b7354da506","type":"Toolbar"},{"attributes":{},"id":"70fa59c9-4f98-47b1-9e3a-e0765095c258","type":"LinearScale"},{"attributes":{"args":{"source":{"id":"af828d01-2728-49c3-9b78-803c88933c7b","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value/5\\n        var file_name = data[&#x27;url_full&#x27;]\\n        var file_num = data[&#x27;url_num&#x27;]\\n        var f_string = f.toString().padStart(3, &#x27;0&#x27;)\\n        file_name[0] = file_name[0].replace(file_num[0], f_string)\\n        file_num[0] = f_string\\n        source.change.emit();\\n        "},"id":"876bc890-ed94-408d-b65d-839c2eee591d","type":"CustomJS"},{"attributes":{"children":[{"id":"ffa83b5e-8e56-45f8-9cc2-6f6ef0ad1152","type":"WidgetBox"},{"id":"b0b17e07-662b-4538-8fcc-dfae4f163a1f","subtype":"Figure","type":"Plot"}]},"id":"7eb0fd6d-9fa3-4c67-a423-087cc2894305","type":"Column"},{"attributes":{"callback":{"id":"876bc890-ed94-408d-b65d-839c2eee591d","type":"CustomJS"},"end":365,"start":0,"step":5,"title":"days","value":0},"id":"6981e8be-c7e3-4302-a1f2-7defde921d40","type":"Slider"},{"attributes":{"formatter":{"id":"a8d3b1da-4717-4bab-8272-e0d4eaebe20a","type":"BasicTickFormatter"},"plot":{"id":"b0b17e07-662b-4538-8fcc-dfae4f163a1f","subtype":"Figure","type":"Plot"},"ticker":{"id":"c903a576-0892-44f5-9073-6c6188674d14","type":"BasicTicker"},"visible":false},"id":"d3df2bba-6721-422d-bdd2-6bbcf5b75b49","type":"LinearAxis"},{"attributes":{},"id":"c903a576-0892-44f5-9073-6c6188674d14","type":"BasicTicker"},{"attributes":{"below":[{"id":"d3df2bba-6721-422d-bdd2-6bbcf5b75b49","type":"LinearAxis"}],"left":[{"id":"ea0d3866-f139-46bd-85d4-98136c377030","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"d3df2bba-6721-422d-bdd2-6bbcf5b75b49","type":"LinearAxis"},{"id":"38bb430d-5be2-47a9-8736-ae6372d83650","type":"Grid"},{"id":"ea0d3866-f139-46bd-85d4-98136c377030","type":"LinearAxis"},{"id":"cd047da3-65f9-457a-8aa3-f94431cb1b49","type":"Grid"},{"id":"0f143705-b63d-4358-acbf-cbe481c3aa94","type":"GlyphRenderer"}],"title":{"id":"b5089322-0240-42dc-8152-f280a28b0350","type":"Title"},"toolbar":{"id":"c2826814-cf50-4a97-9d4f-28b7354da506","type":"Toolbar"},"x_range":{"id":"81c7a33c-4bcf-499b-811a-3847f3c3853f","type":"Range1d"},"x_scale":{"id":"9d5fa015-c52f-4e24-b8b3-3086d643c63c","type":"LinearScale"},"y_range":{"id":"745e03e0-beab-4ef1-847a-c6b237c3ba7a","type":"Range1d"},"y_scale":{"id":"70fa59c9-4f98-47b1-9e3a-e0765095c258","type":"LinearScale"}},"id":"b0b17e07-662b-4538-8fcc-dfae4f163a1f","subtype":"Figure","type":"Plot"}],"root_ids":["7eb0fd6d-9fa3-4c67-a423-087cc2894305"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"3e0b3509-87ad-475c-91b0-a8554ed237a4","roots":{"7eb0fd6d-9fa3-4c67-a423-087cc2894305":"14dcc7a3-749e-438a-a318-cc7c95079d5a"}}];
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
