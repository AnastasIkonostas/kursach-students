<template>
  <el-table :data="students" style="width: 100%" filterable>
    <el-table-column prop="student_id" label="ID" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="age" label="Age" />
    <el-table-column prop="grade_id" label="Grade" />
  </el-table>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

const store = useStore();

const students = computed(() => store.state.students);

onMounted(() => {
  store.dispatch("getStudents");
});
</script>
