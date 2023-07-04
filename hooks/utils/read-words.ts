const WORDS_PER_MIN = 230; // wpm
const pattern =
  '[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]';
const reg = new RegExp(pattern, 'g');

function countWords(text: string) {
  const countWordsPattern = '\\w+';
  const regex = new RegExp(countWordsPattern, 'g');

  return (text.match(regex) || []).length;
}

function readWords(text: string, wordsPerMin = WORDS_PER_MIN) {
  const formattedText = text.replace(reg, '');
  const words = countWords(formattedText);
  const time = words / wordsPerMin;

  return {
    words,
    time,
  };
}

export { countWords };
export default readWords;
