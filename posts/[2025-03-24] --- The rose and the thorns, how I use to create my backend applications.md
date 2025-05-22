---
title: "The rose and the thorns, how I use to create my backend applications"
date: "2025-03-24"
layout: layout.html
tags: [posts]
---

[WIP]

### Backend applications with Spring: a recurring solution to a recurring problem

Developing a REST API Backend application is one of the most frequent task a developer needs to do.
From San Francisco to Melbourne, every day some developer, somewhere, needs to set up a backend application serving some REST endpoints.

One of the most popular tools to get this job done is building a Spring Boot application and shipping the docker container to some deployment service.

During the last years I was exposed to different way to create a Spring Boot application and I decided to try to gather most of the tools I used
and the best practices in a blog post.

When I need to create a Backend application, I tend to think about it as a two-sided problem to solve.

1. Implementing the requested business logic (and this is trivial)
2. Correctly configuring the Spring Boot application and all the ancillary job required (containers, integration tests, ...)

During the years I came to imagine a well-configured Back-end application as a Rose with (many) thorns.

- The **rose** is the part meaningful for the business in all its beauty: Using the Design Patterns to be actually able to translate in code the business domain and logic.
- The **thorn** is the heinous part: the effort necessary to configure and spin up the application, making it maintainable, containerized, testable and shippable.

I need to say in advance, that this is a rather subjective view that I matured through the years, being exposed early in my career to Spring Applications that were already "ready to work on" and only
later to the problem of setting them up from scratch, increasing the scope of the problem from the simple coding to the actual configuration and deployment of the application.
From this experience I came to the conclusion that while there is a lot of literature on the "rose" part, the "thorns" are often overlooked, and they might actually be the most difficult aspect of the actual application.

### The thorns

One of the reasons I find difficult to initially set up a functioning Spring Boot application is the lack of constraints in the beginning.
This is clearly not an issue of Spring, but actually a reason for its extensive success: being agnostic to the way the app is going to be deployed.
While the older Spring MVC produced only WARs and precluded some deployment techniques, Spring comes with an embedded Tomcat server and builds a handy .jar file, which opens the developer to many other options for deployment.

But how to avoid staring at a blank page? How to overcome the lack of constraints that come from Spring?
Something that helps is to think about the operational problems that, as a developer, I would like to solve:

- Which Profiles do I need? What will be different between deploying the application locally and on production?
- How can I avoid the "It works on my machine" scenarios? How can I create a resilient and machine-agnostic application?
- How do I manage the dependencies? Is there the need for some particular toolchain?
- How does the backend application integrate with the other systems that are already existing? Does it communicate with something else? Does it do synchronously or asynchronously?
- How frequently will I need to change the DB structure on production?
- How do I setup an integration test to be sure that the whole application runs properly?






