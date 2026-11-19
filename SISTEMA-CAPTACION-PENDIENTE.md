# DELAVERDE FILMS — Sistema de captación comercial

## Estado de la implementación
La web reutiliza el formulario Tally existente: https://tally.so/r/peoBVE. No se creó un segundo formulario ni se alteró el identificador existente.

La integración web conserva el iframe de Tally, carga diferida, enlace alternativo, HTTPS y la CSP ya existente. La altura del iframe se ajustó para que el formulario de siete campos tenga espacio suficiente; debe revisarse después de simplificar el formulario en Tally.

## Especificación de los siete campos obligatorios

1. **Nombre:** nombre artístico, empresa o persona responsable (respuesta corta).
2. **Proyecto:** qué necesita producir y objetivo principal (respuesta larga breve).
3. **Enlaces:** Instagram, YouTube, Spotify o referencias (URL; permitir más de un enlace dentro del mismo campo o una respuesta multilinea).
4. **Servicio:** Diagnóstico creativo; Dirección visual; Plan de lanzamiento; Producción audiovisual complementaria (rodaje, fotografía o edición, cotización aparte).
5. **Presupuesto:** RD$10,000–RD$20,000; RD$20,001–RD$40,000; RD$40,001–RD$75,000; más de RD$75,000; USD $100–$250; USD $251–$500; USD $501–$1,000; más de USD $1,000; todavía no definido. Son rangos orientativos de evaluación, no precios publicados.
6. **Fecha objetivo:** selector de fecha, con opción de fecha aproximada / flexible si Tally lo permite.
7. **Contacto:** elegir WhatsApp o correo y mostrar el campo correspondiente con validación.

## Reglas de privacidad y conversión
- El consentimiento para responder la solicitud debe ser obligatorio y separado del consentimiento opcional para comunicaciones comerciales.
- No pedir contraseñas, documentos de identidad ni datos sensibles.
- No incluir las respuestas personales en parámetros de URL ni en el mensaje de WhatsApp.
- Tras confirmar el envío, la página de agradecimiento de Tally debe mostrar un botón que abra WhatsApp con el texto: "¡Hola, DELAVERDE FILMS! Acabo de completar el formulario de evaluación de mi proyecto audiovisual. Me gustaría continuar con la evaluación y recibir información sobre los próximos pasos."
- Número de WhatsApp ya utilizado por el sitio: +1 849 497 6721 (wa.me/18494976721). Confirmar en Tally que corresponde al número Business activo antes de activar la redirección final.
- Las notificaciones deben configurarse en Tally hacia el buzón comercial autorizado. No se añade ninguna dirección no confirmada.

## Pendientes externos
- Acceso autorizado a la cuenta Tally para editar el formulario existente, reducirlo a los siete campos y configurar la página de agradecimiento.
- Confirmar el buzón comercial destinatario y habilitar notificaciones.
- Probar con datos ficticios sin generar una conversación de WhatsApp ni notificar a clientes reales.
- Confirmar en Tally si el plan actual permite las notificaciones/redirects requeridos; no activar funciones de pago.
