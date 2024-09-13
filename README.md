# Medusa Plugin Boilerplate

Minimum scaffolding for a [medusa](https://github.com/medusajs/medusa) plugin. The process suggested by the medusa docs – using medusa cli to create a new medusa project and then shrink it down to a plugin – seems cumbersome and error-prone. That's why this repository exists as a streamlined alternative basis for new plugins.

Check to the [medusa docs](https://docs.medusajs.com/development/plugins/create) for more detailed instructions on plugin development.

## Usage

1. Copy this repo
2. Set the plugin's name in `package.json`
3. Add your services, routes, widgets, etc. in `src/`

### Development

#### 1. Prepare the plugin

```sh
npm install
npm run build
npm link
```

#### 2. Add the plugin to your medusa project

1. `npm link my-plugin-name`
2. Add entry to the `plugins` array in `medusa-config.json`
