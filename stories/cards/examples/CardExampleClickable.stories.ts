import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonIcon from '@glamseam/chaco-ui/dist/components/buttons/ButtonIcon.vue'
import ButtonText from '@glamseam/chaco-ui/dist/components/buttons/ButtonText.vue'
import Card from '@glamseam/chaco-ui/dist/components/cards/Card.vue'
import CardHeader from '@glamseam/chaco-ui/dist/components/cards/CardHeader.vue'
import Imgix from '@glamseam/chaco-ui/dist/components/Imgix.vue'
import Spacer from '@glamseam/chaco-ui/dist/components/spacers/Spacer.vue'
import SurfaceClickable from '@glamseam/chaco-ui/dist/components/SurfaceClickable.vue'

import * as CardStories from '../Card.stories'

type Comp = InstanceType<typeof Card>

const meta: Meta<Comp> = {
    title: 'Cards/Examples/Clickable',
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
    name: 'Clickable',
    args: CardStories.Default.args,
    render: (args) => ({
        components: {
            ButtonIcon,
            ButtonText,
            Card,
            CardHeader,
            Imgix,
            Spacer,
            SurfaceClickable
        },
        setup() {
            return { args }
        },
        template: `
            <Card v-bind="args">
                <template #default="cardSlotProps">
                    <SurfaceClickable class-name="card-clickable">
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
                            title="????????????01"
                            supporting-text="????????????????????????"
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
                        <div class="card-body-container">
                            <div class="card-body">
                                <p class="typo-body-md typo-pre-line-break-word typo-line-clamp-3">
                                    ??????????????????????????????????????????<br>
                                    ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                                </p>
                            </div>
                        </div>
                    </SurfaceClickable>
                    <template v-if="args.isActionBar">
                        <div class="card-body-line-container">
                            <div class="card-body-line" />
                        </div>
                        <div class="action-bar">
                            <ButtonText
                                color-type="primary"
                                style-type="ghost"
                                text="Read"
                            />
                            <Spacer
                                direction="right"
                                :is-inline="true"
                                size="auto"
                            />
                            <ButtonIcon
                                aria-label="?????????"
                                color-type="neutral"
                                style-type="ghost"
                                icon="share"
                                size="lg"
                            />
                            <ButtonIcon
                                aria-label="?????????????????????"
                                color-type="neutral"
                                style-type="ghost"
                                icon="more"
                                size="lg"
                            />
                        </div>
                    </template>
                </template>
            </Card>
        `
    })
}
