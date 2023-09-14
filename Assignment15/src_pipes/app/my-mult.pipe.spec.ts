import { MyMultPipe } from './my-mult.pipe';

describe('MyMultPipe', () => {
  it('return the multiplication', () => {
    const pipe = new MyMultPipe();
    const ret=pipe.transform(2,3);
    expect(ret).toBe(6);
  });
});
