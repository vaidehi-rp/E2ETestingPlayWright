import { test, expect, Page } from '@playwright/test';
 
test.describe('test', async () => {
let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

//Testing LOGIN
test('Log in', async () => {
  console.log('E2E test log of feature mesh website\n');
  await page.goto('https://red-island-097e05210.4.azurestaticapps.net/');
  await expect(page).toHaveTitle('Feature Mesh');
  console.log('Home page loaded successfully');

  await page.getByRole('button', { name: 'LOGIN' }).click();
  console.log('Login Button click - successful');

  await expect(page).toHaveTitle('Sign in to your account');
  console.log('Redirection to Microsoft authenticator - successful');

  await page.getByLabel('Enter your email, phone, or').fill('prajwal.h.ext@zeiss.com');
  console.log('Credentials entry - successful');

  await page.getByLabel('Enter your email, phone, or').press('Enter');
  await page.waitForTimeout(10000);
  await page.waitForSelector('text=Welcome');
  console.log('SignIn - successful');
});
//Testing home page
test('NavBar visibility test', async () => {
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

 test('Number matrix visibility test', async () => {
  console.log('\nTesting number matrix!!');
  await expect(page.locator('.Analytics_rectangle29__-8ZNb')).toBeVisible();
  await expect(page.locator('.Analytics_line3__8OOUm')).toBeVisible();
  await expect(page.getByText('Rows of Entries')).toBeVisible();
  await expect(page.getByText('Data Scientists on our')).toBeVisible();
  await expect(page.getByText('Rows of Entries')).toBeVisible();
  console.log('Number matrix - visible');
 });

//Testing publish page
 test('Navigation to Publish page test', async () => {
  await page.getByRole('link', { name: 'Publish' }).click();
  await expect(page).toHaveURL('https://red-island-097e05210.4.azurestaticapps.net/publish');
  console.log('\nNavigation to Publish page - successful');
  await expect(page.getByRole('link', { name: 'Publish' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Search' })).toBeVisible();
  await expect(page.getByText('Welcome')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();
  console.log('NavBar visibility test - successful');
 });
 
//Testing Entity page
 test('Entity button functionality test', async () => {
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
  await page.getByPlaceholder('Enter the Entity Name').fill('Test_Entity2.0'); 
  console.log('Entering entity name - successful');

  await expect(page.locator('label').filter({ hasText: 'Entity Id:' })).toBeVisible();
  await page.getByPlaceholder('Enter the Entity ID').click();
  await page.getByPlaceholder('Enter the Entity ID').fill('TestingMesh');
  console.log('Entering entity ID - successful');

  await expect(page.locator('label').filter({ hasText: 'Entity Description:' })).toBeVisible();
  await page.getByPlaceholder('Enter the Entity Description').click();
  await page.getByPlaceholder('Enter the Entity Description').fill('Sample entity created for Testing');
  await expect(page.getByRole('button', { name: 'Publish' })).toBeVisible();
  await page.getByRole('button', { name: 'Publish' }).click();
  console.log('Creating entity - successful');
 });
 
//Testing Feature page
test('Feature button functionality test', async () => {
  console.log('\nTesting Feature button');
  await page.getByText('Feature', { exact: true }).click();
  await expect(page.getByLabel('Entity Name:Select Entity')).toBeVisible();
  await page.getByLabel('Entity Name:Select Entity').selectOption('sst');
  await page.getByRole('button', { name: 'Set' }).click();
  console.log('clicking Set button - success');

  await expect(page.locator('#root div').filter({ hasText: 'Enter the Feature DetailsFeature Name:Feature DataType:Feature Description:' }).nth(3)).toBeVisible();
  await expect(page.locator('label').filter({ hasText: 'Feature Name:' })).toBeVisible();
  await expect(page.locator('label').filter({ hasText: 'Feature DataType:' })).toBeVisible();
  await expect(page.locator('label').filter({ hasText: 'Feature Description:' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Add' })).toBeVisible();
  console.log('Loading Enter the Feature Details page - successful');

  await page.getByPlaceholder('Enter the Feature Name').click();
  await page.getByPlaceholder('Enter the Feature Name').fill('Height');
  await page.getByPlaceholder('Enter the Feature data type').click();
 await page.getByPlaceholder('Enter the Feature data type').fill('int');
 await page.getByPlaceholder('Enter the Feature Description').click();
 await page.getByPlaceholder('Enter the Feature Description').fill('height value');
 await page.getByRole('button', { name: 'Add' }).click();
 await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
 await page.getByRole('button', { name: 'Submit' }).click();
 console.log('Feature adding - success');
 });


 test('Values button functionality test', async () => {
    await page.getByText('Values').click();
    await expect(page.getByRole('button', { name: 'Manual Entry' })).toBeVisible();
    await page.getByRole('button', { name: 'Manual Entry' }).click();
    await page.getByPlaceholder('Owner Name').click();
    await page.getByPlaceholder('Owner Name').fill('abhinav');
    await page.getByPlaceholder('Entity Name').click();
    await page.getByPlaceholder('Entity Name').fill('Superstore');
    await page.getByRole('button', { name: 'Fetch Features' }).click();
    await page.getByRole('button', { name: 'Add More Rows' }).click();
    await page.getByRole('button', { name: 'Submit' }).click();
    console.log('Values page - success');
 });
 // search test code here
 test('search button functionality test', async () => {
    await page.getByRole('link', { name: 'Search' }).click();
    await expect(page).toHaveURL('https://red-island-097e05210.4.azurestaticapps.net/search');
    await expect(page.getByPlaceholder('Search by Entity, Feature, or')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Search' })).toBeVisible();
    await page.getByPlaceholder('Search by Entity, Feature, or').click();
    await page.getByPlaceholder('Search by Entity, Feature, or').fill('Superstore');
    await page.getByRole('button', { name: 'Search' }).click();
    await expect(page.getByRole('link', { name: 'Superstore By: John Doe' })).toBeVisible();
    await page.getByRole('link', { name: 'Superstore By: John Doe' }).click();
    const download1Promise = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Download' }).click();
    const download1 = await download1Promise;
    console.log('Search - success');
 });
 test('logout button functionality test', async () => {
    await page.getByRole('button', { name: 'LOGOUT' }).click();
    await page.locator('[data-test-id="vaidehi-r\\.patel\\.ext\\@zeiss\\.com"]').click();
    console.log('LOGOUT - success');
 });

});
