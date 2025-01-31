# SmartViz

## Overview
SmartViz is a powerful web application that integrates **Tableau** dashboards with AI-driven analysis. Built using **React**, **Node.js**, and **Puppeteer**, it allows users to embed Tableau visualizations, capture screenshots, and analyze them using AI to generate insightful descriptions.

## Features
- **Embed Tableau Dashboards**: Seamlessly integrate Tableau visualizations into a React application.
- **Capture Screenshots**: Take snapshots of embedded dashboards using Puppeteer from the backend.
- **AI-Powered Insights**: Send captured images to an AI model for automatic data interpretation.
- **User-Friendly Interface**: Simple and intuitive UI for dashboard interaction and analysis.

## Tech Stack
### Frontend
- React.js
- Tableau JavaScript API
- HTML, CSS (Tailwind/Custom styling)

### Backend
- Node.js
- Express.js
- Puppeteer (for screenshot capture)
- Axios (for API communication)

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- Node.js (v16 or later)
- npm or yarn

### Clone the Repository
```bash
git clone https://github.com/yourusername/SmartViz.git
cd SmartViz
```

### Backend Setup
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React application:
   ```bash
   npm start
   ```

The app will be available at `http://localhost:3000`

## Usage
1. Embed your Tableau dashboard using the Tableau JavaScript API.
2. Click the **Capture & Analyze** button to take a screenshot.
3. The image is sent to the backend, processed, and analyzed using AI.
4. The AI-generated insights will be displayed alongside the dashboard.

## API Endpoints
| Method | Endpoint | Description |
|--------|------------|-------------|
| POST | `/api/analyze-dashboard` | Captures a screenshot of the embedded Tableau dashboard and sends it for AI analysis |

## Challenges & Learnings
- Handling **iframe restrictions** required moving the screenshot functionality to the backend using **Puppeteer**.
- Synchronizing Tableau API with React lifecycle was key to ensuring smooth integration.
- Optimizing AI analysis for different visualization types improved the overall user experience.

## Future Enhancements
- **Support for multiple AI models** to provide diverse analytical perspectives.
- **Enhanced UI components** for better interactivity and customization.
- **Cloud storage integration** to save and revisit analyzed dashboards.

## Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---
🚀 **SmartViz - Making Data Speak with AI** 🚀

