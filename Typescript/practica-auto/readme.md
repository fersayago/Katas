para hacer la transcripcion de ts a js usamos el comando:
`ts main.ts`

para correr el archivo js via consola luego de la transcripcion:
`node main.js`

para que uno de los arguntos en el cosntructor sea opcional se puede pasar el parametro con un signo de interrogación luego de la variable. En caso de que ya posea un valor por defecto al inicializarse, no es necesario el signo de pregunta

`constructor(private foo: string = "foo", private bar: string = "bar") {}`