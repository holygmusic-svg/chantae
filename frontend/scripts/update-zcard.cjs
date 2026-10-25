// Generate the approved updated Zcard from the preserved original artwork.
// This append-only PDF revision is deterministic and verified by SHA-256.
// No additional runtime dependencies are needed.
const fs = require("node:fs");
const crypto = require("node:crypto");
const zlib = require("node:zlib");
const path = require("node:path");

const file = path.join(__dirname, "..", "public", "Chantae_Sierra_ZCard_Download.pdf");
const originalSHA = "35d209e14b05174b89e0652cef70a971af83bbe017e33c23bc5a01d6516bb691";
const updatedSHA = "3485bfde971c816abd79e2357039442149b1767a089adbf52be8626cd44a140b";
const compressedRevision = "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";

const hash = (bytes) => crypto.createHash("sha256").update(bytes).digest("hex");
const original = fs.readFileSync(file);
const originalHash = hash(original);
if (originalHash === updatedSHA) {
  console.log("Zcard already updated.");
} else {
  if (originalHash !== originalSHA) {
    throw new Error("Unexpected Zcard base PDF; refusing to patch unknown artwork.");
  }
  const appendedRevision = zlib.inflateSync(Buffer.from(compressedRevision, "base64"));
  const updated = Buffer.concat([original, appendedRevision]);
  if (hash(updated) !== updatedSHA) {
    throw new Error("Updated Zcard integrity check failed.");
  }
  fs.writeFileSync(file, updated);
  console.log("Zcard updated: Chest 36in, Waist 31in, Hips 39.5in, Shoe 9 US.");
}
