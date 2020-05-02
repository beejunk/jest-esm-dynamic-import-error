import echo from '../lib/index.js';

describe('lib/hello.js', () => {
  it('should say hello', async () => {
    let result = await echo("hello");

    expect(result).toBe("hello");
  });
});