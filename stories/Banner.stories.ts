import type { Meta, StoryObj } from '@storybook/vue3'
import Banner from '@glamseam/chaco-ui/dist/components/Banner.vue'
import ButtonText from '@glamseam/chaco-ui/dist/components/buttons/ButtonText.vue'
import Spacer from '@glamseam/chaco-ui/dist/components/spacers/Spacer.vue'

type Comp = InstanceType<typeof Banner>

const meta: Meta<Comp> = {
    title: 'Banner',
    component: Banner
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Banner',
    args: {
        // @ts-ignore
        slotDefault: `<p>このサイトでは、トラフィックを分析するために、ユーザーの好みを記憶し、エクスペリエンスを最適化するためにCookieを使用しています。<br>
この使用を承諾する場合は「OK」を押してください。</p>`
    },
    render: (args) => ({
        components: {
            Banner,
            ButtonText,
            Spacer
        },
        setup() {
            return { args }
        },
        template: `
            <Banner>
                <template #default>
                    ${args.slotDefault}
                </template>
                <template #actionBar>
                    <ButtonText
                        :anchor="{
                            href: 'https://policies.google.com/technologies/partner-sites?hl=ja',
                            isNewTab: true
                        }"
                        color-type="neutral"
                        style-type="ghost"
                        :is-outlined="true"
                        size="sm"
                        text="詳しく"
                    />
                    <Spacer
                        direction="right"
                        :is-inline="true"
                        size="auto"
                    />
                    <ButtonText
                        color-type="neutral"
                        style-type="ghost"
                        size="sm"
                        text="拒否"
                    />
                    <Spacer
                        direction="right"
                        :is-inline="true"
                        size="50"
                    />
                    <ButtonText
                        color-type="secondary"
                        style-type="filled"
                        size="sm"
                        text="OK"
                    />
                </template>
            </Banner>
        `
    })
}
