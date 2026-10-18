/**
 * Copy that is not approved yet stays in the source as [placeholder like this],
 * but is never rendered on the site. Use this check before output.
 */
export const isPlaceholder = (value?: string | null): boolean =>
  typeof value === 'string' && value.trim().startsWith('[');
