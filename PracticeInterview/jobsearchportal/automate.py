import requests
from bs4 import BeautifulSoup
import pandas as pd
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

# Function to scrape list of companies

def get_companies_list(location):
    search_url = f"https://www.google.com/search?q=IT+companies+in+{location}"
    headers = {"User-Agent": "Mozilla/5.0"}
    response = requests.get(search_url, headers=headers)
    soup = BeautifulSoup(response.text, 'html.parser')

    companies = []
    for result in soup.find_all('div', class_='BNeawe vvjwJb AP7Wnd'):
        companies.append(result.get_text())
    
    return companies

# Function to scrape jobs from a single company's career page
def scrape_jobs(career_page_url):
    headers = {"User-Agent": "Mozilla/5.0"}
    response = requests.get(career_page_url, headers=headers)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    jobs = []
    for job in soup.find_all('div', class_='job-listing'):  # Modify based on actual HTML structure
        title = job.find('h2').get_text() if job.find('h2') else "N/A"
        location = job.find('span', class_='location').get_text() if job.find('span', class_='location') else "N/A"
        link = job.find('a')['href'] if job.find('a') else "N/A"
        jobs.append({"title": title, "location": location, "link": link})
    
    return jobs

# Main function to automate job search
def automate_job_search(location, job_keywords):
    # Get the list of IT companies in the specified location
    companies = get_companies_list(location)

    # Set up Selenium WebDriver
    driver = webdriver.Chrome()  # Ensure ChromeDriver is installed
    
    all_jobs = []
    for company in companies:
        try:
            driver.get(f"https://www.google.com/search?q={company}+careers")
            time.sleep(2)  # Allow the page to load

            # Find and click on the career page link (modify based on actual search result structure)
            career_link = driver.find_element(By.PARTIAL_LINK_TEXT, 'Career')
            career_link.click()
            time.sleep(3)

            # Scrape job postings from the career page
            jobs = scrape_jobs(driver.current_url)
            for job in jobs:
                if any(keyword.lower() in job['title'].lower() for keyword in job_keywords):
                    all_jobs.append(job)
        except Exception as e:
            print(f"Error processing {company}: {e}")
            continue

    # Close the WebDriver
    driver.quit()

    # Save the jobs to a CSV file
    df = pd.DataFrame(all_jobs)
    df.to_csv('job_listings.csv', index=False)
    print("Job search completed. Results saved to 'job_listings.csv'")

# Example usage
if __name__ == "__main__":
    location = "Pune"
    job_keywords = ["React Developer", "Software Developer", "Frontend Developer"]
    automate_job_search(location, job_keywords)
