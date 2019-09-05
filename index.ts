/* eslint-disable no-undefined */
export default function isPresent<A> (value: A): boolean {
  return !(value === undefined || value === null);
}
