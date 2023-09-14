import { MarvellousChkPipe } from './marvellous-chk.pipe';

describe('MarvellousChkPipe', () => {
  it('check prime number', () => {
    const pipe = new MarvellousChkPipe();
    const ret=pipe.transform(7,"Prime")
    expect(ret).toBe(1);
  });
  it('check perfect number', () => {
    const pipe = new MarvellousChkPipe();
    const ret=pipe.transform(6,"Perfect")
    expect(ret).toBe(1);
  });
  it('check even number', () => {
    const pipe = new MarvellousChkPipe();
    const ret=pipe.transform(8,"Even")
    expect(ret).toBe(1);
  });
  it('check odd number', () => {
    const pipe = new MarvellousChkPipe();
    const ret=pipe.transform(5,"Odd")
    expect(ret).toBe(1);
  });
});
