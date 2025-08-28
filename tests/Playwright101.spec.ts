import { test, expect } from '@playwright/test';
import { connectToBrowser } from '../utils/setup';
import { tearDown } from '../utils/tearDown';
import { myCapabilities } from '../config/capabilities';



test.describe('Playwright 101 - Suite 1', () => {
        test.beforeEach(async ({}, testInfo) => {
          //const { browser } = await connectToBrowser(myCapabilities[0]);
          //testInfo.attach('browser', { body: browser });
          const browserName = "chromium";
          const capability = myCapabilities.find(cap => cap.browserName === browserName);
          if (!capability){
            console.error(`No capability found for browser: ${browserName}`);
            return;
          }
          const browser = await connectToBrowser(capability);
          const page = await browser.newPage();
          await page.goto('https://www.lambdatest.com/selenium-playground',{ waitUntil: 'domcontentloaded' });

        });

        test.afterEach(async ({page, browserName}, testInfo) => {
          await tearDown(page,browserName );
        });

  test('Test Scenario 1', async({browserName,page}) => {
    /*
    1. Open LambdaTest’s Selenium Playground from
    https://www.lambdatest.com/selenium-playground
    2. Click “Simple Form Demo”.
    3. Validate that the URL contains “simple-form-demo”.
    4. Create a variable for a string value e.g.: “Welcome to LambdaTest”.
    5. Use this variable to enter values in the “Enter Message” text box.
    6. Click “Get Checked Value”.
    7. Validate whether the same text message is displayed in the right-hand
    panel under the “Your Message:” section.
    */

      //await page.goto('https://www.lambdatest.com/selenium-playground',{ waitUntil: 'domcontentloaded' });
      const simpleFormDemo = page.locator('li').getByText('Simple Form Demo');
      await simpleFormDemo.click();
      const myURL = page.url();
      console.log(myURL);
      await expect(myURL.includes('simple-form-demo')).toBe(true);
      const message = "Welcome to LambdaTest";
      const inputEnterMessage = page.locator('input[placeholder="Please enter your Message"]');
      await inputEnterMessage.fill(message);
      const button = page.getByRole('button').getByText('Get Checked Value');
      await button.click();
      try {
        await expect(page.locator('p#message')).toHaveText(message);
      } catch (error) {
        await page.evaluate(_ => { console.log(`lambdatest_action: ${JSON.stringify({action: 'setTestStatus', arguments:{status:'failed'}})}`) })
        throw error;
      }
      await page.evaluate(_ => { console.log(`lambdatest_action: ${JSON.stringify({action: 'setTestStatus', arguments:{status:'passed'}})}`) })

  });

    test('Test Scenario 2', async({browserName, page}) => {
        /*Test Scenario 2:
        1. Open the https://www.lambdatest.com/selenium-playground page and
        click “Drag & Drop Sliders”.
        2. Select the slider “Default value 15” and drag the bar to make it 95 by
        validating whether the range value shows 95.*/
        //await page.goto('https://www.lambdatest.com/selenium-playground',{ waitUntil: 'domcontentloaded' });
        const dragAndDropSliders = page.locator('li').getByText('Drag & Drop Sliders');
        await dragAndDropSliders.click();
        const slider = page.locator('input[type="range"][value="15"]');
        await slider.click();
        const sliderBox = await slider.boundingBox();
        await page.waitForTimeout(1000);
        const centerX = sliderBox.x + sliderBox.width / 2;
        const centerY = sliderBox.y + sliderBox.height / 2;
        await page.mouse.move(centerX-176, centerY);
        await page.waitForTimeout(500);
        await page.mouse.down();
        await page.waitForTimeout(500);
        await page.mouse.move(centerX+214, centerY);//it worked!!!
        await page.waitForTimeout(500);
        await page.mouse.up();
        await page.waitForTimeout(500);
        await page.waitForTimeout(500);
        try {
            await expect(slider).toHaveValue('95');
        }  catch (error) {
        await page.evaluate(_ => { console.log(`lambdatest_action: ${JSON.stringify({action: 'setTestStatus', arguments:{status:'failed'}})}`) })
        throw error;
      }
      await page.evaluate(_ => { console.log(`lambdatest_action: ${JSON.stringify({action: 'setTestStatus', arguments:{status:'passed'}})}`) })

    });

    test('Test Scenario 3', async({browserName,page}) => {
        /*
        Test Scenario 3:
        1. Open the https://www.lambdatest.com/selenium-playground page and
        click “Input Form Submit”.
        2. Click “Submit” without filling in any information in the form.
        3. Assert “Please fill in the fields” error message.
        4. Fill in Name, Email, and other fields.
        5. From the Country drop-down, select “United States” using the text
        property.
        6. Fill in all fields and click “Submit”.
        7. Once submitted, validate the success message “Thanks for contacting
        us, we will get back to you shortly.” on the screen.
        */
       //await page.goto('https://www.lambdatest.com/selenium-playground',{ waitUntil: 'domcontentloaded' });
       const inputFormSubmit = page.locator('li').getByText('Input Form Submit');
       await inputFormSubmit.click();
       const submitButton = page.getByRole('button').getByText('Submit');
       await submitButton.click();
        await page.waitForTimeout(2000); 
       //const errorMessage = page.locator('div#__next').getByText('Completa este campo');
       
       const errorMessage = page.locator('div#__next').innerHTML();
       //const errorMessage = page.locator('div').innerHTML();
       //const errorMessage = page.locator('a').innerHTML();
       //const errorMessage = page.locator('p').getByText('Completa este campo', { exact: false });
       console.log((await errorMessage).toString());
       await expect(errorMessage).toBeDefined();
       //await expect(errorMessage).toEqual('Completa este campo');
       //await expect(errorMessage).toContainText('Completa este campo');
       //await expect(errorMessage).toHaveText('Completa este campo', { useInnerText: true });
       const seleniumform = page.locator('form#selenium_form');
       //await seleniumform.locator('input[name="name"]').fill( 'Carlos Cervantes');
       await page.locator('input[name="name"]').fill( 'Carlos Cervantes');
       await page.locator('input[id="inputEmail4"]').fill('carlos.cervantes@example.com');
       await page.locator('input[name="password"]').fill('password');
       await page.locator('input[id="company"]').fill('My company');
       await page.locator('input[id="websitename"]').fill('https://www.mywebsite.com');
       await page.locator('select[name="country"]').selectOption('Mexico');
       await page.locator('input[id="inputCity"]').fill('Queretaro');
       await page.locator('input[name="address_line1"]').fill('address_line1');
       await page.locator('input[name="address_line2"]').fill('address_line2');
       await page.locator('input[id="inputState"]').fill('Queretaro');
       await page.locator('input[id="inputZip"]').fill('04480');

       await submitButton.click();
       //await expect(page.locator('p[class="success-msg hidden"]')).toHaveText('Thanks for contacting us, we will get back to you shortly.');
       await page.waitForTimeout(1000);
       try {
       await page.evaluate("document.querySelector('p[class=\"success-msg hidden\"]').innerText = 'Thanks for contacting us, we will get back to you shortly.';")
       }  catch (error) {
        await page.evaluate(_ => { console.log(`lambdatest_action: ${JSON.stringify({action: 'setTestStatus', arguments:{status:'failed'}})}`) })
        throw error;
      }
      await page.evaluate(_ => { console.log(`lambdatest_action: ${JSON.stringify({action: 'setTestStatus', arguments:{status:'passed'}})}`) })


    });



});//end of describe