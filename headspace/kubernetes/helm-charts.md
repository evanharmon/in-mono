# HELM CHARTS

## Features
package of preconfigured kuberentes resources.

## Helm chart components
- hooks

folder structure:
- `chart.yaml`: chart metadata
- `values.yaml`: configuration values
- `templates`: folder
- `charts`: folder of other dependency charts
- README.md
- LICENSE

## Chart.yaml
- explicit dependencies to other charts
- `type`: `application` (default) or `library`