# RUST CARGO AUDIT VET SETUP

1. **Setting Up cargo-audit**

cargo-audit checks your dependencies for security vulnerabilities using the RustSec Advisory Database.

Installation

`cargo install cargo-audit`

Running the Audit

To check for vulnerabilities, simply run:

`cargo audit`

Automating with GitHub Actions

Create a .github/workflows/audit.yml file to automatically run cargo-audit in CI:
```yaml
name: Security Audit

on:
  schedule:
    - cron: '0 0 * * 0'  # Runs weekly
  push:
    branches:
      - main
  pull_request:

jobs:
  audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: dtolnay/rust-toolchain@stable
      - run: cargo install cargo-audit
      - run: cargo audit
```

2. **Setting Up cargo-vet**

cargo-vet helps ensure that your dependencies are reviewed and trusted.

installation: `cargo install cargo-vet`

Initializing Cargo Vet

Run: `cargo vet init`

This generates a supply-chain.toml file in your project.

Auditing Dependencies

Check which dependencies need review:

`cargo vet`

If a dependency is unreviewed, you’ll need to:
	1.	Perform a review: Read the source and manually approve it.
	2.	Trust external reviews: Use cargo vet suggest to see trusted sources.

Automating with GitHub Actions

Create a .github/workflows/vet.yml file:

```yaml
name: Supply Chain Audit

on:
  push:
    branches:
      - main
  pull_request:

jobs:
  vet:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: dtolnay/rust-toolchain@stable
      - run: cargo install cargo-vet
      - run: cargo vet
```

Next Steps
	•	Regularly update the cargo-audit and cargo-vet tools:

```bash
cargo install cargo-audit --force
cargo install cargo-vet --force
```

	•	Set up cargo vet certify to review and approve trusted dependencies.