import type { Meta, StoryObj } from '@storybook/vue3'
import InlineSvg from '@glamseam/chaco-ui/dist/components/InlineSvg.vue'
import SvgUseWithIdPrefix from '@glamseam/chaco-ui/dist/components/SvgUseWithIdPrefix.vue'

type Comp = InstanceType<typeof InlineSvg>

const meta: Meta<Comp> = {
    title: 'InlineSvg',
    component: InlineSvg
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'InlineSvg',
    args: {
        className: 'icon-size',
        label: '',
        roleName: '',
        withTitle: false,
        //@ts-ignore
        name: 'bell'
    },
    render: (args) => ({
        components: {
            InlineSvg,
            SvgUseWithIdPrefix
        },
        setup() {
            return { args }
        },
        template: `
            <div :style="{ width: '100%', maxWidth: '128px'}">
                <InlineSvg v-bind="args">
                    <SvgUseWithIdPrefix :name="args.name" />
                </InlineSvg>
            </div>
        `
    })
}
