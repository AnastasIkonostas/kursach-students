import { createStore } from "vuex";
import { api } from "@/api.js";

export default createStore({
  state: {
    students: [],
    marks: [],
    lessons: [],
    grades: [],
  },
  mutations: {
    setStudents(state, students) {
      state.students = students;
    },
    setGrades(state, grades) {
      state.grades = grades;
    },
  },
  actions: {
    async getStudents({ commit }) {
      const students = await api.get("/students");
      commit("setStudents", students.data);
    },
    async getMarks() {
      const marks = await api.get("/marks");
      this.marks = marks.data;
    },
    async getLessons() {
      const lessons = await api.get("/lessons");
      this.lessons = lessons.data;
    },
    async getGrades({ commit }) {
      const grades = await api.get("/grades");
      commit("setGrades", grades.data);
    },

    async createStudent(_, params) {
      await api.post("/students", params);
    },
  },
  modules: {},
});
