# Evidence Model

## Purpose

Discovery must distinguish what is known from what is merely plausible.

Use the smallest evidence notation that keeps material claims honest. Do not label every sentence when the source and certainty are already obvious; label claims whose certainty can affect scope or downstream decisions.

## Evidence classes

| Class | Meaning | Typical source |
|---|---|---|
| `VERIFIED` | Directly checked against a reliable current source or reproducible behavior. | Repository state, executed query, current system output, reproduced behavior. |
| `DOCUMENTED` | Present in an identified document or artifact, but not independently checked against reality. | README, policy, ticket, prior design document. |
| `OBSERVED` | Directly seen during a walkthrough, session, sample, or workflow observation. | Screen walkthrough, process observation, inspected example. |
| `STATED` | Reported by a user or stakeholder. | Interview, conversation, request. |
| `INFERRED` | Reasonable conclusion derived from available evidence but not confirmed. | Pattern across code/docs, likely user impact, assumed causal relation. |
| `UNKNOWN` | Evidence is insufficient or conflicting. | Missing source, unresolved contradiction, unavailable metric. |

These classes describe confidence/source, not truthfulness or stakeholder authority.

## Rules

1. Never upgrade `STATED`, `DOCUMENTED`, or `INFERRED` to `VERIFIED` without new evidence.
2. A repository observation can verify implementation state but not automatically verify user need or business intent.
3. Stakeholder statements can establish intent from that stakeholder but do not automatically prove system behavior.
4. Documentation can be stale; record material contradictions with current observations.
5. When sources conflict, preserve the conflict instead of averaging them into a false fact.
6. Unknown is an acceptable result. Do not invent a metric, user need, constraint, or causal explanation to make the document look complete.
7. Record the source for material claims when later readers would otherwise be unable to assess them.

## Compact notation

Use a table when multiple material claims need explicit evidence:

| Claim | Class | Source | Notes |
|---|---|---|---|
| Example claim | `STATED` | Product owner conversation | Needs behavioral verification. |

Or use inline notation sparingly:

~~~text
[VERIFIED] The repository currently exposes one CLI entrypoint.
[STATED] Operators lose time reconciling duplicate case status.
[INFERRED] The duplicate status likely causes repeated follow-up.
[UNKNOWN] Baseline time lost per case.
~~~

## Assumptions

An assumption is a working proposition accepted temporarily to continue.

For each material assumption record:

- the assumption;
- why it is needed;
- evidence class;
- consequence if false;
- when or by whom it should be resolved.

Do not convert an assumption into a requirement.

## Metrics

If a baseline metric is unavailable:

- record `UNKNOWN`;
- state how it could be measured when that matters;
- do not fabricate a numeric baseline or target.

Detailed success metrics and acceptance criteria belong in downstream requirements unless the metric already exists as a discovery constraint or business objective.

## Evidence lifecycle for amendments

For a material reused claim, retain an inspectable source locator and revision or observation snapshot, its supported scope, the check/observation and result, and any freshness conditions. Use the project's existing evidence notation; no new store or document is required.

- **Reusable:** source, claim, scope, and relevant conditions are unchanged and the supporting observation remains inspectable.
- **Invalidated:** a source, actor, outcome, constraint, scope, or dependency changed in a way that can alter the claim. Preserve the old evidence as history rather than presenting it as current.
- **Fresh:** directly inspect or observe the affected source and rerun the affected gate checks before restoring a verified claim. Missing or stale evidence requires fresh work.
- **Assumed/inferred:** useful reasoning that remains labeled and does not establish verification.

Recheck time-sensitive facts when their freshness matters. A new session is not itself drift. Preserve unrelated valid evidence and route downstream invalidation to the owning capability without claiming its independent gate passed.
