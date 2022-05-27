import type { Meta, StoryObj } from '@storybook/vue3'
import ExampleNavDrawer from '@/_vue/NavDrawer.vue'

type Comp = InstanceType<typeof ExampleNavDrawer>

const meta: Meta<Comp> = {
    title: 'Examples/NavDrawer',
    component: ExampleNavDrawer
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'NavDrawer',
    render: () => ({
        components: { ExampleNavDrawer },
        template: '<ExampleNavDrawer />'
    })
}
