import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import PayjpCardFormV2 from '@glamseam/chaco-ui/dist/templates/payjp/PayjpCardFormV2.vue'
import type { PayjpCardFormV2Expose, CreateTokenError } from '@glamseam/chaco-ui/dist/templates/payjp/PayjpCardFormV2.vue'
import ButtonText from '@glamseam/chaco-ui/dist/components/buttons/ButtonText.vue'

type Comp = InstanceType<typeof PayjpCardFormV2>

const meta: Meta<Comp> = {
    title: 'Payjp/CardFormV2',
    component: PayjpCardFormV2
}

export default meta
export const Default: StoryObj<Comp> = {
    name: 'CardFormV2',
    args: {
        errorText: '',
        isDarkTheme: false,
        supportingText: ''
    },
    render: (args) => ({
        components: {
            PayjpCardFormV2,
            ButtonText
        },
        setup() {
            const payjpCardFormRef = ref<PayjpCardFormV2Expose>()
            const handleLoaded = (isSuccess: boolean) => {
                console.log('payjp', isSuccess)
            }

            const createToken = () => {
                payjpCardFormRef.value?.createToken()
                    .then((response) => {
                        console.log('response', response)
                    })
                    .catch((error: CreateTokenError) => {
                        console.log('error', error)
                    })
            }

            return {
                args,
                payjpCardFormRef,
                handleLoaded,
                createToken
            }
        },
        template: `
            <PayjpCardFormV2
                ref="payjpCardFormRef"
                v-bind="args"
                @on-loaded="handleLoaded($event)"
            />
            <div class="mb-200" />
            <ButtonText
                class-name="button-primary"
                text="create token"
                @click="createToken"
            />
        `
    })
}
