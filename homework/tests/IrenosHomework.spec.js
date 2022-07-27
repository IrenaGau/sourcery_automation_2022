const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://testsheepnz.github.io/BasicCalculator');
});

const data = [
  'Prototype',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
]


data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Adding 5 and 7 result is 12', async ({ page }) => {
      //await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('5');
      await page.locator('#number2Field').type('7');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('12');
    });

    test('When adding not a number error message should be displayed', async ({ page }) => {
      //await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('a');
      await page.locator('#number2Field').type('7');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
      
      await expect(page.locator('#errorMsgField')).toContainText('Number 1 is not a number');
    });

    test('When clicking calculate button multiple times result should remain the same', async ({ page }) => {
      //await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('2');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
      await page.locator('#calculateButton').click();
      await page.locator('#calculateButton').click();
      await expect(page.locator('#numberAnswerField')).toHaveValue('4');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Subtract', () => {
    test('Subtracting 7 and 3 result is 4', async ({ page }) => {
      //await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('7');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
    
      await expect(page.locator('#numberAnswerField')).toHaveValue('4');
    });

    test('Should clear answer field after clicking "clear" button', async ({ page }) => {
      //await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('1');
      await page.locator('#number2Field').type('6');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
      await page.locator('#clearButton').click();
      
      await expect(page.locator('#numberAnswerField')).toHaveValue('');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Multiply', () => {
    test('Multiplying 3 and 2 result is 6', async ({ page }) => {
      //await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('3');
      await page.locator('#number2Field').type('2');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
    
      await expect(page.locator('#numberAnswerField')).toHaveValue('6');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Divide', () => {
    test('Dividing 9 and 2 result is 4.5', async ({ page }) => {
      //await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('9');
      await page.locator('#number2Field').type('2');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
    
      await expect(page.locator('#numberAnswerField')).toHaveValue('4.5');
    });

    test('After clicking "Integers only" check box, answer should be diplayed as integer', async ({ page }) => {
      //await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('7');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
      await page.locator('#integerSelect').click();
      
      await expect(page.locator('#numberAnswerField')).toHaveValue('2');
    });

    test('When dividing from 0 error message should be displayed', async ({ page }) => {
      //await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('8');
      await page.locator('#number2Field').type('0');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
      
      await expect(page.locator('#errorMsgField')).toContainText('Divide by zero error!');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Concatenate', () => {
    test('Concatenating 5 and 3 results in 53', async ({ page }) => {
      //await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('5');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
    
      await expect(page.locator('#numberAnswerField')).toHaveValue('53');
    });
  });
});
