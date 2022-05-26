<template>
    <form>
        <FormFieldText
            v-model:value="addressRef.zipcode"
            class-name-suffix="default"
            :is-required="true"
            label="郵便番号"
            :max-length="7"
            supporting-text="ハイフン不要"
            type="text"
        />
        <div class="form-spacer" />
        <RepeatGrid
            gap="var(--grid-gap-form)"
            item-min-width="320px"
            tag="div"
        >
            <FormFieldSelect
                v-model:value="addressRef.prefecture"
                class-name-suffix="default"
                :is-required="true"
                label="都道府県"
            >
                <option value="">
                    選択してください
                </option>
                <option
                    v-for="prefecture in PREFECTURES"
                    :key="prefecture.prefecture_jis_code"
                    :value="prefecture.prefecture_name"
                >
                    {{ prefecture.prefecture_name }}
                </option>
            </FormFieldSelect>
            <FormFieldText
                v-model:value="addressRef.city"
                class-name-suffix="default"
                :is-required="true"
                label="市町村"
            />
        </RepeatGrid>
        <div class="form-spacer" />
        <FormFieldText
            v-model:value="addressRef.town"
            class-name-suffix="default"
            :is-required="true"
            label="地名・番地"
            :max-length="128"
            supporting-text=""
            type="text"
        />
    </form>
</template>

<script lang="ts" setup>
import { useZipcodeJp, PREFECTURES } from '@d-gs/zipcode-jp-api/dist/useZipcodeJpForVue'
import FormFieldSelect from '@glamseam/chaco-ui/dist/components/forms/FormFieldSelect.vue'
import FormFieldText from '@glamseam/chaco-ui/dist/components/forms/FormFieldText.vue'
import RepeatGrid from '@glamseam/chaco-ui/dist/components/RepeatGrid.vue'
const { addressRef } = useZipcodeJp('https://zipcode-jp-k9dsua.web.app')
</script>
