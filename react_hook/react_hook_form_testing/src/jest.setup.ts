import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "text-encoding";

if (typeof globalThis.TextEncoder === "undefined") {
  globalThis.TextEncoder = TextEncoder as any;
}

if (typeof globalThis.TextDecoder === "undefined") {
  globalThis.TextDecoder = TextDecoder as any;
}
