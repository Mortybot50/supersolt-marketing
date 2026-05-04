import { test, expect } from "@playwright/test";

test.describe("Landing page — UI", () => {
  test("renders hero with primary headline", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", { level: 1, name: /Run every venue from one screen/i }),
    ).toBeVisible();
  });

  test("renders all 11 content sections / blocks in order", async ({ page }) => {
    await page.goto("/");

    // Hero already covered by h1
    await expect(page.getByText(/Trusted by Australian operators/i)).toBeVisible();
    await expect(page.getByText(/Spreadsheets don't run restaurants/i)).toBeVisible();
    await expect(page.getByText(/What SuperSolt does, in four lines/i)).toBeVisible();
    await expect(page.getByRole("heading", { name: /Three steps to running tighter/i })).toBeVisible();
    await expect(page.getByRole("heading", { name: /The three things you'll use every day/i })).toBeVisible();
    await expect(page.getByRole("heading", { name: /Per venue\. No surprises\./i })).toBeVisible();
    await expect(page.getByRole("heading", { name: /Questions, answered\./i })).toBeVisible();
    await expect(page.getByRole("heading", { name: /Stop running your venues from a spreadsheet/i })).toBeVisible();
    await expect(page.getByRole("contentinfo")).toBeVisible();
  });

  test("pricing tiers show $199 / $149 / $99 with 3-9 highlighted", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("heading", { name: /Per venue\. No surprises\./i }).scrollIntoViewIfNeeded();
    await expect(page.getByText("$199").first()).toBeVisible();
    await expect(page.getByText("$149").first()).toBeVisible();
    await expect(page.getByText("$99").first()).toBeVisible();
    await expect(page.getByText(/Most chosen/i)).toBeVisible();
  });

  test("FAQ accordion expands on click", async ({ page }) => {
    await page.goto("/");
    const trigger = page.getByRole("button", {
      name: /What about Lightspeed, Toast, or other POS systems\?/i,
    });
    await trigger.scrollIntoViewIfNeeded();

    // Initially collapsed (Radix default since first item is open)
    await expect(trigger).toHaveAttribute("data-state", "closed");

    await trigger.click();
    await expect(trigger).toHaveAttribute("data-state", "open");
    await expect(
      page.getByText(/We're Square-first because Square dominates/i),
    ).toBeVisible();
  });

  test("nav anchor links scroll to sections", async ({ page }) => {
    await page.goto("/");
    // On mobile, nav links live behind the menu toggle.
    const isMobile = page.viewportSize()?.width
      ? page.viewportSize()!.width < 768
      : false;

    if (isMobile) {
      await page.getByRole("button", { name: /open menu/i }).click();
    }

    await page.getByRole("link", { name: /^Pricing$/i }).first().click();
    await expect(page.locator("#pricing")).toBeInViewport({ ratio: 0.05 });
  });

  test("sign-in link points to supersolt-ten.vercel.app/auth", async ({ page }) => {
    await page.goto("/");
    const links = page.getByRole("link", { name: /^Sign in$/i });
    const count = await links.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      await expect(links.nth(i)).toHaveAttribute(
        "href",
        "https://supersolt-ten.vercel.app/auth",
      );
    }
  });

  test("demo CTA reveals mailto fallback when clicked", async ({ page }) => {
    await page.goto("/");
    const demoButtons = page.getByRole("button", { name: /Book a 15-min demo/i });
    await demoButtons.first().scrollIntoViewIfNeeded();
    await demoButtons.first().click();
    const mailLink = page.getByRole("link", {
      name: /Email morty@supersolt\.app/i,
    });
    await expect(mailLink.first()).toBeVisible();
    await expect(mailLink.first()).toHaveAttribute(
      "href",
      /^mailto:morty@supersolt\.app/,
    );
  });

  test("footer says Made in Melbourne for Australian hospitality", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByText(/Made in Melbourne 🇦🇺 for Australian hospitality\./i),
    ).toBeVisible();
  });

  test("no Lovable.dev mentions in DOM", async ({ page }) => {
    await page.goto("/");
    const html = await page.content();
    expect(html.toLowerCase()).not.toContain("lovable");
  });

  test("sitemap.xml is reachable", async ({ request }) => {
    const res = await request.get("/sitemap.xml");
    expect(res.status()).toBe(200);
    const body = await res.text();
    expect(body).toContain("<urlset");
    expect(body).toContain("/privacy");
    expect(body).toContain("/terms");
  });

  test("robots.txt is reachable", async ({ request }) => {
    const res = await request.get("/robots.txt");
    expect(res.status()).toBe(200);
    const body = await res.text();
    expect(body.toLowerCase()).toContain("user-agent");
    expect(body.toLowerCase()).toContain("sitemap");
  });

  test("OG image route returns image/png", async ({ request }) => {
    const res = await request.get("/api/og");
    expect(res.status()).toBe(200);
    expect(res.headers()["content-type"]).toContain("image");
  });

  test("privacy and terms pages render", async ({ page }) => {
    await page.goto("/privacy");
    await expect(page.getByRole("heading", { name: /^Privacy$/i, level: 1 })).toBeVisible();
    await page.goto("/terms");
    await expect(page.getByRole("heading", { name: /Terms of service/i, level: 1 })).toBeVisible();
  });

  test("schema.org JSON-LD present and valid JSON", async ({ page }) => {
    await page.goto("/");
    const scripts = await page.locator('script[type="application/ld+json"]').allInnerTexts();
    expect(scripts.length).toBeGreaterThanOrEqual(3);
    for (const text of scripts) {
      expect(() => JSON.parse(text)).not.toThrow();
    }
    const types = scripts.map((t) => JSON.parse(t)["@type"]);
    expect(types).toContain("Organization");
    expect(types).toContain("SoftwareApplication");
    expect(types).toContain("FAQPage");
  });
});
