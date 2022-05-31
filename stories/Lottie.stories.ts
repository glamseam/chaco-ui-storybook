import type { Meta, StoryObj } from '@storybook/vue3'
import Lottie from '@glamseam/chaco-ui/dist/components/Lottie.vue'
import LottieLikeButton from '@assets/data/lottie-json/38920-like-button.json'

type Comp = InstanceType<typeof Lottie>

const meta: Meta<Comp> = {
    title: 'Lottie',
    component: Lottie
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Lottie',
    args: {
        animationData: LottieLikeButton,
        className: '',
        description: '',
        isAutoPlay: true,
        isLoop: true,
        title: ''
    },
    render: (args) => ({
        components: {
            Lottie
        },
        setup() {
            return { args }
        },
        template: `
            <div :style="{ width: '100%', maxWidth: '360px'}">
                <Lottie v-bind="args" />
            </div>
        `
    })
}
