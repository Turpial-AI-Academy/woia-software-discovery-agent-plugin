# Discovery Standard

## 1. Objective

Discovery establishes enough trustworthy project context to make the next product or technical decision deliberately.

It is not a ceremony for producing a large document. It is a boundary against starting requirements or implementation from hidden assumptions.

The minimum result must make four things clear:

~~~text
PROBLEM
USERS / ACTORS
EXPECTED OUTCOME
IMMEDIATE SCOPE
~~~

Those four elements must be understandable without assuming a technical solution.

## 2. Core principles

### Problem before solution

Describe the undesirable current condition, unmet need, or opportunity before naming a solution.

Bad:

> Build a React dashboard with PostgreSQL.

Better:

> Operations staff cannot see the current processing state of customer cases in one place, causing duplicated follow-up and delayed escalation.

A technology or product form may appear in Discovery only when it is a genuine external constraint or already-established current-state fact.

### Minimum sufficient context

Discovery is complete when downstream work can proceed without material ambiguity about the problem, users, outcome, and immediate boundary.

Do not document the entire organization, future roadmap, or every possible user before the next delivery.

### Evidence before assertion

Use available evidence and label uncertainty. A plausible inference is not a fact.

## 3. Discovery modes

### Greenfield

Start from user intent, examples, constraints, prior material, and any existing business/product evidence.

Do not invent repository facts when no repository exists.

### Existing project

Read the existing source of truth and inspect repository evidence that can materially change the problem framing or scope.

Useful sources may include:

- README and project docs;
- existing discovery/product context;
- active issues or change requests;
- current behavior visible in code, tests, schemas, or configuration;
- examples, incidents, support evidence, or operator workflows.

Preserve healthy conventions and update an existing canonical discovery source rather than creating a duplicate.

## 4. Minimum discovery questions

Answer from evidence first. Ask the user only when a missing answer materially blocks the gate.

### Context / current state

- What exists today?
- What event, pain, opportunity, or change triggered this work?
- Which facts are directly evidenced and which are only stated or inferred?

### Problem / opportunity

- What is difficult, failing, costly, risky, slow, confusing, unavailable, or newly possible?
- What is the consequence if nothing changes?
- Is the statement describing the problem or merely one proposed solution?

### Users / actors

- Who experiences the problem?
- Who performs the relevant work?
- Who is affected by the outcome?
- Which external systems or roles matter enough to the problem framing?

Use the narrowest useful actor definition. Do not fabricate personas.

### Expected outcome

- What should become observably better or newly possible?
- What business/user result matters?
- What would indicate the discovery direction is wrong?

Do not turn the outcome section into detailed acceptance criteria; that belongs downstream.

### Immediate scope

- What part of the problem is being addressed now?
- What is explicitly out of scope now?
- Which adjacent problems are intentionally deferred?

Scope should describe the boundary of the next useful effort, not a complete product roadmap.

### Constraints

Record only constraints that materially affect the next step, such as:

- deadline or sequencing dependency;
- budget or licensing boundary;
- legal, policy, privacy, or contractual restriction;
- platform or environment that is already fixed;
- compatibility obligation;
- required external system or organizational boundary.

Do not convert preferences into immutable constraints without evidence.

## 5. Contradictions

When sources disagree:

1. record the contradiction;
2. identify each source and its evidence class;
3. avoid silently choosing the more convenient version;
4. resolve immediately only if the conflict blocks the discovery gate;
5. otherwise carry it as an open question for the appropriate owner.

## 6. Stop conditions

Discovery should stop expanding when:

- the four gate elements are clear;
- material constraints are visible;
- remaining unknowns can safely be carried forward;
- additional investigation is unlikely to change the immediate scope.

Discovery should not stop when:

- the "problem" is only a solution description;
- affected users/actors cannot be identified at all;
- desired outcome is indistinguishable from implementation;
- scope is effectively "everything";
- a material contradiction is hidden;
- unsupported assumptions are written as facts.

## 7. Quality review

Before reporting PASS, check:

- an unfamiliar reader can summarize the problem in one sentence;
- the affected users/actors are concrete enough to reason about;
- current state and desired outcome are distinct;
- scope and exclusions prevent obvious overreach;
- evidence classes expose uncertainty;
- no downstream capability has been silently performed;
- the document is short enough to remain operational.

Discovery quality is measured by decision usefulness, not page count.
