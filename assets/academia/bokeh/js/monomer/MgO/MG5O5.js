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
      };var element = document.getElementById("70c02072-f377-400c-92f1-645fa8372260");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '70c02072-f377-400c-92f1-645fa8372260' but no matching script tag was found. ")
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

                  var docs_json = '{"6ad7912b-e17d-4a32-a821-ebe5a927ee3d":{"roots":{"references":[{"attributes":{"data_source":{"id":"b0530445-4bfc-43a0-84c8-86fe0c6d3546","type":"ColumnDataSource"},"glyph":{"id":"75acf98f-14ae-4784-8463-ab0ddce8ee8f","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8b0ac8b4-455c-4ce4-b898-22227c3b9c12","type":"ImageURL"},"selection_glyph":null,"view":{"id":"a1249ed7-be54-4d6d-8e61-ca82e8bb5e55","type":"CDSView"}},"id":"94f2e020-3f5d-4644-b363-22daa4e04b62","type":"GlyphRenderer"},{"attributes":{},"id":"13dcc043-1c8f-44c2-ae61-91c0821b8c1b","type":"LinearScale"},{"attributes":{"formatter":{"id":"6e713c28-e290-497a-aaa5-6cc62e42a30b","type":"BasicTickFormatter"},"plot":{"id":"a9c78ccc-8611-40eb-95c9-cd75b3222f8e","subtype":"Figure","type":"Plot"},"ticker":{"id":"6752bac9-0b97-4fa5-a72b-73f70b120591","type":"BasicTicker"},"visible":false},"id":"99c16d21-2315-4699-b0a1-b53da0952c13","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"7871f966-59aa-4b31-980f-01eec702c66a","type":"Title"},{"attributes":{},"id":"6e713c28-e290-497a-aaa5-6cc62e42a30b","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"976d9039-d54b-4933-8faa-1ee3cf44cb07","type":"WidgetBox"},{"id":"a9c78ccc-8611-40eb-95c9-cd75b3222f8e","subtype":"Figure","type":"Plot"}]},"id":"e03a63f1-c748-4602-acf8-23e58f085f51","type":"Column"},{"attributes":{},"id":"b9392360-7f4b-42d5-9784-211fb91410e7","type":"Selection"},{"attributes":{"args":{"source":{"id":"b0530445-4bfc-43a0-84c8-86fe0c6d3546","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value/5\\n        var file_name = data[&#x27;url_full&#x27;]\\n        var file_num = data[&#x27;url_num&#x27;]\\n        var f_string = f.toString().padStart(3, &#x27;0&#x27;)\\n        file_name[0] = file_name[0].replace(file_num[0], f_string)\\n        file_num[0] = f_string\\n        source.change.emit();\\n        "},"id":"aa13f75f-9e44-4fd1-ac75-94075f076637","type":"CustomJS"},{"attributes":{"source":{"id":"b0530445-4bfc-43a0-84c8-86fe0c6d3546","type":"ColumnDataSource"}},"id":"a1249ed7-be54-4d6d-8e61-ca82e8bb5e55","type":"CDSView"},{"attributes":{},"id":"33940aff-4275-4056-a252-15938ca34238","type":"BasicTicker"},{"attributes":{"callback":null},"id":"513b8e97-77bd-449a-8386-14d2e4fa59dc","type":"Range1d"},{"attributes":{"plot":{"id":"a9c78ccc-8611-40eb-95c9-cd75b3222f8e","subtype":"Figure","type":"Plot"},"ticker":{"id":"33940aff-4275-4056-a252-15938ca34238","type":"BasicTicker"},"visible":false},"id":"d40bb09a-8c44-48f7-90bb-4de18bb6e74f","type":"Grid"},{"attributes":{},"id":"08239b41-b630-4688-9180-84abc36ca3b5","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"2b19e354-42a7-463a-9f4b-9ecbd3c42715","type":"Toolbar"},{"attributes":{},"id":"7fca2d1b-7277-4a87-b1bb-cb8f855085b2","type":"LinearScale"},{"attributes":{},"id":"6752bac9-0b97-4fa5-a72b-73f70b120591","type":"BasicTicker"},{"attributes":{"callback":null},"id":"181707c8-bb7b-4bda-8379-ed7c86fc057f","type":"Range1d"},{"attributes":{"children":[{"id":"ca406ddb-ee26-41bd-adec-0597677d516a","type":"Slider"}]},"id":"976d9039-d54b-4933-8faa-1ee3cf44cb07","type":"WidgetBox"},{"attributes":{"dimension":1,"plot":{"id":"a9c78ccc-8611-40eb-95c9-cd75b3222f8e","subtype":"Figure","type":"Plot"},"ticker":{"id":"6752bac9-0b97-4fa5-a72b-73f70b120591","type":"BasicTicker"},"visible":false},"id":"cb904b3f-62ec-4a2d-b7f9-1e19188064ec","type":"Grid"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"75acf98f-14ae-4784-8463-ab0ddce8ee8f","type":"ImageURL"},{"attributes":{"formatter":{"id":"1549cf01-009b-4ee2-80ea-17cbdc1615ce","type":"BasicTickFormatter"},"plot":{"id":"a9c78ccc-8611-40eb-95c9-cd75b3222f8e","subtype":"Figure","type":"Plot"},"ticker":{"id":"33940aff-4275-4056-a252-15938ca34238","type":"BasicTicker"},"visible":false},"id":"00163bcd-f284-448d-b4ac-82dbc04dae81","type":"LinearAxis"},{"attributes":{"callback":{"id":"aa13f75f-9e44-4fd1-ac75-94075f076637","type":"CustomJS"},"end":365,"start":0,"step":5,"title":"days","value":0},"id":"ca406ddb-ee26-41bd-adec-0597677d516a","type":"Slider"},{"attributes":{"below":[{"id":"00163bcd-f284-448d-b4ac-82dbc04dae81","type":"LinearAxis"}],"left":[{"id":"99c16d21-2315-4699-b0a1-b53da0952c13","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"00163bcd-f284-448d-b4ac-82dbc04dae81","type":"LinearAxis"},{"id":"d40bb09a-8c44-48f7-90bb-4de18bb6e74f","type":"Grid"},{"id":"99c16d21-2315-4699-b0a1-b53da0952c13","type":"LinearAxis"},{"id":"cb904b3f-62ec-4a2d-b7f9-1e19188064ec","type":"Grid"},{"id":"94f2e020-3f5d-4644-b363-22daa4e04b62","type":"GlyphRenderer"}],"title":{"id":"7871f966-59aa-4b31-980f-01eec702c66a","type":"Title"},"toolbar":{"id":"2b19e354-42a7-463a-9f4b-9ecbd3c42715","type":"Toolbar"},"x_range":{"id":"513b8e97-77bd-449a-8386-14d2e4fa59dc","type":"Range1d"},"x_scale":{"id":"13dcc043-1c8f-44c2-ae61-91c0821b8c1b","type":"LinearScale"},"y_range":{"id":"181707c8-bb7b-4bda-8379-ed7c86fc057f","type":"Range1d"},"y_scale":{"id":"7fca2d1b-7277-4a87-b1bb-cb8f855085b2","type":"LinearScale"}},"id":"a9c78ccc-8611-40eb-95c9-cd75b3222f8e","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"url_full":["/assets/academia/bokeh/figs/monomer/MgO/MG5O5_000.png"],"url_num":["000"]},"selected":{"id":"b9392360-7f4b-42d5-9784-211fb91410e7","type":"Selection"},"selection_policy":{"id":"08239b41-b630-4688-9180-84abc36ca3b5","type":"UnionRenderers"}},"id":"b0530445-4bfc-43a0-84c8-86fe0c6d3546","type":"ColumnDataSource"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"8b0ac8b4-455c-4ce4-b898-22227c3b9c12","type":"ImageURL"},{"attributes":{},"id":"1549cf01-009b-4ee2-80ea-17cbdc1615ce","type":"BasicTickFormatter"}],"root_ids":["e03a63f1-c748-4602-acf8-23e58f085f51"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"6ad7912b-e17d-4a32-a821-ebe5a927ee3d","roots":{"e03a63f1-c748-4602-acf8-23e58f085f51":"70c02072-f377-400c-92f1-645fa8372260"}}];
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
