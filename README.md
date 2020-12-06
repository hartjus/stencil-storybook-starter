# Stencil Storybook Starter #

Bootstraps Storybook into a StencilJS project.

# Setup

1. Clone the repository
2. Open a terminal and run `> npm install`

# Development
You will need to have two terminal windows open in order to properly build/dev with Storybook.

** Terminal 1**
Run the stencil build, with watch enabled. This will rebuild the Stencil components when changes are detected.
`> npm run build --watch`

** Terminal 2**
Run storybook to preview your changes. Note that Storybook will NOT automatically reload when your stencil component changes. You will need to refresh the browser.
`> npm run storybook`