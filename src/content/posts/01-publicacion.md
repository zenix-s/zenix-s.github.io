---
title: "Funciones argumentos variables"
publishDate: "2024-04-27"
description: "Funciones argumentos variables en C"
slug: "Funciones-argumentos-variables"
isPublished: true
---

# Funciones argumentos variables
Una función puede tener el siguiente prototipo

```c
void foo(char *str, ...){}
```

los ... indican que puede aceptar multiples parámetros

Se requiere importar el siguiente header para poder usar
```c
#include <stdarg.h>
```

prototipos de las funciones
```c
void va_start(va_list ap, last);
type va_arg(va_list ap, type);
void va_end(va_list ap);
void va_copy(va_list dest, va_list src);
```


## **va_list**
Tipo de dato que apunta a la lista de argumentos


**va_start**
**va_start** establece **ap** en el primer argumento opcional de la lista de argumentos que se pasa a la función. 
El argumento **ap** debe tener el tipo va_list. 
El argumento **last** es el nombre del parámetro necesario inmediatamente anterior al primer argumento opcional de la lista de argumentos. 

```c
int ft_printf(char *str, ...) {
  va_list	ap;
  va_start(ap, str);
  return 0;
}
```


## **va_end**
Después de que todos los argumentos se hayan recuperado, **va_end** restablece el puntero a NULL. 
Es necesario llamar a va_end en cada lista de argumentos que se inicialice con va_start o va_copy antes de que la función devuelva su resultado.

```c
int ft_printf(char *str, ...) {
	va_list	ap;
	va_start(ap, str);
	va_end(ap);
  return 0;
}
```

## **va_arg**
va_arg recupera un valor de type de la ubicación determinada por arg_ptr,
aumenta arg_ptr para señalar al argumento siguiente de la lista usando el tamaño de type para determinar donde empieza el argumento siguiente. 
va_arg se puede usar un número ilimitado de veces en la función para recuperar argumentos de la lista.
```c
ft_printf("", "hello", 42);
int ft_printf(char *str, ...) {
	va_list	ap;
	va_start(ap, str);
	char *s = va_arg(ap, char *);
	printf("%s", s); //hello
	int x = va_arg(ap, int);
	printf("%d", x); //42
	va_end(ap);
  return 0;
}
// RESULT: 'hello42'
```