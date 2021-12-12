import type { Meta, StoryObj } from '@storybook/vue3'
import BounceCircle from '@glamseam/chaco-ui/dist/components/spinners/BounceCircle.vue'

type Comp = InstanceType<typeof BounceCircle>

const meta: Meta<Comp> = {
    title: 'Spinners/BounceCircle',
    component: BounceCircle
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'BounceCircle',
    args: {
        size: 56
    },
    render: (args) => ({
        components: { BounceCircle },
        setup() {
            return { args }
        },
        template: '<BounceCircle v-bind="args" />'
    })
}
