import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodsComponent } from './methods.component';

describe('MethodsComponent', () => {
  it('should return Number of Capital letters', () => {
     let obj=new MethodsComponent();
     obj.CountCapital("HELlo");
     expect(obj.icnt).toBe(3);
  });
  it('should return 1 if pass is correct', () => {
    let obj=new MethodsComponent();
    const ret=obj.CheckPassword("HHEsmll22@");
    expect(ret).toBe(1);
 });
 it('should return sum of all elements', () => {
  let obj=new MethodsComponent();
  const ret=obj.ArrayAddition([1,2,3]);
  expect(ret).toBe(6);
});
});
