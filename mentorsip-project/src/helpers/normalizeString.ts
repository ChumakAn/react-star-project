export function getNormalizedString(stringToFormat: string) {
    return stringToFormat.charAt(0).toUpperCase().concat(stringToFormat.slice(1)).replaceAll('_', ' ')
}