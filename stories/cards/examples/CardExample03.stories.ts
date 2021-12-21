import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonIcon from '@glamseam/chaco-ui/dist/components/buttons/ButtonIcon.vue'
import ButtonText from '@glamseam/chaco-ui/dist/components/buttons/ButtonText.vue'
import Card from '@glamseam/chaco-ui/dist/components/cards/Card.vue'
import CardHeader from '@glamseam/chaco-ui/dist/components/cards/CardHeader.vue'
import Imgix from '@glamseam/chaco-ui/dist/components/Imgix.vue'
import Spacer from '@glamseam/chaco-ui/dist/components/spacers/Spacer.vue'

import AcdProvider from '@glamseam/chaco-ui/dist/components/accordions/Provider.vue'
import AcdInjectedOpenClose from '@glamseam/chaco-ui/dist/components/accordions/InjectedOpenClose.vue'
import AcdInjectedBody from '@glamseam/chaco-ui/dist/components/accordions/InjectedBody.vue'

import * as CardStories from '../Card.stories'

type Comp = InstanceType<typeof Card>

const meta: Meta<Comp> = {
    title: 'Cards/Examples/03',
    component: Card,
    argTypes: {
        // @ts-ignore
        isActionBar: {
            control: { type: 'boolean' }
        }
    }
}

export default meta
export const Default: StoryObj<Comp> = {
    name: '03',
    args: CardStories.Default.args,
    render: (args) => ({
        components: {
            ButtonIcon,
            ButtonText,
            Card,
            CardHeader,
            Imgix,
            Spacer,
            AcdProvider,
            AcdInjectedOpenClose,
            AcdInjectedBody
        },
        setup() {
            return { args }
        },
        template: `
            <Card v-bind="args">
                <template #default="cardSlotProps">
                    <AcdProvider>
                        <Imgix
                            :aspect-ratio="{
                                horizontal: 16,
                                vertical: 10
                            }"
                            :class-name="cardSlotProps.mediaTopClass"
                            :is-crop="true"
                            :is-rounded="false"
                            img-src="/example%2F004.jpg"
                            :width="344"
                        />
                        <CardHeader
                            img-src="https://avatars.githubusercontent.com/u/25496839"
                            primary-text="タイトル01"
                            secondary-text="セカンダリー"
                        >
                            <template #actionButton="actionButtonSlotProps">
                                <AcdInjectedOpenClose>
                                    <template #default="acdSlotProps">
                                        <ButtonIcon
                                            :class-name="actionButtonSlotProps.actionButtonClass"
                                            :shape="acdSlotProps.iconShape"
                                            size="sm"
                                            @click="acdSlotProps.openClose"
                                        />
                                    </template>
                                </AcdInjectedOpenClose>
                            </template>
                        </CardHeader>
                        <AcdInjectedBody>
                            <div class="card-body">
                                <hr class="card-body-hr">
                                <p class="typo-body2 typo-pre-line-break-word typo-line-clamp-3 ink-on-surface-middle">
                                    木曾路はすべて山の中である。<br>
                                    あるところは岨づたいに行く崖の道であり、あるところは数十間の深さに臨む木曾川の岸であり、あるところは山の尾をめぐる谷の入り口である。一筋の街道はこの深い森林地帯を貫いていた
                                </p>
                            </div>
                        </AcdInjectedBody>
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
                    </AcdProvider>
                </template>
            </Card>
        `
    })
}
