# Discovery Capability Boundaries

## Discovery owns

Discovery may establish:

- project context and current state;
- problem or opportunity;
- affected users, roles, or external actors;
- expected outcome at result level;
- evidence and contradictions;
- immediate scope and explicit exclusions;
- material constraints;
- assumptions, unknowns, and open questions;
- a concise discovery source of truth.

## Discovery defers

| Topic | Downstream capability |
|---|---|
| Domain policies, invariants, decision tables, permissions, calculations | Business rules |
| Detailed functional/non-functional requirements, user stories, acceptance criteria | Requirements |
| User journeys, interaction flows, screen behavior, visual/interface decisions | UX/UI |
| Languages, frameworks, databases, vendors, package/runtime choices | Stack |
| System boundaries, modules/services, dependency direction, data architecture | Architecture |
| API/schema/component-level technical contracts and implementation design | Technical design |
| Work sequencing, milestones, estimates, delivery decomposition | Planning / tasks |
| Coding and implementation | Development |
| Test strategy and executed verification | Testing |
| Security analysis and controls | Security |
| Release, promotion, observability, documentation, deployment | Their respective capabilities |

## Boundary tests

A statement probably belongs in Discovery when it explains:

- what is happening;
- why it matters;
- who is affected;
- what result is desired;
- what boundary applies now;
- what is uncertain.

A statement probably belongs downstream when it specifies:

- exactly what the product must do;
- exactly how a user interface behaves;
- exactly which technology must be chosen without an external constraint;
- exactly how components, schemas, endpoints, or data stores are designed;
- exactly how implementation or tests will be organized.

## Solution-shaped input

Users often arrive with a solution in mind. Preserve it as one of:

- an explicit fixed constraint, when the user truly requires it;
- a proposed approach, when it is optional;
- current-state context, when it already exists;
- an open assumption, when its necessity is unverified.

Then restate the underlying problem and expected outcome separately.

Do not reject useful solution context; simply avoid confusing it with the discovery baseline.

## Standalone and contract use

This plugin is independently usable and does not require ASPS.

When orchestrated under the `discovery/v1` contract, its required output is:

~~~text
docs/project/01-DISCOVERY.md
~~~

The capability boundary remains the same in standalone use.
