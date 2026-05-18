import type { Rule } from "eslint";
import type { Literal, TemplateElement } from "estree";
import type { JSXText } from "estree-jsx";

/** Кириллица (русский и другие алфавиты на кириллице). */
const CYRILLIC = /\p{Script=Cyrillic}/u;

function containsCyrillic(text: string): boolean {
  return CYRILLIC.test(text);
}

const rule: Rule.RuleModule = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow Russian (Cyrillic) text in source code",
    },
    schema: [],
    messages: {
      requireI18n:
        "Russian text is not allowed in source code. Use i18n instead.",
    },
  },

  create(context) {
    function reportIfCyrillic(
      node: Literal | JSXText | TemplateElement,
      text: string,
    ): void {
      if (!containsCyrillic(text)) {
        return;
      }

      context.report({ node, messageId: "requireI18n" });
    }

    return {
      Literal(node: Literal) {
        if (typeof node.value !== "string") {
          return;
        }

        reportIfCyrillic(node, node.value);
      },

      JSXText(node: JSXText) {
        reportIfCyrillic(node, node.value);
      },

      TemplateElement(node) {
        reportIfCyrillic(node, node.value.raw);
      },
    };
  },
};

export default rule;
