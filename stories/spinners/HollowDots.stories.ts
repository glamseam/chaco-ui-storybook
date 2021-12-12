import type { Meta, StoryObj } from '@storybook/vue3'
import HollowDots from '@glamseam/chaco-ui/dist/components/spinners/HollowDots.vue'

type Comp = InstanceType<typeof HollowDots>

const meta: Meta<Comp> = {
    title: 'Spinners/HollowDots',
    component: HollowDots
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'HollowDots',
    args: {
        size: 56
    },
    render: (args) => ({
        components: { HollowDots },
        setup() {
            return { args }
        },
        template: '<HollowDots v-bind="args" />'
    })
}
