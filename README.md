# What is it

This is a component library
You can add it to your project to try using him,

## user

```
npm install garbageui
```

```
import garbageui from "garbageui";
```

```
import 'garbageui/dist/garbageui.css'
```

```
Vue.use(garbageui);
```

## Then....

```
<J-Button></J-Button>
You can add type and plain and round and circle and disable to tags,
It is now in the update phase and only finishes the button,

Like this
<J-Button type="primary">primary Button</J-Button>
or
<J-Button type="primary" plain >primary Button</J-Button>
or
<J-Button type="primary" round >primary Button</J-Button>
or
<J-Button type="primary" circle >primary Button</J-Button>

<J-Dialog></J-Dialog>
You can use slots to configure the title or body or footer of the dialog
You can also pass in top(distance from top), or pass in width
Like this
    <J-Dialog top="10px" width="70%" :visible.sync="visible">
    <!-- If the title doesn't want to use slots, you can use title="" in the J-Dialog tab -->
      <template v-slot:title>
        <h3>提示标题</h3>
      </template>
      <span>内容</span>
      <template v-slot:footer>
        <J-Button @click="visible = false"> 确定 </J-Button>
        <J-Button @click="visible = false"> 取消 </J-Button>
      </template>
    </J-Dialog>

    script >
      data() {
        return {
            visible: false,
        };
  },
```

###

```

```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
