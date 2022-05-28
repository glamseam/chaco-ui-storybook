import type { Meta, StoryObj } from '@storybook/vue3'
import FloatingMenu from '@glamseam/chaco-ui/dist/components/FloatingMenu.vue'
import ButtonIcon from '@glamseam/chaco-ui/dist/components/buttons/ButtonIcon.vue'
import ButtonNav from '@glamseam/chaco-ui/dist/components/buttons/ButtonNav.vue'

type Comp = InstanceType<typeof FloatingMenu>

const meta: Meta<Comp> = {
    title: 'FloatingMenu',
    component: FloatingMenu
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'FloatingMenu',
    render: () => ({
        components: {
            FloatingMenu,
            ButtonIcon,
            ButtonNav
        },
        template: `
            <FloatingMenu>
                <template #trigger="slotProps">
                    <ButtonIcon
                        aria-label="メニューを開く"
                        color-type="neutral"
                        style-type="ghost"
                        icon="share"
                        size="lg"
                        @click="slotProps.open"
                    />
                </template>
                <ButtonNav
                    color-type="secondary"
                    icon="brand-twitter"
                    size="xl"
                    text="Twitter"
                    :is-border-radius-none="true"
                />
                <ButtonNav
                    color-type="secondary"
                    icon="brand-facebook"
                    size="xl"
                    text="Meta facebook"
                    :is-border-radius-none="true"
                />
                <ButtonNav
                    color-type="secondary"
                    icon="brand-instagram"
                    size="xl"
                    text="Instagram"
                    :is-border-radius-none="true"
                />
                <ButtonNav
                    color-type="secondary"
                    icon="brand-google"
                    size="xl"
                    text="Alphabet Google"
                    :is-border-radius-none="true"
                />
            </FloatingMenu>
        `
    })
}
