import type { Meta, StoryObj } from '@storybook/vue3'
import SupportMessage from '@glamseam/chaco-ui/dist/components/SupportMessage.vue'
import ButtonText from '@glamseam/chaco-ui/dist/components/buttons/ButtonText.vue'
import Imgix from '@glamseam/chaco-ui/dist/components/Imgix.vue'

type Comp = InstanceType<typeof SupportMessage>

const meta: Meta<Comp> = {
    title: 'SupportMessage',
    component: SupportMessage
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'SupportMessage',
    args: {
        title: 'コンテンツがありません',
        // @ts-ignore
        slotMessage: 'コンテンツを作成するには下記の<br>「コンテンツを追加」ボタンを押してください。'
    },
    render: (args) => ({
        components: {
            ButtonText,
            Imgix,
            SupportMessage
        },
        setup() {
            return { args }
        },
        template: `
            <div :style="{ width: '100%', maxWidth: '600px'}">
                <SupportMessage v-bind="args">
                    <template #eyecatch>
                        <Imgix
                            alt-text="thought"
                            :aspectRatio="{
                                horizontal: 1,
                                vertical: 1
                            }"
                            img-src="/support-message/super-thank-you-undraw.png"
                            :width="400"
                        />
                    </template>
                    <template #message>
                        ${args.slotMessage}
                    </template>
                    <template #default>
                        <ButtonText
                            class-name="button-primary"
                            text="コンテンツを追加"
                        />
                    </template>
                </SupportMessage>
            </div>
        `
    })
}
