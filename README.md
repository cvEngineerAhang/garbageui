# What is it

This is a component library
You can add it to your project to try using him,

## user

```
npm install garbageui
```

![Image text](http://101.43.224.51/assets/use.png)

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

## J-Button..

```
<J-Button></J-Button>
You can add type or plain or round or circle and disable to tags,
It is now in the update phase and only finishes the button,
<J-Button type="primary">primary Button</J-Button>
```

![Image text](http://101.43.224.51/assets/button.png)

## J-Dialog..

```
<J-Dialog></J-Dialog>
You can use slots to configure the title or body or footer of the dialog
You can also pass in top(distance from top), or pass in width
You can control the animation when the dialog appears by entering the direction(top,bottom,left,right), or select the default without typing
Like this
    <J-Dialog title="title" direction="" top="" width="" :visible.sync="visible">
     <!-- <template v-slot:title>
        <span>title</sapn>
      </template> -->
      <span>内容</span>
      <template v-slot:footer>
        <J-Button @click="visible = false"> Confirm </J-Button>
        <J-Button @click="visible = false"> close </J-Button>
      </template>
    </J-Dialog>
    <J-Button round type="info" @click="visible = true">open dialog</J-Button>

        <script>
            data() {
              return {
                  visible: false,
              };
        </script>
  },
```

![Image text](http://101.43.224.51/assets/dialog.png)

## J-Input..

```
<J-Input></J-Input>
If you want to disable the input box, you can add Disable to the tab
Like this
<J-Input type="password" disable name="" placeholder="Please enter"></J-Input>

<J-Input type="password" v-model="password" name="" placeholder="Please enter"></J-Input>

        <script>
            data() {
              return {
                  password: "",
              };
        </script>
```

![image](http://101.43.224.51/assets/input.png)

## J-Card..

```

<J-Card></J-Card>

    <J-Card title="Card title">
      <J-Card-Image :src="url" />
      <J-Card-List-title>
        <div>Card</div>
      </J-Card-List-title>
      <J-Card-List-Item>
        <div>Greyhound divisely hello coldly fonwderfully</div>
      </J-Card-List-Item>
      <J-Card-List-actions>
        <J-Button type="success">BUTTON</J-Button>
        <J-Button>BUTTON</J-Button>
      </J-Card-List-actions>
    </J-Card>
```


###

```

```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
