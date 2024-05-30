import ErrorRepository from "..";

test('create repo', () => {
  const newRepo = new ErrorRepository('123456', 'Syntax error');
  const result = new Map;
  result.set('123456', 'Syntax error');
  expect(newRepo.errors).toEqual(result);
});

test('get existing error name from repo', () => {
  const newRepo = new ErrorRepository('123456', 'Syntax error');
  expect(newRepo.translate('123456')).toEqual('Syntax error');
});

test('get unknown error name from repo', () => {
  const newRepo = new ErrorRepository('123456', 'Syntax error');
  expect(newRepo.translate('123')).toEqual('Unknown error');
});