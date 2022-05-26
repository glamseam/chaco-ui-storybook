import type { Meta, StoryObj } from '@storybook/vue3'
import Heading from '@glamseam/chaco-ui/dist/components/Heading.vue'

type Comp = InstanceType<typeof Heading>

const meta: Meta<Comp> = {
    title: 'Heading',
    component: Heading,
    argTypes: {
        level: {
            control: { type: 'inline-radio' },
            options: [1, 2, 3, 4, 5, 6]
        },
        typoClassName: {
            control: { type: 'radio' },
            options: [
                'typo-display-lg',
                'typo-display-md',
                'typo-display-sm',
                'typo-headline-lg',
                'typo-headline-md',
                'typo-headline-sm',
                'typo-title-lg',
                'typo-title-md',
                'typo-title-sm'
            ]
        }
    }
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Heading',
    args: {
        fillClassName: '',
        level: 1,
        typoClassName: 'typo-headline-lg',
        weight: 'regular',
        // @ts-ignore
        slotDefault: `タイトル`
    },
    render: (args) => ({
        components: { Heading },
        setup() {
            return { args }
        },
        template: `
            <Heading v-bind="args">
                ${args.slotDefault}
            </Heading>
        `
    })
}
