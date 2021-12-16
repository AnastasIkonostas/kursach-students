<template>
  <el-form :model="newStudent" :rules="formRules" ref="createStudent">
    <el-form-item label="Student name" prop="name">
      <el-input v-model="newStudent.name" />
    </el-form-item>
    <el-form-item label="Student age" prop="age">
      <el-input v-model.number="newStudent.age" />
    </el-form-item>
    <el-form-item label="Student grade">
      <el-select v-model="newStudent.grade_id" placeholder="Select Grade">
        <el-option
          v-for="item in grades"
          :key="item.grade_id"
          :label="item.grade_name"
          :value="item.grade_id"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, onMounted, reactive } from "vue";

const store = useStore();

const newStudent = reactive({
  name: "",
  age: "",
  grade_id: "",
});

const formRules = {
  name: [
    {
      required: true,
      message: "Please input student name",
      trigger: "change",
    },
  ],
  age: [
    {
      required: true,
      message: "Please input student age",
      trigger: "change",
    },
  ],
};

const grades = computed(() => store.state.grades);

onMounted(() => {
  store.dispatch("getGrades");
});

const onSubmit = () => {
  store.dispatch("createStudent", newStudent)
};
</script>
