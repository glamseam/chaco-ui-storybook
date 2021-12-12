import type { Meta, StoryObj } from '@storybook/vue3'
import CardMini from '@glamseam/chaco-ui/dist/components/cards/CardMini.vue'
import Card from '@glamseam/chaco-ui/dist/components/cards/Card.vue'
import Imgix from '@glamseam/chaco-ui/dist/components/Imgix.vue'

type Comp = InstanceType<typeof CardMini>

const meta: Meta<Comp> = {
    title: 'Cards/Mini',
    component: CardMini,
    argTypes: {
        titleLineClamp: {
            control: { type: 'inline-radio' },
            options: [1, 2, 3]
        }
    }
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Mini',
    args: {
        imgSrc: '/example%2F008.jpg',
        isMediaRight: false,
        title: 'ストーリーブック6.4 CSF V3で構築。Storybook7.0が待ち遠しい！',
        titleLineClamp: 1,
        supportingText: `木曾路はすべて山の中である。あるところは岨づたいに行く崖の道であり、あるところは数十間の深さに臨む木曾川の岸であり、あるところは山の尾をめぐる谷の入り口である。一筋の街道はこの深い森林地帯を貫いていた。`
    },
    render: (args) => ({
        components: {
            Card,
            CardMini,
            Imgix
        },
        setup() {
            return { args }
        },
        template: `
            <Card>
                <CardMini v-bind="args">
                    <template #media="cardMiniMediaSlotProps">
                        <Imgix
                            :aspect-ratio="{
                                horizontal: 1,
                                vertical: 1
                            }"
                            :class-name="cardMiniMediaSlotProps.mediaClass"
                            :is-crop="true"
                            :img-src="cardMiniMediaSlotProps.mediaUrl"
                            :width="72"
                        />
                    </template>
                </CardMini>
            </Card>
        `
    })
}
