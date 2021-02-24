<template>
  <form>
    <p>Messgae Form Backend Pass Auth : {{ log.doesLog }}</p>
    <v-text-field v-model="name" label="Name"></v-text-field>
    <v-text-field v-model="email" label="E-mail"></v-text-field>
    <input type="file" name="singleFile" @change="filePicked" multiple />
    <v-btn @click="submit">submit</v-btn>
  </form>
</template>

<script>
export default {
  async mounted() {
    this.log = await this.$axios.$get("upload");
  },
  data() {
    return {
      name: "",
      email: "",
      log: "",
      files: [],
      formData: null
    };
  },
  methods: {
    async submit() {
      this.formData = new FormData();
      this.formData.append("name", this.name);
      this.formData.append("name", this.email);
      this.formData.append("name", this.log);
      for (let index = 0; index < this.files.length; index++) {
        this.formData.append(this.files[index].name, this.files[index]);
      }
      try {
        const response = await this.$axios.post("/upload", this.formData);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
    filePicked(e) {
      this.files = e.currentTarget.files;
    }
  }
};
</script>

<style></style>
