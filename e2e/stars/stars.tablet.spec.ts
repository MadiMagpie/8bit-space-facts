import {test, devices, expect} from '@playwright/test';

let stars= "http://localhost:3000/stars";

test.use({
       browserName: "chromium",
       ...devices['iPad Air'],
       viewport: { width: 820, height: 1180}
})

test.describe('testing for tablet', () => {
       test('Checks that table is proper height', async({ page }) => {
              await page.goto(stars)
              const middleNav = page.locator('.stars');
              const styles = await middleNav.evaluate((ele) =>{
                     const style = window.getComputedStyle(ele);
                     return {
                            height: style.height,
                     };
              });
              console.log(styles);
              expect(styles.height).toBe('640px');
       })

       test('Checks th color', async({ page }) => {
              await page.goto(stars)
              const main = page.locator('#testHere');
              const styles = await main.evaluate((ele) =>{
                     const style = window.getComputedStyle(ele);
                     return {
                            color: style.color,
                     };
              });
              console.log(styles)
              expect(styles).toEqual({"color": "rgb(80, 210, 156)"});
       })
})