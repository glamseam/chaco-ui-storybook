import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonNavWithUnderText from '@glamseam/chaco-ui/dist/components/buttons/ButtonNavWithUnderText.vue'

type Comp = InstanceType<typeof ButtonNavWithUnderText>

const meta: Meta<Comp> = {
    title: 'Button/NavWithUnderText',
    component: ButtonNavWithUnderText,
    argTypes: {
        colorType: {
            control: { type: 'radio' },
            options: [
                'secondary'
            ]
        }
    }
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'NavWithUnderText',
    args: {
        ariaLabel: '',
        className: '',
        colorType: 'secondary',
        idName: '',
        isActive: false,
        isDisabled: false,
        icon: 'notification',
        text: 'Notification'
    },
    render: (args) => ({
        components: { ButtonNavWithUnderText },
        setup() {
            return { args }
        },
        template: `<ButtonNavWithUnderText v-bind="args" />`
    })
}
