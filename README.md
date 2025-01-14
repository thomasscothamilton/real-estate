# Real Estate Data Processing

This repository contains scripts for processing real estate data, including parsing PDF files, adding rows to a dataset, and uploading data to Google BigQuery.

## Prerequisites

- Python 3.6+
- `pip` package manager
- Google Cloud SDK

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/thamilton-containerly/real-estate-data-processing.git
   cd real-estate-data-processing
   ```

2. Install the required Python packages:
   ```sh
   pip install -r requirements.txt
   ```

## Scripts

### 1. `real_estate/bigquery.py`

This script parses a PDF file and extracts its text.

#### Usage

1. Install the `PyMuPDF` library:
   ```sh
   pip install PyMuPDF
   ```

2. Run the script:
   ```sh
   python real_estate/bigquery.py
   ```

### 2. `real_estate/add_row.py`

This script adds a new row to a dataset.

#### Usage

1. Ensure you have a dataset loaded in a DataFrame (`df`).
2. Run the script:
   ```sh
   python real_estate/add_row.py
   ```

### 3. `real_estate/add_column.py`

This script loads an Excel file, processes the data, and uploads it to Google BigQuery.

#### Usage

1. Set up your Google Cloud project and authenticate using the Google Cloud SDK.
2. Update the script with your project ID, dataset ID, and table name.
3. Run the script:
   ```sh
   python real_estate/add_column.py
   ```

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.# real-estate
