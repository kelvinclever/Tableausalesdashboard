import { useEffect } from "react";
import "./Viz.css";

const Viz = () => {
  const initViz = () => {
    const scriptElement = document.createElement("script");
    scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    scriptElement.type = "text/javascript";

    const vizElement = document.getElementById("vizContainer").getElementsByTagName("object")[0];
    if (vizElement) {
      vizElement.parentNode.insertBefore(scriptElement, vizElement);
    }
  };

  useEffect(() => {
    
    initViz();
  }, []);

  return (
    <div  className="viz__container">
      <div className="tableauPlaceholder" id="vizContainer">
        <noscript>
          <a href="#">
            <img
              alt="Churn Analysis"
              src="https://public.tableau.com/static/images/TM/TMKNW6QJB/1_rss.png"
              style={{ border: "none" }}
            />
          </a>
        </noscript>
        <object className="tableauViz" style={{ display: "none" }}>
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
          <param name="embed_code_version" value="3" />
          <param name="path" value="shared/TMKNW6QJB" />
          <param name="toolbar" value="yes" />
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
          <param name="language" value="en-GB" />
        </object>
      </div>
    </div>
  );
};

export default Viz;
