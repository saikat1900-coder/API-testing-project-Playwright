import {test, expect} from '@playwright/test';

test('GET call', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  console.log(await response.json());
  let scode = response.status();
  await expect(response).toBeOK();

  const data = await response.json();

   expect(scode).toBe(200);


   expect(data).toHaveProperty('userId');

});

