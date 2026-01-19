#  FieldOps - Gestión de Reportes de Campo

**FieldOps** es un prototipo  diseñado para optimizar la comunicación y supervisión entre el personal de tierra y la administración central. El sistema permite capturar, gestionar y auditar reportes de campo con alta precisión, asegurando la integridad de los datos mediante flujos de trabajo automatizados y reglas de inmutabilidad.

---

##  Descripción del Sistema y Reglas de Negocio

El sistema opera bajo un modelo de sincronización en tiempo real dividido 

  **Terminal Móvil (Operario de Tierra):** App en React Native para capturar incidencias con evidencia multimedia y coordenadas exactas.
  **Panel de Control (Jefe de Tierra):** Dashboard web desarrollado en React para el monitoreo estratégico


---


##  Stack Tecnológico

| Capa del Proyecto | Tecnologías Principales | Propósito Técnico |
| :--- | :--- | :--- |
| **App Móvil** | React Native, Expo, TypeScript | Desarrollo multiplataforma con tipado fuerte. |
| **Panel Web** | React.js, TypeScript | Dashboard administrativo para supervisión y gestión. |
| **Backend** | Node.js, Express.js | API REST modular para lógica de negocio. |
| **Cloud Functions** | Firebase Cloud Functions | Lógica de servidor serverless escalable. |
| **Base de Datos** | Firebase Firestore | NoSQL en tiempo real para sincronización inmediata. |
| **Almacenamiento** | Firebase Cloud Storage | Hosting de evidencias fotográficas (Storage). |

---


##  Decisiones Técnicas y Arquitectura

* **Evidencia Fotográfica:** Captura de fotos nativa para reducir la subjetividad y facilitar la validación técnica.
* **localización ):** Implementación de localizacion de latitud y longitud para la visualizacion del jefe de tierra.
* **Interfaz de KPIs (Cards):** Dashboard mobile con tarjetas informativas para entender el estado global de la operación en segundos.
* **Arquitectura basada en Features:** Estructura modular independiente (`Backend`, `Mobile`, `Web`) para una escalabilidad superior.
* **Clean Code:** Uso estricto de **TypeScript** y extracción de lógica a **Custom Hooks** para un código modular, robusto y fácil de mantener.

---


## Pendientes

- **Gestión de Seguimiento (Admin Web):**  
  Se implementará una interfaz para que el administrador pueda visualizar los reportes y activar un proceso de seguimiento formal. Al hacerlo, se generará un nuevo registro en las colecciones de Firebase vinculado al reporte correspondiente.

- **Restricción de Edición e Inmutabilidad (Mobile):**  
  Si un reporte tiene el estado de seguimiento activo (`seguimiento: true`), el operario **no podrá realizar ediciones** desde la aplicación móvil. Esto garantiza la integridad de la información una vez iniciado el proceso administrativo.

- **Feedback Visual de Bloqueo:**  
  Para comunicar este estado al operario, la tarjeta del reporte cambiará automáticamente a una paleta de colores distinta. Además, se incluirá un indicador de texto en la parte superior de la tarjeta que especifique que el reporte se encuentra **"En Seguimiento"**.

- **Geolocalización Avanzada:**  
  Se integrará la API de **Google Maps** para permitir una visualización precisa en un mapa dinámico, facilitando la localización exacta del sector donde se reportó el problema y optimizando la logística de respuesta.


##  Estrategia de Aprendizaje con IA

Durante el desarrollo, se identificó cómo maximizar el uso de herramientas de IA de forma estratégica:

* ** Lo que funcionó (Knowledge Mining):** Solicitar bases teóricas y conceptos clave sobre **Firebase y Google Cloud** para desglosar e investigar cada servicio parte por parte.
* ** Lo que NO funcionó (Consolas Visuales):** Pedir guías paso a paso de navegación por las interfaces de Google. Debido a sus constantes actualizaciones, se optó por usar exclusivamente la **documentación oficial**.

---

##  Pasos para la Ejecución del Proyecto

Sigue este orden para levantar los tres componentes del sistema:

### 1. Servidor Backend (Firebase Functions)
1.  Navega a la carpeta de funciones:
    ```bash
    cd Backend/functions
    ```
2.  Instala las dependencias e inicia el entorno:
    ```bash
    npm install
    npm run dev
    ```

### 2. Aplicación Móvil (React Native + Expo)
1.  Navega a la carpeta Mobile:
    ```bash
    cd Mobile
    ```
2.  Instala dependencias e inicia el servidor de React Native:
    ```bash
    npm install
    npm run android
    ```
    * **Emulador:** Se abre automáticamente en **Android Studio**.
    * **Dispositivo Físico:** Escanea el **código QR** con la app **Expo Go**.

### 3. Panel de Administración Web (React)
1.  Navega a la carpeta Web:
    ```bash
    cd Web
    ```
2.  Instala las dependencias e inicia el dashboard:
    ```bash
    npm install
    npm run start
    ```

---

