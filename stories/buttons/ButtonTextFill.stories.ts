import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonText from '@glamseam/chaco-ui/dist/components/buttons/ButtonText.vue'

type Comp = InstanceType<typeof ButtonText>

const meta: Meta<Comp> = {
    title: 'Button/Text',
    component: ButtonText,
    argTypes: {
        className: {
            control: { type: 'radio' },
            options: [
                'button-primary',
                'button-secondary',
                'button-tertiary',
                'button-success',
                'button-caution',
                'button-danger'
            ]
        },
        height: {
            control: { type: 'inline-radio' },
            options: ['sm', 'md', 'lg', 'xl']
        }
    }
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Text',
    args: {
        className: 'button-primary',
        height: 'md',
        isActive: false,
        isDisabled: false,
        isFullWidth: false,
        isOutlined: false,
        isRaised: false,
        isRoundedPill: false,
        isSubmit: false,
        leftIcon: 'cheeseburger',
        text: 'Fill Button'
    },
    render: (args) => ({
        components: { ButtonText },
        setup() {
            return { args }
        },
        template: '<ButtonText v-bind="args" />'
    })
}
