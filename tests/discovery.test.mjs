import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const ROOT = path.resolve(import.meta.dirname, "..");

const skillRoot = path.join(ROOT, "skills", "discovery");

test("skill preserves DISCOVER -> DECIDE -> IMPLEMENT -> VALIDATE -> REPORT order", async () => {
  const skill = await readFile(path.join(skillRoot, "SKILL.md"), "utf8");
  const discover = skill.indexOf("## Discover");
  const decide = skill.indexOf("## Decide");
  const implement = skill.indexOf("## Implement");
  const validate = skill.indexOf("## Validate");
  const report = skill.indexOf("## Report");
  assert.ok(discover >= 0 && decide > discover && implement > decide && validate > implement && report > validate);
});

test("discovery contract output and gate are explicit", async () => {
  const skill = await readFile(path.join(skillRoot, "SKILL.md"), "utf8");
  assert.match(skill, /docs\/project\/01-DISCOVERY\.md/);
  assert.match(skill, /problem, users, expected outcome, and immediate scope are understandable without assuming a technical solution/i);
});

test("discovery standard is minimum-sufficient and problem-before-solution", async () => {
  const standard = await readFile(path.join(skillRoot, "references", "DISCOVERY_STANDARD.md"), "utf8");
  assert.match(standard, /Problem before solution/);
  assert.match(standard, /Minimum sufficient context/);
  assert.match(standard, /Evidence before assertion/);
  assert.match(standard, /Discovery quality is measured by decision usefulness, not page count/);
});

test("evidence model distinguishes verified facts, inference, and unknowns", async () => {
  const model = await readFile(path.join(skillRoot, "references", "EVIDENCE_MODEL.md"), "utf8");
  for (const evidenceClass of ["VERIFIED", "DOCUMENTED", "OBSERVED", "STATED", "INFERRED", "UNKNOWN"]) {
    assert.match(model, new RegExp("\\b" + evidenceClass + "\\b"));
  }
  assert.match(model, /Never upgrade .* to .*VERIFIED.*without new evidence/);
  assert.match(model, /Unknown is an acceptable result/);
});

test("capability boundaries defer downstream product and technical decisions", async () => {
  const boundaries = await readFile(path.join(skillRoot, "references", "BOUNDARIES.md"), "utf8");
  for (const downstream of ["Business rules", "Requirements", "UX/UI", "Stack", "Architecture", "Technical design", "Development", "Testing", "Security"]) {
    assert.match(boundaries, new RegExp(downstream.replace("/", "\\/"), "i"));
  }
  assert.match(boundaries, /independently usable and does not require ASPS/i);
});

test("discovery template covers the minimum gate and evidence classification", async () => {
  const template = await readFile(path.join(skillRoot, "assets", "01-DISCOVERY.template.md"), "utf8");
  const problem = template.indexOf("## 2. Problem or opportunity");
  const users = template.indexOf("## 3. Users / actors");
  const outcome = template.indexOf("## 4. Expected outcome");
  const evidence = template.indexOf("## 5. Evidence and current unknowns");
  const scope = template.indexOf("## 6. Immediate scope");
  const gate = template.indexOf("## 10. Discovery gate");
  assert.ok(problem >= 0 && users > problem && outcome > users && evidence > outcome && scope > evidence && gate > scope);
  assert.match(template, /VERIFIED \/ DOCUMENTED \/ OBSERVED \/ STATED \/ INFERRED \/ UNKNOWN/);
  assert.match(template, /without assuming a technical solution/i);
});

test("bounded discovery amendments preserve the canonical baseline and required invariants", async () => {
  const skill = await readFile(path.join(skillRoot, "SKILL.md"), "utf8");
  const policy = skill.split("## Execution depth")[1]?.split("## Discover")[0];
  assert.ok(policy, "execution-depth policy is required");
  for (const obligation of [
    /bounded amendment[\s\S]*canonical[\s\S]*healthy/i,
    /authoritative baseline[\s\S]*affected claim|affected[\s\S]*scope section/i,
    /smallest[\s\S]*section[\s\S]*preserv[\s\S]*unrelated/i,
    /mandatory[\s\S]*problem[\s\S]*users[\s\S]*outcome[\s\S]*scope/i,
  ]) assert.match(policy, obligation);
});

test("deep discovery keeps uncertainty and cross-cutting safety triggers", async () => {
  const skill = await readFile(path.join(skillRoot, "SKILL.md"), "utf8");
  const policy = skill.split("## Execution depth")[1]?.split("## Discover")[0] ?? "";
  for (const trigger of [
    /deep path[\s\S]*new baseline/i,
    /unclear scope|contradictory sources/i,
    /missing durable evidence[\s\S]*failed invariant/i,
    /API[\s\S]*schema/i,
    /persisted[\s\S]*migration/i,
    /auth[\s\S]*trust/i,
    /deployment[\s\S]*rollback[\s\S]*availability/i,
    /cross-provider dependencies/i,
    /complete discovery gate/i,
  ]) assert.match(policy, trigger);
});

test("discovery evidence reuse is inspectable, scoped, and invalidated by changed inputs", async () => {
  const model = await readFile(path.join(skillRoot, "references", "EVIDENCE_MODEL.md"), "utf8");
  const lifecycle = model.split("## Evidence lifecycle for amendments")[1] ?? "";
  for (const obligation of [
    /inspectable[\s\S]*revision[\s\S]*scope[\s\S]*result/i,
    /Reusable[\s\S]*unchanged/i,
    /Invalidated[\s\S]*changed[\s\S]*history/i,
    /Fresh[\s\S]*rerun[\s\S]*gate/i,
    /Assumed\/inferred[\s\S]*does not establish verification/i,
    /Preserve unrelated valid evidence/i,
    /owning capability[\s\S]*independent gate/i,
  ]) assert.match(lifecycle, obligation);
});

test("discovery references and template load by need without replaying a healthy artifact", async () => {
  const skill = await readFile(path.join(skillRoot, "SKILL.md"), "utf8");
  const discover = skill.split("## Discover")[1]?.split("## Decide")[0] ?? "";
  assert.match(discover, /new or materially uncertain[\s\S]*DISCOVERY_STANDARD/);
  assert.match(discover, /EVIDENCE_MODEL[\s\S]*when classifying/i);
  assert.match(discover, /BOUNDARIES[\s\S]*when[\s\S]*unclear/i);
  assert.match(skill, /healthy artifact[\s\S]*do not replay its template/i);
  const template = await readFile(path.join(skillRoot, "assets", "01-DISCOVERY.template.md"), "utf8");
  for (const obligation of [/Reused evidence/i, /Invalidated evidence/i, /Fresh checks[\s\S]*results/i, /Remaining assumptions/i]) {
    assert.match(template, obligation);
  }
});
