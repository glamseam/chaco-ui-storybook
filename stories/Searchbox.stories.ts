import type { Meta, StoryObj } from '@storybook/vue3'
import Searchbox from '@glamseam/chaco-ui/dist/components/Searchbox.vue'

type Comp = InstanceType<typeof Searchbox>

const meta: Meta<Comp> = {
    title: 'Searchbox',
    component: Searchbox
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Searchbox',
    args: {
        actionButtonIcon: '',
        classNameSuffix: 'main',
        isRoundedPill: false,
        isTransparent: false,
        placeholderText: '検索ワード',
        value: ''
    },
    render: (args) => ({
        components: { Searchbox },
        setup() {
            return { args }
        },
        template: `
            <div :style="{ width: '100%', maxWidth: '600px'}">
                <Searchbox v-bind="args" />
            </div>
        `
    })
}
