import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import LoadingSpinner from '@glamseam/chaco-ui/dist/components/LoadingSpinner.vue'
import ButtonText from '@glamseam/chaco-ui/dist/components/buttons/ButtonText.vue'
import HighestLayer from '@glamseam/chaco-ui/dist/components/HighestLayer.vue'

type Comp = InstanceType<typeof LoadingSpinner>

const meta: Meta<Comp> = {
    title: 'LoadingSpinner',
    component: LoadingSpinner,
    argTypes: {
        type: {
            control: { type: 'radio' },
            options: [
                'on-screen',
                'on-button'
            ]
        }
    }
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'LoadingSpinner',
    args: {
        color: {
            light: 'inverse',
            dark: 'inverse'
        },
        type: 'on-button'
    },
    render: (args) => ({
        components: {
            LoadingSpinner,
            ButtonText,
            HighestLayer
        },
        setup() {
            const isShowLoadingScreen = ref(false)
            const showLoadingScreen = () => {
                isShowLoadingScreen.value = !isShowLoadingScreen.value
            }
            return {
                args,
                isShowLoadingScreen,
                showLoadingScreen
            }
        },
        template: `
            <ButtonText
                color-type="primary"
                style-type="filled"
                text="Primary"
                size="md"
                @click="showLoadingScreen"
            >
                <template #rightContent>
                    <LoadingSpinner v-bind="args" />
                </template>
            </ButtonText>
            <div v-if="isShowLoadingScreen">
                <Teleport to="#teleportTopLayer">
                    <HighestLayer
                        :is-show="isShowLoadingScreen"
                        :with-scrim="true"
                    >
                        <div
                            class="loading-spinner-on-screen-container"
                            @click="showLoadingScreen"
                        >
                            <LoadingSpinner type="on-screen" />
                        </div>
                    </HighestLayer>
                </Teleport>
            </div>
        `
    })
}
