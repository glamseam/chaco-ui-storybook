import type { Meta, StoryObj } from '@storybook/vue3'
import HighestLayer from '@glamseam/chaco-ui/dist/components/HighestLayer.vue'

type Comp = InstanceType<typeof HighestLayer>

const meta: Meta<Comp> = {
    title: 'HighestLayer',
    component: HighestLayer
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'HighestLayer',
    args: {
        isShow: false,
        withScrim: false
    },
    render: (args) => ({
        components: { HighestLayer },
        setup() {
            return { args }
        },
        template: `
            <HighestLayer v-bind="args">
                <p>
                    Viewportの1番上に表示するコンポーネント<br>
                    Loading画面などで使用します。
                </p>
            </HighestLayer>
        `
    })
}
