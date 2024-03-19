
# Acceptance Criteria

## Feature: Feature Mesh Home page
As a user, I want to browse the Feature Mesh Web page

### Scenario: User is redirected to the landing page and sees the expected elements
	Given the user is redirected to the landing page
	When the landing page loads successfully
	Then the user should see the Title 
	And the user should see the Login button
	And the user should see the Analytics

---

## Feature: Login 
As a data scientist, I want to login to the website

### Scenario: User navigates to the Home page
	Given the user is on the Home page
    And clicks on the login button
	Then the user should be redirected to Microsoft Authentication page
	And the user should see input field for user ID 
	

### Scenario: User enters valid credentials
	Given the user is on the login page
	When the user enters valid userID and password
	And clicks on the sign-in button
	Then the user should be redirected to the Home page
	And the user should see a welcome-user message

### Scenario: User enters invalid username
	Given the user is on the login page
	When the user enters an invalid credentials
	And clicks the login button
	Then the user should see an error message indicating invalid credentials

### Scenario: User enters no credentials
	Given the user is on the login page
	When the user clicks the sign-in button without entering any credentials
	Then the user should see an error message indicating empty fields

### Scenario: Login successful
    Given the user logged in successfully
    When the user is on the home page
    Then the user should see the NavBar
    And the user should see the Analytics Matrix 

---

## Feature: Publish Entity
As a data scientist, I want to publish an entity to the Feature Mesh

### Scenario: User navigates to the entity page
	Given the user is logged in 
    When the user clicks on the publish button
	Then the user should see a form to publish an entity
	And the form should have fields for owner name, entity name, entity id, entity description
	And the form should have a publish button

### Scenario: User fills out the entity form correctly
	Given the user is on the entity page
	When the user fills out the form with valid owner name, entity name, entity id, and entity description
	And clicks the publish button
	Then the entity should be successfully published
	And the user should receive a success message

### Scenario: User fills out the entity form with missing fields
	Given the user is on the entity page
	When the user fills out the form without providing any required field
	And clicks the publish button
	Then the user should see an error message
	And the entity should not be published

---
## Feature: Publish Feature
A data scientist, I want to publish a feature to the Feature Mesh

### Scenario: User navigates to publish feature page 
    Given the user is on the feature page
    When the user enters a valid entity ID
    And the user clicks on the set button
    Then the user should see a form to enter feature details

### Scenario: User publishes a feature successfully
    Given the user on the feature page
    when the user fills valid details in the feature details form
    And clicks on the add button
    And clicks on the submit button
    Then the feature should be published successfully

 ### Scenario: User submits incomplete form
    Given the user on the feature page
    when the user leaves a field(s) in the feature details form
    And clicks on the add button
    Then the feature does not get added
    And throws an empty field message

### Scenario: Publish feature failed
    Given the user on the feature page
    when the user fills invalid details in the feature details form
    And clicks on the add button
    And clicks on the submit button
    Then the feature does not get published
    And throws an error message
 
---
## Feature: Publish Values

A data scientist, I want to publish a value feature manually to the Feature Mesh

### Scenario: User Publishes successfully
	Given the user is on the Values page 
	When the user clicks on manual entry option 
    ........
	And clicks the publish button
	Then the feature should be published successfully 
	And the user should receive a confirmation message


### Scenario: User fills out the entries form with invalid data format
	Given the user is on the Values page 
	When the user clicks on manual entry option
    .....
	When the user fills out the form with invalid data (e.g., invalid entity ID format/ non-existing entity ID)
	And clicks the publish button
	Then the user should see error messages indicating invalid data
	And the feature should not be published

 As a data scientist, I want to publish a value feature through File Upload to the Feature Mesh

### Scenario: User fills out the file upload form correctly
	Given the user is on the feature page and selects 'Upload'
	When the user fills out the form with valid owner name, and entity name
	And uploads a valid xlsx or csv file
	And clicks the submit button
	Then the feature should be successfully published
	And the user should receive a confirmation message

### Scenario: User fills out the file upload form with invalid fields
	Given the user is on the feature page and selects 'Upload'
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



## Feature: Search Feature
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
    Then the selected features should be displayed
 
### Scenario: User selects features from search results
    Given the user is on the Search page
    When the user clicks on a feature from the search results
    Then the user should be redirected to the feature page
    
