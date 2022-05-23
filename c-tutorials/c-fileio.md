---
layout: post
title: FileIO in C Tutorial
subtitle: Read from Files and Write to Files in C 
description: >-
  File Reading and Writing in C. Writing And Reading Raw Bytes in C.
---

### Reading Files in C

```c
#include <stdio.h>

#define LINE_SIZE 1024

int main(){
    char *filename = "hello.txt";

    // FILE *file = fopen("hello.txt", "r");

    FILE *file = fopen(filename, "r");

    if(file==NULL){
        printf("Error occured while opening %s\n", filename);
        return 1;
    }

    char line[LINE_SIZE];
    int line_number = 1;

    while(fgets(line, LINE_SIZE, file)){
        printf("%lu -> %d. %s", strlen(line), line_number, line);
        line_number++;
    }

    fclose(file);

    return 0;
}

```


```c
#include <stdio.h>

int main(){
    char *text = "Hello World\n"
                "How are you\n"
                "What's Up?"
                "How are things going?\n";
    
    char *filename = "hello.txt";

    FILE *file = fopen(filename, "w");

    if(file==NULL){
        printf("Error Occured While Trying to Create a file: %s\n", filename);
        return 1;
    }

    fputs(text, file);

    fclose(file);

    return 0;
}
```

### Reading and Writing One Character at a Time


#### Reading One Character at a Time in C Tutorial

```c
#include <stdio.h>


int main(){
    char *filename = "hello.txt";
    FILE *file = fopen(filename, "r");

    if(file==NULL){
        printf("Error Occured While Opening %s\n", filename);
        return 1;
    }

    char ch;

    while( (ch=fgetc(file)) != EOF ){
        printf("%c", c);
    }

    fclose(file);

    return 0;
}
```

#### Writing One Character at a Time

```c
#include <stdio.h>


int main(){
    char *text = "Hello World\n"
                "How are you\n"
                "What's Up?\n"
                "How are things going?\n";
    
    char *filename = "hello.txt";

    FILE *file = fopen(filename, "w");

    if(file == NULL){
        printf("Error Occured While Opening %s in Write Mode.\n", filename);
        return 1;
    }

    for(char *ch=text; *ch; ch++){
        fputc(*ch, file);
    }

    return 0;
}
```

### Buffered Reading and Writing in C - FileIO

### Buffered Reading with fgetc

```c
#include <stdio.h>

#define BUF_SIZE 10

int main(){
    char *filename = "hello.txt";

    FILE *file = fopen(filename, "r");

    if(file==NULL){
        printf("Error Occured While Opening %s in read mode.\n", filename);
        return 1;
    }

    char buffer[BUF_SIZE];

    int len=0;
    
    while(1){
        buffer[len]=fgetc(file);

        if(len==(BUF_SIZE-1)){
            printf("%s", buffer);
            len=0;
            continue;
        }

        if(buffer[len] == EOF){
            buffer[len] = '\0';
            printf("%s", buffer);
            break;
        }

        len++;
    }

    return 0;
}
```

#### Buffered Reading and Writing


```c
#include <stdio.h>

#define BUF_SIZE 10

int main(){
    char *source_file = "hello.txt";
    char *destination_file = "new.txt";

    FILE *source = fopen(source_file, "r");

    FILE *destination = fopen(destination_file, "w");

    if(source==NULL){
        printf("Error Occured While Opening %s in read mode.\n", source_file);
        fclose(destination);
        return 1;
    }

    if(destination==NULL){
        printf("Error Occured While Opening %s in read mode.\n", destination_file);
        fclose(source);
        return 1;
    }

    char buffer[BUF_SIZE];

    int len=0;
    
    while(1){
        buffer[len]=fgetc(file);

        if(len==(BUF_SIZE-1)){
            printf("%s", buffer);
            len=0;
            continue;
        }

        if(buffer[len] == EOF){
            buffer[len] = '\0';
            printf("%s", buffer);
            break;
        }

        len++;
    }

    return 0;
}

```

