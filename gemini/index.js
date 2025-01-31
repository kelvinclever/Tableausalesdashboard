import "dotenv/config";
import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" })); // Increased payload limit
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Initialize Google Generative AI
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

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

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
