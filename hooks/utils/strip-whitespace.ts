export default function stripWhitespace(text: string) {
  return text.replace(/^\s+/, '').replace(/\s+$/, '');
}
