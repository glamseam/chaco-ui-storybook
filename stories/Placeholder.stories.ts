import type { Meta, StoryObj } from '@storybook/vue3'
import Placeholder from '@glamseam/chaco-ui/dist/components/Placeholder.vue'

type Comp = InstanceType<typeof Placeholder>

const meta: Meta<Comp> = {
    title: 'Placeholder',
    component: Placeholder,
    argTypes: {
        holderType: {
            control: { type: 'radio' },
            options: ['header-heading', 'action-button', 'icon-button']
        }
    }
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Placeholder',
    args: {
        holderType: 'header-heading'
    },
    render: (args) => ({
        components: {
            Placeholder
        },
        setup() {
            return { args }
        },
        template: `
            <div :style="{ width: '100%', maxWidth: '360px'}">
                <Placeholder v-bind="args" />
            </div>
        `
    })
}
