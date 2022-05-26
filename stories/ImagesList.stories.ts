import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import FormImageSelect from '@glamseam/chaco-ui/dist/components/forms/FormImageSelect.vue'
import ImagesListSquare from '@glamseam/chaco-ui/dist/components/images-list/Square.vue'
import ImagesListActionButton from '@glamseam/chaco-ui/dist/components/images-list/ActionButton.vue'
import Imgix from '@glamseam/chaco-ui/dist/components/Imgix.vue'
import RepeatGrid from '@glamseam/chaco-ui/dist/components/RepeatGrid.vue'
import { formUtil } from '@glamseam/chaco-ui/dist/utils/form'

type Comp = InstanceType<typeof ImagesListSquare>

const meta: Meta<Comp> = {
    title: 'Images/List',
    component: ImagesListSquare
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
    decorators: [
        () => ({
            components: { RepeatGrid },
            template: `
                <RepeatGrid
                    gap="var(--grid-gap-image)"
                    item-min-width="112px"
                >
                    <story />
                </RepeatGrid>
            `
        })
    ],
    render: (args) => ({
        components: {
            ImagesListSquare,
            ImagesListActionButton,
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
            <ImagesListSquare
                v-for="image in images"
                :key="image.id"
                :image="image"
            >
                <template #default="ImagesListSquareSlotProps">
                    <Imgix
                        :aspect-ratio="{
                            horizontal: 1,
                            vertical: 1
                        }"
                        :class-name="ImagesListSquareSlotProps.imageClassName"
                        :is-crop="true"
                        :img-src="ImagesListSquareSlotProps.imageUrl"
                        :width="84"
                    />
                </template>
                <template #action>
                    <ImagesListActionButton @click="handleClick" />
                </template>
            </ImagesListSquare>
        `
    })
}

export const InputCheckbox: StoryObj<Comp> = {
    name: 'InputCheckbox',
    decorators: Default.decorators,
    render: (args) => ({
        components: {
            FormImageSelect,
            ImagesListSquare,
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
            <ImagesListSquare
                v-for="image in images"
                :key="image.id"
                :image="image"
            >
                <template #default="ImagesListSquareSlotProps">
                    <Imgix
                        :aspect-ratio="{
                            horizontal: 1,
                            vertical: 1
                        }"
                        :class-name="ImagesListSquareSlotProps.imageClassName"
                        :is-crop="true"
                        :img-src="ImagesListSquareSlotProps.imageUrl"
                        :width="84"
                    />
                </template>
                <template #action>
                    <FormImageSelect
                        v-bind="args"
                        :image="image"
                        :checkedValue="checkedRef"
                        @update-value="updateCheckboxValues"
                    />
                </template>
            </ImagesListSquare>
        `
    })
}

export const InputRadio: StoryObj<Comp> = {
    name: 'InputRadio',
    decorators: Default.decorators,
    render: (args) => ({
        components: {
            FormImageSelect,
            ImagesListSquare,
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
            <ImagesListSquare
                v-for="image in images"
                :key="image.id"
                :image="image"
            >
                <template #default="ImagesListSquareSlotProps">
                    <Imgix
                        :aspect-ratio="{
                            horizontal: 1,
                            vertical: 1
                        }"
                        :class-name="ImagesListSquareSlotProps.imageClassName"
                        :is-crop="true"
                        :img-src="ImagesListSquareSlotProps.imageUrl"
                        :width="84"
                    />
                </template>
                <template #action>
                    <FormImageSelect
                        v-bind="args"
                        :image="image"
                        :checkedValue="checkedRef"
                        @update-value="(payload) => checkedRef = payload.value"
                    />
                </template>
            </ImagesListSquare>
        `
    })
}
