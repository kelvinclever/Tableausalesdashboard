import React from "react";
import "./AboutChart.css";

const Summary= () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>About the Churn Analysis Dashboard</h1>
        <p>
          Welcome to the **Churn Analysis Dashboard**, a powerful and interactive tool designed to provide valuable insights into customer retention trends. This dashboard leverages data visualization to help businesses understand their customer churn rates, identify key reasons for churn, and develop actionable strategies for improving customer loyalty.
        </p>
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Overview Tab:</strong> Provides a summary of key metrics, including total customers, churned customers, and churn rate.
          </li>
          <li>
            <strong>Age & Brackets Groups:</strong> Explore churn patterns by age demographics and customer groups.
          </li>
          <li>
            <strong>Data & International Plan:</strong> Analyze the impact of data usage and international plans on customer retention.
          </li>
          <li>
            <strong>Payment Method & Contract Type:</strong> Gain insights into churn based on payment methods and contract types.
          </li>
        </ul>
        <h2>Purpose of the Dashboard</h2>
        <p>
          The primary goal of this dashboard is to empower decision-makers with data-driven insights into customer behavior. By visualizing churn data, businesses can:
        </p>
        <ul>
          <li>Identify key factors leading to customer attrition.</li>
          <li>Understand regional trends through geospatial data.</li>
          <li>Evaluate the impact of contracts, payment methods, and demographics.</li>
          <li>Optimize customer retention strategies and reduce churn rates.</li>
        </ul>
        <h2>How to Use</h2>
        <p>
          The dashboard is highly interactive and user-friendly. Navigate through the tabs to explore different dimensions of churn. Utilize filters to drill down into specific data points or focus on particular metrics. Hover over visualizations for detailed insights and export reports using the toolbar options.
        </p>
        <h2>About the Developer</h2>
        <p>
          This dashboard was designed and developed by <strong>Kelvin Nzioka</strong>, a passionate software engineer and data analyst. Combining expertise in data visualization and software development, Kelvin aims to create tools that simplify decision-making and deliver actionable insights.
        </p>
        <p>
          If you have questions, suggestions, or feedback about the dashboard, feel free to reach out. Thank you for using the Churn Analysis Dashboard!
        </p>
      </div>
    </div>
  );
};

export default Summary;
