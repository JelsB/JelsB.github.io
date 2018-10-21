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
      };var element = document.getElementById("8994674a-f93d-4195-bc81-7845b4155052");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8994674a-f93d-4195-bc81-7845b4155052' but no matching script tag was found. ")
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

                  var docs_json = '{"c9a36200-441a-433f-8211-43d5ad18c1de":{"roots":{"references":[{"attributes":{},"id":"675160cb-144e-4224-83e6-c979a6e25d38","type":"BasicTickFormatter"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"95554d96-f8ea-4ca2-9f08-988c2bf6f4c3","type":"ImageURL"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"41d90871-29ed-4ca2-9aba-f74074d1ffb9","type":"Toolbar"},{"attributes":{},"id":"fa37ab95-ab9c-4318-a141-fc055a359a7e","type":"Selection"},{"attributes":{"callback":{"id":"dff079d3-475c-4ad0-96a0-7be6278ead30","type":"CustomJS"},"end":365,"start":0,"step":5,"title":"days","value":0},"id":"83956bc9-5295-41a4-8048-d1c7b4b7e667","type":"Slider"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"d96fff2c-bfdd-444e-a94f-a22cde8ad9da","type":"ImageURL"},{"attributes":{"args":{"source":{"id":"ea9b0b9e-208b-4a84-aef9-0caae40a7029","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value/5\\n        var file_name = data[&#x27;url_full&#x27;]\\n        var file_num = data[&#x27;url_num&#x27;]\\n        var f_string = f.toString().padStart(3, &#x27;0&#x27;)\\n        file_name[0] = file_name[0].replace(file_num[0], f_string)\\n        file_num[0] = f_string\\n        source.change.emit();\\n        "},"id":"dff079d3-475c-4ad0-96a0-7be6278ead30","type":"CustomJS"},{"attributes":{},"id":"0ee94910-533c-4187-b0b5-349fd802e4a4","type":"LinearScale"},{"attributes":{"callback":null},"id":"effa5881-11a1-485e-9837-15aae58e0652","type":"Range1d"},{"attributes":{"plot":{"id":"e443f86f-b7a5-4b1e-9fde-abd50d2ed922","subtype":"Figure","type":"Plot"},"ticker":{"id":"d41c7837-e170-43a7-9848-9075180bf34f","type":"BasicTicker"},"visible":false},"id":"f4338d67-660f-472e-9e3d-a969edbf884e","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"a5a59fd1-b681-4af6-a650-d61ba94c490d","type":"Title"},{"attributes":{"callback":null,"data":{"url_full":["/assets/academia/bokeh/figs/monomer/SiO/SIO_000.png"],"url_num":["000"]},"selected":{"id":"fa37ab95-ab9c-4318-a141-fc055a359a7e","type":"Selection"},"selection_policy":{"id":"ef5db1a1-1d8d-42fc-9503-4d748ff674c9","type":"UnionRenderers"}},"id":"ea9b0b9e-208b-4a84-aef9-0caae40a7029","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"675160cb-144e-4224-83e6-c979a6e25d38","type":"BasicTickFormatter"},"plot":{"id":"e443f86f-b7a5-4b1e-9fde-abd50d2ed922","subtype":"Figure","type":"Plot"},"ticker":{"id":"cc4003eb-4b4c-4066-8f96-9fc4d5afdece","type":"BasicTicker"},"visible":false},"id":"4ea7bed8-a7aa-4319-bb8f-f166c9d32929","type":"LinearAxis"},{"attributes":{"children":[{"id":"83956bc9-5295-41a4-8048-d1c7b4b7e667","type":"Slider"}]},"id":"ac766774-e0f6-4b80-a0f4-776deeef0d26","type":"WidgetBox"},{"attributes":{"formatter":{"id":"87de0a66-1260-4e00-bbc1-2db1f865863f","type":"BasicTickFormatter"},"plot":{"id":"e443f86f-b7a5-4b1e-9fde-abd50d2ed922","subtype":"Figure","type":"Plot"},"ticker":{"id":"d41c7837-e170-43a7-9848-9075180bf34f","type":"BasicTicker"},"visible":false},"id":"c8b75883-0681-422b-ad81-be9783bbce19","type":"LinearAxis"},{"attributes":{"source":{"id":"ea9b0b9e-208b-4a84-aef9-0caae40a7029","type":"ColumnDataSource"}},"id":"16ed8618-130f-4d82-9cb9-aac16f2615c1","type":"CDSView"},{"attributes":{"below":[{"id":"c8b75883-0681-422b-ad81-be9783bbce19","type":"LinearAxis"}],"left":[{"id":"4ea7bed8-a7aa-4319-bb8f-f166c9d32929","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"c8b75883-0681-422b-ad81-be9783bbce19","type":"LinearAxis"},{"id":"f4338d67-660f-472e-9e3d-a969edbf884e","type":"Grid"},{"id":"4ea7bed8-a7aa-4319-bb8f-f166c9d32929","type":"LinearAxis"},{"id":"1883294a-840e-4437-81a1-04118d29b184","type":"Grid"},{"id":"64559891-37bb-46d9-aabc-de676f316be1","type":"GlyphRenderer"}],"title":{"id":"a5a59fd1-b681-4af6-a650-d61ba94c490d","type":"Title"},"toolbar":{"id":"41d90871-29ed-4ca2-9aba-f74074d1ffb9","type":"Toolbar"},"x_range":{"id":"effa5881-11a1-485e-9837-15aae58e0652","type":"Range1d"},"x_scale":{"id":"0ee94910-533c-4187-b0b5-349fd802e4a4","type":"LinearScale"},"y_range":{"id":"337beee7-0f26-48d4-aa86-75304dc7fff5","type":"Range1d"},"y_scale":{"id":"845ad7e5-a8a0-451f-a76f-1878e73df74a","type":"LinearScale"}},"id":"e443f86f-b7a5-4b1e-9fde-abd50d2ed922","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"ea9b0b9e-208b-4a84-aef9-0caae40a7029","type":"ColumnDataSource"},"glyph":{"id":"d96fff2c-bfdd-444e-a94f-a22cde8ad9da","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"95554d96-f8ea-4ca2-9f08-988c2bf6f4c3","type":"ImageURL"},"selection_glyph":null,"view":{"id":"16ed8618-130f-4d82-9cb9-aac16f2615c1","type":"CDSView"}},"id":"64559891-37bb-46d9-aabc-de676f316be1","type":"GlyphRenderer"},{"attributes":{},"id":"d41c7837-e170-43a7-9848-9075180bf34f","type":"BasicTicker"},{"attributes":{},"id":"ef5db1a1-1d8d-42fc-9503-4d748ff674c9","type":"UnionRenderers"},{"attributes":{},"id":"cc4003eb-4b4c-4066-8f96-9fc4d5afdece","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"e443f86f-b7a5-4b1e-9fde-abd50d2ed922","subtype":"Figure","type":"Plot"},"ticker":{"id":"cc4003eb-4b4c-4066-8f96-9fc4d5afdece","type":"BasicTicker"},"visible":false},"id":"1883294a-840e-4437-81a1-04118d29b184","type":"Grid"},{"attributes":{},"id":"87de0a66-1260-4e00-bbc1-2db1f865863f","type":"BasicTickFormatter"},{"attributes":{},"id":"845ad7e5-a8a0-451f-a76f-1878e73df74a","type":"LinearScale"},{"attributes":{"children":[{"id":"ac766774-e0f6-4b80-a0f4-776deeef0d26","type":"WidgetBox"},{"id":"e443f86f-b7a5-4b1e-9fde-abd50d2ed922","subtype":"Figure","type":"Plot"}]},"id":"5effe9c0-11c9-433c-8a86-7e96fd6d998d","type":"Column"},{"attributes":{"callback":null},"id":"337beee7-0f26-48d4-aa86-75304dc7fff5","type":"Range1d"}],"root_ids":["5effe9c0-11c9-433c-8a86-7e96fd6d998d"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"c9a36200-441a-433f-8211-43d5ad18c1de","roots":{"5effe9c0-11c9-433c-8a86-7e96fd6d998d":"8994674a-f93d-4195-bc81-7845b4155052"}}];
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
