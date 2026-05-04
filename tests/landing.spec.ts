import { test, expect } from "@playwright/test";

test.describe("Landing page — UI", () => {
  // Block slow third-party requests (Fontshare CDN, Plausible) so navigation
  // resolves quickly and React can hydrate before assertions.
  test.beforeEach(async ({ page }) => {
    await page.route(/api\.fontshare\.com|cdn\.fontshare\.com|plausible\.io/, (route) =>
      route.abort(),
    );
  });


  test("renders hero with primary headline (full string in DOM)", async ({ page }) => {
    await page.goto("/", { waitUntil: "load" });
    await expect(
      page.getByRole("heading", { level: 1, name: /Run every venue from one screen/i }).first(),
    ).toBeVisible();
  });

  test("renders all v2 content sections in order", async ({ page }) => {
    await page.goto("/", { waitUntil: "load" });

    // Hero already covered by h1
    await expect(page.getByText(/Built for Australian hospitality/i).first()).toBeVisible();
    await expect(page.getByText(/Spreadsheets don't run restaurants/i)).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /Three steps to running tighter/i }),
    ).toBeVisible();
    // Audiences (diptych)
    await expect(page.locator('[data-section="audience-panel"]').first()).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /The three things you'll use every day/i }),
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: /Per venue\. No surprises/i })).toBeVisible();
    await expect(page.getByRole("heading", { name: /Questions, answered/i })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /Stop running your venues from a spreadsheet/i }),
    ).toBeVisible();
    await expect(page.getByRole("contentinfo")).toBeVisible();
  });

  test("audiences diptych shows three panels with mockups", async ({ page }) => {
    await page.goto("/", { waitUntil: "load" });
    const panels = page.locator('[data-section="audience-panel"]');
    await expect(panels).toHaveCount(3);
    await expect(page.locator('[data-panel="tonight"]')).toBeVisible();
    await expect(page.locator('[data-panel="venue"]')).toBeVisible();
    await expect(page.locator('[data-panel="every"]')).toBeVisible();
  });

  test("pricing tiers show $199 / $149 / $99 with 3-9 highlighted", async ({ page }) => {
    await page.goto("/", { waitUntil: "load" });
    await page.getByRole("heading", { name: /Per venue\. No surprises/i }).scrollIntoViewIfNeeded();
    await expect(page.getByText("$199").first()).toBeVisible();
    await expect(page.getByText("$149").first()).toBeVisible();
    await expect(page.getByText("$99").first()).toBeVisible();
    await expect(page.getByText(/Most chosen/i)).toBeVisible();
    // Featured row uses data-featured attribute
    await expect(
      page.locator('[data-pricing-tier="Multi-venue"][data-featured="true"]'),
    ).toBeVisible();
  });

  test("FAQ accordion expands on click", async ({ page }) => {
    await page.goto("/", { waitUntil: "load" });
    const trigger = page.getByRole("button", {
      name: /What about Lightspeed, Toast, or other POS systems\?/i,
    });
    await trigger.scrollIntoViewIfNeeded();

    await expect(trigger).toHaveAttribute("data-state", "closed");
    await trigger.click();
    await expect(trigger).toHaveAttribute("data-state", "open");
    await expect(
      page.getByText(/We're Square-first because Square dominates/i),
    ).toBeVisible();
  });

  test("nav anchor links scroll to sections", async ({ page }) => {
    await page.goto("/", { waitUntil: "load" });
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
    await page.goto("/", { waitUntil: "load" });
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

  test("primary CTA is a mailto link (no chat widget, no Resend)", async ({ page }) => {
    await page.goto("/", { waitUntil: "load" });
    const ctas = page.getByRole("link", { name: /Book a 15-min demo/i });
    const count = await ctas.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      await expect(ctas.nth(i)).toHaveAttribute(
        "href",
        /^mailto:morty@supersolt\.app/,
      );
    }
  });

  test("footer says Made in Melbourne for Australian hospitality", async ({ page }) => {
    await page.goto("/", { waitUntil: "load" });
    await expect(
      page.getByText(/Made in Melbourne 🇦🇺 for Australian hospitality\./i),
    ).toBeVisible();
  });

  test("no Lovable.dev mentions in DOM", async ({ page }) => {
    await page.goto("/", { waitUntil: "load" });
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
    await page.goto("/privacy", { waitUntil: "load" });
    await expect(page.getByRole("heading", { name: /^Privacy$/i, level: 1 })).toBeVisible();
    await page.goto("/terms", { waitUntil: "load" });
    await expect(page.getByRole("heading", { name: /Terms of service/i, level: 1 })).toBeVisible();
  });

  test("schema.org JSON-LD present and valid JSON", async ({ page }) => {
    await page.goto("/", { waitUntil: "load" });
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
