import { test, expect } from "@playwright/test";

const breakpoints = [
  { name: "375", width: 375, height: 812 },
  { name: "768", width: 768, height: 1024 },
  { name: "1280", width: 1280, height: 800 },
  { name: "1920", width: 1920, height: 1080 },
];

test.describe("Responsive — visual smoke at 4 breakpoints", () => {
  test.beforeEach(async ({ page }) => {
    await page.route(/api\.fontshare\.com|cdn\.fontshare\.com|plausible\.io/, (route) =>
      route.abort(),
    );
  });

  for (const bp of breakpoints) {
    test(`renders at ${bp.width}x${bp.height}`, async ({ page }) => {
      await page.setViewportSize({ width: bp.width, height: bp.height });
      await page.goto("/", { waitUntil: "load" });
      await expect(
        page.getByRole("heading", { level: 1 }).first(),
      ).toBeVisible();
      // No horizontal scroll
      const docWidth = await page.evaluate(
        () => document.documentElement.scrollWidth,
      );
      expect(docWidth).toBeLessThanOrEqual(bp.width + 1);
      await page.screenshot({
        path: `test-results/screens/landing-${bp.name}.png`,
        fullPage: false,
        animations: "disabled",
        timeout: 5000,
      });
    });
  }
});

test.describe("Keyboard navigation", () => {
  test.skip(
    ({ browserName }) => browserName === "webkit",
    "WebKit excludes links from default tab order on macOS/iOS",
  );

  test.beforeEach(async ({ page }) => {
    await page.route(/api\.fontshare\.com|cdn\.fontshare\.com|plausible\.io/, (route) =>
      route.abort(),
    );
  });

  test("Tab reaches primary CTA in hero", async ({ page }) => {
    await page.goto("/", { waitUntil: "load" });
    // Tab a few times — should land on at least one focusable element from the nav region
    for (let i = 0; i < 6; i++) {
      await page.keyboard.press("Tab");
    }
    const focused = await page.evaluate(() => {
      const el = document.activeElement as HTMLElement | null;
      if (!el) return null;
      return { tag: el.tagName, text: el.innerText?.slice(0, 60) ?? "" };
    });
    expect(focused).not.toBeNull();
    expect(focused!.tag).toMatch(/A|BUTTON/);
  });
});
