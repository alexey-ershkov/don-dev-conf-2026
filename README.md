# don-dev-conf-2026

Ссылки и примеры кода из доклада Don Dev Conf 2026.

## Ссылки из доклада

- [Кастомное правило Eslint](https://eslint.org/docs/latest/extend/custom-rule-tutorial)
- [AST Explorer](https://astexplorer.net)
- [Codemods](https://martinfowler.com/articles/codemods-api-refactoring.html)



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
