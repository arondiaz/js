//Chrome Developer Tools

//PESTAÑA Elements
// Permite inspeccionar y manipular directamente el árbol de elementos HTML (DOM) de una página web.
// Proporciona una representación visual del DOM, mostrando la estructura jerárquica de los elementos de la página.
// Funciones Clave:

// Edición en Vivo (Live Editing): Permite editar HTML y CSS en tiempo real, reflejando los cambios directamente en la página sin necesidad de recargar.
// Búsqueda y Selección: Facilita la búsqueda y selección de elementos en la página para inspeccionar y modificar.
// Estilos (Styles): Muestra y permite ajustar los estilos CSS aplicados a los elementos.
// Event Listeners (Escuchadores de Eventos): Proporciona información sobre los eventos asociados a un elemento y permite añadir o eliminar escuchadores de eventos.
// Otras Características:

// Visualización de Box Model: Muestra el modelo de caja (box model) de un elemento, incluyendo márgenes, bordes y relleno.
// Copy (Copiar) y Paste (Pegar): Facilita la copia y pegado de elementos y sus atributos para su uso en el desarrollo.
// Captura de Pantalla (Screenshot): Permite capturar capturas de pantalla de elementos específicos o de la página completa.




// Sources (Fuentes):

// Paneles Principales:

// Filesystem (Sistema de Archivos): Permite mapear recursos locales a la página web, facilitando el desarrollo local.
// File (Archivo): Muestra el código fuente del archivo seleccionado.
// Funciones Clave:

// Debugger (Depurador):

// Permite establecer puntos de interrupción (breakpoints) para detener la ejecución del código en puntos específicos.
// Facilita la inspección de variables y el seguimiento del flujo de ejecución.
// Watch (Observar):

// Permite monitorear y observar el valor de expresiones y variables durante la ejecución.
// Útil para el seguimiento dinámico de datos.
// Call Stack (Pila de Llamadas):

// Muestra la pila de llamadas actual, indicando la secuencia de funciones que llevaron a la ejecución del código actual.
// Scope (Ámbito):

// Proporciona información sobre las variables disponibles en el ámbito actual durante la ejecución.
// Otras Características:

// Search (Buscar): Facilita la búsqueda rápida de archivos y líneas de código en la base de código de la página.
// Snippets (Fragmentos): Permite guardar y ejecutar fragmentos de código JavaScript directamente desde DevTools.
// Overrides (Sobrescribir): Facilita la experimentación al permitir cambios temporales en el código sin modificar directamente los archivos originales.
// Trabajo con CSS y Recursos Web:

// Estilos (Styles): Permite modificar y experimentar con los estilos CSS de una página en tiempo real.
// Images (Imágenes): Proporciona una vista previa de las imágenes cargadas en la página.
// Mapping (Mapeo):

// Preprocessor (Preprocesador): Permite trabajar con preprocesadores CSS y JavaScript, mostrando el código fuente original.







// Registro de Solicitudes:

// Listado de Solicitudes: Muestra una lista de todas las solicitudes de red realizadas por la página, incluyendo archivos HTML, CSS, JavaScript, imágenes y otros recursos.
// Columnas Personalizables: Puedes personalizar las columnas que se muestran, incluyendo información sobre el tipo de contenido, el tamaño, el tiempo de carga, entre otros.
// Información Detallada de Solicitudes:

// Headers (Encabezados): Muestra los encabezados de la solicitud HTTP, incluyendo información como los tipos de contenido, cookies y encabezados personalizados.
// Preview (Vista Previa): Proporciona una vista previa del contenido de la respuesta para archivos de texto, como HTML, CSS y JavaScript.
// Response (Respuesta): Muestra la respuesta completa, incluyendo el código de estado HTTP y el cuerpo de la respuesta.
// Timing (Tiempo): Detalla el tiempo que tomó realizar la solicitud, incluyendo el tiempo de espera del servidor, el tiempo de descarga y otros detalles.
// Filtros y Herramientas:

// Filter (Filtro): Permite filtrar las solicitudes por tipo (XHR, Imágenes, Documentos, etc.) para facilitar la búsqueda.
// Search (Buscar): Facilita la búsqueda de solicitudes específicas.
// Preserve log (Conservar registro): Mantiene el registro de la red incluso después de navegar a otra página, facilitando el seguimiento de múltiples solicitudes.
// Performance (Rendimiento):

// Waterfall (Diagrama de Cascada): Muestra un diagrama de cascada que representa visualmente el tiempo que tarda cada recurso en cargarse.
// Initiator (Iniciador): Indica qué parte de la página (script, CSS, HTML, etc.) inició una solicitud específica.
// Herramientas de Desarrollo Adicionales:

// Throttling (Limitación de Velocidad): Permite simular conexiones de red más lentas para evaluar el rendimiento en condiciones adversas.
// WebSocket (WebSocket): Muestra información sobre las conexiones WebSocket, incluyendo mensajes enviados y recibidos.
// Exportación y Análisis:

// Copy as cURL (Copiar como cURL): Permite copiar una solicitud como un comando cURL, facilitando la reproducción de solicitudes desde la línea de comandos.
// Export HAR (Exportar HAR): Permite exportar el registro de la red en formato HAR (HTTP Archive) para análisis posterior.








// Performance (Rendimiento):

// Grabación de la Actividad:

// Record (Grabar): Inicia la grabación de la actividad en la página web, capturando eventos como ejecución de JavaScript, renderización, y actividades de red.
// Stop (Detener): Detiene la grabación y presenta un resumen visual de la actividad durante el período grabado.
// Vista de Resumen:

// Overview (Resumen): Proporciona una visión general del rendimiento, incluyendo el tiempo total de grabación, el tiempo dedicado a JavaScript, renderización, actividades de red, y más.
// Frames (Cuadros): Muestra una línea de tiempo con los cuadros renderizados, permitiendo identificar posibles problemas de velocidad de fotogramas.
// Análisis Detallado:

// Flame Chart (Diagrama de Llamadas): Visualiza la secuencia de eventos, con la ejecución de JavaScript, las actividades de red y la renderización representadas en un formato de gráfico de llamadas.
// User Timing (Temporización del Usuario): Muestra eventos específicos definidos por el desarrollador utilizando el API window.performance.mark() y window.performance.measure().
// Filtros y Herramientas:

// Capture Screenshots (Capturar Capturas de Pantalla): Permite tomar capturas de pantalla durante la grabación para correlacionar eventos con cambios visuales.
// Disable JavaScript (Desactivar JavaScript): Permite desactivar JavaScript durante la grabación para identificar la dependencia del rendimiento en el código JavaScript.
// Network Conditions (Condiciones de Red): Simula diferentes condiciones de red para evaluar el rendimiento en diferentes escenarios.
// Exportación y Análisis:

// Save Profile (Guardar Perfil): Permite guardar la grabación como un archivo de perfil (JSON), que puede ser compartido y analizado posteriormente.
// Load Profile (Cargar Perfil): Permite cargar un archivo de perfil guardado para el análisis posterior.
// Consejos de Optimización:

// Recommendations (Recomendaciones): Proporciona sugerencias automáticas para mejorar el rendimiento, basadas en la información recopilada durante la grabación.