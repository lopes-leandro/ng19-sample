// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "*-lock.json",
      "tsconfig.app.json",
      "tsconfig.json",
      "tsconfig.spec.json",
      ".editorconfig",
      "public/**"
    ]
  },
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: ["app", "ati", "dir", "cr"],
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      "@angular-eslint/component-class-suffix": [
        "error",
        {
          suffixes: ['Component', 'Page']
        }
      ],
      "@angular-eslint/directive-class-suffix": [
        "error",
        {
          suffixes: ['Directive']
        }
      ],
      "@angular-eslint/no-forward-ref": "error",
      "@angular-eslint/prefer-inject": "error",
      "@angular-eslint/prefer-standalone": "error",
      "@angular-eslint/prefer-output-emitter-ref": "error",
      "@angular-eslint/prefer-output-readonly": "error",
      "@angular-eslint/use-lifecycle-interface": "error",
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/no-empty-function": "error",
      "@typescript-eslint/no-this-alias": "error",
      "@typescript-eslint/no-require-imports": "error",
      "@typescript-eslint/no-unused-expressions": [
        "error",
        {
          "allowShortCircuit": true
        }
      ],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  }
);
