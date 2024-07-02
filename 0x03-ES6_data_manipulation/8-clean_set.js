export default function cleanSet(set, str) {
  if (typeof str !== 'string' || str === '') {
    return '';
  }

  const results = [];
  set.forEach((value) => {
    if (value.startsWith(str)) {
      const cleanedValue = value.slice(str.length);
      results.push(cleanedValue);
    }
  });

  return results.join('-');
}
