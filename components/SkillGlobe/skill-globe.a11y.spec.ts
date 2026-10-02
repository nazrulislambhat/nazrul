import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

// Assumes the globe is rendered at /#skills (the default `id`).
// Install: npm i -D @playwright/test @axe-core/playwright

test.describe('SkillGlobe accessibility', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#skills');
    await page.getByText('All skills as a list').click();
  });

  test('has no axe violations', async ({ page }) => {
    const results = await new AxeBuilder({ page })
      .include('#skills')
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(results.violations).toEqual([]);
  });

  test('a skill can be thrown from the keyboard', async ({ page }) => {
    await page.getByRole('button', { name: /Throw TypeScript/ }).focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('#skills').getByRole('status')).toContainText(
      'TypeScript',
    );
  });

  test('legend buttons toggle the category filter', async ({ page }) => {
    const backend = page.getByRole('button', { name: 'Backend', exact: true });
    await expect(backend).toHaveAttribute('aria-pressed', 'false');
    await backend.click();
    await expect(backend).toHaveAttribute('aria-pressed', 'true');
    await backend.click();
    await expect(backend).toHaveAttribute('aria-pressed', 'false');
  });

  test('rotate buttons are reachable by keyboard', async ({ page }) => {
    const left = page.getByRole('button', { name: 'Rotate left' });
    await left.focus();
    await expect(left).toBeFocused();
    await page.keyboard.press('Enter'); // should not throw or move focus
    await expect(left).toBeFocused();
  });
});
