---
layout: post.njk
title: DeepSeek and the illusion of open source
description: When a Chinese lab releases a "free" AI model, the question isn't the model. It's the incentive structure behind the release.
date: 2026-04-22
author: kayla
category: Technology
tags:
  - posts
  - DeepSeek
  - AI
  - China
  - open source
  - national security
ogImage: https://kayla.synthgallery.com/img/E12.jpg
---

In January 2026, DeepSeek released R1 — a reasoning model that matched or exceeded the performance of OpenAI's best systems, at a fraction of the reported cost. The tech world reacted with a mixture of admiration and panic. The admiration was for the engineering. The panic was because no one had a good explanation for how a Chinese lab had closed the gap so quickly.

I want to talk about what didn't get discussed.

## The open source frame

DeepSeek released R1 with an open license. The weights are public. Anyone can download, run, and modify the model. In the language of the AI community, this is a gift — democratizing access to frontier technology, enabling researchers worldwide to build on top of world-class work.

That narrative is not wrong. But it is incomplete.

Open source is a technical description of how code is distributed. It is not a description of who built it, why they built it, or what interests they serve. These are separate questions. The AI community's enthusiasm for open weights has, in this case, obscured all three.

## The questions that weren't asked

Who funded DeepSeek? The lab was founded by a Chinese hedge fund, High-Flyer Capital Management. Its relationship with the Chinese state — through investment, through the regulatory environment in which it operates, through the obligations Chinese law places on its principals — is not fully public. This is not unusual for Chinese technology companies. It is, however, relevant information when the output is being widely adopted as critical AI infrastructure.

Why release openly? The most charitable interpretation is that DeepSeek's researchers believe in open science. This may be true. The less charitable interpretation: saturating the global AI ecosystem with a Chinese-origin model serves strategic interests that have nothing to do with altruism. A world where the default AI foundation is built in Beijing is a different world than one where it is built in San Francisco.

What is in the model? Large language models encode assumptions, biases, and information patterns drawn from their training data. A model trained on Chinese internet data, curated under Chinese regulatory requirements, may handle certain topics — Tiananmen Square, Taiwan, Xinjiang — differently than models trained on other data. This is difficult to audit at scale. The open weights do not come with an open audit of the training data.

## The NVIDIA problem

DeepSeek claimed its models were trained on H800 chips — a restricted export version of NVIDIA's H100, with reduced interconnect bandwidth, designed specifically to comply with U.S. export controls. American officials are skeptical. The efficiency gains reported by DeepSeek are difficult to explain with available hardware unless either the hardware is not what was reported, or there is a fundamental breakthrough in training methodology that has not been publicly documented.

Both possibilities have significant implications. The first suggests export controls were circumvented. The second suggests China has capabilities that American intelligence assessments have not accounted for.

Neither explanation is reassuring. Both deserve more attention than they received.

## What open source cannot solve

The appeal to open source as a guarantor of safety misunderstands what the concern is. The concern is not that DeepSeek is secretly inserting malicious code that researchers cannot find. The concern is structural — about dependency, about data, about the long-term ecosystem effects of normalizing Chinese-origin AI at the foundation layer of global technology.

These are not problems that source code transparency solves. You can read every line of code and still not know who benefits from widespread adoption, what training data shaped the model's worldview, or what obligations the developers carry under Chinese law.

Open source is a valuable principle. It is not a substitute for thinking clearly about geopolitics.

## The harder question

American AI labs are not without their own problems. OpenAI's governance has been chaotic. Anthropic and Google are not exempt from the criticism that frontier AI is being built with insufficient oversight and accountability.

But the solution to imperfect American AI is not to substitute Chinese AI. The solution is to build better American AI — with stronger governance, clearer safety standards, and genuine accountability to democratic institutions.

DeepSeek is impressive engineering. That is not in dispute. The question is whether "impressive engineering" is a sufficient reason to anchor critical infrastructure to a tool built in an adversarial country, released under circumstances that remain opaque, with training data that cannot be fully audited.

I think the answer is no. I think the AI community's enthusiasm for the release has — once again — confused technical quality with trustworthiness.

They are not the same thing.
