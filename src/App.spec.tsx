import { test, expect } from '@playwright/experimental-ct-react';
import App from './App';

test.use({ viewport: { width: 500, height: 500 } });

test('should work', async ({ mount }) => {
  const component = await mount(<App />);
  await expect(component).toContainText('should show this');
  await expect(component).not.toContainText('should not reach here');
});