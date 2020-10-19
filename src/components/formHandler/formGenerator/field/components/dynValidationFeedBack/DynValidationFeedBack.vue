<template>
  <div>
    <b-form-invalid-feedback :state="!!!errors[0]">{{
      errors[0]
    }}</b-form-invalid-feedback>
  </div>
</template>

<script src="./dynValidationFeedBack.js"></script>
