# Aontas Design System for React

This is just a basic setup for a design system. In future each of the below types could be scoped like @aontas/typography or @aontas/buttons etc.

Aontas is Irish for Atom.

## Typography:

    Headings (H1, H2, H3, etc.)
    Paragraph text
    Links
    Lists (ul, ol, li)

## Buttons:

    Primary button
    Secondary button
    Icon button
    Disabled button
    Button groups

## Form Elements:

    Text input
    Textarea
    Select dropdown
    Checkboxes and radio buttons
    Switches or toggles
    Validation messages
    Date pickers
    File upload

## Navigation:

    Navbar
    Sidebar
    Breadcrumbs
    Tabs
    Pagination

## Alerts and Notifications:

    Success alerts
    Error alerts
    Warning alerts
    Info alerts
    Toast notifications

## Modals and Dialogs:

    Modal windows
    Dialog boxes
    Popovers
    Tooltips

## Cards and Panels:

    Content cards
    Product cards
    User profiles
    Panels or containers

## Icons:

    Icon library with commonly used icons

## Images and Media:

    Image placeholders
    Image galleries
    Videos and media players

## Layout Components:

    Grid system (for responsive layouts)
    Containers
    Sections
    Headers and footers

## Data Presentation:

    Tables
    Charts and graphs
    Accordions
    Carousels

## Progress and Loading:

    Progress bars
    Spinners and loaders
    Skeleton screens

## Utilities:

    Spacing (margins and paddings)
    Borders and dividers
    Color palettes
    Themes (light and dark modes)
    Accessibility utilities (keyboard navigation, ARIA roles)

## UI Feedback:

    Tooltips
    Popovers
    Hover effects
    Click effects

## Navigation and Routing:

    Routing components (e.g., links, navigation menus)

## Authentication and Security:

    Login and registration forms
    Password reset forms
    Authentication-related components

## User Interaction:

    Like buttons
    Share buttons
    Comment boxes

## Internationalization (i18n) and Localization (l10n):

    Components that handle language and region-specific content

## Error Handling:

    Error boundaries
    Generic error display components

## Contextual Components:

    Context providers and consumers for state management

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
