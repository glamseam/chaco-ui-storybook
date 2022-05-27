import type { Meta, StoryObj } from '@storybook/vue3'
import Badge from '@glamseam/chaco-ui/dist/components/Badge.vue'

type Comp = InstanceType<typeof Badge>

const meta: Meta<Comp> = {
    title: 'Badge',
    component: Badge,
    argTypes: {
        colorClassName: {
            control: { type: 'radio' },
            options: [
                'badge-generic-default',
                'badge-generic-notification',
                'badge-generic-danger'
            ]
        }
    }
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Badge',
    args: {
        colorClassName: 'badge-generic-default',
        label: ''
    },
    render: (args) => ({
        components: { Badge },
        setup() {
            return { args }
        },
        template: `<Badge v-bind="args" />`
    })
}
