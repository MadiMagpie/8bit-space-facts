import {test, devices, expect} from '@playwright/test';

let planets = "http://localhost:3000";

test.use({
       browserName: "chromium",
       ...devices['iPhone XR'],
       viewport: { width: 414, height: 896 },
})

test.describe('testing for mobile', () => {
       test('Checks that planets have proper gap', async({ page }) => {
              await page.goto(planets)
              const info = page.locator('.planets');
              const styles = await info.evaluate((ele) =>{
                     return window.getComputedStyle(ele).getPropertyValue("gap")
              });
              expect(styles).toEqual('36px');
       })

       test('Checks that sun is in right place', async({ page }) => {
              await page.goto(planets)
              const sun = page.locator('.sun');
              const sunStyles = await sun.evaluate((ele) =>{
                     const style = window.getComputedStyle(ele);
                     return {
                            left: style.left,
                     };
              });
              expect(sunStyles.left).toEqual('-218px');
       })
})