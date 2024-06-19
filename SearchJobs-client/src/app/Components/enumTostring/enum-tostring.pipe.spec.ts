import { EnumTostringPipe } from './enum-tostring.pipe';

describe('EnumTostringPipe', () => {
  it('create an instance', () => {
    const pipe = new EnumTostringPipe();
    expect(pipe).toBeTruthy();
  });
});
