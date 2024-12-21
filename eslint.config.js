import pluginVue from 'eslint-plugin-vue';

export default [
    ...pluginVue.configs['flat/essential'],
    {
        rules: {
            semi: 'error',
            'prefer-const': 'error'
        },
        root: true,
        env: {
            'node': true
        },
        extends: [
            'eslint:recommended'
        ],
        parser: '@babel/eslint-parser',
        parserOptions: {
            'sourceType': 'module',
            'allowImportExportEverywhere': true
        }
    }
];