# projector-karma

> Run [Karma](http://karma-runner.github.io/1.0/index.html) with ease

### Run
```js
import * as karma from "projector-karma";
import * as glob from "glob";

export async function lint() {
  const files = glob.sync("./tests/**/*.+(ts|tsx)", { absolute: true });

  karma.run({
    files: files,
    config: {
      // http://karma-runner.github.io/1.0/config/configuration-file.html
    }
  });
}
```
