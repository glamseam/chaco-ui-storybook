import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonIcon from '@glamseam/chaco-ui/dist/components/buttons/ButtonIcon.vue'

type Comp = InstanceType<typeof ButtonIcon>

const meta: Meta<Comp> = {
    title: 'Button/Icon',
    component: ButtonIcon,
    argTypes: {
        size: {
            control: { type: 'inline-radio' },
            options: ['xs', 'sm', 'md', 'bottom-nav']
        }
    }
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Icon',
    args: {
        className: 'card-icon-button',
        isActive: false,
        isDisabled: false,
        shape: 'pen',
        size: 'md'
    },
    render: (args) => ({
        components: { ButtonIcon },
        setup() {
            return { args }
        },
        template: '<ButtonIcon v-bind="args" />'
    })
}
