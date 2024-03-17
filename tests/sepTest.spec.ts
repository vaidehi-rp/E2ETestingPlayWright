import { test, expect } from '@playwright/test';

// Annotate the entire file as serial.
test.describe.serial('Feature Mesh Tests', () => {
 let page;

 test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
 });
 test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
   });

 test.afterAll(async () => {
    await page.close();
 });
 

 test('sign in', async () => {
    console.log('E2E test log of feature mesh website\n');
    await page.goto('https://red-island-097e05210.4.azurestaticapps.net/');
    await expect(page).toHaveTitle('React App');
    console.log('Home page loaded successfully');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    console.log('Login Button click - successful');
    await expect(page).toHaveTitle('Sign in to your account');
    console.log('Redirection to Microsoft authenticator - successful');
    await page.getByLabel('Enter your email, phone, or').fill('vaidehi-r.patel.ext@zeiss.com');
    console.log('Credentials entry - successful');
    await page.getByLabel('Enter your email, phone, or').press('Enter');
    await page.waitForSelector('text=Welcome');
    console.log('SignIn - successful');
 });

 test('NavBar visibility', async ({ page }) => {
    console.log('\nTesting NavBar');
    await page.getByText('FeatureMeshHomePublishSearch');
    await page.waitForTimeout(3000);
    await expect(page.getByText('Publish')).toBeVisible();
    console.log('Publish dropdown - visible');
    await expect(page.getByRole('link', { name: 'Search' })).toBeVisible();
    console.log('Search link - visible');
    await expect(page.getByText('Welcome')).toBeVisible();
    console.log('Welcome user message - Displayed');
    await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();
    console.log('Logout button - visible');
   });

   test('Number matrix visibility', async ({ page }) => {
    console.log('\nTesting number matrix!!');
    await expect(page.locator('.Analytics_rectangle29__-8ZNb')).toBeVisible();
    await expect(page.locator('.Analytics_line3__8OOUm')).toBeVisible();
    await expect(page.getByText('Rows of Entries')).toBeVisible();
    await expect(page.getByText('Data Scientists on our')).toBeVisible();
    await expect(page.getByText('Feature Sets')).toBeVisible();
    console.log('Number matrix - visible');
   });

   test('Navigation to Publish page', async ({ page }) => {
    await page.getByRole('link', { name: 'Publish' }).click();
    await expect(page).toHaveURL('https://red-island-097e05210.4.azurestaticapps.net/publish');
    console.log('\nNavigation to Publish page - successful');
    await expect(page.getByRole('link', { name: 'Publish' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Search' })).toBeVisible();
    await expect(page.getByText('Welcome')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();
    console.log('NavBar visibility test - successful');
   });

   test('Entity button functionality', async ({ page }) => {
    console.log('\nTesting Entity button');
    await expect(page.locator('div').filter({ hasText: /^EntityFeatureValues$/ })).toBeVisible();
    await expect(page.getByText('Entity', { exact: true })).toBeVisible();
    await expect(page.getByText('Enter the Entity DetailsOwner')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Enter the Entity Details' })).toBeVisible();
    console.log('Entity entry heading - visible');
    await expect(page.locator('label').filter({ hasText: 'Owner Name:' })).toBeVisible();
    await expect(page.getByText('Owner Name:')).toHaveValue('vaidehi-r');
    console.log('owner name - visible');
    await expect(page.locator('label').filter({ hasText: 'Entity Name:' })).toBeVisible();
    await page.getByPlaceholder('Enter the Entity Name').click();
    await page.getByPlaceholder('Enter the Entity Name').fill('YourMom');
    console.log('Entering entity name - successful');
    await expect(page.locator('label').filter({ hasText: 'Entity Id:' })).toBeVisible();
    await page.getByPlaceholder('Enter the Entity ID').click();
    await page.getByPlaceholder('Enter the Entity ID').fill('4pd1p0dE');
    console.log('Entering entity ID - successful');
    await expect(page.locator('label').filter({ hasText: 'Entity Description:' })).toBeVisible();
    await page.getByPlaceholder('Enter the Entity Description').click();
    await page.getByPlaceholder('Enter the Entity Description').fill('Sample entity for Testing');
    await page.getByPlaceholder('Enter the Entity Description').press('Enter');
    console.log('Entering entity description - successful');
    console.log('Creating entity - successful');
   });

   test('Feature button functionality', async ({ page }) => {
    console.log('\nTesting Feature button');
    await page.getByText('Feature', { exact: true }).click();
    await expect(page.locator('div').filter({ hasText: /^Select Entity IdEntity Id:Set$/ }).nth(1)).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Select Entity Id' })).toBeVisible();
    await expect(page.getByText('Entity Id:Set')).toBeVisible();
    await page.getByPlaceholder('Enter the Entity Id').click();
    await page.getByPlaceholder('Enter the Entity Id').fill('4pd1p0dE');
    await page.getByRole('button', { name: 'Set' }).click();
    console.log('Setting Entity ID - successful');
    await expect(page.getByText('Enter the Feature DetailsFeature Name:Feature DataType:Feature Description:Add')).toBeVisible();
    await expect(page.locator('label').filter({ hasText: 'Feature Name:' })).toBeVisible();
    await page.getByPlaceholder('Enter the Feature Name').click();
    await page.getByPlaceholder('Enter the Feature Name').fill('Sample feature');
    console.log('Entering Feature name - successful');
    await expect(page.locator('label').filter({ hasText: 'Feature DataType:' })).toBeVisible();
    await page.getByPlaceholder('Enter the Feature data type').click();
    await page.getByPlaceholder('Enter the Feature data type').fill('string');
    console.log('Entering Feature Datatype - successful');
    await expect(page.locator('label').filter({ hasText: 'Feature Description:' })).toBeVisible();
    await page.getByPlaceholder('Enter the Feature Description').click();
    await page.getByPlaceholder('Enter the Feature Description').fill('Sample Feature for Testing');
    await page.getByPlaceholder('Enter the Feature Description').press('Enter');
    console.log('Entering Feature description - successful');
    await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
    await page.getByRole('button', { name: 'Submit' }).click();
    console.log('Submitting Feature - successful');
   });
   
   test('Search feature functionality', async ({ page }) => {
    console.log('Testing Search feature');
    await page.getByRole('link', { name: 'Search' }).click();
    await expect(page).toHaveURL('https://red-island-097e05210.4.azurestaticapps.net/search');
    console.log('\nNavigation to Search page - successful');
    await expect(page.getByRole('link', { name: 'Publish' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Search' })).toBeVisible();
    await expect(page.getByText('Welcome')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();
    console.log('NavBar visibility test - successful');
    await expect(page.locator('div').filter({ hasText: /^Search$/ }).nth(1)).toBeVisible();
    await expect(page.getByText('EntitiesStudents NITCBy: John')).not.toBeVisible();
    await expect(page.getByText('FeaturesStudentMarksEntity:')).not.toBeVisible();
    await expect(page.getByRole('button', { name: 'Search' })).toBeVisible();
    console.log('');
    await page.getByPlaceholder('Search by Entity, Feature, or').click();
    await page.getByPlaceholder('Search by Entity, Feature, or').fill('Student');
    await page.getByRole('button', { name: 'Search' }).click();
    await expect(page.getByText('EntitiesStudents NITCBy: John')).toBeVisible();
    await expect(page.getByText('FeaturesStudentMarksEntity:')).toBeVisible();
   });
   
 
});
