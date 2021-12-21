import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonIcon from '@glamseam/chaco-ui/dist/components/buttons/ButtonIcon.vue'
import ButtonText from '@glamseam/chaco-ui/dist/components/buttons/ButtonText.vue'
import Card from '@glamseam/chaco-ui/dist/components/cards/Card.vue'
import CardHeader from '@glamseam/chaco-ui/dist/components/cards/CardHeader.vue'
import Imgix from '@glamseam/chaco-ui/dist/components/Imgix.vue'
import Spacer from '@glamseam/chaco-ui/dist/components/spacers/Spacer.vue'

import * as CardStories from '../Card.stories'

type Comp = InstanceType<typeof Card>

const meta: Meta<Comp> = {
    title: 'Cards/Examples/01',
    component: Card,
    argTypes: {
        // @ts-ignore
        isMediaTop: {
            control: { type: 'boolean' }
        },
        // @ts-ignore
        isActionBar: {
            control: { type: 'boolean' }
        }
    }
}

export default meta
export const Default: StoryObj<Comp> = {
    name: '01',
    args: CardStories.Default.args,
    render: (args) => ({
        components: {
            ButtonIcon,
            ButtonText,
            Card,
            CardHeader,
            Imgix,
            Spacer
        },
        setup() {
            return { args }
        },
        template: `
            <Card v-bind="args">
                <template #default="cardSlotProps">
                    <template v-if="args.isMediaTop">
                        <Imgix
                            :aspect-ratio="{
                                horizontal: 16,
                                vertical: 10
                            }"
                            :class-name="cardSlotProps.mediaTopClass"
                            :is-crop="true"
                            :is-rounded="false"
                            img-src="/example%2F002.jpg"
                            :width="344"
                        />
                    </template>
                    <CardHeader
                        img-src="https://avatars.githubusercontent.com/u/25496839"
                        primary-text="タイトル01"
                        secondary-text="セカンダリー"
                    />
                    <template v-if="!args.isMediaTop">
                        <Imgix
                            :aspect-ratio="{
                                horizontal: 16,
                                vertical: 10
                            }"
                            :is-crop="true"
                            :is-rounded="false"
                            img-src="/example%2F002.jpg"
                            :width="344"
                        />
                    </template>
                    <div class="card-body">
                        <p class="typo-body2 typo-pre-line-break-word typo-line-clamp-3 ink-on-surface-middle">
                            木曾路はすべて山の中である。<br>
                            あるところは岨づたいに行く崖の道であり、あるところは数十間の深さに臨む木曾川の岸であり、あるところは山の尾をめぐる谷の入り口である。一筋の街道はこの深い森林地帯を貫いていた
                        </p>
                    </div>
                    <template v-if="args.isActionBar">
                        <div class="card-action-bar">
                            <ButtonText
                                class-name="button-primary-transparent"
                                text="accept"
                            />
                            <Spacer
                                direction="right"
                                :is-inline="true"
                                size="auto"
                            />
                            <ButtonIcon
                                class-name="card-icon-button"
                                shape="share"
                                size="sm"
                            />
                            <Spacer
                                direction="right"
                                :is-inline="true"
                                size="25"
                            />
                            <ButtonIcon
                                class-name="card-icon-button"
                                shape="ellipsis-v"
                                size="sm"
                            />
                        </div>
                    </template>
                </template>
            </Card>
        `
    })
}
