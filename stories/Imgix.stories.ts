import type { Meta, StoryObj } from '@storybook/vue3'
import Imgix from '@glamseam/chaco-ui/dist/components/Imgix.vue'

type Comp = InstanceType<typeof Imgix>

const meta: Meta<Comp> = {
    title: 'Imgix',
    component: Imgix
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Imgix',
    args: {
        altText: '',
        aspectRatio: {
            vertical: 10,
            horizontal: 16
        },
        className: '',
        imgSrc: '/example%2F001.jpg',
        isCircle: false,
        isCrop: false,
        isOutputSrcset: true,
        isRounded: false,
        roleName: '',
        width: 360
    },
    render: (args) => ({
        components: {
            Imgix
        },
        setup() {
            return { args }
        },
        template: `
            <div :style="{ width: '100%', maxWidth: '360px'}">
                <Imgix v-bind="args" />
            </div>
        `
    })
}
