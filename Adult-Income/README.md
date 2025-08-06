# 👨‍💼 Adult Income – Income Classification Project

This project tackles the classic **Adult Census Income** classification problem. The goal is to predict whether a person earns more than \$50K annually based on demographic features using supervised learning.

## 📊 Dataset

- **Source:** [UCI Adult Dataset](https://archive.ics.uci.edu/ml/datasets/adult)
- **Target Variable:** Income (<=50K or >50K)
- **Features:** Age, education, occupation, marital status, hours-per-week, etc.

## 📦 Project Features

- Data preprocessing: handling missing values, encoding categorical variables
- Exploratory Data Analysis (EDA): distribution plots, correlation, etc.
- Feature selection and scaling
- Binary classification using:
  - Logistic Regression
  - Decision Trees
  - Random Forests
  - Support Vector Machines (SVM)
- Evaluation metrics: Accuracy, Precision, Recall, F1-Score, Confusion Matrix

## 🔧 Tech Stack

- Python
- Pandas, NumPy
- Scikit-learn
- Matplotlib, Seaborn
- Jupyter Notebook

## 🚀 How to Run

1. Clone the repo:
   ```bash
   git clone https://github.com/Mehdix17/Adult-Income.git
   cd Adult-Income
   
2. Install dependencies:
   ```bash
   pip install -r requirements.txt

3. Open the notebook:
   ```bash
   jupyter notebook adult_income.ipynb

## 📈 Evaluation
Classification report (Precision, Recall, F1)

Confusion Matrix

ROC Curve (optional)

## 📚 Learning Goals
Practice binary classification

Explore preprocessing and encoding strategies

Improve model generalization through evaluation and tuning
