# don-dev-conf-2026

Ссылки и примеры кода из доклада Don Dev Conf 2026.

## Структура

```
packages/i18n-eslint-plugin/   — ESLint-плагин (правило require-i18n)
examples/playground/           — тестовый проект на workspace-зависимости
```

## Команды

```bash
pnpm install
pnpm test    # RuleTester в пакете плагина
pnpm build   # сборка плагина в dist/
pnpm lint    # ESLint на playground (сборка + lint)
```

## Плагин

Правило `require-i18n` запрещает кириллицу в строках, JSX-тексте и шаблонных литералах.

Подключение в flat config:

```js
import i18nPlugin from "i18n-eslint-plugin";

export default [
  {
    plugins: { i18n: i18nPlugin },
    rules: { "i18n/require-i18n": "error" },
  },
];
```

См. [examples/playground/eslint.config.js](examples/playground/eslint.config.js).
