---
layout: post
title: Absolute Basics for C Beginners
subtitle: Basic Sytax, Control Flow Statemets, Loops and Functions
description: >-
  Basics of C programming language, Vairiable Declarations, Control Flow Statements, Loops
  and Function Declarations & Definitions.
permalink: absolute-c-basics-for-beginners
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
