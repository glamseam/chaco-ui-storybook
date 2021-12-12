import type { Meta, StoryObj } from '@storybook/vue3'
import ProgressCircle from '@glamseam/chaco-ui/dist/components/progress/ProgressCircle.vue'

type Comp = InstanceType<typeof ProgressCircle>

const meta: Meta<Comp> = {
    title: 'Progress/Circle',
    component: ProgressCircle,
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
    name: 'Circle',
    args: {
        fillClassNameSuffix: 'main',
        stroke: 12,
        value: 23,
        width: 128,
        withTrack: false,
        // @ts-ignore
        slotDefault: '<span>{{ args.value }}</span>'
    },
    render: (args) => ({
        components: { ProgressCircle },
        setup() {
            return { args }
        },
        template: `
            <div :style="{ width: '100%', maxWidth: '600px'}">
                <ProgressCircle v-bind="args">
                    ${args.slotDefault}
                </ProgressCircle>
            </div>
        `
    })
}
