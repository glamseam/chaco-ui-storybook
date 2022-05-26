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
        className: '',
        label: '',
        roleName: '',
        symbolId: 'svg-icon-brand-spotify',
        viewBox: '0 0 24 24',
        withTitle: false
    },
    render: (args) => ({
        components: { InlineSvg },
        setup() {
            return { args }
        },
        template: `
            <InlineSvg
                v-bind="args"
                :style="{
                    width: '24px',
                    height: '24px'
                }"
            />
        `
    })
}
