import type { StorybookConfig } from '@storybook/core-common'
import path from 'path'

const config: StorybookConfig = {
    stories: [
        '../**/*.stories.mdx',
        '../**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials'
    ],
    framework: '@storybook/vue3',
    core: {
        'builder': 'webpack5'
    },
    features: {
        previewCsfV3: true
    },
    webpackFinal: (config) => {
        if (config.module?.rules && config.resolve?.alias) {
            config.module.rules.push({
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'sass-loader',
                        options: {
                            additionalData: `@use '@scss/override-variables';`
                        }
                    }
                ]
            })
            config.resolve.alias['@'] = path.resolve(__dirname, '../stories')
            config.resolve.alias['@assets'] = path.resolve(__dirname, '../stories/assets')
            config.resolve.alias['@scss'] = path.resolve(__dirname, '../stories/assets/scss')
        }

        return config
    }
}

export default config
