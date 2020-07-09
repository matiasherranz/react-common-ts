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

// $Values from Flow in TypeScript
// Reference: https://gist.github.com/DimitryDushkin/7bf7741810492e8d8fa088740360eca1
type $Values<O extends Record<string, unknown>> = O[keyof O];
