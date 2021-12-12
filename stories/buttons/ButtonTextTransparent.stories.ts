import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonText from '@glamseam/chaco-ui/dist/components/buttons/ButtonText.vue'

type Comp = InstanceType<typeof ButtonText>

const meta: Meta<Comp> = {
    title: 'Button/Transparent',
    component: ButtonText,
    argTypes: {
        className: {
            control: { type: 'radio' },
            options: [
                'button-primary-transparent',
                'button-secondary-transparent',
                'button-tertiary-transparent',
                'button-success-transparent',
                'button-caution-transparent',
                'button-danger-transparent'
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
    name: 'Transparent',
    args: {
        className: 'button-primary-transparent',
        height: 'md',
        isActive: false,
        isDisabled: false,
        isFullWidth: false,
        isOutlined: false,
        isRaised: false,
        isRoundedPill: false,
        isSubmit: false,
        text: 'Transparent Button'
    },
    render: (args) => ({
        components: { ButtonText },
        setup() {
            return { args }
        },
        template: '<ButtonText v-bind="args" />'
    })
}
