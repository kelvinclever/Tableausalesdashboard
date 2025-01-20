import { useEffect, useRef } from "react";
import "./Viz.css";
const Viz = () => {
  const vizContainerRef = useRef(null);

  useEffect(() => {
    const initViz = () => {
      const containerDiv = vizContainerRef.current;
      const url =
        "https://dub01.online.tableau.com/t/katumbik-24b6d83d3b/views/SalesDashboards/SalesDashboard";

      if (window.tableau) {
        new window.tableau.Viz(containerDiv, url);
      } else {
        console.error("Tableau library not loaded.");
      }
    };

    initViz();
  }, []);

  return (
    <div className="Viz">
      <div
        ref={vizContainerRef}
        id="vizContainer">
<tableau-viz id='tableau-viz' src='https://dub01.online.tableau.com/t/katumbik-24b6d83d3b/views/SalesDashboards/SalesDashboard' width='1200' height='840' hide-tabs toolbar='bottom' ></tableau-viz>
      </div>
    </div>
  );
};

export default Viz;
