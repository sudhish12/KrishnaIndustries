USE u534462265_crm;
CREATE TABLE following_leads (
  follow_id INT AUTO_INCREMENT PRIMARY KEY, 
  emp_id INT, 
  leads_id BIGINT, 
  leads_name VARCHAR(50), 
  leads_mobile VARCHAR(25), 
  leads_email VARCHAR(100), 
  leads_company VARCHAR(1000), 
  leads_address VARCHAR(2500), 
  leads_state VARCHAR(50), 
  leads_city VARCHAR(100), 
  product_name VARCHAR(1000), 
  leads_query MEDIUMTEXT, 
  remember VARCHAR(10), 
  reminder_date DATE, 
  created_at DATETIME, 
  updated_at DATETIME
);
CREATE TABLE customers (
    cust_id INT AUTO_INCREMENT PRIMARY KEY,
    emp_id INT,
    cust_name VARCHAR(255),
    cust_mobile VARCHAR(15),
    cust_email VARCHAR(255),
    cust_company VARCHAR(255),
    cust_address TEXT,
    cust_state VARCHAR(100),
    cust_city VARCHAR(100),
    created_at DATETIME,
    updated_at DATETIME
);


