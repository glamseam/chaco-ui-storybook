<template>
    <form>
        <FormText
            v-model:value="addressRef.zipcode"
            class-name-suffix="main"
            :is-required="true"
            label="郵便番号"
            :max-length="7"
            supporting-text="ハイフン不要"
            type="text"
        />
        <div class="form-spacer" />
        <div class="row-form">
            <div class="col-12 col-lg-6">
                <FormSelect
                    v-model:value="addressRef.prefecture"
                    class-name-suffix="main"
                    :is-required="true"
                    label="都道府県"
                    supporting-text="ヘルパーテキスト"
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
                </FormSelect>
            </div>
            <div class="col-12 col-lg-6">
                <FormText
                    v-model:value="addressRef.city"
                    class-name-suffix="main"
                    :is-required="true"
                    label="市町村"
                />
            </div>
        </div>
        <div class="form-spacer" />
        <FormText
            v-model:value="addressRef.town"
            class-name-suffix="main"
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
import FormSelect from '@glamseam/chaco-ui/dist/components/forms/FormSelect.vue'
import FormText from '@glamseam/chaco-ui/dist/components/forms/FormText.vue'
const { addressRef } = useZipcodeJp('https://zipcode-jp-k9dsua.web.app')
</script>
