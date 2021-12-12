import type { Meta, StoryObj } from '@storybook/vue3'
import Card from '@glamseam/chaco-ui/dist/components/cards/Card.vue'

type Comp = InstanceType<typeof Card>

const meta: Meta<Comp> = {
    title: 'Cards/Card',
    component: Card
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Card',
    args: {
        isBorder: false,
        isOneColumn: false,
        isShadow: false
    },
    render: (args) => ({
        components: { Card },
        setup() {
            return { args }
        },
        template: `
            <Card v-bind="args">
                <p>
                    カードのラッパー
                </p>
            </Card>
        `
    })
}
