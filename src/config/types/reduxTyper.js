// @flow
// eslint-disable-next-line
type _ExtractReturn<B, F: (...args: any[]) => B> = B
export type ExtractReturn<F> = _ExtractReturn<*, F>
