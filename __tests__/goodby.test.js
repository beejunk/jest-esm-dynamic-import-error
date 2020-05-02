import echo from '../lib/index.js';

describe('lib/goodbye.js', () => {
  it('should say goodbye', async () => {
    let result = await echo("goodbye");

    expect(result).toBe("goodbye");
  });
});