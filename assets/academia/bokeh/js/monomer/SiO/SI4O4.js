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
      };var element = document.getElementById("b35c56b8-62c3-488a-95f4-6a18c650cc2c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b35c56b8-62c3-488a-95f4-6a18c650cc2c' but no matching script tag was found. ")
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

                  var docs_json = '{"f570cd33-2f06-439e-b228-13bcfef4cd03":{"roots":{"references":[{"attributes":{"data_source":{"id":"bb7090eb-3823-41f9-97df-e7f0c2197892","type":"ColumnDataSource"},"glyph":{"id":"a1b64e73-24dc-4d4b-8541-b9b47c44f93e","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1cda4811-b6f8-4654-93fc-c63997c864ec","type":"ImageURL"},"selection_glyph":null,"view":{"id":"51c1e109-b947-49f2-bcc9-fd6e93132f15","type":"CDSView"}},"id":"498d1e9f-883b-4eb5-a3d7-33f18a5b7351","type":"GlyphRenderer"},{"attributes":{},"id":"f7dd97c2-7f6b-4de5-bb72-72dc4578b07f","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"50043777-284d-4476-b359-b9618d2da000","type":"BasicTickFormatter"},"plot":{"id":"3f700d97-4cb2-40eb-aa54-5d016fc06240","subtype":"Figure","type":"Plot"},"ticker":{"id":"32fe0911-f0c2-4883-a619-e69ed1afcc2f","type":"BasicTicker"},"visible":false},"id":"b9bf5f97-0c29-4145-baec-899378fc46c9","type":"LinearAxis"},{"attributes":{"callback":null},"id":"d53c0736-ec98-453d-8838-ed0cac1eb9f8","type":"Range1d"},{"attributes":{},"id":"7ded0853-6154-4344-9438-d7daa344a0de","type":"LinearScale"},{"attributes":{},"id":"f125f0c4-786e-4f86-9f24-ac3fa9b9a1b6","type":"LinearScale"},{"attributes":{"below":[{"id":"cb19cfa8-0c99-47a6-8963-ee5299506322","type":"LinearAxis"}],"left":[{"id":"b9bf5f97-0c29-4145-baec-899378fc46c9","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"cb19cfa8-0c99-47a6-8963-ee5299506322","type":"LinearAxis"},{"id":"d02abfc0-210c-4c9d-bf5d-09b82c9f498a","type":"Grid"},{"id":"b9bf5f97-0c29-4145-baec-899378fc46c9","type":"LinearAxis"},{"id":"f65ce883-2d3b-478e-a488-aab4ebf5a5b1","type":"Grid"},{"id":"498d1e9f-883b-4eb5-a3d7-33f18a5b7351","type":"GlyphRenderer"}],"title":{"id":"ae805260-5669-480f-9271-3aaaf6ed1849","type":"Title"},"toolbar":{"id":"400f8e69-9331-441d-b553-02903694d1df","type":"Toolbar"},"x_range":{"id":"474c943f-3f18-46c6-bce9-c58f669299ed","type":"Range1d"},"x_scale":{"id":"f125f0c4-786e-4f86-9f24-ac3fa9b9a1b6","type":"LinearScale"},"y_range":{"id":"d53c0736-ec98-453d-8838-ed0cac1eb9f8","type":"Range1d"},"y_scale":{"id":"7ded0853-6154-4344-9438-d7daa344a0de","type":"LinearScale"}},"id":"3f700d97-4cb2-40eb-aa54-5d016fc06240","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"ae805260-5669-480f-9271-3aaaf6ed1849","type":"Title"},{"attributes":{"source":{"id":"bb7090eb-3823-41f9-97df-e7f0c2197892","type":"ColumnDataSource"}},"id":"51c1e109-b947-49f2-bcc9-fd6e93132f15","type":"CDSView"},{"attributes":{},"id":"32fe0911-f0c2-4883-a619-e69ed1afcc2f","type":"BasicTicker"},{"attributes":{},"id":"50043777-284d-4476-b359-b9618d2da000","type":"BasicTickFormatter"},{"attributes":{"args":{"source":{"id":"bb7090eb-3823-41f9-97df-e7f0c2197892","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value/5\\n        var file_name = data[&#x27;url_full&#x27;]\\n        var file_num = data[&#x27;url_num&#x27;]\\n        var f_string = f.toString().padStart(3, &#x27;0&#x27;)\\n        file_name[0] = file_name[0].replace(file_num[0], f_string)\\n        file_num[0] = f_string\\n        source.change.emit();\\n        "},"id":"a9684a71-1ead-4473-a75b-9b05fdb8f8f9","type":"CustomJS"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"a1b64e73-24dc-4d4b-8541-b9b47c44f93e","type":"ImageURL"},{"attributes":{"callback":{"id":"a9684a71-1ead-4473-a75b-9b05fdb8f8f9","type":"CustomJS"},"end":365,"start":0,"step":5,"title":"days","value":0},"id":"4ddc8ca5-402e-4aa6-a5d8-ebf57bca3895","type":"Slider"},{"attributes":{},"id":"aadd7af2-e6d1-4474-b114-9e81188bc8d2","type":"Selection"},{"attributes":{},"id":"56655c0e-d154-4705-8f83-557ffb012e43","type":"BasicTicker"},{"attributes":{"callback":null},"id":"474c943f-3f18-46c6-bce9-c58f669299ed","type":"Range1d"},{"attributes":{"callback":null,"data":{"url_full":["/assets/academia/bokeh/figs/monomer/SiO/SI4O4_000.png"],"url_num":["000"]},"selected":{"id":"aadd7af2-e6d1-4474-b114-9e81188bc8d2","type":"Selection"},"selection_policy":{"id":"6d2f6a55-460b-4b7a-9633-7ec8fbb73a51","type":"UnionRenderers"}},"id":"bb7090eb-3823-41f9-97df-e7f0c2197892","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"3f700d97-4cb2-40eb-aa54-5d016fc06240","subtype":"Figure","type":"Plot"},"ticker":{"id":"32fe0911-f0c2-4883-a619-e69ed1afcc2f","type":"BasicTicker"},"visible":false},"id":"f65ce883-2d3b-478e-a488-aab4ebf5a5b1","type":"Grid"},{"attributes":{"children":[{"id":"b3492306-1c2b-4340-9760-85422c7c5f89","type":"WidgetBox"},{"id":"3f700d97-4cb2-40eb-aa54-5d016fc06240","subtype":"Figure","type":"Plot"}]},"id":"9c37dc46-5ef0-4ea0-8440-eadfc03871eb","type":"Column"},{"attributes":{"plot":{"id":"3f700d97-4cb2-40eb-aa54-5d016fc06240","subtype":"Figure","type":"Plot"},"ticker":{"id":"56655c0e-d154-4705-8f83-557ffb012e43","type":"BasicTicker"},"visible":false},"id":"d02abfc0-210c-4c9d-bf5d-09b82c9f498a","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"400f8e69-9331-441d-b553-02903694d1df","type":"Toolbar"},{"attributes":{"children":[{"id":"4ddc8ca5-402e-4aa6-a5d8-ebf57bca3895","type":"Slider"}]},"id":"b3492306-1c2b-4340-9760-85422c7c5f89","type":"WidgetBox"},{"attributes":{},"id":"6d2f6a55-460b-4b7a-9633-7ec8fbb73a51","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"f7dd97c2-7f6b-4de5-bb72-72dc4578b07f","type":"BasicTickFormatter"},"plot":{"id":"3f700d97-4cb2-40eb-aa54-5d016fc06240","subtype":"Figure","type":"Plot"},"ticker":{"id":"56655c0e-d154-4705-8f83-557ffb012e43","type":"BasicTicker"},"visible":false},"id":"cb19cfa8-0c99-47a6-8963-ee5299506322","type":"LinearAxis"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"1cda4811-b6f8-4654-93fc-c63997c864ec","type":"ImageURL"}],"root_ids":["9c37dc46-5ef0-4ea0-8440-eadfc03871eb"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"f570cd33-2f06-439e-b228-13bcfef4cd03","roots":{"9c37dc46-5ef0-4ea0-8440-eadfc03871eb":"b35c56b8-62c3-488a-95f4-6a18c650cc2c"}}];
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
