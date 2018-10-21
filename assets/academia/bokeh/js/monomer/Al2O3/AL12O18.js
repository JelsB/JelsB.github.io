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
      };var element = document.getElementById("63ce1038-ad80-4015-aaab-464bdff6805d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '63ce1038-ad80-4015-aaab-464bdff6805d' but no matching script tag was found. ")
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

                  var docs_json = '{"661554ef-99b1-41db-bde5-aa70dbe3f489":{"roots":{"references":[{"attributes":{},"id":"5871c163-287d-49b9-9080-53c56fc858a1","type":"BasicTickFormatter"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"d13b8a8b-d1c4-475d-b851-cadf5911df9b","type":"ImageURL"},{"attributes":{"callback":{"id":"040a23c4-59b9-4192-89e2-80e6b074d5c8","type":"CustomJS"},"end":365,"start":0,"step":5,"title":"days","value":0},"id":"bc76410e-3e08-49b2-948e-b659c9ab24cf","type":"Slider"},{"attributes":{"formatter":{"id":"5871c163-287d-49b9-9080-53c56fc858a1","type":"BasicTickFormatter"},"plot":{"id":"865d6989-4ac3-4051-8e2f-dbc316dce8fc","subtype":"Figure","type":"Plot"},"ticker":{"id":"b34e410d-a641-4873-b7d6-047d7d26ee16","type":"BasicTicker"},"visible":false},"id":"f718909d-429f-4bb5-9d5b-0e24b996c6de","type":"LinearAxis"},{"attributes":{"args":{"source":{"id":"ea27076b-91b4-4263-a7f3-a47c81f4db85","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value/5\\n        var file_name = data[&#x27;url_full&#x27;]\\n        var file_num = data[&#x27;url_num&#x27;]\\n        var f_string = f.toString().padStart(3, &#x27;0&#x27;)\\n        file_name[0] = file_name[0].replace(file_num[0], f_string)\\n        file_num[0] = f_string\\n        source.change.emit();\\n        "},"id":"040a23c4-59b9-4192-89e2-80e6b074d5c8","type":"CustomJS"},{"attributes":{"children":[{"id":"b6f5fd78-1402-4ad7-a443-018be9b9f643","type":"WidgetBox"},{"id":"865d6989-4ac3-4051-8e2f-dbc316dce8fc","subtype":"Figure","type":"Plot"}]},"id":"ec208f80-fd67-479f-96d8-0ecbcaf3883c","type":"Column"},{"attributes":{"source":{"id":"ea27076b-91b4-4263-a7f3-a47c81f4db85","type":"ColumnDataSource"}},"id":"84d894c7-8fb8-403e-a380-7096c05178b5","type":"CDSView"},{"attributes":{"h":{"units":"data","value":1},"url":{"field":"url_full"},"w":{"units":"data","value":1},"x":{"value":0},"y":{"value":1}},"id":"fa6cc007-7fad-474b-89b4-75ebad93afc7","type":"ImageURL"},{"attributes":{"below":[{"id":"f718909d-429f-4bb5-9d5b-0e24b996c6de","type":"LinearAxis"}],"left":[{"id":"95b0e95c-fe9e-4346-af2d-65fe2ede33ad","type":"LinearAxis"}],"plot_height":500,"plot_width":700,"renderers":[{"id":"f718909d-429f-4bb5-9d5b-0e24b996c6de","type":"LinearAxis"},{"id":"040cf187-089e-443b-b4bf-957bdd466449","type":"Grid"},{"id":"95b0e95c-fe9e-4346-af2d-65fe2ede33ad","type":"LinearAxis"},{"id":"97b5affc-15f5-4c3e-9337-7b625feea70a","type":"Grid"},{"id":"b6c5c0c1-b516-4938-93b1-ee6c0e14b2f2","type":"GlyphRenderer"}],"title":{"id":"f9da30cf-b468-4653-b058-449dee7f252a","type":"Title"},"toolbar":{"id":"b68d47c0-6234-4778-8fb8-62315527abc8","type":"Toolbar"},"x_range":{"id":"94e36320-b474-4473-8c60-f2837873bf03","type":"Range1d"},"x_scale":{"id":"a6d90415-173b-4b2c-8952-de0940a33c18","type":"LinearScale"},"y_range":{"id":"de406c75-5d1c-4771-bbf8-44e72c20cff4","type":"Range1d"},"y_scale":{"id":"ace42690-e457-44cc-98fc-2f02a6893283","type":"LinearScale"}},"id":"865d6989-4ac3-4051-8e2f-dbc316dce8fc","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"7562a1bd-47fa-413e-ad72-7543db726ff6","type":"BasicTicker"},{"attributes":{},"id":"d2b67df1-bc57-4821-8a4a-28a5900e78e9","type":"Selection"},{"attributes":{"formatter":{"id":"db1d6627-2be6-4e51-b59b-5a93ca11cfc4","type":"BasicTickFormatter"},"plot":{"id":"865d6989-4ac3-4051-8e2f-dbc316dce8fc","subtype":"Figure","type":"Plot"},"ticker":{"id":"7562a1bd-47fa-413e-ad72-7543db726ff6","type":"BasicTicker"},"visible":false},"id":"95b0e95c-fe9e-4346-af2d-65fe2ede33ad","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"865d6989-4ac3-4051-8e2f-dbc316dce8fc","subtype":"Figure","type":"Plot"},"ticker":{"id":"7562a1bd-47fa-413e-ad72-7543db726ff6","type":"BasicTicker"},"visible":false},"id":"97b5affc-15f5-4c3e-9337-7b625feea70a","type":"Grid"},{"attributes":{},"id":"db1d6627-2be6-4e51-b59b-5a93ca11cfc4","type":"BasicTickFormatter"},{"attributes":{},"id":"a6d90415-173b-4b2c-8952-de0940a33c18","type":"LinearScale"},{"attributes":{},"id":"3113a5e6-efc5-4a3d-863d-e6eb8e3f7124","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"url_full":["/assets/academia/bokeh/figs/monomer/Al2O3/AL12O18_000.png"],"url_num":["000"]},"selected":{"id":"d2b67df1-bc57-4821-8a4a-28a5900e78e9","type":"Selection"},"selection_policy":{"id":"3113a5e6-efc5-4a3d-863d-e6eb8e3f7124","type":"UnionRenderers"}},"id":"ea27076b-91b4-4263-a7f3-a47c81f4db85","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"94e36320-b474-4473-8c60-f2837873bf03","type":"Range1d"},{"attributes":{"plot":null,"text":""},"id":"f9da30cf-b468-4653-b058-449dee7f252a","type":"Title"},{"attributes":{},"id":"b34e410d-a641-4873-b7d6-047d7d26ee16","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"b68d47c0-6234-4778-8fb8-62315527abc8","type":"Toolbar"},{"attributes":{"data_source":{"id":"ea27076b-91b4-4263-a7f3-a47c81f4db85","type":"ColumnDataSource"},"glyph":{"id":"fa6cc007-7fad-474b-89b4-75ebad93afc7","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d13b8a8b-d1c4-475d-b851-cadf5911df9b","type":"ImageURL"},"selection_glyph":null,"view":{"id":"84d894c7-8fb8-403e-a380-7096c05178b5","type":"CDSView"}},"id":"b6c5c0c1-b516-4938-93b1-ee6c0e14b2f2","type":"GlyphRenderer"},{"attributes":{},"id":"ace42690-e457-44cc-98fc-2f02a6893283","type":"LinearScale"},{"attributes":{"callback":null},"id":"de406c75-5d1c-4771-bbf8-44e72c20cff4","type":"Range1d"},{"attributes":{"plot":{"id":"865d6989-4ac3-4051-8e2f-dbc316dce8fc","subtype":"Figure","type":"Plot"},"ticker":{"id":"b34e410d-a641-4873-b7d6-047d7d26ee16","type":"BasicTicker"},"visible":false},"id":"040cf187-089e-443b-b4bf-957bdd466449","type":"Grid"},{"attributes":{"children":[{"id":"bc76410e-3e08-49b2-948e-b659c9ab24cf","type":"Slider"}]},"id":"b6f5fd78-1402-4ad7-a443-018be9b9f643","type":"WidgetBox"}],"root_ids":["ec208f80-fd67-479f-96d8-0ecbcaf3883c"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"661554ef-99b1-41db-bde5-aa70dbe3f489","roots":{"ec208f80-fd67-479f-96d8-0ecbcaf3883c":"63ce1038-ad80-4015-aaab-464bdff6805d"}}];
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
