module.exports = {
    // Configurações básicas
    printWidth: 80,
    tabWidth: 2,
    useTabs: false,
    semi: true,
    singleQuote: true,
    quoteProps: 'as-needed',

    // Configurações para arrays e objetos
    trailingComma: 'es5',
    bracketSpacing: true,
    bracketSameLine: false,

    // Configurações para funções
    arrowParens: 'always',

    // Configurações específicas para arquivos
    overrides: [
        {
            files: '*.html',
            options: {
                parser: 'angular',
                printWidth: 120,
            },
        },
        {
            files: '*.component.html',
            options: {
                parser: 'angular',
                printWidth: 120,
            },
        },
        {
            files: '*.json',
            options: {
                parser: 'json',
                printWidth: 120,
                tabWidth: 2,
            },
        },
        {
            files: '*.scss',
            options: {
                parser: 'scss',
                singleQuote: true,
            },
        },
        {
            files: '*.css',
            options: {
                parser: 'css',
                singleQuote: true,
            },
        },
    ],
}