<template>
  <div class="j-input">
    <input
      class="j-input__inner"
      :placeholder="placeholder"
      :type="type"
      :name="name"
      :disabled="disabled"
      :class="{
        'is-disabled': disabled,
      }"
      :value="value"
      @input="handleInput"
    />
  </div>
</template>

<script>
export default {
  name: "JInput",
  data() {
    return {};
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
  },
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
$height: 35px;
.j-input {
  width: 100%;
  position: relative;
  font-size: 16px;
  display: inline-block;
  &__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    // border-radius: 5px;
    border: none;
    border-bottom: 3px solid #dcdfe6;
    //     border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: $height;
    line-height: $height;
    outline: none;
    padding: 0px 10px;
    transition: border-color 0.3s cubic-bezier(0.645, 0.045, 0.335, 1);
    width: 100%;
    &:focus {
      outline: none;
      border-color: #409eff;
      background-color: #e9e9e9;
      caret-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
</style>
