---
layout: post
title: Understanding Pointers With Examples
subtitle: Pointer Declarations, Assignments, References and Dereferences
description: >-
  Basics of C Pointers. How to declare C Pointers? How to use C Pointers? Dereferencing Pointers.
  What to do and What Not to do?
---

```c
#include <stdio.h>

int main(){
    int a = 10;
    int *ptr = &a;
    printf("*ptr = %d, a = %d\n", *ptr, a);
    *ptr = 12;
    printf("*ptr = %d, a = %d\n", *ptr, a);
    return 0;
}
```

```shell
*ptr = 10, a = 10
*ptr = 12, a = 12
```

Contents of `simple.c`:

```c
#include <stdio.h>

int main(){
    int a = 10;
    int *ptr = &a;
    printf("*ptr = %d located at %p\n", *ptr, ptr);
    return 0;
}
```

Compiling and Running the program above gives the following output

```shell
$ gcc simple.c -o simple
$ ./simple
*ptr = 10 located at 0x7fff801d7ebc
$ ./simple
*ptr = 10 located at 0x7ffcdf866e6c
$ ./simple
*ptr = 10 located at 0x7ffc32b3cc1c
```

```c
#include <stdio.h>

int main(){
    int number = 1094795585;
    char *ptr = &number;
    printf("%c\n", *ptr);
    for(int i =0;i<4 ; i++){
        printf("%p / %u: ", ptr, ptr);
        printf("%c\n", *ptr);
        ptr = ptr + 1;
    }
    printf("\n");
    char ch = 'A'; // 0 - 255 // 65
    printf("ch = %d\n", ch);
    return 0;
}
```

```shell
$ gcc number.c -o number
number.c: In function ‘main’:
number.c:5:17: warning: initialization of ‘char *’ from incompatible pointer type ‘int *’ [-Wincompatible-pointer-types]
    5 |     char *ptr = &number;
      |                 ^
number.c:8:23: warning: format ‘%u’ expects argument of type ‘unsigned int’, but argument 3 has type ‘char *’ [-Wformat=]
    8 |         printf("%p / %u: ", ptr, ptr);
      |                      ~^          ~~~
      |                       |          |
      |                       |          char *
      |                       unsigned int
      |                      %s
/home/siddhu/tuts2/pointers                                                                                                        
$ ./number              
A
0x7ffd047e9a28 / 75405864: A
0x7ffd047e9a29 / 75405865: A
0x7ffd047e9a2a / 75405866: A
0x7ffd047e9a2b / 75405867: A

ch = 65
```