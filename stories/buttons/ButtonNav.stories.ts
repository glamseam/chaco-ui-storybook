import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonNav from '@glamseam/chaco-ui/dist/components/buttons/ButtonNav.vue'

type Comp = InstanceType<typeof ButtonNav>

const meta: Meta<Comp> = {
    title: 'Button/Nav',
    component: ButtonNav,
    argTypes: {
        colorType: {
            control: { type: 'radio' },
            options: [
                'secondary'
            ]
        },
        size: {
            control: { type: 'inline-radio' },
            options: ['sm', 'lg', 'xl']
        }
    }
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Nav',
    args: {
        ariaLabel: '',
        className: '',
        colorType: 'secondary',
        idName: '',
        isActive: false,
        isDisabled: false,
        icon: 'sms',
        size: 'xl',
        text: 'Inbox'
    },
    render: (args) => ({
        components: { ButtonNav },
        setup() {
            return { args }
        },
        template: `
            <ul>
                <ButtonNav v-bind="args" />
            </ul>
        `
    })
}
