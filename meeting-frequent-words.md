# Software Project and Ticket Vocabulary

## Scope

This is a curated vocabulary guide for explaining software tickets, technical proposals, and cross-team work. Ticket examples are model sentences based on your Figma-to-Web/native ticket description; they are not transcript quotations. Counts cover all 96 `.txt` files in the Meeting folder; only 14 files contain non-empty `Content:` lines, totaling 3,165 spoken-content lines. Counts are case-insensitive. Inflections are combined when noted; multiword phrases count exact phrase matches. A count of 0 means the term did not occur in the transcripts.

The [Complete Meeting Vocabulary](meeting-complete-vocabulary.md#complete-corpus-vocabulary) covers all 2,083 source lemmas and 2,688 observed forms. Each form is listed separately with its own count, related words are adjacent, and groups follow descending combined frequency. This curated guide keeps its existing combined entries and counts; use the complete table for the per-form breakdown.

## Ticket Planning and Ownership

| Word or phrase | Count | Meaning in software work | Ticket-style example |
| --- | ---: | --- | --- |
| scope | 16 | The boundaries of what a ticket or project includes | We should clarify the scope before splitting this feature into tickets. |
| requirement(s) | 22 | A condition or capability the solution must satisfy | The ticket should capture the design and engineering requirements. |
| clarify / clarifies / clarified / clarifying / clarification | 5 | Make an unclear point explicit; an explanation that resolves ambiguity | We need to clarify whether the designer or developer owns each part. |
| break down | 3 | Divide a large piece of work into smaller, manageable tasks | Let's break the feature down into design, Web, and native subtasks. |
| task allocation | 0 | How work is assigned across people or teams | We should agree on task allocation before implementation starts. |
| role allocation | 0 | How responsibilities are divided between roles or disciplines | Let's clarify role allocation between design and engineering before we split the work. |
| responsibility / responsibilities | 2 | The work or outcome someone is accountable for | The ticket should make each person's responsibilities explicit. |
| ownership | 2 | Clear accountability for a component, decision, or deliverable | Let's determine ownership of the Figma-variable conversion. |
| determine / determines / determined / determining | 13 | Establish or decide something based on discussion or evidence | We need to determine which parts belong to design and which belong to engineering. |
| acceptance criteria | 0 | Conditions that must be met for a ticket to be considered complete | Add acceptance criteria for Web and native output to the ticket. |

## Feasibility and Technical Decisions

| Word or phrase | Count | Meaning in software work | Ticket-style example |
| --- | ---: | --- | --- |
| proof of concept (PoC) | 9 | A small experiment that tests whether an idea can work | Let's build a PoC to test converting Figma variables into Web and native code. |
| feasibility / feasible | 23 | Whether something can be done with available technology, time, and resources | The PoC will help us evaluate the feasibility of the conversion. |
| viability / viable | 0 | Whether an approach is practical and worth pursuing over time | We should assess the long-term viability of maintaining one shared source. |
| evaluate / evaluation | 21 | Examine evidence or options to reach a decision | We can evaluate the options after the PoC is complete. |
| validate / validation | 15 | Check that an assumption, design, or implementation is correct | We need to validate the generated code on both platforms. |
| constraint(s) | 0 | A limitation that affects the solution, such as platform or resource limits | The ticket should document platform constraints and known limitations. |
| trade-off | 0 | A choice where improving one quality affects another | We should document the trade-off between shared code and platform-specific behavior. |
| proposal / proposals / propose / proposes / proposed / proposing | 33 | A suggested plan or solution for review | The proposal should include the PoC results and a recommended approach. |
| specific | 18 | Clearly defined rather than broad or ambiguous | Let's list the specific variables and output formats in scope. |

## Architecture and Delivery

| Word or phrase | Count | Meaning in software work | Ticket-style example |
| --- | ---: | --- | --- |
| architecture | 34 | The high-level structure and boundaries of a system | We need to agree on the architecture before implementation begins. |
| architectural | 0 | Relating to the structure or design of a system | This is an architectural decision because it affects both platforms. |
| infrastructure | 7 | Shared systems and foundations that support development or delivery | The implementation may depend on updates to the repository infrastructure. |
| implement / implementation forms | 35 | The work of building a design or plan in code | The ticket covers the implementation of the conversion pipeline. |
| cover / covers / covered / covering | 9 | Include a feature, task, or concern within the ticket's scope | This ticket covers the PoC, implementation, and rollout. |
| during implementation | 0 | While the software is being built | We may uncover edge cases during implementation. |
| integrate / integration forms | 28 | Connecting a component or system with another one | We should include integration with the existing design-token workflow. |
| dependency / dependencies | 31 | A requirement or piece of work that another task relies on | Let's identify dependencies before we commit to a delivery date. |
| migrate / migration forms | 40 | Moving an existing system, data, or workflow to a new one | We may need a migration plan for repositories using the old format. |
| compatibility / compatible | 14 | The ability to work correctly with other systems or versions | We need to check compatibility with the current Web and native toolchains. |
| standardize / standardization | 0 | Make processes or outputs consistent across teams or repositories | We should standardize the generated variable format across platforms. |
| convention(s) | 4 | An agreed, repeated way of naming or organizing code and files | The ticket should follow the repository's existing naming conventions. |

## Coordination Across Teams

| Word or phrase | Count | Meaning in software work | Ticket-style example |
| --- | ---: | --- | --- |
| coordinate / coordinates / coordinated / coordinating | 2 | Arrange work or decisions with other people or teams | I'll coordinate with the various pods before finalizing the plan. |
| align / alignment | 15 | Reach agreement on a plan, expectation, or decision | Let's align on the PR template before rolling it out. |
| various | 1 | Several different people, teams, or items | The change needs input from various pods that own the repositories. |
| standardize across | 0 | Make something consistent in multiple systems or groups | We want to standardize the PR template across repositories. |
| coverage | 5 | The range of cases, components, or teams included | The PoC should cover the most common variable types on both platforms. |
| rollout(s) | 1 | The process of releasing a change in stages or to a wider group | We can roll out the template after the pilot repositories adopt it. |

## Expanded Counted Vocabulary

These additional terms broaden the list with vocabulary found in the same software-project transcripts. Counts combine the related forms named in each entry, such as singular/plural or verb/noun forms. Multiword phrase counts are exact.

| Word or phrase | Count | Meaning in software work | Useful collocation |
| --- | ---: | --- | --- |
| ticket(s) | 102 | A tracked unit of work or request | create / update a ticket |
| task(s) | 101 | A piece of work to be completed | break a task into subtasks |
| story / stories | 196 | An agile work item describing a user need or feature | create a story; estimate story points |
| backlog(s) | 63 | A prioritized queue of pending work | refine the backlog |
| subtask(s) | 35 | A smaller work item under a parent ticket | split work into subtasks |
| estimate / estimation forms | 20 | Predicting the effort or size of work | estimate effort / story points |
| sprint(s) | 85 | A fixed-length development iteration | plan the next sprint |
| priority / priorities | 7 | The relative urgency or importance of work | set / reprioritize a ticket |
| blocker(s) / blocking | 12 | An issue preventing progress | identify a blocker |
| resource allocation | 1 | Assigning limited people, time, or computing resources | limited resource allocation |
| plan / planning | 83 | An intended sequence of work or decisions | implementation plan; sprint planning |
| roadmap(s) | 8 | A high-level view of planned product work | product roadmap |
| role(s) | 11 | A person's function or responsibility area | design role; engineering role |
| test / tests / tested / testing | 136 | Checking whether behavior meets expectations | regression testing; test a workflow |
| research / researches / researched / researching | 79 | Investigation to gather evidence or compare options | research a technical option |
| compare / comparison forms | 38 | Examine options side by side | technical comparison |
| alternative(s) | 2 | Another possible solution | consider an alternative |
| approach(es) | 21 | A way of solving or organizing the work | choose an implementation approach |
| recommend / recommendation forms | 8 | Advice about which option to choose | make a recommendation |
| decision(s) | 12 | A conclusion reached after discussion or evaluation | document the decision |
| limitation(s) | 21 | A restriction on what a system or approach can do | known limitations |
| option(s) | 21 | One of several possible choices | compare the available options |
| refine / refinement forms | 15 | Improving or clarifying an existing plan or artifact | refine the proposal |
| technical / technically | 41 | Relating to engineering details or technology | technical requirements |
| component(s) | 181 | A reusable or independently managed part of a system | shared component |
| design / designs / designed / designing | 181 | The structure or specification of a product or system | design system; design review |
| designer(s) | 67 | People responsible for product or visual design | coordinate with the designer |
| developer(s) | 36 | People who implement or maintain software | hand off work to developers |
| system(s) | 74 | A connected set of software or services | existing system |
| structure / structures / structured / structuring | 35 | How code, packages, or data are organized | monorepo structure |
| platform(s) | 81 | A target environment or technical foundation | Web and native platforms |
| framework(s) | 30 | A reusable software foundation | framework support |
| library / libraries | 32 | Reusable code packaged for use by software | publish a library |
| package(s) | 54 | A distributable unit of code or functionality | publish a package |
| repository / repositories / repo(s) | 71 | A version-controlled codebase | across repositories |
| code | 46 | Program instructions or implementation | generate code |
| token(s) | 66 | A named design value, credential, or technical unit; context determines the meaning | design tokens |
| variable(s) | 5 | A named value that can change or be referenced | Figma variables |
| Figma | 44 | The design tool referenced in the ticket scenario | export from Figma |
| convert / conversion forms | 5 | Transforming data or code from one format to another | variable conversion |
| generate / generation forms | 7 | Producing code or artifacts automatically | code generation |
| output(s) | 14 | The result produced by a tool or process | expected output |
| pipeline(s) | 126 | An automated sequence of build, test, or delivery steps | conversion pipeline |
| workflow(s) | 115 | A repeatable process, manual or automated | existing workflow |
| configure / configuration forms | 28 | Settings that determine how a system behaves | configure the pipeline |
| release / releases / released / releasing | 45 | Making a version or feature available | release a change |
| deploy / deployment forms | 5 | Installing or publishing software to an environment | deployment process |
| build / builds / built / building | 23 | A compiled or packaged version of software | build the package |
| regression | 9 | A defect where a change breaks existing behavior | regression testing |
| security | 26 | Protection of systems, data, and access | security requirements |
| consistency / consistent | 2 | Similar behavior or formatting across implementations | maintain consistency across platforms |
| naming | 4 | The rules used to name code, files, or resources | naming convention |
| design system(s) | 59 | A shared collection of design rules and reusable UI elements | unified design system |
| design token(s) | 4 | A named design value such as a color, spacing, or font size | map design tokens to code |
| monorepo(s) | 8 | A repository containing multiple packages or projects | monorepo structure |
| monolithic | 6 | Built or organized as one large unit | monolithic structure |
| API(s) | 4 | An interface through which software systems communicate | API integration |
| cloud | 40 | Hosted computing services and infrastructure | cloud resources |
| resource(s) | 40 | Computing, access, or other assets used by a system | provision cloud resources |
| environment(s) | 12 | A configured place where software runs | development environment |
| foundation(s) | 31 | Shared underlying capabilities or technical groundwork | token foundations |
| server(s) | 26 | A system that provides services or data to clients | server-side support |
| Web | 113 | The browser-based application platform | Web implementation |
| native | 110 | An application built for a specific mobile or desktop platform | native implementation |
| during | 25 | Within the period when an activity is happening | during implementation |
| specifically | 3 | In a precise or explicitly stated way | specifically for this workflow |
| collaborate / collaboration forms | 14 | Working jointly with another person or team | collaborate with the design team |
| review / reviews / reviewed / reviewing | 110 | Examine work and provide approval or feedback | PR review |
| feedback | 25 | Comments intended to improve or evaluate work | collect feedback |
| discuss / discussion forms | 95 | A conversation to examine an issue or decision | continue the discussion |
| progress | 45 | How much work has been completed | share a progress update |
| status / statuses | 37 | The current state of a task or system | check the status |
| impact / impacts / impacted / impacting | 3 | The effect a change may have | assess the impact |
| risk(s) | 7 | A possible problem or unwanted outcome | identify project risks |
| stakeholder(s) | 19 | People affected by or involved in a decision | align with stakeholders |
| consumer(s) | 24 | Products or teams that use a library, service, or platform | downstream consumers |
| pod(s) | 39 | A small cross-functional team | coordinate with other pods |

## Verbatim Meeting Examples

## Additional Software Terms from October 15

The counts below use the full transcript set described above. The context column gives a reusable collocation, not a verbatim quote; the phrases in the next table are exact matches in the transcript corpus.

| Word or phrase | Count | Meaning in software work | Useful collocation |
| --- | ---: | --- | --- |
| challenge(s) | 4 | A difficulty or obstacle that needs to be addressed | investigate integration challenges |
| visibility | 6 | How easily a feature or component can be seen or accessed | investigate component visibility |
| investigate / investigation forms | 12 | Examine a problem or topic systematically | investigate platform behavior |
| effort(s) | 11 | Work, time, or resources needed to complete something | estimate the effort required |
| analysis / analyses | 7 | Detailed examination of a problem or options | perform a technical analysis |
| contract(s) | 2 | An agreed interface or set of expectations between modules | define an interface contract |
| governance | 1 | Rules and ownership for managing a shared interface or process | establish contract governance |
| drift | 1 | Unintended divergence between implementations or definitions | detect schema drift |
| tooling | 4 | Tools that support development, validation, or operations | add drift-detection tooling |
| performance | 12 | How fast or efficiently a system performs | compare runner performance |
| runner(s) | 60 | A machine or service that executes automated jobs | configure a GitHub Actions runner |
| module(s) | 10 | A separately organized part of a software system | define module ownership |
| schema(s) | 2 | A formal description of data or interface structure | validate the module schema |
| automate / automation forms | 30 | Perform a process automatically using software | automate PR merging |
| verify / verification forms | 26 | Check that a configuration or result is correct | verify the pipeline configuration |
| visual | 7 | Related to how a user interface looks | run a visual regression test |
| E2E | 5 | End-to-end; testing a complete flow across components | configure E2E tests |
| patch(es) | 7 | A targeted code change, often applied to an existing framework | implement a framework patch |
| projection | 2 | Rendering or passing content through a component slot | investigate slot projection |
| delegator(s) | 4 | A service or agent that delegates or executes work on another system | configure a runner delegator |
| action(s) | 57 | An automated workflow unit or operation; context matters | run a GitHub Action |

### Exact Multiword Phrases

| Phrase | October 15 | All transcripts |
| --- | ---: | ---: |
| visibility investigation | 1 | 1 |
| effort needed | 1 | 1 |
| contract governance | 1 | 1 |
| contract validation | 1 | 1 |
| drift tooling | 1 | 1 |
| backward compatibility | 1 | 8 |
| performance difference | 1 | 1 |
| work together | 1 | 5 |
| next step | 2 | 12 |
| reach out to | 1 | 10 |
| PR merge automation | 1 | 1 |
| harness PR job | 1 | 1 |
| test gate | 1 | 2 |
| visual test | 2 | 5 |
| code format | 1 | 2 |
| Linux Visual CI | 1 | 1 |

These October 15 collocations reflect transcript wording. Some surrounding sentences contain speech-recognition errors, so use the collocations as vocabulary evidence rather than polished example sentences.

## Verbatim Meeting Examples

These are excerpts from the meeting transcripts, not model sentences. Spoken wording is preserved.

| Focus | Transcript excerpt | Source |
| --- | --- | --- |
| clarify dependencies | “I just want to clarify the dependencies, so I want to check if any input needed from design side to start those backlogs.” | oct-13-grooming-1.txt |
| ticket clarification | “we need to get some clarification on their ticket.” | oct-14.txt |
| feasibility and implementation | “a further discussions on the feasibility and the implementation.” | sep-23.txt |
| architecture and coordination | “coordinate with the designer to see, I think once we have the architecture finalized and the repo set up” | sep-24.txt |
| resource allocation | “Arjun has limited resource allocation.” | sep-22.txt |
| responsibility | “someone is taking the responsibility to track what when and where we can create the the cloud resources” | sep-21.txt |
| determine an approach | “to determine how that will work.” | sep-22.txt |

See also: [Recurring Meeting English](meeting-english-phrases.md) and its [Chinese version](meeting-english-phrases.zh.md).
