# Pata Pila Web

## Cómo correr

`npm install`
`npm start`

Y la aplicación va a estar escuchando en `http://localhost:3000/`.

Necesitás `v12.19.x` para correr esto. Sugerimos altamente el uso de `nvm`.

## Cómo trabajar con esto

- Cada vez que cambia la API de GraphQL API, el archivo `schema.graphql` tiene que actualizarese. Correr `npm run schema`.
- Cada vez que hacemos cambios en una query o un fragment, o bien cambia el schema, tenemos que re-generar los tipos
  de graphql en `__types__`. Corré `npm run relay`. Se puede hacer con watch corriendo `npm run relay -- --watch`.

## Cómo deployar

_Primero, testear que todo por lo que luchamos tanto funciona bien con nuestro setup de firebase._

- `npm run build` para compilar.
- `npm run serve` para correr los emuladores de firebase locales. Los emuladores corren en `http://localhost:5000`.

Luego, para deployar:

- `npm run firebase login` para obtener credenciales de deployment.
- `npm run build` para compilar (si no compilamos desde la última modificación).
- `npm run deploy` para deployar a firebase.

La aplicación corre en `https://pata-pila-web.web.app`....
