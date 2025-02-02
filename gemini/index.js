import "dotenv/config";
import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";
import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" })); // Increased payload limit
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Initialize Google Generative AI
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

// Create the screenshots directory if it doesn't exist
const screenshotsDir = path.join(__dirname, 'screenshots');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir);
}

// Function to generate AI response from image
async function analyzeImage(imageData) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent([
      { inlineData: { data: imageData.split(",")[1], mimeType: "image/png" } },
      "Describe this Tableau dashboard in detail."
    ]);

    return result.response.text();
  } catch (error) {
    console.error("AI Analysis Error:", error);
    return "Error analyzing the image.";
  }
}

// Route to handle image analysis
app.post("/generate", async (req, res) => {
  try {
    const { image } = req.body;

    if (!image) {
      return res.status(400).json({ error: "No image provided" });
    }

    const description = await analyzeImage(image);
    res.json({ response: description });
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to capture Tableau visualization screenshot
app.post("/capture", async (req, res) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  // URL of the Tableau Visualization
  const tableauUrl = "https://public.tableau.com/views/ChurnAnalysis/ChurnAnalysisDashboard";
  
  // Navigate to the Tableau visualization page
  await page.goto(tableauUrl, { waitUntil: "networkidle2" });

  // Wait for the visualization to load (adjust the selector as needed)
  await page.waitForSelector('iframe');  // Make sure Tableau viz is fully loaded

  const timestamp = Date.now();
  const screenshotPath = path.join(screenshotsDir, `tableau_screenshot_${timestamp}.png`);

  // Capture the screenshot of the Tableau visualization
  await page.screenshot({ path: screenshotPath, fullPage: true });

  await browser.close();

  res.json({
    message: "Screenshot captured successfully",
    imageUrl: `http://localhost:${PORT}/screenshots/tableau_screenshot_${timestamp}.png`,
    path: screenshotPath,
  });
});

// Serve the 'screenshots' folder statically
app.use("/screenshots", express.static(screenshotsDir));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
