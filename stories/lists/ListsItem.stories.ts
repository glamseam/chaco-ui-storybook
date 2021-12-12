import type { Meta, StoryObj } from '@storybook/vue3'
import ListsItem from '@glamseam/chaco-ui/dist/components/lists/ListsItem.vue'
import ListsItemContainer from '@glamseam/chaco-ui/dist/components/lists/ListsItemContainer.vue'
import AcdProvider from '@glamseam/chaco-ui/dist/components/accordions/Provider.vue'
import AcdInjectedOpenClose from '@glamseam/chaco-ui/dist/components/accordions/InjectedOpenClose.vue'
import AcdInjectedBody from '@glamseam/chaco-ui/dist/components/accordions/InjectedBody.vue'

type Comp = InstanceType<typeof ListsItem>

const meta: Meta<Comp> = {
    title: 'Lists/Item',
    component: ListsItem
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Normal',
    decorators: [
        () => ({
            template: `
                <ul class="lists-item-pure-styled">
                    <story />
                </ul>
            `
        })
    ],
    render: (args) => ({
        components: { ListsItem },
        setup() {
            return { args }
        },
        template: `
            <li class="lists-item-pure-styled-text">
                ビュー
            </li>
            <li class="lists-item-pure-styled-text">
                <a
                    class="colored-link"
                    href="https://beta.reactjs.org/"
                    target="_blank"
                    rel="noopener"
                >リアクト</a>
            </li>
            <li class="lists-item-pure-styled-text">
                アンギュラー
            </li>
        `
    })
}

export const Button: StoryObj<Comp> = {
    name: 'Button',
    args: {
        anchor: undefined,
        classNameSuffix: 'main',
        idName: '',
        isActive: false,
        isDisabled: false,
        isIndent: false,
        isRounded: false,
        isSmallOfLeftIconMargin: false,
        isSmallOfPrimaryText: false,
        leftIcon: '',
        leftIconImage: undefined,
        primaryText: 'プライマリーテキスト',
        secondaryText: 'セカンダリーテキスト'
    },
    decorators: [
        () => ({
            components: { ListsItemContainer },
            template: `
                <ul>
                    <ListsItemContainer>
                        <story />
                    </ListsItemContainer>
                </ul>
            `
        })
    ],
    render: (args) => ({
        components: { ListsItem },
        setup() {
            return { args }
        },
        template: `<ListsItem v-bind="args"/>`
    })
}

export const ButtonWithAccordion: StoryObj<Comp> = {
    name: 'ButtonWithAccordion',
    args: Button.args,
    decorators: Button.decorators,
    render: (args) => ({
        components: {
            ListsItem,
            AcdProvider,
            AcdInjectedOpenClose,
            AcdInjectedBody
        },
        setup() {
            return { args }
        },
        template: `
            <AcdProvider>
                <AcdInjectedOpenClose>
                    <template #default="slotProps">
                        <ListsItem
                            v-bind="args"
                            :acd-angled-icon="slotProps.iconShape"
                            @click="slotProps.openClose"
                        />
                    </template>
                </AcdInjectedOpenClose>
                <AcdInjectedBody>
                    <p class="px-100 typo-body2 ink-on-surface-middle">
                        木曾路はすべて山の中である。あるところは岨づたいに行く崖の道であり、あるところは数十間の深さに臨む木曾川の岸であり、あるところは山の尾をめぐる谷の入り口である。一筋の街道はこの深い森林地帯を貫いていた。<br>東ざかいの桜沢から、西の十曲峠まで、木曾十一宿はこの街道に添うて、二十二里余にわたる長い谿谷の間に散在していた。道路の<a
                            class="colored-link"
                            href="https://yahoo.co.jp"
                        >位置</a>も幾たびか改まったもので、古道はいつのまにか深い山間に埋もれた。
                    </p>
                </AcdInjectedBody>
            </AcdProvider>
        `
    })
}
