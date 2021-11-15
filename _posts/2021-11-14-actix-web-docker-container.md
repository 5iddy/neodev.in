---
layout: post
title: How to Create Actix Web Docker Containers
author: Siddhu
subtitle: Hello world
description: >-
  How to build, create and run actix web application in Docker Containers? How to create lightweight, secure and minimal docker containers?
toc: true
---

Easy guide to building and deploying actix web docker containers.

## Getting Started With Actix Web

### Create a new cargo project

```shell
$ cargo new web_app
```

```shell
$ tree web_app
```

```
web_app
├── Cargo.toml
└── src
    └── main.rs

1 directory, 2 files
```

### Add Project dependencies

```shell
$ cargo install cargo-edit
```

```shell
$ cargo add actix_web
```

Contents of `Cargo.toml`

```toml
[package]
name = "web_app"
version = "0.1.0"
edition = "2021"

[dependencies]
actix-web = "3.3.2"
```

### Create a Actix Web App

In `main.rs`

```rust
use actix_web::{post, App, HttpResponse, HttpServer, Responder};

#[get("/")]
async fn hello() -> impl Responder {

  let body = format!("Hello {}", );
  HttpResponse::Ok().body(body)
}

#[post("/echo")]
async fn echo(req_body: String) -> impl Responder {
  HttpResponse::Ok().body(req_body)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
  HttpServer::new(|| App::new().service(hello).service(echo))
    .bind("0.0.0.0:8080")? // localhost:8080 if run locally
    .run()
    .await
}
```

### Build and test the app

```shell
$ cargo run
```

Open [http://localhost:8080/](http://localhost:8080/) and check if everything is working fine.

## How to Create a Actix Web Docker Container

Lightweight, minimal and Secure docker containers with Alpine Linux Base Image

```dockerfile
# Import the official rust:apline image as base for builder
# It will be discarded after building our binaries
FROM rust:alpine as builder
WORKDIR /usr/src/web_app

# Copy the required directories into the build folder
COPY src/ src/
COPY Cargo.toml .
COPY Cargo.lock .

# Apk is the official Alpine Linux package manager
# Use apk to add the build-base package
# build-base is required to build some rust dependencies
RUN apk add build-base

# Now build and copy the binary into the local bin directory
RUN cargo install --path .

# This is the main image which will run our
# web_app binary
FROM alpine:latest
COPY --from=builder /usr/local/cargo/bin/web_app /usr/local/bin/web_app
CMD ["web_app"]

```

### How to Build Locally and then Copy the Binary into the Container

Make sure you have the musl target available on your pc.

```shell
$ rustup target add x86_64-unknown-linux-musl
```

Build locally for `x86_64-unknown-linux-musl` target.

```shell
$ cargo build --release --target x86_64-unknown-linux-musl
```

Now, you can just copy the binary directly into the docker container.

```dockerfile
FROM alpine:latest
COPY target/x86_64-unknown-linux-musl/release/web_app /usr/local/bin/web_app
CMD ["web_app"]
```

### Building the Docker Container From Dockerfile

```shell
$ sudo docker build -t web_app_image .
```

### Deploying the Docker Container

```shell
$ sudo docker run --rm -itd --name web_app_container -p 8080:8080 web_app_image
```
