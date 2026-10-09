# woia-software-discovery

WOIA Software provider for the `discovery` capability.

Portable capability content is migrated preserve-first from `Turpial-AI-Academy/discovery-agent-plugin@1.0.1` and remains independently usable outside the WOIA Software orchestrator.

- Plugin version: `0.5.6`
- Primary skill: `$discovery`
- Department: Software
- Authoring profile: thin
- Canonical source: `Turpial-AI-Academy/woia-software-discovery-agent-plugin`

Generic certification/version/release tooling is owned centrally by `woia-ecosystem`; it is intentionally not duplicated in this provider repository.

## Maintenance

Edit only this canonical repository. Keep `plugin.json`, `package.json` and `dev.woia/manifest.json` versions aligned. From the canonical WOIA Ecosystem repository, run `mise run plugin:certify-thin --repo <absolute-plugin-repository>`, then use its release preparation/publication tasks. Install and update consumers from immutable published artifacts; keep Project personalization in overlays.
