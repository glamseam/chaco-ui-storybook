import type { Meta, StoryObj } from '@storybook/vue3'
import Container from '@glamseam/chaco-ui/dist/components/Container.vue'

type Comp = InstanceType<typeof Container>

const meta: Meta<Comp> = {
    title: 'Container',
    component: Container,
    argTypes: {
        padTopSize: {
            control: { type: 'inline-radio' },
            options: ['xs', 'sm', 'md', 'lg', 'xl']
        },
        padBottomSize: {
            control: { type: 'inline-radio' },
            options: ['xs', 'sm', 'md', 'lg', 'xl']
        }
    }
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Container',
    args: {
        isNarrow: false,
        // @ts-ignore
        slotDefault: 'コンテナ'
    },
    render: (args) => ({
        components: { Container },
        setup() {
            return { args }
        },
        template: `
            <Container v-bind="args">
                ${args.slotDefault}
            </Container>
        `
    })
}
