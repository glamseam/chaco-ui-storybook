import type { Meta, StoryObj } from '@storybook/vue3'
import Definition from '@glamseam/chaco-ui/dist/components/Definition.vue'

type Comp = InstanceType<typeof Definition>

const meta: Meta<Comp> = {
    title: 'Definition',
    component: Definition,
    argTypes: {
        dtMarginBottomSize: {
            control: { type: 'inline-radio' },
            options: ['0', '25', '50', '75', '100', '125', '150', '175', '200', 'auto']
        },
        marginBottomSize: {
            control: { type: 'inline-radio' },
            options: ['0', '25', '50', '75', '100', '125', '150', '175', '200', 'auto']
        }
    }
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Definition',
    args: {
        dtTypoClassName: 'typo-caption',
        dtColorClassName: 'ink-on-surface-low',
        dtMarginBottomSize: '0',
        isColumn: false,
        isDtBold: false,
        marginBottomSize: '125',
        title: 'タイトル',
        // @ts-ignore
        slotDefault: `<p class="typo-body1 ink-on-surface-high">
    ここにはスロット
</p>`
    },
    render: (args) => ({
        components: { Definition },
        setup() {
            return { args }
        },
        template: `
            <Definition v-bind="args">
                ${args.slotDefault}
            </Definition>
        `
    })
}
