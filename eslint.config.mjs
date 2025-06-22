import { FlatCompat } from '@eslint/eslintrc'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

// Modern ESLint plugins
import tsPlugin from '@typescript-eslint/eslint-plugin'
import prettierPlugin from 'eslint-plugin-prettier'
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort'
import tailwindcssPlugin from 'eslint-plugin-tailwindcss'
import unusedImportsPlugin from 'eslint-plugin-unused-imports'

const eslintConfig = [
  // Base Next.js recommendations (core web vitals + TS)
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),

  // Project-specific rules / plugins ----------------------------
  {
    plugins: {
      // Register plugins for Flat config usage
      '@typescript-eslint': tsPlugin,
      'unused-imports': unusedImportsPlugin,
      'simple-import-sort': simpleImportSortPlugin,
      tailwindcss: tailwindcssPlugin,
      prettier: prettierPlugin,
    },

    rules: {
      /* ---------------- Code-quality rules --------------- */
      'no-console': 'warn',
      'no-debugger': 'error',

      // Rely on TS for unused vars detection
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',

      /* ---------------- Import sanitising ---------------- */
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
      ],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      /* ---------------- Tailwind CSS --------------------- */
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'off',

      /* ---------------- Prettier ------------------------- */
      'prettier/prettier': ['error'],

      'tailwindcss/no-contradicting-classname': 'warn',
    },
  },
]

export default eslintConfig
