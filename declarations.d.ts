// Image import type definitions
declare module '*.jpg';
declare module '*.png';
declare module '*.gif';
declare module '*.svg';

// document.documentMode is IE specific
declare module 'my-config' {
  global {
    interface Document {
      documentMode?: number;
    }
  }
}

// Declare a Nullable type for convenience
type Nullable<T> = T | null;
