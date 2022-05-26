import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonIcon from '@glamseam/chaco-ui/dist/components/buttons/ButtonIcon.vue'

type Comp = InstanceType<typeof ButtonIcon>

const meta: Meta<Comp> = {
    title: 'Button/Icon',
    component: ButtonIcon,
    argTypes: {
        size: {
            control: { type: 'inline-radio' },
            options: ['sm', 'md', 'lg', 'xl']
        }
    }
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Icon',
    args: {
        ariaLabel: '',
        className: '',
        colorType: 'neutral',
        idName: '',
        styleType: 'ghost',
        imgSrc: '',
        isActive: false,
        isDisabled: false,
        text: '',
        size: 'lg',
        icon: 'heart'
    },
    render: (args) => ({
        components: { ButtonIcon },
        setup() {
            return { args }
        },
        template: '<ButtonIcon v-bind="args" />'
    })
}
