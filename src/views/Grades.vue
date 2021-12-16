<template>
  <el-table :data="grades" style="width: 100%">
    <el-table-column prop="grade_id" label="ID" />
    <el-table-column prop="grade_name" label="Name" />
  </el-table>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

const store = useStore();

const grades = computed(() => store.state.grades);

onMounted(() => {
  store.dispatch("getGrades");
});
</script>
