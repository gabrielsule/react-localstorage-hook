Hola amigos de la #nerdytud, espero que se encuentren bien.

Días atrás les había compartido cómo realizar un custom hook para react ([https://bit.ly/3ruDIrD](https://bit.ly/3ruDIrD)), pero en el día de hoy, les comparto la forma de utilizar el mismo para poder guardar datos en el localstorage, espero que les guste.

### Creación de la aplicación
```bash
npx create-react-app dummy

cd dummy
```

### Creación de hook
> Para ello generaremos una carpeta denominada **hooks** dentro de la carpeta **src**
```javascript
import React, { useState } from 'react';

const useLocalStorage = (key, initialValue) => {

    const [data, setData] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(data) : value;
            setData(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.log(error);
        }
    };

    return [data, setValue];
}

export default useLocalStorage
```

### Implementación del hook
```javascript
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [data, setData] = useLocalStorage("nombre", "gabriel");

  return (
    <>
      <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
      <h3>{data}</h3>

    </>
  );
};

export default App;
```

### Corroborar funcionamiento
```bash
npm start
```

> Una vez abierto el navegador (en este caso chrome) presionamos F12
> y seleccionamos aplicación / LocalStorage