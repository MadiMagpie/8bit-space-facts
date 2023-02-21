import {test, devices, expect} from '@playwright/test';

let planets = "http://localhost:3000";

test.use({
       browserName: "chromium",
       ...devices['iPad Air'],
       viewport: { width: 820, height: 1180}
})

test.describe('testing for tablet', () => {
       test('Checks that navigation area has proper styling', async({ page }) => {
              await page.goto(planets)
              const middleNav = page.locator('#middle');
              const styles = await middleNav.evaluate((ele) =>{
                     const style = window.getComputedStyle(ele);
                     return {
                            flexDirection: style.flexDirection,
                     };
              });
              console.log(styles);
              expect(styles.flexDirection).toEqual('column');
       })

       test('Checks overflow on iPad', async({ page }) => {
              await page.goto(planets)
              const main = page.locator('.main');
              const styles = await main.evaluate((ele) =>{
                     const style = window.getComputedStyle(ele);
                     return {
                            overflow: style.overflow,
                     };
              });
              expect(styles.overflow).toEqual('hidden');
       })
})