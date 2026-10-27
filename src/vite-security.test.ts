import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const vitePkgPath = resolve(process.cwd(), "node_modules/vite/package.json");
const viteVersion = (JSON.parse(readFileSync(vitePkgPath, "utf8")) as { version: string })
  .version;

describe("GHSA-587h-7wmj-h5pm (vite)", () => {
  it("resolves the patched vite version 8.3.3", () => {
    expect(viteVersion).toBe("8.3.3");
  });
});
