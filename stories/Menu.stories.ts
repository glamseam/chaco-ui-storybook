import type { Meta, StoryObj } from '@storybook/vue3'
import { onMounted, ref } from 'vue'
import Menu from '@glamseam/chaco-ui/dist/components/Menu.vue'
import ButtonIcon from '@glamseam/chaco-ui/dist/components/buttons/ButtonIcon.vue'
import ListsItem from '@glamseam/chaco-ui/dist/components/lists/ListsItem.vue'
import ListsItemContainer from '@glamseam/chaco-ui/dist/components/lists/ListsItemContainer.vue'

type Comp = InstanceType<typeof Menu>

const meta: Meta<Comp> = {
    title: 'Menu',
    component: Menu,
    argTypes: {
        position: {
            control: { type: 'radio' },
            options: ['up-center', 'up-left', 'up-right', 'down-center', 'down-left', 'down-right']
        }
    }
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Menu',
    args: {
        position: 'down-left'
    },
    render: (args) => ({
        components: {
            Menu,
            ButtonIcon,
            ListsItem,
            ListsItemContainer
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
            <Menu v-bind="args">
                <template #openCloseButton="slotProps">
                    <ButtonIcon
                        aria-label="メニューを開く"
                        class-name="card-icon-button"
                        shape="share"
                        size="md"
                        @click="slotProps.openClose"
                    />
                </template>
                <template #item>
                    <ListsItemContainer>
                        <ListsItem
                            left-icon="brand-twitter"
                            primary-text="Twitter"
                        />
                    </ListsItemContainer>
                    <ListsItemContainer>
                        <ListsItem
                            left-icon="brand-facebook"
                            primary-text="Facebook"
                        />
                    </ListsItemContainer>
                </template>
            </Menu>
        `
    })
}
