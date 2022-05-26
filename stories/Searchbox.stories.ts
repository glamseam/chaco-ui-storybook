import type { Meta, StoryObj } from '@storybook/vue3'
import Searchbox from '@glamseam/chaco-ui/dist/components/Searchbox.vue'
import ButtonIcon from '@glamseam/chaco-ui/dist/components/buttons/ButtonIcon.vue'

type Comp = InstanceType<typeof Searchbox>

const meta: Meta<Comp> = {
    title: 'Searchbox',
    component: Searchbox
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Searchbox',
    args: {
        classNameSuffix: 'default',
        isTransparent: false,
        placeholderText: '検索ワード',
        value: ''
    },
    render: (args) => ({
        components: {
            Searchbox,
            ButtonIcon
        },
        setup() {
            return { args }
        },
        template: `
            <div :style="{ width: '100%', maxWidth: '600px'}">
                <Searchbox v-bind="args">
                    <ButtonIcon
                        color-type="neutral"
                        style-type="ghost"
                        icon="close-circle"
                        size="lg"
                    />
                </Searchbox>
            </div>
        `
    })
}
