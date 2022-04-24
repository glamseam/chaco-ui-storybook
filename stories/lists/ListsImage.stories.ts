import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import ListsImage from '@glamseam/chaco-ui/dist/components/lists/ListsImage.vue'
import Imgix from '@glamseam/chaco-ui/dist/components/Imgix.vue'
import ListsImageActionButton from '@glamseam/chaco-ui/dist/components/lists/ListsImageActionButton.vue'
import RepeatGrid from '@glamseam/chaco-ui/dist/components/RepeatGrid.vue'
import { formUtil } from '@glamseam/chaco-ui/dist/utils/form'

type Comp = InstanceType<typeof ListsImage>

const meta: Meta<Comp> = {
    title: 'Lists/Image',
    component: ListsImage
}

const images = [
    { id: '1', src: '/example%2F001.jpg' },
    { id: '2', src: '/example%2F002.jpg' },
    { id: '3', src: '/example%2F003.jpg' },
    { id: '4', src: '/example%2F004.jpg' },
    { id: '5', src: '/example%2F005.jpg' },
    { id: '6', src: '/example%2F006.jpg' }
]

export default meta
export const Default: StoryObj<Comp> = {
    name: 'Image',
    args: {
        classNameSuffix: 'main'
    },
    decorators: [
        () => ({
            components: { RepeatGrid },
            template: `
                <RepeatGrid
                    gap="var(--grid-image-gap)"
                    item-min-width="112px"
                >
                    <story />
                </RepeatGrid>
            `
        })
    ],
    render: (args) => ({
        components: {
            ListsImage,
            ListsImageActionButton,
            Imgix
        },
        setup() {
            const handleClick = () => {
                console.log('Click!!')
            }

            return {
                args,
                images,
                handleClick
            }
        },
        template: `
            <ListsImage
                v-for="image in images"
                :key="image.id"
                v-bind="args"
                :image="image"
            >
                <template #default="listsImageSlotProps">
                    <Imgix
                        :aspect-ratio="{
                            horizontal: 1,
                            vertical: 1
                        }"
                        :class-name="listsImageSlotProps.imageClassName"
                        :is-crop="true"
                        :img-src="listsImageSlotProps.imageUrl"
                        :width="84"
                    />
                </template>
                <template #actionButton>
                    <ListsImageActionButton @click="handleClick" />
                </template>
            </ListsImage>
        `
    })
}

export const InputCheckbox: StoryObj<Comp> = {
    name: 'InputCheckbox',
    args: {
        ...Default.args,
        checkedValue: undefined,
        inputName: 'listsImage',
        isDisabled: false
    },
    decorators: Default.decorators,
    render: (args) => ({
        components: {
            ListsImage,
            Imgix
        },
        setup() {
            const checkedRef = ref([])
            const updateCheckboxValues = formUtil()
                .updateCheckboxValues.bind(null, checkedRef.value)
            return {
                args,
                images,
                checkedRef,
                updateCheckboxValues
            }
        },
        template: `
            <ListsImage
                v-for="image in images"
                :key="image.id"
                v-bind="args"
                :image="image"
                :checkedValue="checkedRef"
                :isSelectedMode="true"
                @update-value="updateCheckboxValues"
            >
                <template #default="listsImageSlotProps">
                    <Imgix
                        :aspect-ratio="{
                            horizontal: 1,
                            vertical: 1
                        }"
                        :class-name="listsImageSlotProps.imageClassName"
                        :is-crop="true"
                        :img-src="listsImageSlotProps.imageUrl"
                        :width="84"
                    />
                </template>
            </ListsImage>
        `
    })
}

export const InputRadio: StoryObj<Comp> = {
    name: 'InputRadio',
    args: InputCheckbox.args,
    decorators: Default.decorators,
    render: (args) => ({
        components: {
            ListsImage,
            Imgix
        },
        setup() {
            const checkedRef = ref('')

            return {
                args,
                images,
                checkedRef
            }
        },
        template: `
            <ListsImage
                v-for="image in images"
                :key="image.id"
                v-bind="args"
                :image="image"
                :checkedValue="checkedRef"
                :isSelectedMode="true"
                @update-value="(payload) => checkedRef = payload.value"
            >
                <template #default="listsImageSlotProps">
                    <Imgix
                        :aspect-ratio="{
                            horizontal: 1,
                            vertical: 1
                        }"
                        :class-name="listsImageSlotProps.imageClassName"
                        :is-crop="true"
                        :img-src="listsImageSlotProps.imageUrl"
                        :width="84"
                    />
                </template>
            </ListsImage>
        `
    })
}
