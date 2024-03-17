
# Acceptance Criteria

## Feature: Feature Mesh Home page
As a user, I want to browse the Feature Mesh Web page

### Scenario: User is redirected to the landing page and sees the expected elements
	Given the user is redirected to the landing page
	When the landing page loads successfully
	Then the user should see the Title 
	And the user should see the Welcome message
	And the user should see the Login button
	And the user should see the Publish button
	And the user should see the Search button
	And the user should see the Analytics

---

## Feature: Login 
As a data scientist, I want to login to the website

### Scenario: User navigates to the login page
	Given the user is on the login page
	Then the user should see the login form
	And the user should see input fields for username and password
	And the user should see a login button

### Scenario: User enters valid credentials
	Given the user is on the login page
	When the user enters valid username and password
	And clicks the login button
	Then the user should be redirected to the dashboard(ms auth)
	And the user should see a welcome message

### Scenario: User enters invalid username
	Given the user is on the login page
	When the user enters an invalid username
	And enters a valid password
	And clicks the login button
	Then the user should see an error message indicating invalid username

### Scenario: User enters invalid password
	Given the user is on the login page
	When the user enters a valid username
	And enters an invalid password
	And clicks the login button
	Then the user should see an error message indicating invalid password

### Scenario: User enters no credentials
	Given the user is on the login page
	When the user clicks the login button without entering any credentials
	Then the user should see an error message indicating both username and password are required

---

## Feature: Publish 
As a data scientist, I want to publish an entity to the Feature Mesh

### Scenario: User navigates to the entity page
	Given the user is on the entity page
	Then the user should see the option to select an entity or feature
	And the user should see a form to publish an entity
	And the form should have fields for owner name, entity name, entity id, entity description
	And the form should have a publish button

### Scenario: User fills out the entity form correctly
	Given the user is on the entity page
	When the user fills out the form with valid owner name, entity name, entity id, and entity description
	And clicks the publish button
	Then the entity should be successfully published
	And the user should receive a confirmation message

### Scenario: User fills out the entity form with missing fields
	Given the user is on the entity page
	When the user fills out the form without providing all required fields
	And clicks the publish button
	Then the user should see error messages indicating missing fields
	And the entity should not be published

### Scenario: User fills out the entity form with invalid data
	Given the user is on the entity page
	When the user fills out the form with invalid data (e.g., invalid entity id format)
	And clicks the publish button
	Then the user should see error messages indicating invalid data
	And the entity should not be published

### Scenario: User cancels publishing an entity
	Given the user is on the entity page
	When the user decides not to publish the entity
	And clicks on the cancel button
	Then the user should be redirected back to the previous page
	And the entity should not be published

---

## Feature: Feature Publish

A data scientist, I want to publish a Feature manually to the Feature Mesh

### Scenario: User Publishes successfully
	Given the user is on the feature page and selects 'Entries'
	When the user fills out the form with valid owner name, feature name, datatype, associated entity id, feature description, and feature details
	And clicks the publish button
	Then the feature should be successfully published
	And the user should receive a confirmation message

### Scenario: User fills out the entries form with missing fields
	Given the user is on the feature page and selects 'Entries'
	When the user fills out the form without providing all required fields
	And clicks the publish button
	Then the user should see error messages indicating missing fields
	And the feature should not be published

### Scenario: User fills out the entries form with invalid data
	Given the user is on the feature page and selects 'Entries'
	When the user fills out the form with invalid data (e.g., invalid entity ID format/ non-existing entity ID)
	And clicks the publish button
	Then the user should see error messages indicating invalid data
	And the feature should not be published

 As a data scientist, I want to publish a Feature through File Upload to the Feature Mesh

### Scenario: User fills out the file upload form correctly
	Given the user is on the feature page and selects 'File Upload'
	When the user fills out the form with valid owner name, feature name, and entity id
	And uploads a valid xls or csv file
	And clicks the publish button
	Then the feature should be successfully published
	And the user should receive a confirmation message

### Scenario: User fills out the file upload form with missing fields
	Given the user is on the feature page and selects 'File Upload'
	When the user fills out the form without providing all required fields
	And uploads a valid xlsx or csv file
	And clicks the publish button
	Then the user should see error messages indicating missing fields
	And the feature should not be published

### Scenario: User uploads an invalid file format
	Given the user is on the feature page and selects 'File Upload'
	When the user uploads a file with an invalid format
	And fills out the form with valid owner name, feature name, and entity id
	And clicks the publish button
	Then the user should see an error message indicating invalid file format
	And the feature should not be published

## Feature: Feature Search
### As a data scientist, I want to Search for a particular Feature

### Scenario: User searches for a keyword
    Given the user is on the search page
    When the user enters a keyword in the search textbox
    And clicks the search button
    Then the user should see a list of entities and features related to the keyword
 
### Scenario: User selects an entity from search results
    Given the user is on the Search page
    When the user clicks on an entity from the search results
    Then the user should be redirected to the entity feature selection page
 
### Scenario: User selects features from Feature Set
    Given the user has selected the entity 
    When the user selects desired features
    And selects a file format from the dropdown
    And clicks the download button
    Then the selected features should be downloaded in the chosen file format
 
### Scenario: User selects features from search results
    Given the user is on the Search page
    When the user clicks on a feature from the search results
    Then the user should be redirected to the feature download page
    
 
### Scenario: User selects file format and downloads feature
    Given the user is on the feature download page
    When the user selects a file format from the dropdown
    And clicks the download button
    Then the selected feature should be downloaded in the chosen file format
    And a success message should be displayed


