export function commaSeparatedToArray(text) {
  return text.split(',').map(item => item.trim())
}
