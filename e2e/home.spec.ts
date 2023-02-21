import { test, expect } from '@playwright/test'

let urlHome = "http://localhost:3000";
let urlAbout = "http://localhost:3000/about";
let urlContact = "http://localhost:3000/contact";

test.beforeAll(async () => {
    console.log('Before tests');
});

test.afterAll(async () => {
    console.log('After tests');
});

test.describe('Header area', () => {
    test('The title tag', async({ page }) => {
        await page.goto(urlHome)

        await expect(page).toHaveTitle('Planets');
    })

    test('The meta tag', async ({ page }) => { 
        // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
        await page.goto(urlHome)
        
        const metaDescriptionOne = page.locator('meta[name="author"]')
        await expect(metaDescriptionOne).toHaveAttribute("content", "MDIA 2109")

        const metaDescriptionTwo = page.locator('meta[property="title"]');
        await expect(metaDescriptionTwo).toHaveAttribute('content', 'Assignment #2 - Planet Page')

        const metaDescriptionThree = page.locator('meta[property="description"]');
        await expect(metaDescriptionThree).toHaveAttribute('content', 'Displays planet images and facts in a spaceship window')
    })

    test('The favicon tag', async ({ page }) => {
        await page.goto(urlHome)

        const linkTag = page.locator('link[rel="icon"]');
        await expect(linkTag).toHaveAttribute('href', '/pngs/Earth.png')
    })
})

test.describe('Main area', () => {
    test('Checks for 8 planet images tags', async({ page }) => {
        await page.goto(urlHome)
       const planets = page.locator('.image');
        await expect(planets).toHaveCount(8);
    })
})

// test.describe('The Arrow Area', () => {
//     test('Link Tag and navigation', async({ page }) => {
//         await page.goto(urlHome)

//         await expect(page.locator('a > span > img')).toHaveCount(1);
//     })
// })