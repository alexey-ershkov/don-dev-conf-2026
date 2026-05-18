import { RuleTester } from "eslint";
import { describe, it } from "node:test";
import rule from "../src/rules/require-i18n.js";

const errorMessage = rule.meta.messages!.requireI18n;

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
});

describe("require-i18n", () => {
  it("passes RuleTester", () => {
    ruleTester.run("require-i18n", rule, {
      valid: [
        {
          code: "<button>{t('common.submit')}</button>",
        },
        {
          code: "<button>Submit</button>",
        },
        {
          code: "const x = 'hello';",
        },
        {
          code: "<div className='container' />",
        },
        {
          code: "const title = `Hello ${name}`;",
        },
      ],

      invalid: [
        {
          code: "<button>Отправить</button>",
          errors: [{ message: errorMessage }],
        },
        {
          code: "const msg = 'Привет';",
          errors: [{ message: errorMessage }],
        },
        {
          code: "<p>{'Мир'}</p>",
          errors: [{ message: errorMessage }],
        },
        {
          code: "const title = `Здравствуйте, ${name}`;",
          errors: [{ message: errorMessage }],
        },
        {
          code: "const mixed = 'Hello, мир';",
          errors: [{ message: errorMessage }],
        },
      ],
    });
  });
});
