import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const zodPkgPath = resolve(process.cwd(), "node_modules/zod/package.json");
const zodVersion = (JSON.parse(readFileSync(zodPkgPath, "utf8")) as { version: string })
  .version;

describe("GHSA-mrhx-c7xc-m3w5 (zod)", () => {
  it("resolves the patched zod version 4.6.6", () => {
    expect(zodVersion).toBe("4.6.6");
  });
});
