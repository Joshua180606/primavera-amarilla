# 🌻 Feliz inicio de primavera

Mini sitio estático/Vite para compartir mensajes personalizados de primavera.

## Ejecutar localmente

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Personalizar

- Los nombres y mensajes están en `src/main.js`, en el arreglo `people`.
- El GIF está en `public/assets/sunflower.gif`.
- El audio está en `public/assets/cancion.mpeg`.
- En la tarjeta hay cuatro estampitas verticales. Actualmente las cuatro usan el GIF recibido. Si tienes cuatro GIF diferentes, cambia cada `src` en `cardTemplate()` por `sunflower-1.gif`, `sunflower-2.gif`, etc., después de copiarlos a `public/assets/`.

### Nota sobre el audio

Los navegadores suelen bloquear el autoplay con sonido. Por eso el sitio intenta activar la música después de que la persona hace clic en un sobre y además ofrece el botón **Activar música**.
