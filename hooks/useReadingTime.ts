import { IUseReadingTime } from '../types/useReadingTime';
import readWords from './utils/read-words';
import stripTags from './utils/strip-tags';
import stripWhitespace from './utils/strip-whitespace';
import convertTimeMinutes from './utils/convert-time-to-minutes';

export function useReadingTime(text: string): IUseReadingTime {
  const strippedString = stripTags(stripWhitespace(text));
  const { time, words } = readWords(strippedString);

  return {
    minutes: convertTimeMinutes(time),
    words,
    time,
  };
}
