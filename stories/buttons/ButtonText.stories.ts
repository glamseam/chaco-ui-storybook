import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonText from '@glamseam/chaco-ui/dist/components/buttons/ButtonText.vue'

type Comp = InstanceType<typeof ButtonText>

const meta: Meta<Comp> = {
    title: 'Button/Text',
    component: ButtonText,
    argTypes: {
        colorType: {
            control: { type: 'radio' },
            options: [
                'primary',
                'secondary',
                'neutral'
            ]
        },
        styleType: {
            control: { type: 'radio' },
            options: [
                'filled',
                'ghost'
            ]
        },
        size: {
            control: { type: 'inline-radio' },
            options: ['sm', 'md', 'lg', 'xl']
        }
    }
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Text',
    args: {
        ariaLabel: '',
        className: '',
        colorType: 'primary',
        idName: '',
        styleType: 'filled',
        imgSrc: '',
        isActive: false,
        isDisabled: false,
        isFullWidth: false,
        isOutlined: false,
        leftIcon: '',
        rightIcon: '',
        size: 'md',
        text: 'Button'
    },
    render: (args) => ({
        components: { ButtonText },
        setup() {
            return { args }
        },
        template: '<ButtonText v-bind="args" />'
    })
}
