module.exports = {
  semi: true,
  tabWidth: 2,
  printWidth: 120,
  singleQuote: true,
  trailingComma: 'none',
  endOfLine: 'auto',
  importOrder: [
    // React and next first
    '^(react|next)/?',
    // Third party packages
    '<THIRD_PARTY_MODULES>',
    '^@[a-zA-Z]',
    // Src folders / Internal packages
    '^store/?',
    '^api/?',
    '^components/?',
    '^contexts/?',
    '^hooks/?',
    '^lib/?',
    '^services/?',
    '^utils/?',
    '^ws/?',
    // Parent imports. Put `..` last.
    '^\\.\\.(?!/?$)',
    '^\\.\\./?$',
    // Other relative imports.
    '^../',
    '^./',
    // Style imports.
    '^.+\\.?(css)$'
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
};
