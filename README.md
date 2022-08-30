# What is it

This is a component library
You can add it to your project to try using him,

## user

```
npm install garbageui
```

<!-- ![Image text](http://101.43.224.51/assets/use.png) -->

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

## j-button..

```
<j-button></j-button>
You can add type or plain or round or circle and disable to tags,
It is now in the update phase and only finishes the button,
<j-button type="primary">primary Button</j-button>
```

<!-- ![Image text](http://101.43.224.51/assets/button.png) -->

## j-dialog..

```
<j-dialog></j-dialog>
You can use slots to configure the title or body or footer of the dialog
You can also pass in top(distance from top), or pass in width
You can control the animation when the dialog appears by entering the direction(top,bottom,left,right), or select the default without typing
Like this
    <j-dialog title="title" direction="" top="" width="" :visible.sync="visible">
     <!-- <template v-slot:title>
        <span>title</sapn>
      </template> -->
      <span>内容</span>
      <template v-slot:footer>
        <j-button @click="visible = false"> Confirm </j-button>
        <j-button @click="visible = false"> close </j-button>
      </template>
    </j-dialog>
    <j-button round type="info" @click="visible = true">open dialog</j-button>

        <script>
            data() {
              return {
                  visible: false,
              };
        </script>
  },
```

<!-- ![Image text](http://101.43.224.51/assets/dialog.png) -->

## j-input..

```
<j-input></j-input>
If you want to disable the input box, you can add Disable to the tab
Like this
<j-input type="password" disable name="" placeholder="Please enter"></j-input>

<j-input type="password" v-model="password" name="" placeholder="Please enter"></j-input>

        <script>
            data() {
              return {
                  password: "",
              };
        </script>
```

<!-- ![image](http://101.43.224.51/assets/input.png) -->

## j-card..

```

<j-card></j-card>

    <j-card title="Card title">
      <j-card-Image :src="url" />
      <j-card-List-title>
        <div>Card</div>
      </j-card-List-title>
      <j-card-List-Item>
        <div>Greyhound divisely hello coldly fonwderfully</div>
      </j-card-List-Item>
      <j-card-List-actions>
        <J-Button type="success">BUTTON</J-Button>
        <J-Button>BUTTON</J-Button>
      </j-card-List-actions>
    </j-card>
```

<!-- ![image](http://101.43.224.51/assets/card.png) -->

## j-switch..

```
  <j-switch></j-switch>

  <j-switch @change="handleChange"></j-switch>

  methods: {
    handleChange(e){
      console.log(e);
    }
  },
```

###

```

```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
