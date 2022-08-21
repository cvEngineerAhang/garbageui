<template>
  <button
    class="J-Button"
    :class="[
      `J-Button--${type}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
      },
    ]"
    @click="handleClick"
  >
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "JButton",
  props: {
    type: {
      type: String,
      default: "default",
    },
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>
<style lang="scss" scoped>
.J-Button{
  margin: 0 5px;
}
//TODO round
.J-Button.is-round {
  border-radius: 12px;
}
//TODO circle
.J-Button.is-circle {
  border-radius: 100%;
  padding: 10px 15px;
}
//TODO disabled
.J-Button.is-disabled,
.J-Button.is-disabled.is-plain,
.J-Button.is-disabled.is-circle,
.J-Button.is-disabled.is-round {
  pointer-events: auto;
  background: #9e9e9e;
  &:hover {
    background: #9e9e9e;
    cursor: not-allowed;
  }
}
// 00000000000000000000000000000000000000000000

//TODO default-plain
.J-Button--default.is-plain {
  padding: 5px 15px;
  border: #000 1px solid;
  background: #e9e9e9;
  &:hover {
    background: #757575;
    cursor: pointer;
  }
  &:active {
    background: #bdbdbd;
  }
  span {
    color: #000;
    font-size: 16px;
  }
}
//TODO primary-plain
.J-Button--primary.is-plain {
  padding: 5px 15px;
  border: #039be5 1px solid;
  background: #e1f5fe;
  &:hover {
    background: #29b6f6;
    cursor: pointer;
  }
  &:active {
    background: #4fc3f7;
  }
  span {
    color: #000;
    font-size: 16px;
  }
}
//TODO success-plain
.J-Button--success.is-plain {
  padding: 5px 15px;
  border: #43a047 1px solid;
  background: #e8f5e9;
  &:hover {
    background: #66bb6a;
    cursor: pointer;
  }
  &:active {
    background: #81c784;
  }
  span {
    color: #000;
    font-size: 16px;
  }
}

//TODO danger-plain
.J-Button--danger.is-plain {
  padding: 5px 15px;
  border: #e53935 1px solid;
  background: #ffebee;
  &:hover {
    background: #ef5350;
    cursor: pointer;
  }
  &:active {
    background: #e57373;
  }
  span {
    color: #000;
    font-size: 16px;
  }
}

//TODO warning-plain
.J-Button--warning.is-plain {
  padding: 5px 15px;
  border: #fbc02d 1px solid;
  background: #fffde7;
  &:hover {
    background: #fdd835;
    cursor: pointer;
  }
  &:active {
    background: #ffee58;
  }
  span {
    color: #000;
    font-size: 16px;
  }
}

//TODO info-plain
.J-Button--info.is-plain {
  padding: 5px 15px;
  border: #00acc1 1px solid;
  background: #e0f7fa;
  &:hover {
    background: #26c6da;
    cursor: pointer;
  }
  &:active {
    background: #4dd0e1;
  }
  span {
    color: #000;
    font-size: 16px;
  }
}

//TODO gay-plain
.J-Button--gay.is-plain {
  padding: 5px 15px;
  border: #5e35b1 1px solid;
  background: #ede7f6;
  &:hover {
    background: #7e57c2;
    cursor: pointer;
  }
  &:active {
    background: #9575cd;
  }
  span {
    color: #000;
    font-size: 16px;
  }
}

// 00000000000000000000000000000000000000000000

//TODO default--2
.J-Button--default {
  padding: 5px 15px;
  border: none;
  background: #616161;
  &:hover {
    background: #757575;
    cursor: pointer;
  }
  &:active {
    background: #bdbdbd;
  }
  span {
    color: white;
    font-size: 16px;
  }
}

//TODO primary
.J-Button--primary {
  padding: 5px 15px;
  border: none;
  //   border-radius: 5px;
  background: #039be5;
  //   light-blue darken-1
  &:hover {
    background: #29b6f6;
    // light-blue lighten-1
    cursor: pointer;
  }
  &:active {
    background: #4fc3f7;
    // light-blue lighten-2
  }
  span {
    color: white;
    font-size: 16px;
  }
}
//TODO success---2
.J-Button--success {
  padding: 5px 15px;
  border: none;
  //   border-radius: 5px;
  background: #43a047;
  //   light-blue darken-1
  &:hover {
    background: #66bb6a;
    // light-blue lighten-1
    cursor: pointer;
  }
  &:active {
    background: #81c784;
    // light-blue lighten-2
  }
  span {
    color: white;
    font-size: 16px;
  }
}

//TODO danger
.J-Button--danger {
  padding: 5px 15px;
  border: none;
  //   border-radius: 5px;
  background: #e53935;
  //   light-blue darken-1
  &:hover {
    background: #ef5350;
    // light-blue lighten-1
    cursor: pointer;
  }
  &:active {
    background: #e57373;
    // light-blue lighten-2
  }
  span {
    color: white;
    font-size: 16px;
  }
}

//TODO warning
.J-Button--warning {
  padding: 5px 15px;
  border: none;
  //   border-radius: 5px;
  background: #fbc02d;
  //   light-blue darken-1
  &:hover {
    background: #fdd835;
    // light-blue lighten-1
    cursor: pointer;
  }
  &:active {
    background: #ffee58;
    // light-blue lighten-2
  }
  span {
    color: white;
    font-size: 16px;
  }
}

//TODO info
.J-Button--info {
  padding: 5px 15px;
  border: none;
  //   border-radius: 5px;
  background: #00acc1;
  //   light-blue darken-1
  &:hover {
    background: #26c6da;
    // light-blue lighten-1
    cursor: pointer;
  }
  &:active {
    background: #4dd0e1;
    // light-blue lighten-2
  }
  span {
    color: white;
    font-size: 16px;
  }
}

//TODO gay
.J-Button--gay {
  padding: 5px 15px;
  border: none;
  //   border-radius: 5px;
  background: #5e35b1;
  //   light-blue darken-1
  &:hover {
    background: #7e57c2;
    // light-blue lighten-1
    cursor: pointer;
  }
  &:active {
    background: #9575cd;
    // light-blue lighten-2
  }
  span {
    color: white;
    font-size: 16px;
  }
}
</style>
