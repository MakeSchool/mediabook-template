---
path: "/assessment"
title: "Assessment"
repo: "MakeSchool/mediabook-template"
page: "assessment"
contentType: "Assessment"
---

## Assessment

We have a few different types of questions and syntaxes for asking them.

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

<!-- <MultipleChoice>
  <Prompt>
  Which symbol do you use to assign a variable in python?
  </Prompt>
  <Choices>
    <Choice>
      `+`
    </Choice>
    <Choice>
      `=`
    </Choice>
    <Choice>
      `()`
    </Choice>
    <Choice>
      `:`
    </Choice>
  </Choices>
  <Explanation>
  </Explanation>
</MultipleChoice> -->