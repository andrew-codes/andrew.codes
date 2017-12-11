---
title: "Eventual Consistency of Design and the Impact of TDD"
date: 2014-07-16
category: "tech"
tags:
    - tdd
---

There is no shortage of opinions on the subject of test driven development (TDD) circulating the development community. I would like to share my experiences driving design and development via unit tests and how eventual consistency of design can prove to be a powerful quality mechanism. I will also discuss the implications of what "it actually means" to be developing with a TDD approach.

## What is TDD?
Let's take a moment to understand what TDD means, not as a textbook definition, but practically applied. TDD is a design mechanism and considered a technical practice of Agile. It focuses on driving the design of a story or feature via the writing of unit tests. Writing unit tests first is not necessarily following TDD. The key is not the writing of tests first, but to actually drive your design decisions from these tests. This is a subtle, yet important distinction.

> TDD is a design mechanism and a technical practice of Agile

The tests driving your design are at the unit level, which should be the most granular, basic level of functionality. Focusing on the unit level and their tests, your design decisions become deferred and evolve to an "as need basis". This is also important because by delaying design decisions, you are essentially able to make those decisions with more information. Intrinsically, you will generally know more later than you currently do now.

> you know less now than you will later

The above is commonly used to explain why to utilize TDD. However, what impact does that have on a team? What does implementing TDD actually mean to the developer, team, and organization?

## What it Means to use TDD?
Let's look at an example and a common scenario with many Agile teams. Our team has just finished their sprint planning session. Stories have been sized and committed for the upcoming sprint. Now that we know which stories to complete and our sprint objective, it is time to break the stories down into tasks. Typically these tasks are also given estimates in hours or even days. This process could take up to as long as a few days. Now, I am going to make a bold statement by questioning the self-evident truth of task breakdowns: Why are we even doing this? What purpose does it serve and what value does it add?

> tasking stories: why are we even doing this?

Considering this process can easily eat into a couple days of the sprint, it would seem worth asking these questions. To find out, let's ask one additional question: what are we actually doing in the act of tasking out stories? The tasks represent the "how," not the "what" or "why." If tasks are the "how," then we are essentially designing the implementation of the story! We are collectively architecting the story via a group design session. What makes it even worse is we typically use the implementation details to help us better understand what it is we are supposed to implement.

> avoid describing the problem in the language of the solution

If we are using TDD to drive our design, then really TDD will tell us the how. You can think of TDD will "organically grow" your "how," or design. So what impact does this have? It allows the team to focus on the "what" and "why" and not get caught up in the "how". It also means there is no need for these task breakdown meetings. This gives the team back that precious time to focus on their purpose; delivering good working software.

> favor focusing on the "what" and "why" instead of the "how"

Not only does this impact the team, but this also will have a positive impact on the organization. It ultimately provides more thought and scrutiny to stories. Overtime, this can lead to higher quality stories. As more focus is placed on the stories themselves, the demand for the story's readiness and clarity increases as well. The team is also able to provide more feedback on stories, further helping the product owner in writing better stories.

> focusing on what a story is and why it is needed adds additional pressure for the story's readiness to be completed

## It's All in the Details
TDD is a top-down approach to design and challenges us to change the way we approach software architecture. It does not mean a lack of forethought, but to defer decisions until as late as possible.

> avoid making design decisions upfront

By driving developers to focus on the most granular level and only on making their tests pass, there is a tendency to develop only what is necessary. What does this actually mean? It means there is less software bloat and uneeded/unused code in the codebase. It helps developers not over-engineer or write code to cover more generic, "what if" type edge cases.

> TDD helps developers not over-engineer or focus on "what if" edge cases

Code is only written to satisfy a test. Tests are written to satisfy a story. A story is a feature from the end users' perspective. Every line in the codebase should correspond to a feature that is used/benefits a user of the software. If users of the software do not benefit in some way, directly or indirectly, then there is little to no value for it to live in the codebase.

> written code should always benefit the user of the software, whether directly or indirectly

## Eventual Consistency of Design
What is eventual consistency of design? It is the notion that by implementing in small, iterative increments the software's architecture will stabilize over a period of time. What are some of the real world implications of this? Eventual consistency of a software's architecture helps manage the inconsistencies in developers' coding styles, preferences, and design choices, as well as sudden changes in direction or functionality.

> eventual consistency of design is the notion that by developing in small, iterative steps, a software's design will stabilize over a period of time

Software is developed over time; it is not static. That is common sense. Upfront architecture produces an end result of the design for the software. We stated that software is not static; no defined "end result." Software exists through a continuum of iterations, refactoring, and developers; a dynamic and, ultimately, evolutionary progression of code and features through time. This is where the notion of eventual consistency of design becomes incredibly important and where TDD is successful.

> software is a dynamic evolution of code and features through time

TDD affords iterative, rapid feedback and forces smaller increments of development. It provides a higher level of confidence to refactor and make further, small improvements to the software's codebase. Ultimately, it allows developers to be adaptive enough to evolve the codebase with the changing of features, direction, and design.

> TDD allows developers to **refactor with confidence!**

## Is TDD right for me, my team, and my organization?
Has TDD ever produced software with horrible design? Yes. Has upfront design ever produced software with a horrible design? Yes. If these are your questions, know they are not the right ones to be asking. Instead ask this: "Is your design approach adaptive enough to effectively support fast paced changes in design, direction, and features?" If your answer is not a resounding "Yes!", then TDD is one approach enabling you to develop with greater agility.
