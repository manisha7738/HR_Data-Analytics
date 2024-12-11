import { loadData, preprocessData } from './dataLoader.js';
import { calculateHRMetrics, departmentAnalysis, AttritionPredictor } from './analysis.js';
import { createAttritionChart, createSatisfactionChart } from './visualization.js';
import { createOutputDirectory, saveMetrics, exportAnalysis } from './utils.js';

async function main() {
  try {
    // Create output directory
    createOutputDirectory();
    
    // Load and preprocess data
    console.log("Loading and preprocessing data...");
    const df = await loadData('hr_data.csv');
    const processedDf = preprocessData(df);
    
    // Calculate HR metrics
    console.log("Calculating HR metrics...");
    const metrics = calculateHRMetrics(processedDf);
    saveMetrics(metrics, 'outputs/reports/hr_metrics.json');
    
    // Perform department analysis
    console.log("Analyzing department metrics...");
    const deptMetrics = departmentAnalysis(processedDf);
    exportAnalysis(deptMetrics, 'department_analysis');
    
    // Create visualizations
    console.log("Generating visualizations...");
    createAttritionChart(deptMetrics, 'outputs/visualizations');
    createSatisfactionChart(processedDf, 'outputs/visualizations');
    
    // Train attrition prediction model
    console.log("Training attrition prediction model...");
    const predictor = new AttritionPredictor();
    const features = processedDf.drop(['Attrition']);
    const target = processedDf['Attrition'];
    const modelMetrics = predictor.train(features, target);
    saveMetrics(modelMetrics, 'outputs/reports/model_metrics.json');
    
    console.log("Analysis completed successfully!");
  } catch (error) {
    console.error("Error during analysis:", error);
    process.exit(1);
  }
}

main();