// @flow
import getContactHref from './get-contact-href';

test('getContactHref', () => {
  expect(getContactHref('twitter', '#')).toBe('https://www.twitter.com/#');
  expect(getContactHref('github', '#')).toBe('https://github.com/#');
  expect(getContactHref('email', '#')).toBe('mailto:#');
  expect(getContactHref('vkontakte', '#')).toBe('https://vk.com/#');
  expect(getContactHref('instagram', '#')).toBe('https://instagram.com/#');
  expect(getContactHref('linkedin', '#')).toBe('https://linkedin.com/in/#');
  expect(getContactHref('telegram', '#')).toBe('telegram:#');
  expect(getContactHref('rss', '#')).toBe('#');
});
