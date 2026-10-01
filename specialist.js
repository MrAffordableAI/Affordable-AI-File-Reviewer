/* Compliance specialist memo. Applies the federal rules to the text in the file
   and names the allocating agency for the state selected. Not a separate model. */
function specialistMemo(input, result, text) {
  const agency = typeof agencyName === "function" ? agencyName(input.state) : "the allocating agency";
  const open = result.findings.filter((f) => f.severity !== "pass");
  const lines = [];
  lines.push("Compliance specialist review");
  lines.push(input.property || "Property" + " · unit " + (input.unit || "—") + " · " + (input.head || "household"));
  lines.push("State: " + (input.state || "—") + " · " + agency);
  lines.push("Programs: " + (input.programs || []).join(", "));
  lines.push("");
  lines.push("What I read in the file");
  lines.push(text ? text.slice(0, 1200) : "No text layer. A scan was not read. Tick the documents that are in the paper file.");
  lines.push("");
  lines.push(open.length ? "Corrections" : "No correction on the items this pass can see.");
  open.forEach((f, i) => {
    lines.push((i + 1) + ". " + f.title);
    lines.push("In the file: " + f.found);
    lines.push("Correction: " + f.correction);
    lines.push("Should look like: " + f.should);
    lines.push("Authority: " + f.cite);
    lines.push("");
  });
  lines.push("How this file should be stacked");
  const stack = typeof stackingFor === "function" ? stackingFor(input.state) : null;
  if (stack) stack.movein.forEach((item, i) => lines.push((i + 1) + ". " + item));
  lines.push("");
  lines.push("This is the specialist pass on the file text and the federal rules. " + agency + " controls if its manual is stricter. This is not an agency determination.");
  return lines.join("\n");
}

function writeSpecialist() {
  if (typeof readDroppedFile === "function") readDroppedFile(typeof extractedText === "string" ? extractedText : "");
  if (typeof readInput !== "function" || typeof reviewFile !== "function") return;
  const input = readInput();
  const result = reviewFile(input);
  const memo = specialistMemo(input, result, typeof extractedText === "string" ? extractedText : "");
  const letter = document.getElementById("letter");
  if (letter) letter.innerText = memo;
  const out = document.getElementById("reasonOut");
  if (out) out.textContent = memo;
}

function mountSpecialist() {
  const btn = document.getElementById("reviewBtn");
  if (btn) btn.addEventListener("click", function () { setTimeout(writeSpecialist, 0); });
  const sample = document.getElementById("loadSample");
  if (sample) sample.addEventListener("click", function () { setTimeout(writeSpecialist, 0); });
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mountSpecialist);
else mountSpecialist();
