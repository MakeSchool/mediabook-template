---
title: 'Assessment'
slug: 'assessment'
contentType: 'Assessment'
---

# Assessment

We have a few different types of questions and syntaxes for asking them.


## First, the venerable FlashCard

<FlashCard>
  <Prompt>

How do you assign a variable in python?

  </Prompt>
  <Answer>

```
x = 10
```

  </Answer>
</FlashCard>

<FlashCard>
<Prompt>

How do you write a flashcard component?

Try creating one inline in your mdx. See if you can style
- the prompt
- the answer

</Prompt>
<Answer>

Use a shortcode in mdx and either:
  - pass props
  - use Prompt and Answer subcomponents

Note that newlines are needed for embedding mdx inside of React.

</Answer>
</FlashCard>

<FlashCard
 prompt={"How do you assign a variable in python? Draw it out."}
 explanation={"You use the assignment operator, ="}
/>

## Next, the slightly more complicated MultipleChoice component

<MultipleChoice>
  <Prompt>
  Which operator do you use to assign a variable in python?
  </Prompt>
  <Choice>
    +
  </Choice>
  <Choice correct>
    =
  </Choice>
  <Choice>
    ()
  </Choice>
  <Choice>
    ==
  </Choice>
  <Explanation>

The `=` operator stores a value in a variable.

The other operators have other jobs:
- `+` adds things together
- `()` groups items
- `==` checks if two items are equal.

It's especially easy to mix up `=` and `==`!

  </Explanation>
</MultipleChoice>

<MultipleChoice
  prompt="What can you use as the name of a python variable?"
  choices={[
    "Any text! This whole sentence could be a variable name.",
    "Lowercase letters only",
    "Uppercase and lowercase letters, numbers, and underscores, with no spaces, starting with a letter."
  ]}
  correctIndex={2}
/>

<MultipleChoice correct={3}>

#### MC questions can be written with markdown

(In addition to using the shortcode with props or with the prompt and choice children components.)

The first ordered list will be used as the options.

What prop needs to be passed to the component?

1. `color` to set the color of the question
2. `padding` to set how much width the component uses
3. `correct` to set which option is the correct one
4. `explanation` to pass an explanation for the answer

There is an explanation. It doesn't get passed as a prop - it's just whatever text appears after the ordered list.

It'll only show after the student checks their answer.

</MultipleChoice>

## We also have a TextResponse component

<TextResponse
  prompt={"What excites you about learning to code?"}
  explanation={"Thanks for sharing."}
/>

<TextResponse>
  <Prompt>

In your own words, what is a variable in python?

Prompt for the text response component, can use markdown

  </Prompt>

  <Explanation>

Variables are a way to give a value a name you can use later.

There's lots of valid ways to explain variables.

Some common analogies are:

- a box or bucket where you can put a value
- a nametag for an item
- an envelope to put a value in

</Explanation>
</TextResponse>

## Confidence Check

Allow the student to react with how they are feeling.

<ConfidenceCheck />

<ConfidenceCheck prompt="How are you feeling about python syntax?" />

An empty `prompt` prop will render a check without a prompt
(this text is in the markdown above the component)

<ConfidenceCheck prompt="" />

<ConfidenceCheck>
  How are you feeling about shortcodes?
</ConfidenceCheck>
