import { test, expect, devices } from '@playwright/test'

let planets = "http://localhost:3000";
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

test.describe('Planet Header area', () => {
    test('The title tag', async({ page }) => {
        await page.goto(planets)

        await expect(page).toHaveTitle('Planets');
    })

    test('The meta tag', async ({ page }) => { 
        // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
        await page.goto(planets)
        
        const metaDescriptionOne = page.locator('meta[name="author"]')
        await expect(metaDescriptionOne).toHaveAttribute("content", "MDIA 2109")

        const metaDescriptionTwo = page.locator('meta[property="title"]');
        await expect(metaDescriptionTwo).toHaveAttribute('content', 'Assignment #2 - Planet Page')

        const metaDescriptionThree = page.locator('meta[property="description"]');
        await expect(metaDescriptionThree).toHaveAttribute('content', 'Displays planet images and facts in a spaceship window')
    })

    test('The favicon tag', async ({ page }) => {
        await page.goto(planets)

        const linkTag = page.locator('link[rel="icon"]');
        await expect(linkTag).toHaveAttribute('href', '/pngs/Earth.png')
    })
})

test.describe('Main Planet area', () => {
    test('Checks for 8 planet images tags', async({ page }) => {
        await page.goto(planets)
       const allPlanets = page.locator('.image');
        await expect(allPlanets).toHaveCount(8);
    })

    test('Checks that main area has proper styling', async({ page }) => {
       await page.goto(planets)
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
    test('Check route to star page', async({ page }) => {
        await page.goto(planets)
        await page.click('text=Stars');
        await expect(page).toHaveURL(stars)
    })
})