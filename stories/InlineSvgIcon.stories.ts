import type { Meta, StoryObj } from '@storybook/vue3'
import InlineSvg from '@glamseam/chaco-ui/dist/components/InlineSvg.vue'

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
        symbolId: 'svg-icon-bell',
        viewBox: '0 0 24 24',
        withTitle: false
    },
    render: (args) => ({
        components: { InlineSvg },
        setup() {
            return { args }
        },
        template: '<InlineSvg v-bind="args">'
    })
}
