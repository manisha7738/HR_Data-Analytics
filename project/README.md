# HR Analytics Project

A Node.js-based HR analytics project for analyzing employee data and predicting attrition.

## Project Structure

```
├── src/
│   ├── dataLoader.js     # Data loading and preprocessing
│   ├── analysis.js       # Core analysis and ML model
│   ├── visualization.js  # Data visualization using Vega
│   ├── utils.js         # Utility functions
│   └── index.js         # Main application entry
├── outputs/
│   ├── visualizations/  # Generated charts (SVG)
│   └── reports/        # Analysis results (JSON/CSV)
├── package.json        # Project dependencies
└── README.md          # Documentation
```

## Features

- Employee attrition prediction using Random Forest
- Department-wise analysis
- Salary distribution analysis
- Job satisfaction insights
- SVG chart generation
- Automated report generation

## Setup and Installation

1. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Place your HR data CSV file in the project directory
2. Run the analysis:
   ```bash
   npm start
   ```

## Data Requirements

The input CSV file should contain the following columns:
- Employee demographic information (Age, Gender, etc.)
- Job-related information (Department, JobRole, YearsAtCompany)
- Satisfaction metrics (JobSatisfaction, WorkLifeBalance)
- Compensation data (MonthlyIncome)
- Attrition status (target variable)

## Outputs

The analysis generates several outputs in the `outputs/` directory:

### Visualizations (SVG)
- Attrition rates by department
- Job satisfaction distribution

### Reports
- Key HR metrics (JSON)
- Department analysis (CSV)
- Model performance metrics (JSON)

## License

This project is licensed under the MIT License.