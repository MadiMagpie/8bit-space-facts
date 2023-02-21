import {test, devices, expect} from '@playwright/test';

let stars= "http://localhost:3000/stars";

test.use({
       browserName: "chromium",
       ...devices['iPhone XR'],
       viewport: { width: 414, height: 896 },
})

test.describe('testing for mobile', () => {
       test('Checks that table is proper width', async({ page }) => {
              await page.goto(stars)
              const middleNav = page.locator('.stars');
              const styles = await middleNav.evaluate((ele) =>{
                     const style = window.getComputedStyle(ele);
                     return {
                            maxWidth: style.maxWidth,
                     };
              });
              console.log(styles);
              expect(styles.maxWidth).toEqual('320px');
       })

       test('Checks crt flicker animation', async({ page }) => {
              await page.goto(stars)
              const crt = page.locator('.crt');
              const styles = await crt.evaluate((ele) =>{
                     const style = window.getComputedStyle(ele);
                     return {
                            animation: style.animation,
                     };
              });
              console.log(styles)
              expect(styles).toEqual({"animation": "1.6s ease 0s infinite normal none running textShadow"});
       })
})