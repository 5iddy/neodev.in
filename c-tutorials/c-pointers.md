---
layout: post
title: Understanding Pointers With Examples
subtitle: Pointer Declarations, Assignments, References and Dereferences
description: >-
  Basics of C Pointers. How to declare C Pointers? How to use C Pointers? Dereferencing Pointers.
  What to do and What Not to do?
---


### Basics of Pointer in the Simplest Way Possible

```c
#include <stdio.h>

int main(){
    int a = 10;
    int *ptr = &a; // Declaring and Assigning a Pointer
    printf("*ptr = %d, a = %d\n", *ptr, a); // Dereferencing a Pointer
    *ptr = 12;  // Mutating Data that a Pointer Points to
    printf("*ptr = %d, a = %d\n", *ptr, a);
    return 0;
}
```

```shell
*ptr = 10, a = 10
*ptr = 12, a = 12
```

#### Looking at the 

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
    int number = 1094795585; // 0100 0001 0100 0001 0100 0001 0100 0001
    char *ptr = &number;
    printf("%c\n", *ptr);
    for(int i =0;i<4 ; i++){
        printf("%p / %u: ", ptr, ptr);
        printf("%c\n", *ptr); // 0100 0001 = 'A'
        ptr = ptr + 1;
    }
    printf("\n");
    char ch = 'A'; // 65 0100 0001
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


```c
#include <stdio.h>

int main(){
    char string[] = "hello world";
    char *ch = string;
    int len = 0;

    for(int i=0; i<12; i++){
        printf("%c", ch[i]);
    }
    printf("\n");

    for(char *l = string; *l; l++, len++);

    printf("len is %d\n", len);

    return 0;
}
```

```shell
hello world
len is 11
```

### Pointers as Arrays

```c
#include <stdio.h>

int main() {
    int numbers[9] = {1,2,3,4,5,6,7,8,9};
    int *number = numbers;

    for(int i=0; i<9; i++)
        printf("%d, ", number[i]);
    printf("\n");
    return 0;
}
```

```shell
1, 2, 3, 4, 5, 6, 7, 8, 9,
```

### Pointer Math

Consider this program `arrays3.c`:
```c
#include <stdio.h>

int main() {
    int numbers[9] = {1,2,3,4,5,6,7,8,9};
    int *number = numbers;

    for(int i=0; i<9; i++){
        printf("%d. %p / %ld: %d\n", i, number, number, *number);
        number += 1;
    }
    return 0;
}
```

```shell
$ gcc arrays3.c -o arrays3
arrays3.c: In function ‘main’:
arrays3.c:8:28: warning: format ‘%ld’ expects argument of type ‘long int’, but argument 4 has type ‘int *’ [-Wformat=]
    8 |         printf("%d. %p / %ld: %d\n", i, number, number, *number);
      |                          ~~^                    ~~~~~~
      |                            |                    |
      |                            long int             int *
      |                          %ls
$ ./arrays3
0. 0x7ffdacdcf660 / 140727503615584: 1
1. 0x7ffdacdcf664 / 140727503615588: 2
2. 0x7ffdacdcf668 / 140727503615592: 3
3. 0x7ffdacdcf66c / 140727503615596: 4
4. 0x7ffdacdcf670 / 140727503615600: 5
5. 0x7ffdacdcf674 / 140727503615604: 6
6. 0x7ffdacdcf678 / 140727503615608: 7
7. 0x7ffdacdcf67c / 140727503615612: 8
8. 0x7ffdacdcf680 / 140727503615616: 9
```

```c
#include <stdio.h>

int main(){
    char string[] = "Hello World";
    char *ch = string;
    for(int i=0; i<12; i++){
        printf("%c %d at %p / %ld\n", *ch, *ch, ch, ch);
        ch += 1;
    }
    return 0; 
}
```


```shell
$ gcc string.c -o string
string.c: In function ‘main’:
string.c:7:33: warning: format ‘%ld’ expects argument of type ‘long int’, but argument 5 has type ‘char *’ [-Wformat=]
    7 |         printf("%c %d at %p / %ld\n", *ch, *ch, ch, ch);
      |                               ~~^                   ~~
      |                                 |                   |
      |                                 long int            char *
      |                               %s
$ ./string
H 72 at 0x7ffd2fa979cc / 140725403089356
e 101 at 0x7ffd2fa979cd / 140725403089357
l 108 at 0x7ffd2fa979ce / 140725403089358
l 108 at 0x7ffd2fa979cf / 140725403089359
o 111 at 0x7ffd2fa979d0 / 140725403089360
  32 at 0x7ffd2fa979d1 / 140725403089361
W 87 at 0x7ffd2fa979d2 / 140725403089362
o 111 at 0x7ffd2fa979d3 / 140725403089363
r 114 at 0x7ffd2fa979d4 / 140725403089364
l 108 at 0x7ffd2fa979d5 / 140725403089365
d 100 at 0x7ffd2fa979d6 / 140725403089366
 0 at 0x7ffd2fa979d7 / 140725403089367
```

```c
#include <stdio.h>

int main(){
    char string[] = "Hello World";
    char *ch = &string[10];
    for(int i=0; i<11; i++){
        printf("%c %d at %p / %ld\n", *ch, *ch, ch, ch);
        ch -= 1;
    }
    return 0; 
}
```


```shell
d 100 at 0x7ffea6a65a66 / 140731694340710
l 108 at 0x7ffea6a65a65 / 140731694340709
r 114 at 0x7ffea6a65a64 / 140731694340708
o 111 at 0x7ffea6a65a63 / 140731694340707
W 87 at 0x7ffea6a65a62 / 140731694340706
  32 at 0x7ffea6a65a61 / 140731694340705
o 111 at 0x7ffea6a65a60 / 140731694340704
l 108 at 0x7ffea6a65a5f / 140731694340703
l 108 at 0x7ffea6a65a5e / 140731694340702
e 101 at 0x7ffea6a65a5d / 140731694340701
H 72 at 0x7ffea6a65a5c / 140731694340700
```

```c
#include <stdio.h>

void square_array(int *array, int len){
    for(int i=0; i<len; i++){
        array[i] = array[i] * array[i];
    }
}

int main(){
    int numbers[] = { 1,2,3,4,5,6,7,8,9};
    int number = 10;
    printf("Array: ");
    for(int i = 0; i<9; i++){
        if(i < 8)
            printf("%d, ", numbers[i]);
        else
            printf("%d\n", numbers[i]);
    }

    square_array(numbers, 9);

    printf("Array after calling square_array: ");
    for(int i = 0; i<9; i++){
        if(i < 8)
            printf("%d, ", numbers[i]);
        else
            printf("%d\n", numbers[i]);
    }

    return 0;    
}
```

```shell
Array: 1, 2, 3, 4, 5, 6, 7, 8, 9
Array after calling square_array: 1, 4, 9, 16, 25, 36, 49, 64, 81
```