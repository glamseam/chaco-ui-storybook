import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonFab from '@glamseam/chaco-ui/dist/components/buttons/ButtonFab.vue'

type Comp = InstanceType<typeof ButtonFab>

const meta: Meta<Comp> = {
    title: 'Button/Fab',
    component: ButtonFab,
    argTypes: {
        className: {
            control: { type: 'radio' },
            options: [
                'fab-button-primary',
                'fab-button-secondary',
                'fab-button-tertiary',
                'fab-button-success',
                'fab-button-caution',
                'fab-button-danger'
            ]
        },
        size: {
            control: { type: 'inline-radio' },
            options: ['sm', 'md']
        }
    }
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Fab',
    args: {
        className: 'fab-button-primary',
        isActive: false,
        isDisabled: false,
        isRaised: false,
        shape: 'plus',
        size: 'md'
    },
    render: (args) => ({
        components: { ButtonFab },
        setup() {
            return { args }
        },
        template: '<ButtonFab v-bind="args" />'
    })
}
