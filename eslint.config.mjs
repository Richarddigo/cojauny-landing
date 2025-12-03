import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
        rules: {
            "react/jsx-props-no-spreading": "off",
            "@next/next/no-img-element": "off",
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/ban-ts-comment": "warn",
        },
    },
    {
        ignores: [
            "out/",
            "coverage/",
            "scripts/",
            "test-smtp.js",
            "tailwind.config.js",
            "**/*.test.tsx",
            "**/*.test.ts",
        ],
    },
];

export default eslintConfig;
