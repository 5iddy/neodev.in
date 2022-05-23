---
layout: post
title: Understanding Arrays With Examples
subtitle: Arrays - What to do and What not to do?
description: >-
  Basics of C Arrays with examples. What to do? What not to do? 
---


### Basics of Arrays

```c
#include <stdio.h>
int main(){
    int array[] = {1,2,3,4,5,6,8,9};
    int length = sizeof(array)/sizeof(int);
    for(int i=0; i<length; i++){
        printf("%d, ", array[i]);
    }
    printf("\n");
    return 0;
}
```

```shell
1, 2, 3, 4, 5, 6, 8, 9,
```


#### Improper way to use arrays

```c
#include <stdio.h>
int main(){
    int array1[] = {1,2,3,4,5,6,8,9};
    int array2[3] = {10,20,30};
    int length = sizeof(array1)/sizeof(int); // length of array1 = 9
    for(int i=0; i<length; i++){ // should be length of array2 which is 3
        printf("%d, ", array2[i]);s
    }
    printf("\n");
    return 0;
}
```

```shell
10, 20, 30, 1, 2, 3, 4, 5,
```

#### char arrays or strings

```c
#include <stdio.h>
int main(){
    char hello[] = "hello world";
    printf("%s\n", hello);
    return 0;
}
```

```c
#include <stdio.h>
int main(){
    char hello[] = "hello world";
    int len = sizeof(hello)/sizeof(char);
    printf("len = %d\n", len);
    for(int i=0; i<len; i++){
        printf("%c", hello[i]);
    }
    printf("\n");
    return 0;
}
```


```c
#include <stdio.h>
int main(){
    char hello1[] = "How Are You Doing?";
    char hello2[] = "hello world";
    int len = sizeof(hello1)/sizeof(char);
    for(int i=0; i<len; i++){
        printf("%c", hello2[i]);
    }
    printf("\n");
    return 0;
}
```

```shell
hello worldHow Are
```


```c
#include <stdio.h>
int main(){
    char hello1[] = "How Are You Doing?";
    char hello2[] = "hello world";
    int len = sizeof(hello1)/sizeof(char);
    for(int i=0;; i++){
        printf("%c", hello2[i]);
    }
    printf("\n");
    return 0;
}
```

```shell
hello worldHow Are You Doing?6�9�)���@�O�h
��6����OI��J;VС�J;V�����e����J;V�
���6�$��6�>��6�M��6�l��6����6�
���6����6����6����6�
���6���6�,��6�;��6�Q��6�a��6��6�J
��6�b��6�v��6��
��6����6����6�S��6�r��6����6�k�
�6����6����6�!��6����d@��J@�O�    
��J;V
              �
��Y�6����6�i�6��9�)�����2�
.
.
.
segmentation fault
```

### Arrays as an arguement to a function

```c
#include <stdio.h>

void print_array(int array[]){
    int len = sizeof(array)/sizeof(int);
    for(int i=0;i<len;i++)
        printf("%d, ", array[i]);
    printf("\n");
}

int main(){
    int array[] = {1,2,3,4,5,6,7,8,9};
    print_array(array);
    return 0;
}
```

```shell
$ gcc carrays5.c -o carrays5
carrays5.c: In function ‘print_array’:
carrays5.c:4:21: warning: ‘sizeof’ on array function parameter ‘array’ will return size of ‘int *’ [-Wsizeof-array-argument]
    4 |     int len = sizeof(array)/sizeof(int);
      |                     ^
carrays5.c:3:22: note: declared here
    3 | void print_array(int array[]){
      |                  ~~~~^~~~~~~
$ ./carrays5
1, 2, 
```

#### Correct way to use arrays as an arguement

```c
#include <stdio.h>

void print_array(int array[], int len){
    for(int i=0;i<len;i++)
        printf("%d, ", array[i]);
    printf("\n");
}

int main(){
    int array[] = {1,2,3,4,5,6,7,8,9};
    int len = sizeof(array)/sizeof(int);
    print_array(array, len);
    int array2[] = {10,20,30,40,50};
    int len2 = sizeof(array2)/sizeof(int);
    print_array(array2, len2);
    return 0;
}
```

```shell
1, 2, 3, 4, 5, 6, 7, 8, 9, 
10, 20, 30, 40, 50, 
```
