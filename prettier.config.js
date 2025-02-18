export default {
    plugins: ["prettier-plugin-svelte"],
    semi: true,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: "es5",
    printWidth: 80,
    svelteSortOrder: "options-scripts-markup-styles",
    svelteStrictMode: false,
    svelteAllowShorthand: true,
    svelteBracketNewLine: true,
    overrides: [
      {
        files: "*.svelte",
        options: {
          parser: "svelte",
        },
      },
    ],
  };
  