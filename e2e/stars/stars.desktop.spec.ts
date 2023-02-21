import { test, expect, devices } from '@playwright/test'

let stars = "http://localhost:3000/stars";

test.use({
       browserName: "chromium",
       ...devices['Desktop Chrome']
})

test.beforeAll(async () => {
    console.log('Before tests');
});

test.afterAll(async () => {
    console.log('After tests');
});

test.describe('Star Header area', () => {
    test('The title tag', async({ page }) => {
        await page.goto(stars)

        await expect(page).toHaveTitle('Stars');
    })

    test('The meta tag', async ({ page }) => { 
        // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
        await page.goto(stars)
        
        const metaDescriptionOne = page.locator('meta[name="author"]')
        await expect(metaDescriptionOne).toHaveAttribute("content", "MDIA 2109")

        const metaDescriptionTwo = page.locator('meta[property="title"]');
        await expect(metaDescriptionTwo).toHaveAttribute('content', 'Assignment #2 - Star Page')

        const metaDescriptionThree = page.locator('meta[property="description"]');
        await expect(metaDescriptionThree).toHaveAttribute('content', 'Displays table of star data in a spaceship window')
    })
})

test.describe('Main Star area', () => {
    test('Count theads', async({ page }) => {
        await page.goto(stars)

        await expect(page.locator('table > thead')).toHaveCount(1);
    })

    test('Count table rows in body', async({ page }) => {
        await page.goto(stars)

        await expect(page.locator('table > tbody > tr')).toHaveCount(253);
    })

    test('Checks that main area has proper styling', async({ page }) => {
       await page.goto(stars)
       const mainArea = page.locator('.main');
       const styles = await mainArea.evaluate((ele) =>{
              const style = window.getComputedStyle(ele);
              return {
                     clipPath: style.clipPath,
                     background: style.background,
              };
       });
       expect(styles.clipPath).toEqual('polygon(5% 20%, 10% 5%, 20% 0px, 80% 0px, 90% 5%, 95% 20%, 100% 90%, 90% 100%, 10% 100%, 0px 90%, 0px 90%)');
       expect(styles.background).toEqual('rgba(0, 0, 0, 0) url(\"http://localhost:3000/background.jpeg\") no-repeat scroll 50% 50% / cover padding-box border-box');
       })
})

test.describe('Navigation area', () => {
    test('Check route to planet page', async({ page }) => {
        await page.goto(stars)
        await page.click('text=Planets');
        await expect(page).toHaveURL('http://localhost:3000/')
    })
})