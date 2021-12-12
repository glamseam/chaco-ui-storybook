import type { Meta, StoryObj } from '@storybook/vue3'
import Group from '@glamseam/chaco-ui/dist/components/Group.vue'

type Comp = InstanceType<typeof Group>

const meta: Meta<Comp> = {
    title: 'Group',
    component: Group,
    argTypes: {
        padTopSize: {
            control: { type: 'inline-radio' },
            options: ['xs', 'sm', 'md', 'lg', 'xl']
        },
        padBottomSize: {
            control: { type: 'inline-radio' },
            options: ['xs', 'sm', 'md', 'lg', 'xl']
        },
        tag: {
            control: { type: 'inline-radio' },
            options: ['article', 'aside', 'main', 'section']
        }
    }
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Group',
    args: {
        className: '',
        isPositionRelative: false,
        // @ts-ignore
        slotDefault: 'グループ',
        tag: 'section'
    },
    render: (args) => ({
        components: { Group },
        setup() {
            return { args }
        },
        template: `
            <Group v-bind="args">
                ${args.slotDefault}
            </Group>
        `
    })
}
