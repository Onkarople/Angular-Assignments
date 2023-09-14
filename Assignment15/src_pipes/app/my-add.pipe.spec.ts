import { MyAddPipe } from './my-add.pipe';

describe('MyAddPipe', () => {
  it('return the addition', () => {
    let obj=new MyAddPipe();
    const ret=obj.transform(10,11);
    expect(ret).toBe(21);

  });
});
