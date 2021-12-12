import type { Meta, StoryObj } from '@storybook/vue3'
import BottomNav from '@glamseam/chaco-ui/dist/components/BottomNav.vue'
import ButtonIcon from '@glamseam/chaco-ui/dist/components/buttons/ButtonIcon.vue'

type Comp = InstanceType<typeof BottomNav>

const meta: Meta<Comp> = {
    title: 'BottomNav',
    component: BottomNav,
    argTypes: {
        isActive: {
            control: { type: 'boolean' },
            defaultValue: false
        },
        helperText: {
            control: { type: 'text' },
            defaultValue: 'テキスト'
        }
    }
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'BottomNav',
    args: {
        classNameSuffix: 'main',
        isContentCenter: true
    },
    render: (args) => ({
        components: {
            BottomNav,
            ButtonIcon
        },
        setup() {
            return { args }
        },
        template: `
            <BottomNav v-bind="args">
                <ButtonIcon
                    class-name="bottom-nav-button"
                    :helper-text="args.helperText"
                    :is-active="args.isActive"
                    shape="bell"
                    size="bottom-nav"
                />
                <ButtonIcon
                    class-name="bottom-nav-button"
                    helper-text="Burger"
                    :is-active="args.isActive"
                    shape="cheeseburger"
                    size="bottom-nav"
                />
                <ButtonIcon
                    class-name="bottom-nav-button"
                    :helper-text="args.helperText"
                    :is-active="args.isActive"
                    shape="bookmark"
                    size="bottom-nav"
                />
                <ButtonIcon
                    class-name="bottom-nav-button"
                    helper-text="Menu"
                    :is-active="args.isActive"
                    shape="menu"
                    size="bottom-nav"
                />
            </BottomNav>
        `
    })
}
