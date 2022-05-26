import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonFab from '@glamseam/chaco-ui/dist/components/buttons/ButtonFab.vue'

type Comp = InstanceType<typeof ButtonFab>

const meta: Meta<Comp> = {
    title: 'Button/Fab',
    component: ButtonFab,
    argTypes: {
        colorType: {
            control: { type: 'radio' },
            options: [
                'primary',
                'secondary'
            ]
        },
        size: {
            control: { type: 'inline-radio' },
            options: ['fab-sm', 'fab-md']
        }
    }
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Fab',
    args: {
        ariaLabel: '',
        className: '',
        colorType: 'secondary',
        idName: '',
        styleType: 'filled',
        text: 'Extended',
        size: 'fab-md',
        icon: 'add',
        isExtended: false
    },
    render: (args) => ({
        components: { ButtonFab },
        setup() {
            return { args }
        },
        template: '<ButtonFab v-bind="args" />'
    })
}
