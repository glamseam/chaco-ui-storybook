import type { Meta, StoryObj } from '@storybook/vue3'
import Label from '@glamseam/chaco-ui/dist/components/Label.vue'

type Comp = InstanceType<typeof Label>

const meta: Meta<Comp> = {
    title: 'Label',
    component: Label,
    argTypes: {
        className: {
            control: { type: 'radio' },
            options: [
                'label-primary',
                'label-secondary',
                'label-tertiary',
                'label-success',
                'label-caution',
                'label-danger'
            ]
        }
    }
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Label',
    args: {
        className: 'label-primary',
        isActive: false,
        isDisabled: false,
        isOutlined: false,
        isRoundedPill: false,
        isVoid: false,
        text: 'Fill Label'
    },
    render: (args) => ({
        components: { Label },
        setup() {
            return { args }
        },
        template: '<Label v-bind="args" />'
    })
}
