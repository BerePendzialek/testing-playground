export function commaSeparatedToArray(text) {
  return [
    ...new Set(
      text
        .split(',')
        .map(item => item.trim())
        .map(item => item.slice(0, 1).toUpperCase() + item.slice(1))
        .sort()
    ),
  ]
}
