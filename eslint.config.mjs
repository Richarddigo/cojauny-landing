import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    {
        rules: {
            'react/jsx-props-no-spreading': 'off',
            '@next/next/no-img-element': 'off',
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/ban-ts-comment': 'warn',
        },
    },
    globalIgnores([
        '.next/**',
        'out/**',
        'build/**',
        'coverage/**',
        'scripts/**',
        'test-results/**',
        'next-env.d.ts',
        'tailwind.config.js',
        'test-smtp.js',
        '**/*.test.tsx',
        '**/*.test.ts',
    ]),
]);

export default eslintConfig;
