---
name: discovery
description: Clarifies a software project's problem or opportunity, affected users, expected outcome, evidence, assumptions, constraints, and immediate scope before requirements or technical solution decisions. Use for greenfield or existing-project discovery, problem framing, project-context synthesis, 01-DISCOVERY.md creation or review, and deciding whether discovery evidence is sufficient to proceed.
license: MIT
compatibility: Works with greenfield ideas and existing software repositories; repository-aware discovery requires access to the relevant project sources.
metadata:
  author: Turpial AI Academy
  version: "0.5.1"
---

# discovery

## Operating flow

~~~text
DISCOVER -> DECIDE -> IMPLEMENT -> VALIDATE -> REPORT
~~~

## Purpose

Create the minimum evidence-aware project baseline needed to understand the problem, who is affected, what outcome matters, and what the immediate scope is, without prematurely deciding business rules, detailed requirements, UX, stack, architecture, or implementation.

## Governing principles

~~~text
PROBLEM BEFORE SOLUTION
MINIMUM SUFFICIENT CONTEXT
EVIDENCE BEFORE ASSERTION
~~~

Non-negotiable rules:

- Discover before drafting or changing the project baseline.
- Use the user's actual intent and repository evidence when present.
- Separate facts from statements, observations, documentation, inferences, assumptions, and unknowns.
- Do not transform an inferred solution into the problem statement.
- Do not choose technologies, architecture, interfaces, data models, or implementation details during Discovery.
- Do not turn Discovery into a complete PRD, requirements specification, business-rules catalog, roadmap, or technical design.
- Preserve a healthy existing canonical discovery source instead of creating parallel documentation.
- Ask only for information that materially blocks a clear problem, users, expected outcome, or immediate scope; do not force a questionnaire when evidence is already sufficient.
- Keep the baseline proportional to the next useful delivery rather than documenting the entire future product.
- Never report an inference or unknown as verified fact.

## Execution depth

Use a bounded amendment when the existing canonical discovery baseline is healthy, the requested change is local and understood, and its relevant evidence is durable and inspectable. A new turn alone does not invalidate that evidence.

For a bounded amendment:

1. locate the authoritative baseline and the evidence supporting the affected claim or scope section;
2. identify the changed source, affected actors/outcome/scope, and any downstream dependency that could be invalidated;
3. inspect only the supporting sources needed to establish that impact;
4. amend the smallest coherent section, preserving unrelated claims, evidence classes, and valid artifacts;
5. check the affected statement plus the mandatory problem, users, outcome, immediate-scope, and no-invented-facts invariants;
6. report what changed, what evidence was reused or invalidated, what was freshly checked, and what remains uncertain.

Take the deep path for a new baseline, unhealthy conventions, unclear scope, contradictory sources, missing durable evidence for the gate, or a failed invariant. Also deepen discovery when the framing materially changes public API/event/schema obligations, persisted state or migrations, auth/authorization/secrets/trust boundaries, deployment/rollback/availability risk, or cross-provider dependencies. Identify those implications and route detailed decisions to their owning capability.

Reusable evidence must identify its source/revision or observed snapshot, the claim and scope it supports, the check or observation, and its result. Reuse only while those inputs and conditions remain valid. A changed source or claim invalidates the dependent evidence; re-observe or revalidate that part before restoring its status. Unsupported assumptions, inference, and recollection are not verification evidence. Do not replay unrelated valid evidence or expensive observations unless a relevant mutation, drift, or time-sensitive condition invalidates them.

Load detailed references and templates progressively: the standard for new or materially uncertain framing, the evidence model for evidence-class or reuse questions, boundaries for ownership ambiguity, and the template only when an existing artifact cannot express the required baseline. The deep path retains the complete discovery gate.

## Discover

For new or materially uncertain discovery, read [DISCOVERY_STANDARD.md](references/DISCOVERY_STANDARD.md). Load [EVIDENCE_MODEL.md](references/EVIDENCE_MODEL.md) when classifying or reconciling evidence and [BOUNDARIES.md](references/BOUNDARIES.md) when a statement's ownership is unclear. For a healthy bounded amendment, start with the affected baseline and sources.

Start from:

1. the user's stated intent, desired change, pain, opportunity, and constraints;
2. existing repository context when present;
3. existing project/discovery/product documentation and source-of-truth conventions;
4. directly relevant issues, examples, incidents, workflows, or artifacts that clarify current state;
5. contradictions between stated intent, documentation, and observed repository reality.

For an existing repository, discover read-only first. Do not edit code or downstream product/technical artifacts merely to complete Discovery.

Build a compact evidence map covering, as applicable:

~~~text
context/current state
-> problem or opportunity
-> affected users / actors
-> expected outcome
-> immediate scope / exclusions
-> material constraints
-> assumptions / unknowns
-> evidence sources
~~~

Avoid indiscriminate repository reading. Expand context only when it can change one of those discovery elements.

## Decide

Determine the smallest discovery baseline that is sufficient for the next step.

For each material statement:

1. classify its evidence using [EVIDENCE_MODEL.md](references/EVIDENCE_MODEL.md);
2. distinguish current fact from desired future outcome;
3. remove solution-shaped wording unless the solution itself is an explicit constraint;
4. decide whether uncertainty can remain recorded or must be resolved now;
5. keep downstream decisions out according to [BOUNDARIES.md](references/BOUNDARIES.md).

Prefer a concise unknown over a fabricated answer.

A discovery baseline is sufficient when an informed reader can answer:

- What is happening now?
- What problem or opportunity matters?
- Who is affected or involved?
- What observable outcome is desired?
- What is included now?
- What is explicitly excluded now?
- Which constraints materially shape the next step?
- What is known, inferred, or still unknown?

## Implement

Create or update the project's discovery source of truth only when authorized.

Output-path rule:

- honor an explicit caller-provided path;
- for the `discovery/v1` contract, write `docs/project/01-DISCOVERY.md`;
- for a new standalone project with no established convention, `docs/project/01-DISCOVERY.md` is the default;
- for an existing standalone repository with a healthy canonical equivalent, update that source instead of duplicating it unless the caller explicitly requires the contract path.

Use [01-DISCOVERY.template.md](assets/01-DISCOVERY.template.md) when creating a baseline or repairing an insufficient structure. Preserve an existing healthy artifact for bounded amendments; do not replay its template. Omit sections that add no useful information, but preserve enough content to satisfy the discovery gate.

Do not edit business rules, requirements, UX, stack, architecture, planning, code, tests, or deployment artifacts as part of Discovery unless the caller explicitly combines capabilities.

## Validate

Validate the resulting baseline against the discovery gate:

> The problem, users, expected outcome, and immediate scope are understandable without assuming a technical solution.

Also verify:

- current state and desired outcome are not conflated;
- user/actor language is specific enough to identify who is affected;
- scope has an immediate boundary and explicit exclusions when ambiguity would otherwise remain;
- material constraints are recorded without inventing implementation choices;
- inferences and unknowns are labeled;
- no unsupported metric, fact, stakeholder need, or constraint is presented as verified;
- no downstream decision is disguised as discovery;
- the artifact is concise enough to remain a usable source of truth.

When repository context exists, inspect the diff and confirm no unrelated source or downstream artifact changed.

## Report

Report:

1. discovery artifact created or updated;
2. verified project context used;
3. problem / opportunity;
4. affected users / actors;
5. expected outcome;
6. immediate scope and exclusions;
7. material constraints;
8. important assumptions / unknowns and their evidence class;
9. discovery gate result;
10. blocked questions that genuinely prevent proceeding.

Keep verified facts separate from inference and recommendation.

## Detailed references

- [Discovery Standard](references/DISCOVERY_STANDARD.md)
- [Evidence Model](references/EVIDENCE_MODEL.md)
- [Capability Boundaries](references/BOUNDARIES.md)
- [Discovery Template](assets/01-DISCOVERY.template.md)
