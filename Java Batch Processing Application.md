Coding Competition Requirement: Java Batch Processing Application
Project Title:
High-Performance Java Batch Processing for Large-Scale Data Handling

Objective:
Develop a Java batch processing application capable of handling large-scale data processing efficiently. The application should process input data from a given source (CSV, database, API, etc.), transform it, and store the results in an output destination (file system, database, etc.).

Problem Statement:
A financial institution needs a batch job to process millions of transactions every night. The transactions come in CSV format and must be validated, enriched, and stored in a database for reporting. The batch process must be scalable, fault-tolerant, and optimized to handle high volumes of data efficiently.

Competition Requirements
1. Functional Requirements
The batch job should read input data from a CSV file.
Validate transactions (e.g., required fields, correct formats, positive amounts).
Enrich transactions (e.g., fetching customer data from a secondary data source).
Process transactions (e.g., calculate fees, apply business rules).
Write processed transactions to an output data store (database or another CSV file).
Generate a summary report after processing (number of successful and failed transactions).
2. Non-Functional Requirements
The application should be scalable and handle at least 5 million records in under 30 minutes.
Must support parallel processing for performance optimization.
Implement error handling and logging (failed records should be logged separately).
The system should be configurable (e.g., input/output file paths, database settings).
The solution should be well-documented with clear README instructions.
3. Technical Constraints
Must be developed in Java 17+.
Use Spring Batch or plain Java concurrency (no external paid frameworks).
Must use JUnit for testing (at least 80% test coverage).
Database options: PostgreSQL or MySQL (if used).
CSV parsing library: OpenCSV or Apache Commons CSV.
Must run on a Linux-based server and be deployable via Docker.
Evaluation Criteria
Functionality (40%)
Correctness of input processing, validation, and transformation.
Successful generation of reports and storage of processed data.
Performance (20%)
Efficient processing of large datasets.
Use of multithreading or parallel execution.
Code Quality (20%)
Clean, maintainable, and well-structured code.
Proper use of design patterns (Factory, Strategy, etc.).
Error Handling & Logging (10%)
Robust error handling without crashes.
Proper logging and reporting of failures.
Documentation & Usability (10%)
Well-written README with setup instructions.
Clear explanations of design choices.
Bonus Challenges (Optional, Extra Points)
Implement a REST API trigger to start the batch job dynamically.
Add retry logic for failed transactions.
Implement Kafka for asynchronous processing.
Provide a real-time dashboard (e.g., using Spring Boot & WebSockets).
Submission Guidelines
Provide a GitHub repository link with a clear README.
Include a Dockerfile for easy deployment.
Submit a short demo video (optional but recommended).
Would you like me to adjust the complexity or scope?

Input Data Source for Competitors
1. Input Format:
Competitors will receive a CSV file containing millions of financial transactions. The file will be structured as follows:

2. File Name:
transactions_input.csv

3. CSV Structure & Example
Column Definitions:
Column Name	Data Type	Description
transaction_id	String (UUID)	Unique identifier for the transaction.
customer_id	String	Unique ID of the customer associated with the transaction.
amount	Decimal (10,2)	The transaction amount (must be positive).
currency	String (3-letter ISO 4217)	Transaction currency (e.g., USD, EUR).
transaction_date	Date (YYYY-MM-DD HH:mm:ss)	Timestamp of the transaction.
status	String (ENUM)	Status of the transaction (PENDING, COMPLETED, FAILED).
payment_method	String	Payment method used (CREDIT_CARD, BANK_TRANSFER, PAYPAL).
merchant_id	String	Unique identifier of the merchant receiving the payment.
Sample Data (CSV Format):
lua
Copia
Modifica
transaction_id,customer_id,amount,currency,transaction_date,status,payment_method,merchant_id
"e123fabc-4d5e-678f-gh90-123456789abc","CUST001",150.75,"USD","2024-01-01 14:23:45","PENDING","CREDIT_CARD","MERCH100"
"f234abcd-5e6f-789g-hi01-234567890bcd","CUST002",50.00,"EUR","2024-01-02 10:11:30","COMPLETED","BANK_TRANSFER","MERCH200"
"g345bcde-6f7g-890h-ij12-345678901cde","CUST003",-25.00,"GBP","2024-01-03 18:45:15","FAILED","PAYPAL","MERCH300"
"h456cdef-7g8h-901i-jk23-456789012def","CUST004",2000.00,"USD","2024-01-04 07:30:00","PENDING","CREDIT_CARD","MERCH400"
4. Additional Data for Enrichment (Optional)
To simulate data enrichment, competitors may receive an additional customers.csv file containing customer details.

File Name:
customers.csv

Column Definitions:
Column Name	Data Type	Description
customer_id	String	Unique customer identifier.
customer_name	String	Full name of the customer.
email	String	Email address.
phone	String	Contact number.
country	String	Country of residence.
Sample Data:
perl
Copia
Modifica
customer_id,customer_name,email,phone,country
"CUST001","John Doe","john.doe@email.com","+123456789","USA"
"CUST002","Alice Smith","alice.smith@email.com","+987654321","Germany"
"CUST003","Bob Johnson","bob.johnson@email.com","+1122334455","UK"
"CUST004","Emma Brown","emma.brown@email.com","+5566778899","Canada"
5. Input Data Size
Small Dataset: 10,000 records (for testing).
Full Dataset: 5,000,000+ records (for performance benchmarking).
6. Key Considerations for Competitors
Validation:
Ensure amount is positive.
Verify transaction_date is in correct format.
Check if customer_id exists in customers.csv (if used).
Processing Rules:
Convert amount if needed (optional currency conversion).
Mark PENDING transactions as COMPLETED after processing.
Performance Optimization:
Implement parallel processing for large datasets.
Handle errors efficiently (log invalid records).
Would you like me to provide sample files for download or adjust the dataset complexity?


Here are two sample CSV files for the competition:

transactions_input.csv (Sample transaction records)
customers.csv (Sample customer details for enrichment)
