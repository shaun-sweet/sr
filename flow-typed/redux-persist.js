// @flow
declare module 'redux-persist/integration/react' {
  declare export function PersistGate(): any
}

declare module 'redux-persist/lib/storage' {
  declare class storage {

  }
  declare export default typeof storage;
}
