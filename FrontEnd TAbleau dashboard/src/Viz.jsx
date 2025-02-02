import { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./Viz.css";

const Viz = () => {
  const [capturing, setCapturing] = useState(false);
  const [screenshot, setScreenshot] = useState(null);
  const [result, setResult] = useState("");
  const [image, setImage] = useState(null);
  const captureRef = useRef(null);

  useEffect(() => {
    const initViz = () => {
      const scriptElement = document.createElement("script");
      scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
      scriptElement.type = "text/javascript";

      const vizElement = document.getElementById("vizContainer")?.getElementsByTagName("object")[0];
      if (vizElement) {
        vizElement.parentNode.insertBefore(scriptElement, vizElement);
      }
    };

    initViz();
  }, []);

  const handleCapture = async () => {
    setCapturing(true);
    try {
      const response = await axios.post("http://localhost:3001/capture");

      if (response.data?.imageUrl) {
        setScreenshot(response.data.imageUrl);
        setImage(response.data.imageUrl);
        await analyzeImage(response.data.imageUrl);
      } else {
        console.error("Failed to capture screenshot.");
      }
    } catch (error) {
      console.error("Error capturing screenshot:", error);
    }
    setCapturing(false);
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const imageData = reader.result;
      setImage(imageData);
      await analyzeImage(imageData);
    };
    reader.readAsDataURL(file);
  };

  const analyzeImage = async (imageData) => {
    try {
      const response = await axios.post("http://localhost:3001/generate", {
        image: imageData,
      });

      setResult(response.data.response);
    } catch (error) {
      console.error("Error analyzing image:", error);
      setResult("Failed to analyze the image.");
    }
  };

  return (
    <div className="viz__container">
      {/* Tableau Visualization */}
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
        <object className="tableauViz" style={{ display: "none" }} ref={captureRef}>
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
          <param name="embed_code_version" value="3" />
          <param name="path" value="shared/TMKNW6QJB" />
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
          <param name="language" value="en-GB" />
        </object>
      </div>
      <div className="capture__container">
        {/* Capture & Upload Section */}
        <div className="actions">
          <button className="capture-button" onClick={handleCapture} disabled={capturing}>
            {capturing ? "Capturing..." : "Capture Screenshot & Analyze"}
          </button>

          <input
            type="file"
            accept="image/*"
            className="upload-input"
            onChange={handleFileUpload}
          />
        </div>

        {/* Display Screenshot & AI Analysis */}
        {image && (
          <div className="image-container">
            <h3>Captured or Uploaded Image</h3>
            <img src={image} alt="Captured or Uploaded" className="preview-image" />
          </div>
        )}

        {result && (
          <div className="ai-analysis">
            <h3>AI Description</h3>
            {result.split("*").map((part, index) => (
              <p key={index}>{part.trim()}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Viz;
