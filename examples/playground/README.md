# Playground

Тестовый проект для проверки `i18n-eslint-plugin` на реальном TS/TSX-коде.

Плагин подключён через pnpm workspace (`i18n-eslint-plugin: workspace:*`).

```bash
# из корня репозитория
pnpm install
pnpm lint
```

Или только playground (после сборки плагина):

```bash
pnpm --filter playground lint
```

В `src/App.tsx` намеренно есть кириллица — ESLint должен вернуть ошибки `i18n/require-i18n`.
