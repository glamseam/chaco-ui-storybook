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
                'typo-h1',
                'typo-h2',
                'typo-h3',
                'typo-h4',
                'typo-h5',
                'typo-h6',
                'typo-subtitle1',
                'typo-subtitle2',
                'typo-caption',
                'typo-overline'
            ]
        },
        weight: {
            control: { type: 'radio' },
            options: [
                'thin',
                'light',
                'regular',
                'medium',
                'bold',
                'black'
            ]
        }
    }
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Heading',
    args: {
        fillClassName: 'ink-on-surface-high',
        level: 1,
        typoClassName: 'typo-h1',
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
