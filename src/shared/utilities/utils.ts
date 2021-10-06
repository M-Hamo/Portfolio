/**
 * Determine wither object | string | array is empty.
 */
export function isEmptyObject(obj: {}): boolean {
  let name: any;
  // tslint:disable-next-line: forin
  for (name in obj) {
    return false;
  }
  return true;
}

/**
 * Return true if the type of the value is string, otherwise returns false.
 * @param val value to be checked
 */
export function isString(val: any): boolean {
  return val && (typeof val === "string" || val instanceof String);
}

export function toBoolean(val: any): boolean {
  if (isString(val)) {
    val = val.toLowerCase().trim();

    return val === "true";
  }

  return !!val;
}

export const isSameOriginUrl = (url: string): boolean => {
  // It's an absolute url with the same origin.
  if (url.startsWith(`${window.location.origin}/`)) {
    return true;
  }

  // It's a protocol relative url with the same origin.
  // For example: //www.example.com/api/Products
  if (url.startsWith(`//${window.location.host}/`)) {
    return true;
  }

  // It's a relative url like /api/Products
  if (/^\/[^\/].*/.test(url)) {
    return true;
  }

  // It's an absolute or protocol relative url that
  // doesn't have the same origin.
  return false;
};
