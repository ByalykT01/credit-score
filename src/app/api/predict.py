import sys
import json
import pandas as pd
import joblib

def main():
    try:
        # Load input data from stdin
        input_data = json.load(sys.stdin)
        # Convert input data to DataFrame
        df = pd.DataFrame(input_data)
        # Drop the 'userId' column if it exists
        df = df.drop(columns=["userId"], errors="ignore")
        # Specify the desired column order
        desired_order = [
            'no_of_dependents', 'self_employed', 'income_annum',
            'loan_amount', 'loan_term', 'cibil_score',
            'residential_assets_value', 'commercial_assets_value',
            'luxury_assets_value', 'bank_asset_value', 'graduated'
        ]

        # Ensure the columns in the DataFrame are in the desired order
        # Check if the columns are present in the DataFrame
        missing_cols = [col for col in desired_order if col not in df.columns]
        if missing_cols:
            raise ValueError(f"Missing columns in DataFrame: {missing_cols}")

        # Reorder columns
        df = df[desired_order]
        # Load the model
        model = joblib.load('models/loan_predictions.joblib')
        # Predict the loan status
        loan_status = model.predict(df)
        # Output the predictions
        print(json.dumps(loan_status.tolist()))

    except Exception as e:
        print("Error occurred:", str(e), file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()
