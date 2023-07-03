import { classNames } from './classNames';

describe('classNames', () => {
  test('test', () => {
    expect(classNames('a')).toBe('a ');
  });
  test('test with params', () => {
    expect(classNames('class', {}, ['additional'])).toBe('class additional ');
  });
  test('test with mods and params', () => {
    expect(classNames('class', { hovered: true, scrollable: false }, ['additional'])).toBe('class additional hovered');
  });
});
