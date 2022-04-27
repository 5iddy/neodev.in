---
layout: post
title: Absolute Basics for C Beginners
subtitle: Basic Sytax, Control Flow Statemets, Loops and Functions
description: >-
  Basics of C programming language, Vairiable Declarations, Control Flow Statements, Loops
  and Function Declarations & Definitions.
slug: absolute-c-basics-for-beginners
---



## Declaring and Assigning variables

In order to declare a variable in C, we need to prefix the variable name with its type. We can initialize
the variable with the equals `=` sign followed by the value. The variable can be declared first and then
can be assigned later. Variables can also be resigned when need.

The following the general syntax of variable declaration and initialization:

```
<type> <varible name> = <value>;
```

The following is the general syntax of assigning value to a variable:

```
<variable name> = <value>;
```

Examples of variable usage:

```c
int x=1, y=2;
int h, j=1;
float pi = 3.14;
char ch = 'A';
int a, b;
a = 0;
b = 1;
```

Here is a runnable example:

```c
#include <stdio.h>

int main(){
    int a = 22;
    int b;
    printf("a is %d\n", a);
    b = 4;
    printf("b is %d\n", b);
    a = 6;
    printf("a is %d\n", a);
    return 0;
}
```

Assuming that the code above is saved in `simple.c` file. It can be run like so:

```shell
# Compile the code and create a binary called simple
$ gcc simple.c -o simple
# If there are no errors, gcc prints nothing
# then run the above progam with
$ ./simple
# Output: 
a is 22
b is 4
a is 6
```

If you try to access a variable before initialization or value assignment,
the default values of the variable type will be found. However, there is no
reason to such a thing.

```c
#include <stdio.h>

void main(){
    int a;
    float b;
    char c;
    printf("a is %d, %f, %c\n", a, b, c);
}
```

Compiling and running the above code produces the following output:

```shell
a is 0, 0.000000, 
```

For an integer, the default value is `0`. For a float, it is `0.0`.
For a char, it is `\0` or `0`.


## Control Flow Statements

```c
#include <stdio.h>

int main(){
    int a = 10;
    if (a > 9)
        printf("%d is greater than 9.\n");
    else
        printf("%d is not greater than 9\n");
    return 0;
}
```

```c
#include <stdio.h>

int main(){
    int a = -10;
    if (a > 0) {
        printf("a positive\n", a);
    } else if (a == 0) {
        printf("a is zero\n", a);
    } else {
        printf("a is negative\n", a);
    }
    return 0;
}
```

```c
#include <stdio.h>

int main(){
    int a = 1;
    switch (a) {
        case -1:
            printf("a is -1\n");
            break;
        case 0:
            printf("a is 0\n");
            break;
        case 1:
            printf("a is 1\n");
            break;
    }
    return 0;
}
```

## Loops

### For Loop

```c
#include <stdio.h>

int main(){
    int a = 100;
    int total = 0;
    for(int i=0; i<a; i++){
        total = total + i;
    }
    printf("sum of numbers upto %d but not including %d is %d\n", a, a, total);
    return 0;
}
```

```
sum of numbers upto 100 but not including 100 is 4950
```

Sum of numbers from 100 to 0:

```c
#include <stdio.h>

int main(){
    int a = 100, total = 0;
    for(;a>=0;a--)
        total = total + a;
    printf("a = %d, total=%d\n", a, total);
    return 0;
}
```

```
a = -1, total=5050
```

```c
#include <stdio.h>

int main(){
    int a = 10, product=1;
    for(int i = 1; i <= a; i++){
        printf("%d * %d = ", product, i);
        product = product * i;
        printf("%d\n", product);
    }
    printf("%d! = %d\n", a, product);
    return 0;
}
```

```
1 * 1 = 1
1 * 2 = 2
2 * 3 = 6
6 * 4 = 24
24 * 5 = 120
120 * 6 = 720
720 * 7 = 5040
5040 * 8 = 40320
40320 * 9 = 362880
362880 * 10 = 3628800
10! = 3628800
```

```c
#include <stdio.h>

int main(){
    int number = 100;
    for(int i=1; i<=100;i++)
        if (number % i == 0)
            printf("%d is a factor for %d\n", i, number);
    return 0;
}
```

```
1 is a factor for 100
2 is a factor for 100
4 is a factor for 100
5 is a factor for 100
10 is a factor for 100
20 is a factor for 100
25 is a factor for 100
50 is a factor for 100
100 is a factor for 100
```

### While Loop

```c
#include <stdio.h>

int main(){
    int a = 100, total = 0, i = 0;
    while (i<a){
        total = total + i;
        i++;
    }
    printf("sum of numbers upto %d but not including %d is %d\n", a, a, total);
    return 0;
}
```


## Do While Loop