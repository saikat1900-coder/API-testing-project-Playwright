import {test, expect} from '@playwright/test';

test('POST call', async ({ request }) => {
  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: {
      title: 'foo',
      body: 'bar',
      userId: 1,
    },
  });
  console.log(await response.json());
  let scode = response.status();
  console.log(await response.json());
  await expect(response).toBeOK();
  expect(scode).toBe(201);
});