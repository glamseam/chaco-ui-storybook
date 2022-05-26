import type { Meta, StoryObj } from '@storybook/vue3'
import ProgressBar from '@glamseam/chaco-ui/dist/components/progress/ProgressBar.vue'

type Comp = InstanceType<typeof ProgressBar>

const meta: Meta<Comp> = {
    title: 'Progress/Bar',
    component: ProgressBar,
    argTypes: {
        value: {
            control: {
                type: 'range',
                min: 0,
                max: 100,
                step: 1
            }
        }
    }
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Bar',
    args: {
        colorName: 'primary',
        height: 4,
        value: 23,
        withTrack: false
    },
    render: (args) => ({
        components: { ProgressBar },
        setup() {
            return { args }
        },
        template: `<ProgressBar v-bind="args" />`
    })
}
