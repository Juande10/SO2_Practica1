# **MANUAL TECNICO**

## Herramientas utilizadas para el desarrollo

### Front End

* React

### Back End

* Golang
* C






###

### 

## Creacion de los modulos

### Estructuras utilizadas

Nativas de linux Ubuntu

* task_struct
* list_head
* Sysinfo

## Instanciar los modulos

Accediendo a la ruta en la que se encuentra nuestro archivo escrito en lenguaje **C**  que contiene las instrucciones para crear nuestro modulo de kernel, generamos el archivo que sera utilizado para montar el modulo

> sudo make

luego montamos el modulo de kernel en la maquina

> sudo insmod NombreDelArchivoGenerado.ko

y accedemos al modulo para que muestre el contenido de lo obtenido, el cual estara alojado dentro de la carpeta **/proc**

> sudo cat /proc/NombreDelModulo

## Borrar modulo

Para eliminar el modulo, en caso de alguna modificacion a su estructura y/o dejarlo de utilizar, se utiliza el siguiente comando

> sudo rmmod NombreDelArchivoGenerado.ko

Este comando borrara el modulo instanciado que se alojo en la carpeta **/proc** del sistema.

## Modulo Ram

### Porcentaje de consumo

Este dato es obtenido por medio del modulo de ram, el cual esta basado en la estructura **Sysinfo** nativa del sistema.

Ecuacion para obtener la memoria total

> memoria_total = totalram * 4

Ecuacion para obtener la memoria libre

> memoria_libre = freeram * 4
>
> `
>
>
>
> ```
>
> ``````

Ecuacion para obtener el porcentaje de Ram en cosumo

> % de consumo de RAM =  (memoria_libre * 100) / memoria_total)

### Grafica en tiempo real de consumo

La grafica de ram estara obteniendo el dato del porcentaje de consumo de Ram que se obtuvo con la ecucacion anterior y estara leyendo constantemente el modulo, ya que este se actualiza solo automaticamente.

## Modulo de CPU

Los datos obtenidos en este modulo son accedidos por medio de las estructuras nativas del sistema:

* **task_struct**
* **list_head**

### Total de procesos

Cantidad total de los procesos registrados en el sistemas, los cuales son la suma de todos los procesos que estan bajo cada tipo de estado.

> Total de procesos = procesos en ejecucion + procesos suspendidos + procesos detenidos + procesos zombie

### Procesos en ejecucion

Cantidad de los procesos registrados corriendo en el sistemas, los cuales se encuentran bajo el codigo de estado 0.

> Procesos corriendo = estado 0

### Procesos suspendidos

Cantidad de los procesos registrados suspendidos en el sistemas, los cuales se encuentran bajo el codigo de estado 1.

> Procesos suspendidos = estado 1

### Procesos detenidos

Cantidad de los procesos registrados detenidos en el sistemas, los cuales se encuentran bajo el codigo de estado 2.

> Procesos detenidos = estado 2

### Procesos Zombies

Cantidad de los procesos registrados zombie en el sistemas, los cuales se encuentran bajo el codigo de estado 20.

> Procesos zombie = estado 20
