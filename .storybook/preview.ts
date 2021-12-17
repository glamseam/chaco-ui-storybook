import type { Parameters } from '@storybook/addons'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
import type { ToolbarArgType } from '@storybook/addon-toolbars/dist/ts3.9/types'
import { app } from '@storybook/vue3'
import type { ArgTypes, Story, StoryContext } from '@storybook/vue3'

import pluginChacoUI from '@glamseam/chaco-ui'
import type { PluginInstallOptionsI } from '@glamseam/chaco-ui/dist/type'

import { PAYJP_PUBLIC_KEY } from '../env'
import StoriesWrapper from '../stories/decorators/StoriesWrapper.vue'
import SvgSprite from '../stories/decorators/SvgSprite.vue'

import '../stories/assets/scss/style.scss'

const pluginChacoUIOptions: PluginInstallOptionsI = {
    imgixBaseUrl: 'https://chaco.imgix.net',
    payjpPublicKey: PAYJP_PUBLIC_KEY,
    svgIconSymbolIdPrefix: 'svg-icon-'
}

app.use(pluginChacoUI, pluginChacoUIOptions)

const customViewports = {
    ipad: {
        name: 'iPad',
        styles: {
            width: '768px',
            height: '1024px'
        }
    },
    ipad7: {
        name: 'iPad (Gen7~)',
        styles: {
            width: '810px',
            height: '1080px'
        }
    },
    ipadAir4: {
        name: 'iPad Air (Gen4~)',
        styles: {
            width: '820px',
            height: '1080px'
        }
    },
    ipadPro: {
        name: 'iPad Pro (etc)',
        styles: {
            width: '834px',
            height: '1194px'
        }
    },
    galaxyZFold3: {
        name: 'Galaxy Z Fold3',
        styles: {
            width: '674px',
            height: '842px'
        }
    }
}

export const parameters: Parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    },
    viewport: {
        viewports: {
            ...MINIMAL_VIEWPORTS,
            ...customViewports,
        }
    }
}

export const globalTypes: ArgTypes<Partial<ToolbarArgType>> = {
    theme: {
        name: 'Theme',
        description: 'テーマの切り替えを行います',
        defaultValue: 'light',
        toolbar: {
            icon: 'circlehollow',
            items: [
                'light',
                'dark'
            ]
        }
    },
    width: {
        name: 'Width',
        description: '幅を変更します',
        defaultValue: '768px',
        toolbar: {
            icon: 'requestchange',
            items: [
                '320px',
                '576px',
                '768px',
                '992px',
                '1200px',
                '100%'
            ]
        }
    }
}

export const decorators = [
    (_: Story, context: StoryContext) => {
        if (context.globals.theme === 'dark') {
            document.body.classList.add('cs-dark')
        } else {
            document.body.classList.remove('cs-dark')
        }

        return {
            components: {
                StoriesWrapper,
                SvgSprite
            },
            setup() {
                return {
                    globalTypeWidth: context.globals.width
                }
            },
            template: `
                <div class="flex-center mt-200">
                    <SvgSprite />
                    <StoriesWrapper :max-width="globalTypeWidth">
                        <story />
                    </StoriesWrapper>
                </div>
                <div id="teleportDialog" />
            `
        }
    }
]
