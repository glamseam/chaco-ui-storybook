import type { Meta, StoryObj } from '@storybook/vue3'
import ExampleLoadingPlaceholder from '@/_vue/LoadingPlaceholder.vue'

type Comp = InstanceType<typeof ExampleLoadingPlaceholder>

const meta: Meta<Comp> = {
    title: 'Examples/LoadingPlaceholder',
    component: ExampleLoadingPlaceholder
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'LoadingPlaceholder',
    render: () => ({
        components: { ExampleLoadingPlaceholder },
        template: '<ExampleLoadingPlaceholder />'
    })
}
