import type { Meta, StoryObj } from '@storybook/vue3'
import BottomAppBar from '@glamseam/chaco-ui/dist/components/BottomAppBar.vue'
import ButtonNavWithUnderText from '@glamseam/chaco-ui/dist/components/buttons/ButtonNavWithUnderText.vue'

type Comp = InstanceType<typeof BottomAppBar>

const meta: Meta<Comp> = {
    title: 'BottomAppBar',
    component: BottomAppBar,
    argTypes: {
        isActive: {
            control: { type: 'boolean' },
            defaultValue: false
        },
        isDisabled: {
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
    name: 'BottomAppBar',
    args: {
        isContentCenter: true
    },
    render: (args) => ({
        components: {
            BottomAppBar,
            ButtonNavWithUnderText
        },
        setup() {
            return { args }
        },
        template: `
            <BottomAppBar v-bind="args">
                <template #default="slotProps">
                    <ButtonNavWithUnderText
                        :class-name="slotProps.navButtonClass"
                        color-type="secondary"
                        icon="notification"
                        :is-active="args.isActive"
                        :is-disabled="args.isDisabled"
                        :text="args.helperText"
                    />
                    <ButtonNavWithUnderText
                        :class-name="slotProps.navButtonClass"
                        color-type="secondary"
                        icon="camera"
                        :is-active="args.isActive"
                        :is-disabled="args.isDisabled"
                        text="Camera"
                    />
                    <ButtonNavWithUnderText
                        :class-name="slotProps.navButtonClass"
                        color-type="secondary"
                        icon="car"
                        :is-active="args.isActive"
                        :is-disabled="args.isDisabled"
                        text="Drive"
                    />
                    <ButtonNavWithUnderText
                        :class-name="slotProps.navButtonClass"
                        color-type="secondary"
                        icon="shop"
                        :is-active="args.isActive"
                        :is-disabled="args.isDisabled"
                        text="Shop"
                    />
                </template>
            </BottomAppBar>
        `
    })
}
