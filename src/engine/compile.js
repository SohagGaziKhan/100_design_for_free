import * as esbuild from "esbuild-wasm";
import wasmURL from "esbuild-wasm/esbuild.wasm?url";
let ready;
export async function compile(code) {
  ready ??= esbuild.initialize({ wasmURL });
  await ready;
  const out = await esbuild.transform(code, { loader: "jsx", format: "esm", jsx: "automatic", target: "es2020" });
  return out.code;
}
