import type { Meta, StoryObj } from '@storybook/vue3'
import { onMounted, ref } from 'vue'
import Dialog from '@glamseam/chaco-ui/dist/components/Dialog.vue'
import ButtonText from '@glamseam/chaco-ui/dist/components/buttons/ButtonText.vue'

type Comp = InstanceType<typeof Dialog>

const meta: Meta<Comp> = {
    title: 'Dialog',
    component: Dialog,
    argTypes: {
        widthName: {
            control: { type: 'radio' },
            options: ['md', 'lg', 'xl']
        }
    }
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Dialog',
    args: {
        classNameSuffix: 'main',
        isActionButtonDanger: false,
        isDisabledActionButton: false,
        isDisabledCloseButton: false,
        isOutsideClose: true,
        isForceScroll: false,
        phrases: {
            close: 'ok',
            action: ''
        },
        title: 'ダイアログ',
        widthName: 'md',
        // @ts-ignore
        slotDefault: `木曾路はすべて山の中である。あるところは岨づたいに行く崖の道であり、あるところは数十間の深さに臨む木曾川の岸であり、あるところは山の尾をめぐる谷の入り口である。一筋の街道はこの深い森林地帯を貫いていた。<br>
東ざかいの桜沢から、西の十曲峠まで、木曾十一宿はこの街道に添うて、二十二里余にわたる長い谿谷の間に散在していた。`
    },
    render: (args) => ({
        components: {
            ButtonText,
            Dialog
        },
        setup() {
            const isShow = ref(false)
            onMounted(() => {
                isShow.value = true
            })

            return {
                args,
                isShow
            }
        },
        template: `
            <Dialog
                v-if="isShow"
                v-bind="args"
            >
                <template #open="slotProps">
                    <ButtonText
                        class-name="button-primary-transparent"
                        :is-outlined="true"
                        text="open dialog"
                        @click="slotProps.open"
                    />
                </template>
                <template v-if="${'slotDefault' in args}">
                    ${args.slotDefault}
                </template>
            </Dialog>
        `
    })
}
